###### 安装
```$xslt
npm install vue-code-diff
``` 
###### 使用
```$xslt
<template>
  <div>
    <code-diff :old-string="oldStr" :new-string="newStr" :context="10" />
  </div>
</template>

import CodeDiff from 'vue-code-diff'
export default {
  components: {CodeDiff},
  data(){
    return {
      oldStr: 'old code',
      newStr: 'new code'
    }
  }
}
```
###### 参数说明 
name | 价格 |  数量  
-|-|-
香蕉 | $1 | 5 |
苹果 | $1 | 6 |
草莓 | $1 | 7 |
