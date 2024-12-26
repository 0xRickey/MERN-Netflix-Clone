import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username : {
        type: String,
        required: true,
        unique: true
    },
    
    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true  
    },

    image: {
        type: String,
        default: ""
    },

    searchHistory: {
        type: Array,
        default: []
    }
})

// Note that you should capitalise the name of the schema as a rule for Mongoose.
// Mongoose will use this to name the collection that you are making.
export const User = mongoose.model('User', userSchema);