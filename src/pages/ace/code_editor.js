import ace from 'brace/index'
import 'brace/mode/java'
import 'brace/theme/eclipse'
import './code_edtior.css'

export default {
  name: 'code_editor',
  props: {
    value: {
      required: true,
    },
    height: true,
    width: true,
    disable: {
      required: false,
      type: Boolean,
      default: false
    },
  },
  data: () => ({
    editor: null,
    internalChange: false
  }),
  watch: {
    height() {
      this.$nextTick(function () {
        this.editor.resize()
      })
    },
    width() {
      this.$nextTick(function () {
        this.editor.resize()
      })
    },
    value(v) {
      if (this.editor && !this.internalChange) {
        v = v && v !== null ? v : ''
        this.editor.session.setValue(v)
      }
    },
    disable(v) {
      if (this.editor) {
        this.editor.setReadOnly(v)
        v ? this.$refs.code_editor_view.classList.add('ace_content_disable') : this.$refs.code_editor_view.classList.remove('ace_content_disable')
      }
    }
  },
  methods: {
    px: function (n) {
      if (/^\d*$/.test(n)) {
        return n + "px";
      }
      return n;
    },
    copy_value() {
      this.$copyText(this.value).then(() => {
        this.$q.ok('已经复制到粘贴板！')
      }, () => {
        this.$q.err('复制失败！')
      })
    },
    onChange() {
      let error = false
      let v
      try {
        v = this.editor.getValue()
        error = false
      } catch (err) {
        error = true
      }
      if (error) {
        this.$emit("error")
      } else {
        if (this.editor) {
          this.internalChange = true
          this.$emit("input", v)
          this.$nextTick(() => {
            this.internalChange = false
          })
        }
      }
    },
    initView() {
      this.editor && this.editor.destroy()
      this.editor && this.editor.container.remove()
      this.editor = null
      let vm = this;
      let editor_div = this.$refs.code_editor_view
      let editor = vm.editor = ace.edit(editor_div)
      this.disable && editor_div.classList.add('ace_content_disable')

      this.$emit('init', editor)

      //editor.$blockScrolling = Infinity

      editor.getSession().setMode('ace/mode/java')
      editor.setTheme('ace/theme/eclipse')
      editor.getSession().setUseWrapMode(true)
      editor.setShowPrintMargin(false)
      editor.setValue(this.value)
      editor.gotoLine(1);

      editor.on('change', vm.onChange);
      if (vm.disable) {
        editor.setReadOnly(true)
      }
    },
  },

  beforeDestroy() {
    this.editor.destroy();
    this.editor.container.remove()
  },
  mounted() {
    this.initView()
  },
  render(h) {
    let height = this.height ? this.px(this.height) : '100%'
    let width = this.width ? this.px(this.width) : '100%'
    return h('div', {
      staticClass: 'col-grow',
      style: {
        border: '1px solid #eee'
      }
    }, [
      h('div', {
        staticClass: 'auto-height',
        ref: 'code_editor_view',
        style: {
          width: width,
          height: height,
        }
      })
    ])
  },
}
