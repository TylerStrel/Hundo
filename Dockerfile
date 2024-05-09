# Use the official Nginx image from the Docker Hub
FROM nginx:alpine

# Remove the default Nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf

# Create a new default.conf using echo or printf
#RUN printf "server {\n\tlisten 80;\n\tlocation / {\n\t\troot /usr/share/nginx/html;\n\t\tindex index.html index.htm;\n\t\ttry_files \$uri \$uri/ =404;\n\t}\n\terror_page 500 502 503 504 /50x.html;\n\tlocation = /50x.html {\n\t\troot /usr/share/nginx/html;\n\t}\n}" > /etc/nginx/conf.d/default.conf

# Copy the new default configuration file
COPY nginx.conf /etc/nginx/


# Copy the entire project directory (including subdirectories) to the Nginx server
COPY . /usr/share/nginx/html

# Expose port 80 to the outside once the container has launched
EXPOSE 80

# Start Nginx and keep it running in the foreground
CMD ["nginx", "-g", "daemon off;"]
