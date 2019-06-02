const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const port = process.env.PORT || 3000

app
  .prepare()
  .then(() => {
    const server = express()

    // Intercept parent pages and their subpages
    server.get(['/:slug', '/:slug/:subpage*'], (req, res) => {
        const actualPage = '/life-event'

        const queryParams = { 
          slug: req.params.slug,
          subpage: req.params.subpage,
          path: req.path
        }
        
        app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
