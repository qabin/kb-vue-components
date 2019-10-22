export default {
  name: 'vue_touch_index',
  data: () => ({
    img_list: [
      {
        src: '../../static/img/vue_touch_img_1.png'
      },
      {
        src: '../../static/img/vue_touch_img_2.png'
      },
      {
        src: '../../static/img/vue_touch_img_3.png'
      },
      {
        src: '../../static/img/vue_touch_img_4.png'
      },
    ],
    selected: 0
  }),
  methods: {},
  render(h) {
    return h('div', {
      staticClass: 'col-grow items-center text-center q-pa-sm'
    }, [
      h('v-touch', {
        on: {
          swipedown: () => {
            this.selected = this.selected === 0 ? 0 : this.selected - 1
            if (this.selected === 0)
              this.$q.ok("已到顶！")
          },
          swipeup: () => {
            this.selected = this.selected === 3 ? 3 : this.selected + 1
            if (this.selected === 3)
              this.$q.ok("已到底！")

          }
        }

      }, [
        h('img', {
          style: {
            height: '100%',
            width: '400px'
          },
          attrs: {
            src: this.img_list[this.selected].src
          }
        })
      ])
    ])
  }
}
