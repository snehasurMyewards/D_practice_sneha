# Use Node.js image for building React app
FROM node:slim

# Set working directory
WORKDIR /src

# Copy package.json and package-lock.json first for caching
COPY ./package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the React project files
COPY ./ ./

# Expose port for the React app
EXPOSE 3000

# Start Nginx server
CMD ["npm", "start"]