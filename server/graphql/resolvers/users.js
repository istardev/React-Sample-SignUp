const User = require('../../models/User');
const { UserInputError } = require('apollo-server-express');
const { validateUserInput } = require('../../util/validators');

module.exports = {
    Query: {
        async getUsers() {
            try {
                const users = await User.find();
                return users;
            } catch (err) {
                throw new Error(err);
            }
        }
    },
    Mutation: {
        async addUser(_, { userInput : { name, email, phonenumber,address, zipcode }}) {
            try {
                // Validate user data
                const { valid, errors } = validateUserInput( name, email, phonenumber, address, zipcode );
                if(!valid) {
                    throw new UserInputError('Errors', { errors });
                }

                // Make sure user doesnt already exist
                const user = await User.findOne({ name });
                if( user ) {
                    throw new UserInputError('This name is taken', {
                        errors: {
                            name: 'This name is taken'
                        }
                    });
                }
                
                const newUser = new User({
                    name,
                    email,
                    phonenumber,
                    address,
                    zipcode
                });

                const res = await newUser.save();
                return {
                    id: res._id
                };
            } catch ( err ) {
                throw new Error(err);
            }
        }
    }
}