let echarts = require('echarts/lib/echarts')
require('echarts-wordcloud');
import 'echarts/theme/macarons.js'

export default {
  name: 'word_cloud_index',
  data: () => ({
    word_cloud_view: null,
    word_cloud_options: {},
    word_list: [{"name": "需求", "value": 10927}, {"name": "修改", "value": 5902}, {
      "name": "优化",
      "value": 5135
    }, {"name": "接口", "value": 4012}, {"name": "BUG", "value": 3112}, {"name": "增加", "value": 3047}, {
      "name": "添加",
      "value": 2802
    }, {"name": "查询", "value": 2728}, {"name": "修复", "value": 2295}, {"name": "新增", "value": 2217}, {
      "name": "配置",
      "value": 2177
    }, {"name": "问题", "value": 1927}, {"name": "逻辑", "value": 1464}, {"name": "变更", "value": 1395}, {
      "name": "调整",
      "value": 1286
    }, {"name": "更新", "value": 1286}, {"name": "埋点", "value": 1274}, {"name": "信息", "value": 1159}, {
      "name": "日志",
      "value": 1143
    }, {"name": "用户", "value": 1128}, {"name": "页面", "value": 1110}, {"name": "代码", "value": 1103}, {
      "name": "处理",
      "value": 1097
    }, {"name": "消息", "value": 1091}, {"name": "字段", "value": 1060}, {"name": "升级", "value": 1055}, {
      "name": "提交",
      "value": 992
    }, {"name": "支持", "value": 971}, {"name": "返回", "value": 916}, {"name": "状态", "value": 901}, {
      "name": "推送",
      "value": 888
    }, {"name": "数据", "value": 868}, {"name": "删除", "value": 831}, {"name": "商户", "value": 809}, {
      "name": "时间",
      "value": 803
    }, {"name": "首页", "value": 786}, {"name": "减免", "value": 768}, {"name": "异常", "value": 758}, {
      "name": "金额",
      "value": 742
    }, {"name": "服务端", "value": 739}, {"name": "版本", "value": 729}, {"name": "失败", "value": 718}, {
      "name": "微信",
      "value": 707
    }, {"name": "参数", "value": 699}, {"name": "活动", "value": 685}, {"name": "渠道", "value": 680}, {
      "name": "判断",
      "value": 676
    }, {"name": "机构", "value": 672}, {"name": "功能", "value": 665}, {"name": "后台", "value": 656}, {
      "name": "管理",
      "value": 656
    }, {"name": "校验", "value": 656}, {"name": "发标", "value": 646}, {"name": "样式", "value": 631}, {
      "name": "获取",
      "value": 629
    }, {"name": "接入", "value": 618}, {"name": "记录", "value": 608}, {"name": "支付", "value": 608}, {
      "name": "分期",
      "value": 605
    }, {"name": "模板", "value": 599}, {"name": "调用", "value": 592}, {"name": "优惠券", "value": 590}, {
      "name": "显示",
      "value": 586
    }, {"name": "列表", "value": 571}, {"name": "文件", "value": 568}, {"name": "发送", "value": 552}, {
      "name": "短信",
      "value": 531
    }, {"name": "同步", "value": 529}, {"name": "服务", "value": 523}, {"name": "借款", "value": 521}, {
      "name": "迁移",
      "value": 516
    }, {"name": "解决", "value": 509}, {"name": "更改", "value": 506}, {"name": "类型", "value": 500}, {
      "name": "上传",
      "value": 492
    }, {"name": "账户", "value": 492}, {"name": "财富", "value": 488}, {"name": "展示", "value": 482}, {
      "name": "业务",
      "value": 467
    }, {"name": "跳转", "value": 461}, {"name": "设置", "value": 453}, {"name": "交易", "value": 446}, {
      "name": "使用",
      "value": 446
    }, {"name": "成功", "value": 440}, {"name": "环境", "value": 440}, {"name": "场景", "value": 436}, {
      "name": "标的",
      "value": 431
    }, {"name": "权限", "value": 424}, {"name": "流程", "value": 422}, {"name": "测试", "value": 415}, {
      "name": "去掉",
      "value": 412
    }, {"name": "认证", "value": 411}, {"name": "容器", "value": 410}, {"name": "相关", "value": 410}, {
      "name": "项目",
      "value": 394
    }, {"name": "报表", "value": 393}, {"name": "错误", "value": 388}, {"name": "根据", "value": 382}, {
      "name": "案件",
      "value": 379
    }, {"name": "合并", "value": 375}, {"name": "订单", "value": 375}, {"name": "通知", "value": 367}, {
      "name": "登录",
      "value": 367
    }, {"name": "绑定", "value": 363}, {"name": "菜单", "value": 358}, {"name": "模块", "value": 356}, {
      "name": "内容",
      "value": 354
    }, {"name": "去除", "value": 352}, {"name": "缓存", "value": 350}, {"name": "完善", "value": 348}, {
      "name": "初始化",
      "value": 348
    }, {"name": "改造", "value": 346}, {"name": "完成", "value": 337}, {"name": "脚本", "value": 336}, {
      "name": "是否",
      "value": 335
    }, {"name": "单元测试", "value": 332}, {"name": "自动", "value": 332}, {"name": "商城", "value": 331}, {
      "name": "逾期",
      "value": 331
    }, {"name": "结果", "value": 325}, {"name": "改为", "value": 324}, {"name": "租户", "value": 323}, {
      "name": "请求",
      "value": 322
    }, {"name": "二类", "value": 317}, {"name": "编辑", "value": 316}, {"name": "补偿", "value": 314}, {
      "name": "打包",
      "value": 311
    }, {"name": "部分", "value": 311}, {"name": "主干", "value": 308}]
  }),
  methods: {
    draw_word_cloud_view() {
      if (this.word_cloud_view) {
        this.word_cloud_view.dispose();
      }
      this.word_cloud_view = document.getElementById('word_cloud_view_id') && echarts.init(document.getElementById('word_cloud_view_id'), 'macarons');
      this.word_cloud_view && this.word_cloud_view.setOption(this.word_cloud_options);
    },
    init_view_data() {
      let word_cloud_series = [{
        type: 'wordCloud',
        shape: 'circle',
        //maskImage: maskImage,
        left: 'center',
        top: 'center',
        width: '100%',
        height: '100%',
        right: null,
        bottom: null,
        sizeRange: [6, 60],
        rotationRange: [-45, 90],
        autoSize: {
          enable: true,
          minSize: 6
        },
        textPadding: 0,
        // rotationStep: 45,
        // gridSize: 8,
        drawOutOfBound: false,
        textStyle: {
          normal: {
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            // Color can be a callback function or a color string
            color: function () {
              // Random color
              return 'rgb(' + [
                Math.round(Math.random() * 256),
                Math.round(Math.random() * 256),
                Math.round(Math.random() * 256)
              ].join(',') + ')';
            }
          },
          emphasis: {
            shadowBlur: 10,
            shadowColor: '#333'
          }
        },
        data: this.word_list
      }]

      this.word_cloud_options = {
        series: word_cloud_series
      }
      this.word_cloud_view.setOption(this.word_cloud_options)
    },
  },
  mounted() {
    this.draw_word_cloud_view()
    this.init_view_data()
  },
  render(h) {
    return h('div',{
      staticClass:'items-center text-center col-grow'
    },[
      h('div', {
        attrs: {id: 'word_cloud_view_id'},
        style: {
          height: '400px',
          width: '400px',
          margin:'0 auto'
        }
      })
    ])
  }
}
