const { Schema, model } = require('mongoose');

const schemaUser = new Schema(
    {
        usernamme: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            unique: true,
            required: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please try a valid email'],
        },

        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought',
            }
        ],

        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user',
            }
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

schemaUser.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('user', schemaUser);


module.exports = User;