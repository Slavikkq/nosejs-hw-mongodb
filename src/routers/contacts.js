import { Router } from 'express';
import {
  getAllContactsController,
  getContactByIdController,
  createContactController,
  patchContactController,
  deleteContactController,
} from '../controllers/contacts.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createContactSchema, updateContactSchema } from '../validation/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { authenticate } from '../middlewares/authenticate.js';
<<<<<<< Updated upstream
import { upload } from '../middlewares/multer.js';
=======
import { upload } from '../middlewares/muilter.js';
>>>>>>> Stashed changes

const router = Router();

router.use(authenticate);

router.get('/', ctrlWrapper(getAllContactsController));

router.get('/:contactId', ctrlWrapper(getContactByIdController));

router.post(
  '/',
  upload.single('photo'),
<<<<<<< Updated upstream
  validateBody(createContactSchema),
  ctrlWrapper(createContactController));

router.patch(
   '/:contactId',
   upload.single('photo'),
   validateBody(updateContactSchema),
   ctrlWrapper(patchContactController));
=======
  validationBody(contactCreateValidationSchema),
  ctrlWrapper(createContactController),
);

contactsRouter.patch(
  '/:contactsId',
  upload.single('photo'),
  validationBody(contactUpdateValidationSchema),
  ctrlWrapper(patchContactController),
);
>>>>>>> Stashed changes

router.delete('/:contactId', ctrlWrapper(deleteContactController));

export default router;