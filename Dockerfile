# apps/frontend/Dockerfile
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY apps/frontend/package.json apps/frontend/package-lock.json /app/
RUN npm install

# Copy the rest of the application
COPY apps/frontend /app/

# Build the Next.js application
RUN npm run build

# Expose the port Next.js will run on
EXPOSE 3000

# Start the Next.js server
CMD ["npm", "run", "start"]
