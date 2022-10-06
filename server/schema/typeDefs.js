const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
    posts: [Post]
}
type Auth {
    token: ID!
    user: User
}
type Post {
    _id: ID
    title: String
    message: String
}


type Query {
    users: [User]!
    user: User
    posts: [Post]!
}


type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPost(title: String!, message: String!): Post
}`;

module.exports = typeDefs;