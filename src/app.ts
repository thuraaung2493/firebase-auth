import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { createConnection, Connection } from "typeorm";
import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD6Xw4-Jy6QeCb2d_kfRstEHJFbNa6ijJ4",
  authDomain: "auth-5096a.firebaseapp.com",
  databaseURL: "https://auth-5096a.firebaseio.com",
  projectId: "auth-5096a",
  storageBucket: "auth-5096a.appspot.com",
  messagingSenderId: "717541276022",
  appId: "1:717541276022:web:6efaa346c65f4174afa257",
  measurementId: "G-9LHXGQDTPR",
};

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
}

bootstrap();
