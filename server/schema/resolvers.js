const { User, Post } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({})
        },
        user: async (parent, { _id }, context)=> {  
            if (context.user) {
            return User.findOne({
                _id: context.user._id 
                });
            }
            throw new AuthenticationError('You need to be logged in! resolvers');
        },
        posts: async () => {
            return await Post.find({})
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return { token, user };
          },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Wrong email');
              }
        
              const correctPw = await user.isCorrectPassword(password);
        
              if (!correctPw) {
                throw new AuthenticationError('wrong password');
              }
        
              const token = signToken(user);
        
              return { token, user };
        },
        addPost: async ( parent, { title, message }) => {
            return await Post.create({ title, message })
        }
    }
}

module.exports = resolvers;