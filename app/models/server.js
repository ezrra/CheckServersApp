var mongoose = require('mongoose');

module.exports = mongoose.model('Server', {
    name: {
        type: String,
        default: ''
    },
    website: {
        type: String,
        default: ''
    }
})