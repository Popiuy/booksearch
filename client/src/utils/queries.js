import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me($token: String) {
    me(token: $token) {
      _id
      username
      email
      savedBooks {
        // Include the fields you need here
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      user {
        _id
        username
        email
        savedBooks {
          // Include the fields you need here
        }
      }
    }
  }
`;





