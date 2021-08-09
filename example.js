// Use this as an example if you need to ;)
// registry.js made by FireyJS#6969
const npm = require('registry.js')
npm.getInfo('diss.js', '2.0.4', response => {
  console.log(response)
})

npm.getDownloadCount('diss.js', null, response => {
  console.log(response.downloads)
})
