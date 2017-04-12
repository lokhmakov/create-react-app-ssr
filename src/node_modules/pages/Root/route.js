import React                from 'react'


import Root                 from './Root'

const title = `Root`

export default {
  path: '/',

  action() {
    return {
      title,
      component: <Root title={ title } />,
    }
  },
}
