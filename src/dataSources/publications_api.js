const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class PublicationsAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = serverConfig.services_api_url;
    }

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