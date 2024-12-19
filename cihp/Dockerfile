FROM node:20.11.1
COPY package-lock.json package.json 
WORKDIR /meu-react 
EXPOSE 3000 
RUN npm install
COPY . . 
CMD ["npm", "start"]

