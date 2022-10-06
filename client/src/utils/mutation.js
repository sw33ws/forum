import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      user {
        _id
        username
        email
        password
      }
    }
  }
`;

export const LOGIN = gql`
mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        username
        email
        password
      }
    }
  }
`;

export const ADD_POST = gql`
mutation AddPost($title: String!, $message: String!) {
  addPost(title: $title, message: $message) {
    title
    message
  }
}`;