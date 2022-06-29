const messagesResolver = {
    Query: {
        receivedMessagesByUsername: async(_, {username}, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username == usernameToken)
                return dataSources.messagesAPI.receivedMessagesByUsername(username)
            else 
                return null
        },
        sentMessagesByUsername: async(_, {username}, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username == usernameToken)
                return dataSources.messagesAPI.sentMessagesByUsername(username)
            else 
                return null
        }
    },
    Mutation: {
        createMessage: async(_, {message}, { dataSources, userIdToken }) => { 
            usernameToken =  (await dataSources.authAPI.getUser(userIdToken)).username
            if (message.usernameOrigin == usernameToken)
                return await dataSources.messagesAPI.createMessage(message)
            else
                return null
        }
    }
};

module.exports = messagesResolver;