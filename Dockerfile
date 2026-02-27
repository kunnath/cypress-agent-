FROM cypress/base:12

# create working directory
WORKDIR /e2e

# copy package files first for caching
COPY package.json package-lock.json* ./

# install dependencies
RUN npm ci

# copy rest of project
COPY . .

# default command to run tests and generate report
CMD ["sh", "-c", "npm run test"]
