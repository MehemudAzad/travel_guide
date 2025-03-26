import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  NODE_ENV : process.env.NODE_ENV,
  port: process.env.PORT,
  bcrypt_salt_rounds : process.env.BCRYPT_SALT_ROUNDS,
  database_url: process.env.DATABASE_URL,
  jwt_access_secret: process.env.JWT_ACCESS_TOKEN,
  jwt_refresh_secret: process.env.JWT_REFRESH_TOKEN,
  jwt_access_expires_in : process.env.JWT_ACCESS_EXPIRES_IN,
};
