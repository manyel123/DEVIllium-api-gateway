// process publications requests logic
const publicationsResolver = {

    // functions must have the same name as they are in typeDefs
    Query: {

        // listing publications by username
        devPublicationsByUsername: async(_, {username}, { dataSources }) => {
            return dataSources.publicationsAPI.devPublicationsByUsername(username)
        },

        // listing all publications
        allDevPublications: async(_, {}, { dataSources }) => {
            return dataSources.publicationsAPI.allDevPublications()
        }
    },
    Mutation: {

        // creating a publication
        createDevPublication: async(_, {devPublication}, { dataSources, userIdToken }) => {
            usernameToken =  (await dataSources.authAPI.getUser(userIdToken)).username
            if (devPublication.username == usernameToken)              
                return dataSources.publicationsAPI.createDevPublication(devPublication)
            else
                return null
        }
    }
};

module.exports = publicationsResolver;