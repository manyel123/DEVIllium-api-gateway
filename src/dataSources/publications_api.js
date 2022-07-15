const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class PublicationsAPI extends RESTDataSource {

    constructor() {
        super();

        // publication microservice url
        this.baseURL = serverConfig.services_api_url;
    }

    // publication microservice functions (Only JSON format allowed)
    async createDevPublication(devPublication){
        devPublication = new Object(JSON.parse(JSON.stringify(devPublication)));
        return await this.post('/newDevPublication', devPublication)
    }

    async devPublicationsByUsername(username){
        return await this.get(`/devPublications/${username}`);
    }

    async allDevPublications(){
        return await this.get('/devPublications/all');
    }
}

module.exports = PublicationsAPI;