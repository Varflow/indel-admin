'use strict';

/**
 * napravleniya router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::napravleniya.napravleniya');
