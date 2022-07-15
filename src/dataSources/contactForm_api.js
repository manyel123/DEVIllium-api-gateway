const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class ContactFormAPI extends RESTDataSource {
    
    constructor() {
        super();

        // contact form microservice url
        this.baseURL = serverConfig.services_api_url;
    }

    // contact form microservice functions (Only JSON format allowed)
    async createContactForm(contactForm){
        contactForm = new Object(JSON.parse(JSON.stringify(contactForm)));
        return await this.post('/newContactForm', contactForm)
    }

    async contactFormsByReviewed(contactFormReviewed){
        return await this.get(`/contactForms/reviewed/${contactFormReviewed}`);
    }

    async allContactForms(){
        return await this.get('/contactForms/all');
    }
}

module.exports = ContactFormAPI;