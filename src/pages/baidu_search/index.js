import {tool_type_enum} from "./search_dictionary";
import {
  setFavoriteHomeSearchKw,
  getFavoriteHomeSearchKw,
  clearFavoriteHomeSearchKw
} from "./favorite_search_selection";

export default {
  name: 'baidu_search_index',
  data: () => ({
    hot_key: null,
    kw: null,
    search_list: [{"id": 1, "name": "百度百科-VUE组件库表平台", "type": 1}, {
      "id": 2,
      "name": "百度百科-CSDN全栈入门工程师",
      "type": 1
    }, {"id": 1, "name": "广告-阿里巴巴", "type": 2}, {"id": 5, "name": "广告-百度公司", "type": 2}, {
      "id": 6,
      "name": "广告-腾讯公司",
      "type": 2
    }, {"id": 7, "name": "广告-滴滴公司", "type": 2}, {"id": 9, "name": "广告-拍拍贷公司", "type": 2}, {
      "id": 10,
      "name": "广告-神州专车",
      "type": 2
    }, {"id": 11, "name": "广告-神州租车", "type": 2}, {"id": 12, "name": "广告-孔彬的专栏", "type": 2}],
    search_filter_list: [],
    favorite_search_kw_list: [],
  }),
  methods: {
    render_search_input(h) {
      return h('div', {
        staticClass: 'row no-wrap',
        style: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '60px'
        }
      }, [
        h('div', {
            staticClass: 'row no-wrap center',
            style: {
              border: '1px solid var(--q-color-primary)',
            }
          }, [
            h('q-input', {
              ref: 'q_input',
              props: {
                placeholder: '按关键字搜索',
                border: false,
                value: this.kw,
                hideUnderline: true,
                before: [{icon: 'search'}],
              },
              style: {
                width: '500px',
                borderRadius: '0px'
              },
              on: {
                input: v => {
                  this.kw = v;
                  setTimeout(() => {
                    this.$nextTick(this.refresh_search_list)
                  }, 300)

                },
              },
              nativeOn: {
                click: () => {
                  console.log("click")
                  setTimeout(() => {
                    this.$refs.q_input.focus()
                    this.$refs.q_popover.show()
                  }, 100)
                }
              }
            }, [
              h('q-popover', {
                ref: 'q_popover',
                style: {
                  width: '500px',
                  minHeight: '0px'
                },
                on: {
                  show: () => {
                    this.$refs.q_input.focus()
                  },
                }
              }, [
                this.render_search_list(h)
              ])]),
            h('q-btn', {
              props: {
                label: '百度一下',
                color: 'blue-7',

              },
              style: {
                borderRadius: '0px !important'
              },
              on: {
                click: () => {

                }
              }
            }),
          ]
        ),
      ])
    },
    render_search_list(h) {
      return h('div', {}, [
        !this.kw && this.favorite_search_kw_list && this.favorite_search_kw_list.length > 0 ? [this.favorite_search_kw_list.map(f => [
            this.render_search_list_item(h, f, true)
          ]),
            h('div', {
              staticClass: 'font-12 text-tertiary q-pa-xs bg-grey-1 row no-wrap'
            }, [
              h('span', {
                staticClass: 'float-right col-grow'
              }, []),
              h('span', {
                staticClass: 'float-right'
              }, ['搜索历史']),
              h('span', {
                staticClass: 'cursor-pointer q-ml-md float-right text-weight-bold',
                on: {
                  click: () => {
                    clearFavoriteHomeSearchKw()
                    this.favorite_search_kw_list = []
                  }
                }
              }, ['清除'])
            ])
          ]
          :
          this.search_filter_list.map(s => [
            this.render_search_list_item(h, s, false)
          ]),
      ])
    },
    render_search_list_item(h, s, history) {
      return h('div', {
        staticClass: 'pp-selectable-bg q-pa-xs no-wrap cursor-pointer text-left font-13 ellipsis row',
        style: {
          lineHeight: '20px',
        },
        on: {
          click: () => {
            setFavoriteHomeSearchKw(s)
            this.favorite_search_kw_list = getFavoriteHomeSearchKw(10)
          }
        },
      }, [
        h('q-icon', {
          style: {
            width: '20px',
          },
          props: {
            name: tool_type_enum[s.type].icon,
            size: '15px',
            color: tool_type_enum[s.type].color
          }
        }),
        h('span', {
          staticClass: 'col-grow',
          'class': {
            'text-blue-9': history
          },
          style: {
            marginLeft: '3px'
          }
        }, s.name),
        h('span', {
          staticClass: 'cursor-pointer font-12 text-weight-bold text-' + tool_type_enum[s.type].color,
          style: {
            marginLeft: '3px'
          }
        }, [
          tool_type_enum[s.type].choose_desc
        ])
      ])
    },
    refresh_search_list() {
      this.search_filter_list = this.search_list.filter(d => d.name.indexOf(this.kw) !== -1)
      this.favorite_search_kw_list = getFavoriteHomeSearchKw(10)

    },
  },
  mounted() {
    this.favorite_search_kw_list = getFavoriteHomeSearchKw(10)
    this.search_filter_list = this.search_list
  },
  render(h) {
    return h('div', {
      staticClass: 'relative',
    }, [
      this.render_search_input(h),
    ])
  },
}
