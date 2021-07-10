const mongoose = require('mongoose');
const Schema = mongoose.Schema;

favoriteSchema = new Schema ({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    campsites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Campsite' 
    }]
},
    {timestamps: false}
);

module.exports = mongoose.model('Favorite', favoriteSchema);