const { gql } = require('apollo-server');

const publicationsTypeDefs = gql `
    type DevPublications {
        id: String!
        username: String!
        devPost: String!
        devPostDate: String!
    }

    input DevPublicationsInput {
        username: String!
        devPost: String!
    }

    extend type Query {
        devPublicationsByUsername(username: String!): [DevPublications]
        allDevPublications: [DevPublications]
    }

    extend type Mutation {
        createDevPublication(devPublication: DevPublicationsInput!): DevPublications
    }
`;

module.exports = publicationsTypeDefs;