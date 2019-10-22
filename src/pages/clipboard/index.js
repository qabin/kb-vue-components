export default {
  name: 'clipboard_index',
  data: () => ({
    value: '复制文本控件使用的是vue-clipboard2,可方便的实现复制需求。'
  }),
  methods: {
    copy_value() {
      this.$copyText(this.value).then(() => {
        this.$q.ok('已经复制到粘贴板！')
      }, () => {
        this.$q.err('复制失败！')
      })
    },
  },
  render(h) {
    return h('div', {
      staticClass: 'items-center text-center q-pa-sm'
    }, [
      h('div', {
        staticClass: 'pp-border-4 q-pa-sm text-tertiary test-weight-medium'
      }, [
        this.value,
        h('q-btn', {
          props: {
            label: '点击复制',
            flat: true,
            color: 'primary'
          },
          on: {
            click: () => {
              this.copy_value()
            }
          }
        })
      ]),

    ])
  }
}
