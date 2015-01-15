module.exports = function(ApiUser) {

  // This just adds a little logic so that the user instance creates an accessToken after creation. That way,
  // registering automatically signs you in.
  ApiUser.afterCreate = function (next) {
    var user = this;
    user.createAccessToken(null, function (err, token) {
      user.accessToken = token;
      next();
    });
  };

};
