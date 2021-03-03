import 'reflect-metadata'

import bodyParser from 'body-parser'
import express from 'express'
import { Container } from 'inversify'
import { InversifyExpressServer } from 'inversify-express-utils'

import IUserReadOnlyRepository from './application/repositories/IUserReadOnlyRepository'
import AuthServiceLocator from './configuration/usecases/AuthServiceLocator'
import { TYPES } from './constants/types'
import UserRepository from './infrastructure/UserRepository'

const container = new Container();

container
  .bind<AuthServiceLocator>(TYPES.AuthServiceLocator)
  .to(AuthServiceLocator);

container
  .bind<IUserReadOnlyRepository>(TYPES.IUserReadOnlyRepository)
  .to(UserRepository);

const server = new InversifyExpressServer(container);
server.setConfig((application: express.Application) => {
  application.use(bodyParser.urlencoded({ extended: true }));
  application.use(bodyParser.json());
});

const app = server.build();
app.listen(5000, () =>
  console.log(`server started at http://localhost:${5000}`)
);
