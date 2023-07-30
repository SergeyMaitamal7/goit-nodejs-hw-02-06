const express = require('express');

const { validateBody, authenticate, upload } = require('../../middlewars');
const { schemas } = require('../../models/user');
const controllers = require('../../controllers/users');

const router = express.Router();
console.log(controllers.login)
// signup
router.post(
  '/register',
  validateBody(schemas.registerSchema),
  controllers.register
);

router.post('/verify',  validateBody(schemas.emailSchema), controllers.resendVerifyEmail);

router.get('/verify/:verificationToken', controllers.verifyEmail);
// signin

router.post(
  '/login',
  validateBody(schemas.loginSchema),
  controllers.login
);

router.post('/current', authenticate, controllers.getCurrent);

router.post('/logout', authenticate, controllers.logout);

router.patch('/avatars', authenticate, upload.single("avatar"), controllers.updateAvatar);
module.exports = router;
