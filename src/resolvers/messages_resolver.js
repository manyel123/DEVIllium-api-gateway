// process messages requests logic
const messagesResolver = {

    // functions must have the same name as they are in typeDefs
    Query: {

        // listing received messages by username
        receivedMessagesByUsername: async(_, {username}, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username == usernameToken)
                return dataSources.messagesAPI.receivedMessagesByUsername(username)
            else 
                return null
        },

        // listing sent messages by username
        sentMessagesByUsername: async(_, {username}, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username == usernameToken)
                return dataSources.messagesAPI.sentMessagesByUsername(username)
            else 
                return null
        }
    },
    Mutation: {

        // creating a new message
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