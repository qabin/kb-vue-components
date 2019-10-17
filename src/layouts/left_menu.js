import {left_menu_data} from "./left_menu_data";

export default {
  name: 'left_menu',
  data: () => ({
    menu_path: '/index'
  }),
  methods: {
    render_menu_item(h, m) {
      return h('div', {
        staticClass: 'col-grow cursor-pointer items-center text-center pp-selected-bg-grey-4-hover',
        class: {
          'bg-grey-4': this.menu_path === m.to
        },
        style: {
          padding: '3px',
        },
        on: {
          click: () => {
            this.menu_path = m.to
            this.$router.push({path: m.to})
          }
        }
      }, [
        this.icon ? h('q-icon', {
            props: {
              name: m.icon,
              size: '30px'
            }
          }) :
          h('div', {}, [
            h('img', {
              style: {
                borderRadius: '50%',
                width: '30px',
                height: '30px'
              },
              attrs: {
                src: m.img
              }
            }),
          ]),

        h('q-tooltip', {props: {offset: [18, 0]}}, m.label)
      ])
    }
  },
  render(h) {
    return h('div', {
      staticClass: 'scroll q-mt-sm',
    }, [left_menu_data.map(m => [
      this.render_menu_item(h, m),
    ])])
  }
}
