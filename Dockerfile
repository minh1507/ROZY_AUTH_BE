FROM node:18.13.0
WORKDIR /home/backends/ahd
COPY package*.json ./
RUN npm install
COPY .. .
RUN npm run build
EXPOSE 4600
CMD [ "npm", "run", "start:staging" ]
