const { Schema, model } = require('mongoose');

const ObjectId = require('mongodb').ObjectId;

const formatedDate = (date) => {
    return `${date.getMonth() + 1}/ ${date.getDate()}/${date.getFullYear()}`;

};

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new ObjectId(),
        },

        reactionBody: {
            type: String,
            required: true,
            maxLenght: 280,

        },

        username: {
            type: String,
            required: true,
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: formatedDate,

        }
    },
    {
        toJSON: {
            getters: true,
        },

    }
);

const schemaThought = new Schema(
    {
        toughtText: {
            type: String,
            required: true,
            minLenght: 1,
            maxLenght: 280,
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: formatedDate,
        },

        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

schemaThought.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('tought', schemaThought);

module.exports = Thought;