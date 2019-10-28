import VueDataEditor from './vue_data_editor'

export default {
  name: 'ace_index',
  data: () => ({
    json_value: "{\"q\":\"百度\",\"p\":false,\"g\":[{\"type\":\"sug\",\"sa\":\"s_1\",\"q\":\"百度翻译\"},{\"type\":\"sug\",\"sa\":\"s_2\",\"q\":\"百度地图\"},{\"type\":\"sug\",\"sa\":\"s_3\",\"q\":\"百度网盘\"},{\"type\":\"sug\",\"sa\":\"s_4\",\"q\":\"百度识图\"},{\"type\":\"sug\",\"sa\":\"s_5\",\"q\":\"百度新闻\"},{\"type\":\"sug\",\"sa\":\"s_6\",\"q\":\"百度视频\"},{\"type\":\"sug\",\"sa\":\"s_7\",\"q\":\"百度搜题\"},{\"type\":\"sug\",\"sa\":\"s_8\",\"q\":\"百度一下\"},{\"type\":\"sug\",\"sa\":\"s_9\",\"q\":\"百度手机卫士隐私保护专版\"},{\"type\":\"sug\",\"sa\":\"s_10\",\"q\":\"百度小说\"}],\"slid\":\"2268943525663350670\"}",
    xml_value: "<?xml version=\"1.0\" encoding=\"UTF-8\"?><project xmlns=\"http://maven.apache.org/POM/4.0.0\"         xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"         xsi:schemaLocation=\"http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd\">    <build>        <plugins>            <plugin>                <groupId>org.mybatis.generator</groupId>                <artifactId>mybatis-generator-maven-plugin</artifactId>                <version>1.3.2</version>                <configuration>                    <configurationFile>src/main/resources/generatorConfig.xml</configurationFile>                    <verbose>true</verbose>                    <overwrite>true</overwrite>                </configuration>            </plugin>        </plugins>    </build></project>",
    html_value: "<!DOCTYPE html><html>  <head>    <meta charset=\"utf-8\">    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\">    <title>kb-vue-components</title>  </head>  <body>    <div id=\"app\"></div>    <!-- built files will be auto injected -->  <script type=\"text/javascript\" src=\"/app.js\"></script></body></html>",
  }),
  render(h) {
    return h('div', {
      staticClass: 'q-pa-sm'
    }, [
      h('div', {
        staticClass: 'text-left text-tertiary font-14 text-weight-bold'
      }, [
        'JSON数据格式显示效果：'
      ]),
      h(VueDataEditor, {
        on: {
          input: (v) => {
            this.json_value = v
          }
        },
        props: {
          value: this.json_value,
          disable: false,
          width: '100%',
          height: '400px'
        }
      }),

      h('div', {
        staticClass: 'row no-wrap q-mt-md'
      }, [
        h('div', {
          staticClass: 'q-pr-sm',
          style: {
            width: '50%'
          }
        }, [
          h('div', {
            staticClass: 'text-left text-tertiary font-14 text-weight-bold'
          }, [
            'XML数据格式显示效果：'
          ]),
          h(VueDataEditor, {
            props: {
              value: this.xml_value,
              disable: true,
              height: '400px'
            }
          }),
        ]),
        h('div', {
          staticClass: 'q-pl-sm',
          style: {
            width: '50%'
          }
        }, [
          h('div', {
            staticClass: 'text-left text-tertiary font-14 text-weight-bold'
          }, [
            'HTML数据格式显示效果：'
          ]),
          h(VueDataEditor, {
            props: {
              value: this.html_value,
              disable: true,
              height: '400px'
            }
          })
        ])
      ])

    ])
  }
}
