const { gql } = require('apollo-server');

const contactFormTypeDefs = gql `
    type ContactForm {
        id: String!
        contactFormName: String!
        contactFormOrganization: String!
        contactFormPhone: Int!
        contactFormEmail: String!
        contactFormPost: String!
        contactFormDate: String!
        contactFormReviewed: String!
    }

    input ContactFormInput {
        contactFormName: String!
        contactFormOrganization: String!
        contactFormPhone: Int!
        contactFormEmail: String!
        contactFormPost: String!
    }

    extend type Query {
        contactFormsByReviewed(contactFormReviewed: String!): [ContactForm]
        allContactForms: [ContactForm]
    }

    extend type Mutation {
        createContactForm(contactForm: ContactFormInput!): ContactForm
    }
`;

module.exports = contactFormTypeDefs;