const http   = require('http')
const query  = require('querystring')
const lastfm = module.exports = {}
const as     = { host: 'ws.audioscrobbler.com', port: 80 }

let apikey

function call(className, propName, options) {
  return new Promise((resolve, reject) => {
    if (!options.api_key && apikey) options.api_key = apikey
    if (!options.format)            options.format = 'json'

    let method = `${className}.${propName}`
    let path = `/2.0/?method=${method}&${query.stringify(options)}`

    http.get({ host: as.host, port: as.port, path: path }, function(res) {
      var data = ''
        , err  = null

      res.on('data', function(chunk) {
        data += chunk
      })

      res.on('end', function() {
        // Unknown format let the caller handle the error response
        if (options.format !== 'json') {
          resolve(data)

          return
        }

        data = JSON.parse(data)

        if (data.error) {
          err = new Error(data.message)

          err.type = data.error
        }

        if (err) {
          reject(err)
        }
        else {
          resolve(data)
        }
      })
    }).on('error', function(e) {
      reject(e)
    })
  })
}

lastfm.create = function(className) {
  return new Proxy({}, {
    get: function(proxy, propName) {
      return function(options) {
        return call(className, propName, options)
      }
    }
  })
}

lastfm.setAPIKey = function(value) {
  apikey = value
}

// ERROR 1 does not exist
lastfm.ERROR_INVALID_SERVICE          =   2
lastfm.ERROR_INVALID_METHOD           =   3
lastfm.ERROR_AUTHENTICATION_FAILED    =   4
lastfm.ERROR_INVALID_FORMAT           =   5
lastfm.ERROR_INVALID_PARAMETERS       =   6
lastfm.ERROR_INVALID_RESOURCE         =   7
lastfm.ERROR_OPERATION_FAILED         =   8
lastfm.ERROR_INVALID_SESSION_KEY      =   9
lastfm.ERROR_INVALID_API_KEY          =  10
lastfm.ERROR_SERVICE_OFFLINE          =  11
lastfm.ERROR_SUBSCRIBERS_ONLY         =  12
lastfm.ERROR_INVALID_METHOD_SIGNATURE =  13
lastfm.ERROR_UNAUTHORIZED_TOKEN       =  14
lastfm.ERROR_ITEM_NOT_STREAMABLE      =  15
lastfm.ERROR_SERVICE_UNAVAILABLE      =  16
lastfm.ERROR_NOT_LOGGED_IN            =  17
lastfm.ERROR_TRIAL_EXPIRED            =  18
// ERROR 19 does not exist
lastfm.ERROR_NOT_ENOUGH_CONTENT       =  20
lastfm.ERROR_NOT_ENOUGH_MEMBERS       =  21
lastfm.ERROR_NOT_ENOUGH_FANS          =  22
lastfm.ERROR_NOT_ENOUGH_NEIGHBOURS    =  23
lastfm.ERROR_NO_PEAK_RADIO            =  24
lastfm.ERROR_RADIO_NOT_FOUND          =  25
lastfm.ERROR_API_KEY_SUSPENDED        =  26
lastfm.ERROR_DEPRECATED_REQUEST       =  27
lastfm.ERROR_RATE_LIMIT_EXCEEDED      =  28

var classes = [
    'Album'
  , 'Artist'
  , 'Auth'
  , 'Chart'
  , 'Event'
  , 'Geo'
  , 'Group'
  , 'Library'
  , 'Playlist'
  , 'Radio'
  , 'Tag'
  , 'Tasteometer'
  , 'Track'
  , 'User'
  , 'Venue'
]

for (var i = 0, l = classes.length; i < l; ++i) {
  lastfm[classes[i]] = lastfm.create(classes[i].toLowerCase())
}
