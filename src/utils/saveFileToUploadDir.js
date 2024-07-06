import path from 'node:path';
import fs from 'node:fs/promises';
<<<<<<< Updated upstream
import { env } from './env.js';
import {
  BACK_DOMAIN,
  TEMP_UPLOAD_DIR,
  UPLOAD_DIR,
} from '../constants/index.js';
=======

import { TEMP_UPLOAD_DIR, UPLOAD_DIR } from '../constants/constants.js';
import { env } from './env.js';
>>>>>>> Stashed changes

export const saveFileToUploadDir = async (file) => {
  await fs.rename(
    path.join(TEMP_UPLOAD_DIR, file.filename),
    path.join(UPLOAD_DIR, file.filename),
  );

<<<<<<< Updated upstream
  return `${env(BACK_DOMAIN)}/uploads/${file.filename}`;
=======
  return `${env('APP_DOMAIN')}uploads/${file.filename}`;
>>>>>>> Stashed changes
};