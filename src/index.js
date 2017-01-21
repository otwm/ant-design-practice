if (process.env.NODE_ENV === 'production') {
    module.exports = require('./root/index.prod.js');
} else {
    module.exports = require('./root/index.dev.js');
}