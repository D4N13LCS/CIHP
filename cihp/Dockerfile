FROM node:20.11.1
WORKDIR /meu-react
COPY package-lock.json package.json ./ 
RUN npm install
COPY . . 
EXPOSE 3000 
CMD ["npm", "start"]

