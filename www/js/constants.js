/**
 * Created by amila on 1/8/16.
 */
angular.module('starter')

  .constant('AUTH_EVENTS', {
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
  })

  .constant('USER_ROLES', {
    admin: 'admin_role',
    public: 'public_role'
  });
  //.constant('SERVER_URL_Auth', 'http://192.168.1.3:3000/auth/login');
