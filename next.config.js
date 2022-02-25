const path = require('path');
module.exports = {
    headers() {
        return [
            {
                source: "/.well-known/apple-app-site-association",
                headers: [ { key: "content-type", value: "application/json"} ]
            },
            {
                source: "/.well-known/assetlinks.json",
                headers: [ { key: "content-type", value: "application/json"} ]
            },
        ]
    }
  
};