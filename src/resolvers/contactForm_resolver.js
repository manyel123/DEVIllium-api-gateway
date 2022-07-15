// process contact form requests logic
const contactFormResolver = {

    // functions must have the same name as they are in typeDefs
    Query: {

        // listing contact forms by reviewed or not
        contactFormsByReviewed: async(_, {contactFormReviewed}, { dataSources }) => {
            return dataSources.contactFormAPI.contactFormsByReviewed(contactFormReviewed)
        },

        // listing all contact forms
        allContactForms: async(_, {}, { dataSources }) => {
            return dataSources.contactFormAPI.allContactForms()
        }
    },
    Mutation: {

        // creating a contact form
        createContactForm: async(_, { contactForm }, { dataSources }) => {
            return await dataSources.contactFormAPI.createContactForm(contactForm);
        }
    }
};

module.exports = contactFormResolver;