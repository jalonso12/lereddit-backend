import path from 'path';
import { Post } from './entities/Post';
import dotenv from 'dotenv';
import { __prod__ } from './constants';
import { MikroORM } from '@mikro-orm/core';

dotenv.config({ path: './config.env' });

export default {
  migrations: {
    path: path.join(__dirname, './migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post],
  dbName: 'backend-ts-demo',
  password: process.env.DB_PASS,
  type: 'postgresql',
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
