import {components_list} from "../../utils/components_dictionary";

export default {
  name: 'home_index',
  data: () => ({}),
  methods: {
    render_module_item(h, d) {
      return h('div', {
        staticClass: 'q-pa-sm',
        style: {
          height: '160px',
          width: '400px'
        },
      }, [
        h('div', {
          staticClass: 'pp-border-4 cursor-pointer pp-intro-div q-pa-sm full-height',
          on: {
            click: () => this.$router.push({path: d.url})
          }
        }, [
          h('div', {
            staticClass: 'row no-wrap items-center'
          }, [
            h('img', {
              style: {
                width: '40px',
                height: '40px',
                borderRadius: '50%'
              },
              attrs: {
                src: d.img
              }
            }),
            h('div', {
              staticClass: 'q-ml-sm text-weight-bold text-tertiary font-20'
            }, [
              d.title
            ]),
          ]),
          h('div', {
            staticClass: 'text-weight-medium text-faded font-13 q-mt-sm'
          }, [
            d.description
          ])
        ])
      ])
    },
    render_module_list(h) {
      return h('div', {
        staticClass: 'row col-12 q-pa-sm'
      }, [
        components_list.map(d => [this.render_module_item(h, d)])
      ])
    },
  },
  render(h) {
    return h('div', {}, [
        this.render_module_list(h)
      ]
    )
  }
}
