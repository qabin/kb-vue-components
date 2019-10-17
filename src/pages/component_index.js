// import VueMarkdown from 'vue-markdown'
//
// export default {
//   name: 'component_index',
//   data: () => ({}),
//   props: {
//     title: null,
//     description: null,
//     course: null,
//     example:null
//   },
//   methods: {
//     render_title_and_desc(h) {
//       return h('div', {
//         staticClass: 'row col-grow',
//         style: {
//           border: '1px solid var(--q-color-grey-4)',
//         }
//       }, [
//         h('div', {
//           staticClass: 'row no-wrap text-left items-center'
//         }, [
//           h('div', [
//             h('q-icon', {
//               props: {color: 'primary', name: 'title', size: '40px'}
//             })
//           ]),
//           h('div', {
//             staticClass: 'q-ml-sm'
//           }, [
//             h('div', {staticClass: 'font-20 text-weight-bold text-tertiary'}, [
//               this.title
//             ]),
//             h('div', {
//               staticClass: 'text-weight-bold text-faded font-16  q-mt-sm text-left'
//             }, [
//               this.description
//             ])
//           ]),
//         ])
//       ])
//     },
//     render_course(h) {
//       return h('div', {
//         staticClass: 'q-mt-md',
//         style: {
//           border: '1px solid var(--q-color-grey-4)',
//         }
//       }, [
//         h('div', {
//           staticClass: 'row no-wrap text-left items-center col-grow'
//         }, [
//           h('div', [
//             h('q-icon', {
//               props: {color: 'primary', name: 'import_contacts', size: '40px'}
//             })
//           ]),
//           h('div', {
//             staticClass: 'q-ml-sm'
//           }, [
//             h('div', {
//               staticClass: 'font-20 text-weight-bold text-tertiary text-left'
//             }, ['使用教程：'
//             ]),
//           ]),
//         ]),
//         h('div', {
//           staticClass: 'text-left '
//         }, [
//           h(VueMarkdown, {}, [
//             this.course
//           ])
//         ])
//       ])
//     },
//     render_example(h) {
//       return h('div', {
//         staticClass: 'col-grow q-mt-md',
//         style: {
//           border: '1px solid var(--q-color-grey-4)',
//         }
//       }, [
//         h('div', {
//           staticClass: 'row no-wrap text-left items-center'
//         }, [
//           h('div', [
//             h('q-icon', {
//               props: {color: 'primary', name: 'help', size: '40px'}
//             })
//           ]),
//           h('div', {
//             staticClass: 'q-ml-sm'
//           }, [
//             h('div', {
//               staticClass: 'font-20 text-weight-bold text-tertiary text-left'
//             }, ['示例如下：'
//             ])
//           ]),
//         ]),
//         this.example
//       ])
//     }
//   },
//   render(h) {
//     return h('div', {
//       staticClass: 'q-pa-sm'
//     }, [
//       this.render_title_and_desc(h),
//       this.render_course(h),
//       this.render_example(h),
//     ])
//   }
// }
