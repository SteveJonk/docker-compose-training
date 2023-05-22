FROM node 
ARG PORT
ENV PORT $PORT
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE $PORT
cmd ["npm", "start"]