
var PrerenderSPAPlugin = require('prerender-spa-plugin')
var path = require('path')

module.exports = {
    configureWebpack: config => {
        if (process.env.NODE_ENV !== 'production') return
      
        return {
    plugins: [
    
      new PrerenderSPAPlugin(
       
      path.resolve(__dirname, 'dist'),
       
       [ '/', '/about', '/portfolio/one', '/portfolio/two', '/portfolio/three' ],
       {
           
       }
      )
    ]
  }
}
}