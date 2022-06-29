const authTypeDefs = require('./auth_type_defs');
const contactFormTypeDefs = require('./contactForm_type_defs');
const messagesTypeDefs = require('./messages_type_defs');
const publicationsTypeDefs = require('./publications_type_defs');

const schemasArrays = [authTypeDefs, contactFormTypeDefs, messagesTypeDefs, publicationsTypeDefs];

module.exports = schemasArrays;