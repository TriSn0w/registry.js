# ![[](https://npmjs.com/registry.js)](logo.png)

Registry.js is a module that can recieve info about a npm module through npm's public registry.

## Example
```js
const npm = require('registry.js')

npm.getInfo('diss.js', '2.0.4', response => {
  console.log(response)
})
  // Returns:
  // {
  // name: 'diss.js',
  // version: '2.0.6',
  // description: 'A easy to use wrapper for discord.js',
 // main: 'index.js',
 // ...
// }

```

Download count example:
```js
const npm = require('registry.js')

npm.getDownloadInfo('diss.js', null, response => {
  console.log(response.downloads)
})
// Returns:
// 333
```

## API
#### .getDownloadInfo(package, time, callback) 
 Gets download info about the package from a specific time.


##### Variables:


`package`: The packages name

`time`: A time to track all downloads from.

Available times:
`last-week`, `last-month`, `last-year`

`callback`: Does something when finished
<hr>

#### .getInfo(package, version, callback)
Gets info from a package.

##### Variables:

`package`: The packages name

`version`(optional): A version of the package

`callback`: Does something when finished

## Support
For support, contact me on my Discord(FireyJS#6969).
