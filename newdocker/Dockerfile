# Use Node.js image
FROM node:slim

# Set working directory
WORKDIR /

# Copy the Node.js backend files
COPY ./node /

# Install dependencies
RUN npm install

# Expose the backend port
EXPOSE 8080

# Start the Node.js server
CMD ["node", "index.js"]
