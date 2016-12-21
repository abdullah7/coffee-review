'use strict';

module.exports = function(Review) {
    Review.beforeRemote('create', function (context, user, next) {
        context.args.data.date = new Date();
        context.args.data.publisherId = context.req.accessToken.userId;
        next();
    });
};
