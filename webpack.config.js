const path  = require('path');

module.exports = {
    entry: {
        app: path.join(__dirname, 'source')
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'js/[name].js'
    }
}