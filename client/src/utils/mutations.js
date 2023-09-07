import { gql } from '@apollo/client';

export const SAVE_BOOK = gql`
    mutation addNewBook($input: newBook) {
        saveBook(input: $input) {
            _id
            username
        }
    }
`

export const ADD_USER = gql`
    mutation addNewUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
        }
        }
    }
`

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
        token
        user {
            _id
            username
            }
        }
    }
`

export const REMOVE_BOOK = gql`  
mutation removeSavedBook($bookId: String!) {
    removeBook(bookId: $bookId) {
    _id
    username
    }
}
`