const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class ContactFormAPI extends RESTDataSource {
    
    constructor() {
        super();
        this.baseURL = serverConfig.services_api_url;
    }

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