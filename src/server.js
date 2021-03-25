import sirv from 'sirv'
import polka from 'polka'
import compression from 'compression'
import * as sapper from '@sapper/server'

const { PORT, NODE_ENV } = process.env
const dev = NODE_ENV === 'development'
// const ghpage = !dev ? 'douganderson444.github.io' : ''
polka() // You can also use Express
  .use(
    'douganderson444.github.io',
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    sapper.middleware()
    // , ghpage
  )
  .listen(PORT, err => {
    if (err) console.log('error', err)
  })
