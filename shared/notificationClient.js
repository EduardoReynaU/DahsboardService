const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

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
  'localhost:50052',
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
