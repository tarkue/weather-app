FROM nginx:latest

COPY dist /usr/share/nginx/html/dist
COPY app /usr/share/nginx/html
