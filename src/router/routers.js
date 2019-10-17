import left from '../layouts/left_menu'
import header from '../layouts/header_menu'

export default [
  {
    path: '',
    component: () => import('../layouts/index'),
    children: [
      {
        path: '/',
        components: {
          left, header,
          page: () => import('../pages/home/index')
        }
      },
      {
        path: '/index',
        components: {
          left, header,
          page: () => import('../pages/home/index')
        }
      },
      {
        path: '/diff',
        components: {
          left, header,
          page: () => import('../pages/diff/index')
        }
      },
      {
        path: '/clipboard',
        components: {
          left, header,
          page: () => import('../pages/clipboard/index')
        }
      },
    ]
  },
]
