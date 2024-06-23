'use strict';

/**
 * napravleniya service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::napravleniya.napravleniya');
