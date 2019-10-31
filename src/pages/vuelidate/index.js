import {required} from 'vuelidate/lib/validators'

export default {
  name: 'vuelidate_index',
  data: () => ({
    model: {
      login_name: null,
      login_pwd: null,
    },
    remember_me: true,
    error_msg: null
  }),
  validations: {
    model: {
      login_name: {required},
      login_pwd: {required},
    },
  },
  render(h) {
    return h('div', {
      staticClass: 'items-center col-grow',
      style: {
        marginTop: '100px'
      }
    }, [
      h('div', {
        staticClass: 'login-bg shadow-3 radius-3',
        style: {
          margin: '0 auto',
          width: '310px',
          height: '420px',
          padding: '20px 25px',
          zIndex: 3,
          background: 'rgba(216, 220, 229, 0.5)'
        }

      }, [
        h('div', {
          staticClass: 'text-tertiary text-center',
          style: {
            fontSize: '25px',
            fontWeight: '700',
            margin: '20px 0 80px'
          }
        }, ['VUE组件库平台']),
        h('q-input', {
          staticClass: 'bg-white radius-3 font-13 q-pl-xs q-pr-sm shadow-1 q-mb-md',
          style: {
            height: '33px',
            fontWeight: '400',
            border: '1px solid white',

          },
          props: {
            color: 'dark',
            type: 'text',
            hideUnderline: true,
            value: this.model.login_name,
            placeholder: '请输入账号',
            before: [{
              icon: 'person'
            }]
          },
          on: {
            input: (v) => this.model.login_name = v
          }
        }),
        h('q-input', {
          staticClass: 'bg-white radius-3 font-13 q-pl-xs q-pr-sm pp shadow-1 login-input',
          style: {
            height: '33px',
            fontWeight: '400',
          },
          props: {
            color: 'dark',
            type: 'password',
            hideUnderline: true,
            value: this.model.login_pwd,
            placeholder: '请输入密码',
            clearable: true,
            before: [{
              icon: 'lock',
            }]
          },
          on: {
            input: (v) => this.model.login_pwd = v
          }
        }),
        h('q-btn', {
          staticClass: 'login-btn font-13 full-width shadow-1 radius-2',
          style: {
            marginTop: '10px',
            height: '33px',
            minHeight: '33px',
            fontWeight: '400'
          },
          props: {
            color: 'primary',
          },
          on: {
            click: () => {
              this.$v.model && this.$v.model.$touch();
              if (this.$v.model.login_name.$error) {
                this.error_msg = "提示：请输入账号"
                return
              }

              if (this.$v.model.login_pwd.$error) {
                this.error_msg = "提示：请输入密码"
              }
              if (!this.$v.model.$error) {
                this.error_msg = null
                this.$q.ok("登录成功！")
              }
            },
          }
        }, '登 录'),

        h('div', {
          staticClass: 'text-negative text-left q-mt-sm font-13 text-weight-medium'
        }, [this.error_msg]),
      ])
    ])
  }
}
