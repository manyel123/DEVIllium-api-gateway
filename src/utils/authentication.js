const { ApolloError } = require('apollo-server');
const serverConfig = require('../server');
const fetch = require('node-fetch');

// Authentication Context
const authentication = async ({ req }) => {
    const token = req.headers.authorization || '';

    // if there's nothing at authorization headers
    if (token == '')
        return { userIdToken: null }

    // token validation if there's any
    else {
        try {

            // Request options for auth microservice(verifyTokenView)
            let requestOptions = {
                method  : 'POST', 
                headers : { "Content-Type": "application/json" },
                body    : JSON.stringify({ token }), 
                redirect: 'follow'
            };

            // Auth microservice url for token verification 
            let response = await fetch(
                `${serverConfig.auth_api_url}/verifyToken/`,
                requestOptions)
            
            // Response validation - if validation failed
            if (response.status != 200) {
                console.log(response)
                throw new ApolloError(`SESION INACTIVA - ${401}` + response.status, 401)
            }

            // successful validation will retrieve token user id
            return { userIdToken: (await response.json()).UserId };
        }
        catch (error) {
            throw new ApolloError(`TOKEN VALIDATION ERROR: ${500}: ${error}`, 500);
        }
    }
}

module.exports = authentication;