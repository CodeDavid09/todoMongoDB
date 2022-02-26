const { Schema, model } = require('mongoose');
const { isEmail } = require('validator')
// the Schema is very similar to the "class" that we were creating in sequelize
const userSchema = new Schema({
    username: {
        type: String,
        // before this data is saved to the database all the white spaces will be removes automatically 
        trim: true,
        minLength: 4,
        maxLength: 8,
        // sets required to true and sets our own custom error message when not passed in
		// 1st element is whether it's required or not
		// 2nd element is the custom error message
		required: [true, 'Username is required and must be a minimum of 4 and maximum of 8'],
    },
    email: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: function(value) {
                return isEmail(value);
            },
            messages: function(userObject) {
                return '${userObject.email} is not a valid email address';
            }
        }
    },
    role: {
        type: String,
        // an enum on a string type means that when we save this field to DB it can only be one of the specified values in the enum array
        enum: ['Admin', 'Employee', 'Manager'],
    },
    powerLevel: {
        type: Number,
        min: 1,
        max: 100000000,
        default: 1,
    },
    // hobbies
    hobbies:[ String ],
    twoFavoriteCryptos: {
        firstFavorite: {
            type: String,
            uppercase: true,
            trim: true,
        }, 
        secondFavorite: {
            type: String,
            uppercase: true,
            trim: true,
        }, 
    }
});

const User = model('User', userSchema);

module.exports = User;