# Getting Started with Neu.ro Test App

## Available Scripts

In the project directory, you can run:

### 1. Install node modules.

`npm install`

### 2. Configure environment variables

`cp .env.sample .env`

Copy .env.sample file to .env and configure `REACT_APP_BASE_API_URL` and `REACT_APP_USER_TOKEN`

`REACT_APP_BASE_API_URL` is Root API endpoint for the dev environment of Neu.ro\
`REACT_APP_USER_TOKEN` is Bearer token for user

### 3. Start in dev mode

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### 4. CORS proxy

Here CORS is temporarily resolved by using Heroku proxy server.\
This should be resolved by other way in real-world project.

Most of the cases the CORS configuration should be done on backend side.\
Discusson with backend API dev will be needed for proper configuration.