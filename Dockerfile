from node:18

workdir /app

copy package*.json ./

run npm install

copy . .

expose 3000

cmd ["node", "server.js"]
