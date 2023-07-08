FROM node:19.8.1 AS cookbook
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=cookbook /app/dist/livro-receitas /usr/share/nginx/html/
EXPOSE 80





