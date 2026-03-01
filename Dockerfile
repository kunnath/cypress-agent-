FROM node:18

WORKDIR /e2e

# Install Cypress dependencies
RUN apt-get update && apt-get install -y \
    xvfb \
    libgtk-3-0 \
    libgbm1 \
    libnotify-dev \
    libnss3 \
    libxss1 \
    libasound2 \
    libxtst6 \
    xauth \
    && rm -rf /var/lib/apt/lists/*

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy rest of project
COPY . .

# Default command
CMD ["sh", "-c", "npm run test"]
