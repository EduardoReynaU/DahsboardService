# Imagen base oficial de Node.js LTS
FROM node:18

# Establecer directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instalar dependencias de producción
RUN npm install --production

# Copiar el resto del código de la aplicación
COPY . .

# Exponer el puerto definido en el servidor (ajusta si es necesario)
EXPOSE 3000

# Iniciar la aplicación
CMD ["npm", "start"]
