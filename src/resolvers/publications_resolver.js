const publicationsResolver = {
    Query: {
        devPublicationsByUsername: async(_, {username}, { dataSources }) => {
            return dataSources.publicationsAPI.devPublicationsByUsername(username)
        },
        allDevPublications: async(_, {}, { dataSources }) => {
            return dataSources.publicationsAPI.allDevPublications()
        }
    },
    Mutation: {
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