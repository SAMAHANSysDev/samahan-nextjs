const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = app.getRequestHandler()
const port = 3000;

function redirectTrailingSlash(req, res, next) {
    let paths = req.url.split("?") // get url and query from request
    let path = paths[0], query = null; // split request and query
    if (paths.length > 1)
      query = paths.slice(1, paths.length).join("?") // Rebuild query
    
    if (path.substr(-1) === '/' && path.length > 1)
      res.redirect(301, path.slice(0, -1) + ((query)?('?'+query):'')); // Redirect User with 301 and without the slash
    else
      next();
}
app.prepare().then(() => {
  express()
    .use(redirectTrailingSlash) // redirect handler (should be before nextjs handler)
    .use(handler) // Regular next.js handler
    .listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})