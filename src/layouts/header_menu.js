export default {
  name: 'header_menu',
  data: () => ({}),
  methods: {},
  render(h) {
    return h('div', {
      staticClass: 'full-height'
    }, [
      h('q-toolbar', {
        props: {
          color: 'indigo-6'
        },
        style: {
          maxHeight: '50px'
        }
      }, [
        h('q-icon', {
          props: {
            name: 'stars',
            size: '35px'
          }
        }),
        h('span', {
          staticClass: 'q-ml-sm text-weight-medium'
        }, ['前端组件库'])
      ])
    ])
  }
}
