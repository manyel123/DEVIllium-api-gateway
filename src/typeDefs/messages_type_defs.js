const { gql } = require('apollo-server');

const messagesTypeDefs = gql `
    type Message {
        id: String!
        usernameOrigin: String!
        usernameDestiny: String!
        post: String!
        sentDate: String!
    }

    input MessageInput {
        usernameOrigin: String!
        usernameDestiny: String!
        post: String!
    }
    
    extend type Query {
        receivedMessagesByUsername(username: String!): [Message]
        sentMessagesByUsername(username: String!): [Message]
    }

    extend type Mutation {
        createMessage(message: MessageInput!): Message
    }
`;

module.exports = messagesTypeDefs;