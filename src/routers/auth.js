import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
<<<<<<< Updated upstream
import { registerUserSchema } from '../validation/auth.js';
import { registerUserController } from '../controllers/auth.js';
import { loginUserSchema} from '../validation/auth.js';
import { loginUserController } from '../controllers/auth.js';
import { logoutUserController } from '../controllers/auth.js';
import { refreshUserSessionController } from '../controllers/auth.js';
import { validateBody } from '../middlewares/validateBody.js';
import { requestResetEmailSchema } from '../validation/auth.js';
import { requestResetEmailController } from '../controllers/auth.js';
import { resetPasswordSchema } from '../validation/auth.js';
import { resetPasswordController } from '../controllers/auth.js';
=======
import { validationBody } from '../middlewares/validateBody.js';
import {
  loginUserSchema,
  registerUserSchema,
  requestResetEmailSchema,
  resetPasswordSchema,
} from '../validation/auth.js';
import {
  loginUserController,
  logoutUserController,
  refreshUserSessionController,
  registerUserController,
  requestResetEmailController,
  resetPasswordController,
} from '../controllers/auth.js';
>>>>>>> Stashed changes


const router = Router();

router.post(
  '/register',
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);

router.post(
    '/login',
    validateBody(loginUserSchema),
    ctrlWrapper(loginUserController),
  );

<<<<<<< Updated upstream
  router.post('/logout', ctrlWrapper(logoutUserController));

  router.post('/refresh', ctrlWrapper(refreshUserSessionController));

  router.post(
    '/send-reset-email',
    validateBody(requestResetEmailSchema),
    ctrlWrapper(requestResetEmailController),
  );

  router.post(
    '/reset-pwd',
    validateBody(resetPasswordSchema),
    ctrlWrapper(resetPasswordController),
  );

export default router;
=======
authRouter.post('/refresh', ctrlWrapper(refreshUserSessionController));

authRouter.post(
  '/send-reset-email',
  validationBody(requestResetEmailSchema),
  ctrlWrapper(requestResetEmailController),
);

authRouter.post(
  '/reset-pwd',
  validationBody(resetPasswordSchema),
  ctrlWrapper(resetPasswordController),
);
>>>>>>> Stashed changes
