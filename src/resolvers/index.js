const authResolver = require('./auth_resolver');
const contactFormResolver = require('./contactForm_resolver');
const messagesResolver = require('./messages_resolver');
const publicationsResolver = require('./publications_resolver');

const loadsh = require('lodash');

const resolvers = loadsh.merge(authResolver, contactFormResolver, messagesResolver, publicationsResolver);

module.exports = resolvers;