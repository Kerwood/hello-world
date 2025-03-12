FROM node:22-alpine

# Create app directory
RUN mkdir -p /app
COPY . /app/
WORKDIR /app
RUN npm install

CMD ["node", "server.js"]

