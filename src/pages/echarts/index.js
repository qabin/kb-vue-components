let echarts = require('echarts/lib/echarts')
import 'echarts/theme/macarons.js'

export default {
  name: 'echarts_index',
  data: () => ({
    draw_line_view: null,
    draw_bar_view: null,
    draw_pie_view: null,
    draw_scatter_view: null,

    draw_line_options: {
      title: {
        text: '堆叠区域图'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '邮件营销',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '联盟广告',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '视频广告',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: '直接访问',
          type: 'line',
          stack: '总量',
          areaStyle: {normal: {}},
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: '搜索引擎',
          type: 'line',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          areaStyle: {normal: {}},
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    },

    draw_bar_options: {
      title: {
        text: '世界人口总量',
        subtext: '数据来自网络'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['2011年', '2012年']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
      },
      series: [
        {
          name: '2011年',
          type: 'bar',
          data: [18203, 23489, 29034, 104970, 131744, 630230]
        },
        {
          name: '2012年',
          type: 'bar',
          data: [19325, 23438, 31000, 121594, 134141, 681807]
        }
      ]
    },

    draw_pie_options: {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            {value: 335, name: '直接访问'},
            {value: 310, name: '邮件营销'},
            {value: 234, name: '联盟广告'},
            {value: 135, name: '视频广告'},
            {value: 1548, name: '搜索引擎'}
          ]
        }
      ]
    },

    draw_scatter_options: {
      xAxis: {},
      yAxis: {},
      series: [{
        symbolSize: 20,
        data: [
          [10.0, 8.04],
          [8.0, 6.95],
          [13.0, 7.58],
          [9.0, 8.81],
          [11.0, 8.33],
          [14.0, 9.96],
          [6.0, 7.24],
          [4.0, 4.26],
          [12.0, 10.84],
          [7.0, 4.82],
          [5.0, 5.68]
        ],
        type: 'scatter'
      }]
    },

  }),
  methods: {
    draw_view(view, id, options) {
      if (view) {
        view.dispose();
      }
      view = document.getElementById(id) && echarts.init(document.getElementById(id), 'macarons');
      view && view.setOption(options);
    },

    draw_echarts_line_view() {
      this.draw_view(this.draw_line_view, "draw_line_view_id", this.draw_line_options)
    },
    draw_echarts_bar_view() {
      this.draw_view(this.draw_bar_view, "draw_bar_view_id", this.draw_bar_options)
    },
    draw_echarts_pie_view() {
      this.draw_view(this.draw_pie_view, "draw_pie_view_id", this.draw_pie_options)
    },
    draw_echarts_scatter_view() {
      this.draw_view(this.draw_scatter_view, "draw_scatter_view_id", this.draw_scatter_options)
    },
  },
  mounted() {
    this.draw_echarts_line_view()
    this.draw_echarts_bar_view()
    this.draw_echarts_pie_view()
    this.draw_echarts_scatter_view()
  },
  render(h) {
    return h('div', {
      staticClass: 'items-center text-center col-grow q-pa-sm'
    }, [
      h('div', {
        staticClass: 'row no-wrap'
      }, [
        h('div', {
          attrs: {id: 'draw_line_view_id'},
          style: {
            height: '400px',
            width: '45%',
            margin: '0 auto'
          }
        }),
        h('div', {
          attrs: {id: 'draw_bar_view_id'},
          style: {
            height: '400px',
            width: '45%',
            margin: '0 auto'
          }
        }),
      ]),

      h('div', {
        staticClass: 'row no-wrap'
      }, [
        h('div', {
          attrs: {id: 'draw_pie_view_id'},
          style: {
            height: '400px',
            width: '45%',
            margin: '0 auto'
          }
        }),
        h('div', {
          attrs: {id: 'draw_scatter_view_id'},
          style: {
            height: '400px',
            width: '45%',
            margin: '0 auto'
          }
        }),
      ]),
    ])
  }
}
