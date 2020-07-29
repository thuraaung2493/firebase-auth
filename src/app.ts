import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { createConnection, Connection } from "typeorm";
import * as firebase from "firebase/app";
import * as admin from "firebase-admin";
import firebaseConfig from "./config/firebase";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [__dirname + "/schema/resolvers/**/*.{ts,js}"],
    validate: false,
  });

  const server = new ApolloServer({ schema });

  server.listen().then(({ url }) => {
    console.log(url);
  });

  const connection: Connection = await createConnection();
  if (connection.isConnected) console.log("Database connection is ready.");

  firebase.initializeApp(firebaseConfig);

  admin.initializeApp({
    credential:admin.credential.applicationDefault()
  })
}

bootstrap();
