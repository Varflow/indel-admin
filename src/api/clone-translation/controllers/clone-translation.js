"use strict";

module.exports = {
  async cloneAll(ctx) {
    const { source, target } = ctx.request.body || {};

    if (!source || !target) {
      return ctx.badRequest(
        "Нужно передать { source, target } — коды локалей в Strapi (например, 'en' и 'uk-UA')"
      );
    }

    try {
      const summary = await strapi
        .service("api::clone-translation.clone-translation")
        .cloneAll({ sourceLocale: source, targetLocale: target });

      return summary;
    } catch (err) {
      strapi.log.error(err);
      return ctx.internalServerError(err.message);
    }
  },
};
