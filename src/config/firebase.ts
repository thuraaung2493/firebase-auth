const apiKey: string =
  process.env.API_KEY || "AIzaSyD6Xw4-Jy6QeCb2d_kfRstEHJFbNa6ijJ4";
const authdomain: string =
  process.env.AUTH_DOMAIN || "auth-5096a.firebaseapp.com";
const databaseUrl: string =
  process.env.DATABASE_URL || "https://auth-5096a.firebaseio.com";
const projectId: string = process.env.PROJECT_ID || "auth-5096a";
const storageBucket: string =
  process.env.STORAGE_BUCKET || "auth-5096a.appspot.com";
const messagingSenderId: string =
  process.env.MESSAGING_SENDER_ID || "717541276022";
const appId: string =
  process.env.APP_ID || "1:717541276022:web:6efaa346c65f4174afa257";
const measurementId: string = process.env.MEASUREMENT_ID || "G-9LHXGQDTPR";

export default {
  apiKey,
  authdomain,
  databaseUrl,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
};
