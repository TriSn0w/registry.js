const fetch = require('node-fetch')
var npmPackageDownloads = require('npm-package-downloads');

module.exports = {
  getInfo: function(package, version, callback) {
    if (version) {
        if (!version == undefined) {
          try {
      fetch(`https://registry.npmjs.com/${package}/${version}`)
          .then(res => res.json())
          .then(callback)
          } catch(err) {
       throw err
      }
        } else {
          try {
          fetch(`https://registry.npmjs.com/${package}/latest`)
          .then(res => res.json())
          .then(callback)
          } catch(err) {
       throw err
      }
        }
              } else {
                try {
    fetch(`https://registry.npmjs.com/${package}`)
          .then(res => res.json())
          .then(callback);
                } catch(err) {
                 return onError
                }
}
},
getDownloadInfo: function(name, time, callback) {
if (!time == undefined || !time == null) {
npmPackageDownloads(name, time).then(callback)
} else {
npmPackageDownloads(name, 'last-month').then(callback)
}
}
}
