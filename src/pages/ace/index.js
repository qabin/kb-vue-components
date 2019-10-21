import CodeEditor from './code_editor'

export default {
  name: 'ace_index',
  data: () => ({
    model: "package com.bin.kong.csdnspider.config;\n" +
      "\n" +
      "import org.springframework.context.annotation.Bean;\n" +
      "import org.springframework.context.annotation.Configuration;\n" +
      "import org.springframework.core.task.AsyncTaskExecutor;\n" +
      "import org.springframework.scheduling.annotation.EnableAsync;\n" +
      "import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;\n" +
      "\n" +
      "import java.util.concurrent.ThreadPoolExecutor;\n" +
      "\n" +
      "@Configuration\n" +
      "@EnableAsync\n" +
      "public class ThreadPoolConfig {\n" +
      "    private int corePoolSize = 10;//线程池维护线程的最少数量\n" +
      "\n" +
      "    private int maxPoolSize = 50;//线程池维护线程的最大数量\n" +
      "\n" +
      "    private int queueCapacity = 20; //缓存队列\n" +
      "\n" +
      "    private int keepAlive = 120;//允许的空闲时间\n" +
      "\n" +
      "    @Bean\n" +
      "    public AsyncTaskExecutor threadExecutor() {\n" +
      "        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();\n" +
      "        executor.setCorePoolSize(corePoolSize);\n" +
      "        executor.setMaxPoolSize(maxPoolSize);\n" +
      "        executor.setQueueCapacity(queueCapacity);\n" +
      "        executor.setThreadNamePrefix(\"threadExecutor-\");\n" +
      "        executor.setRejectedExecutionHandler(new ThreadPoolExecutor.CallerRunsPolicy()); //对拒绝task的处理策略\n" +
      "        executor.setKeepAliveSeconds(keepAlive);\n" +
      "        executor.initialize();\n" +
      "        return executor;\n" +
      "    }\n" +
      "}\n"
  }),
  render(h) {
    return h('div', {
      staticClass: 'q-pa-sm'
    }, [
      h(CodeEditor, {
        on: {
          input: (v) => {
            this.model = v
          }
        },
        props: {
          value: this.model,
          disable: false,
          width: '100%',
          height: '600px'
        }
      }),
      h('div',{
        staticClass: 'font-13 q-mt-md'
      },[
        h('span',{
        staticClass:'text-weight-bold'
        },['文本内容：']),
        h('pre', {
        }, [this.model])
      ])
    ])
  }
}
