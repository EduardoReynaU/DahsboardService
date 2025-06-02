const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');
// env
const dotenv = require('dotenv');
dotenv.config({ path: path.join(__dirname, '../.env') });

URL_GRPC = process.env.URL_GRPC || 'localhost:50052';


const PROTO_PATH = path.join(__dirname, '../infrastructure/protos', 'notification.proto');

const packageDef = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});

const grpcObj = grpc.loadPackageDefinition(packageDef);
const notificationPackage = grpcObj.notification;

const client = new notificationPackage.NotificationService(
  URL_GRPC,
  grpc.credentials.createInsecure()
);

function enviarCorreoConvocatoria(payload) {
  return new Promise((resolve, reject) => {
    client.EnviarCorreoConvocatoria(payload, (err, response) => {
      if (err) reject(err);
      else resolve(response);
    });
  });
}

module.exports = { enviarCorreoConvocatoria };
