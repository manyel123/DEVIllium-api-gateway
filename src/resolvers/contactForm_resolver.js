const contactFormResolver = {
    Query: {
        contactFormsByReviewed: async(_, {contactFormReviewed}, { dataSources }) => {
            return dataSources.contactFormAPI.contactFormsByReviewed(contactFormReviewed)
        },
        allContactForms: async(_, {}, { dataSources }) => {
            return dataSources.contactFormAPI.allContactForms()
        }
    },
    Mutation: {
        createContactForm: async(_, { contactForm }, { dataSources }) => {
            return await dataSources.contactFormAPI.createContactForm(contactForm);
        }
    }
};

module.exports = contactFormResolver;