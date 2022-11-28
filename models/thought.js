const { Schema, model } = require('mongoose');
const ObjectId = require('mongodb').ObjectId;

const formatedDate = (date) => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;    
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
            maxLength: 280,
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

const schemaTought = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
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

schemaTought.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('thought', schemaTought);

module.exports = Thought;
