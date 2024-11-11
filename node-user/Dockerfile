# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Run the application
CMD ["node", "server.js"]
