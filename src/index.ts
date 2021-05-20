import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';
import { Post } from './entities/Post';
import mikroConfig from './mikro-orm.config';

const main = async () => {
  const orm = await MikroORM.init(mikroConfig);

  await orm.getMigrator().up();

  // CREATE
  // const post = orm.em.create(Post, { title: 'My first POST 02' });
  // await orm.em.persistAndFlush(post);

  // GET ALL
  const posts = await orm.em.find(Post, {});
  console.log(posts);
};

main().catch((err) => {
  console.log(err);
});
