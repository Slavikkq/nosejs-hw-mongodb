import { initMongoConnection } from './db/initMongoConnection.js';
import { setupServer } from './server.js';
<<<<<<< Updated upstream
import { createDirIfNotExists } from './utils/createDirIfNotExists.js';
import { TEMP_UPLOAD_DIR, UPLOAD_DIR } from './constants/index.js';

const bootstrap = async () => {
  try {
    await initMongoConnection();
    await createDirIfNotExists(TEMP_UPLOAD_DIR);
    await createDirIfNotExists(UPLOAD_DIR);
    setupServer();
  } catch (error) {
    console.error('Failed to initialize MongoDB connection:', error);
    process.exit(1);
  }
=======
import { initMongoConnection } from './db/initMongoDB.js';
import { createDirIfNotExists } from './utils/createDirIfNotExists.js';
import { TEMP_UPLOAD_DIR, UPLOAD_DIR } from './constants/constants.js';

const startServer = async () => {
  await initMongoConnection();
  await createDirIfNotExists(TEMP_UPLOAD_DIR);
  await createDirIfNotExists(UPLOAD_DIR);
  setupServer();
>>>>>>> Stashed changes
};

bootstrap();