import { gql } from '@apollo/client';

export const GET_POSTS = gql`
query Posts {
    posts {
      title
      message
    }
  }
`;