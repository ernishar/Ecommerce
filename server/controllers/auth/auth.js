const passport = require('passport');
const jwt = require('jsonwebtoken');

exports.googleAuth = passport.authenticate('google', {
  scope: ['profile', 'email'],
});

exports.googleAuthCallback = passport.authenticate('google', {
  failureRedirect: '/login',
  session: false,
});

// Handle Google authentication callback
exports.googleAuthCallbackHandler = () => {
  
};
