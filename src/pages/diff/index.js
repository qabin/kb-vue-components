import VueCodeDiff from 'vue-code-diff'

export default {
  name: 'diff_index',
  data: () => ({
    old_value: "/*以下为演示内容，请添加您自己的内容 ~_~ */\n" +
      "\n" +
      "html,\n" +
      "body {\n" +
      "  width: 100%;\n" +
      "  height: 100%;\n" +
      "  margin: 0;\n" +
      "  padding: 0;\n" +
      "  overflow: hidden;\n" +
      "  font-family: 'Fira Mono', helvetica, arial, sans-serif;\n" +
      "  font-weight: 400;\n" +
      "  font-size: 62.5%;\n" +
      "}\n" +
      "\n" +
      "#webgl-container {\n" +
      "  width: 100%;\n" +
      "  height: 100%;\n" +
      "  cursor: pointer;\n" +
      "}\n" +
      "\n" +
      ".loading {\n" +
      "  position: absolute;\n" +
      "  width: 100%;\n" +
      "  height: 100%;\n" +
      "  background-color: #000000;\n" +
      "  opacity: 1;\n" +
      "  -webkit-transition: opacity 1.2s ease-out;\n" +
      "  -o-transition: opacity 1.2s ease-out;\n" +
      "  transition: opacity 1.2s ease-out;\n" +
      "  pointer-events: none;\n" +
      "  z-index: 5;" +
      "}",
    new_value: "/*以下为演示内容，请添加您自己的内容 ^_^ */\n" +
      "\n" +
      "html,\n" +
      "body {\n" +
      "  width: 100%;\n" +
      "  height: 100%;\n" +
      "  margin: 0;\n" +
      "  padding: 1;\n" +
      "  overflow: hiddean;\n" +
      "  font-family: 'Fira Mono', helvetica, arial, sans-serif;\n" +
      "  font-weight: 400;\n" +
      "  font-size: 62.0%;\n" +
      "}\n" +
      "\n" +
      "#webgl-container {\n" +
      "  width: 100%;\n" +
      "  height: 100%;\n" +
      "  cursor: pointer;\n" +
      "}\n" +
      "\n" +
      ".loading {\n" +
      "  position: absolute;\n" +
      "  width: 100%;\n" +
      "  height: 100%;\n" +
      "  background-color: #0000fff;\n" +
      "  opacity: 1;\n" +
      "  -webkit-transition: opacity 1.2s ease-out;\n" +
      "  -o-transition: opacity 1.2s ease-out;\n" +
      "  transition: opacity 1.2s ease-out;\n" +
      "  pointer-events: none;\n" +
      "  z-index: 5;\n" +
      "}",
    context: 1000
  }),
  methods: {
    render_side_by_side(h) {
      return h('div', {}, [
        h('div', {
          staticClass: 'text-left text-tertiary font-14 text-weight-bold q-mt-md'
        }, [
          '两页显示对比结果，效果如下所示：'
        ]),
        h(VueCodeDiff, {
          props: {
            oldString: this.old_value,
            newString: this.new_value,
            context: this.context,
            outputFormat: 'side-by-side'
          }
        })
      ])
    },
    render_line_by_line(h) {
      return h('div', {}, [
        h('div', {
          staticClass: 'text-left text-tertiary font-14 text-weight-bold q-mt-md'
        }, [
          '一页显示对比结果，效果如下所示：'
        ]),
        h(VueCodeDiff, {
          props: {
            oldString: this.old_value,
            newString: this.new_value,
            context: this.context,
            outputFormat: 'line-by-line'
          }
        })
      ])
    },
  },
  render(h) {
    return h('div', {
      staticClass: 'q-pa-sm'
    }, [
      this.render_side_by_side(h),
      this.render_line_by_line(h)
    ])
  }
}
