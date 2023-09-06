const { User, Book } = require('../models/');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            // Implement your logic to fetch the authenticated user
            // You can use the context token to verify authentication
        },
        books: async () => {
            return await Book.find({});
        },
        book: async (parent, args) => {
            return await Book.findById(args.id)
        },
        users: async () => {
            return await User.find({});
        },
        user: async (parent, args) => {
            return await User.findById(args.id)
        }
    },
    Mutation: {
        login: async (parent, args) => {
            // Implement your login logic here
          },
        addUser: async (parent, args) => {
            // dont forget to destructure args
        },
        saveBook: async (parent, args) => {
            // dont forget to destructure args
        },
        removeBook: async (parent, args, context) => {
            // Implement logic to remove a book from the user's savedBooks array
          },
      
    },
    User: {
        // Define how to resolve fields in the User type
        // Example: bookCount and savedBooks
      },
      Book: {
        // Define how to resolve fields in the Book type
      },
      Auth: {
        // Define how to resolve fields in the Auth type
      },
}

module.exports = resolvers;