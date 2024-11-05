# Online Bidding Backend - Local Setup

This guide provides instructions to set up the local environment for the online bidding backend.

---

## 1. Setup Local Database on MySQL

1. **Create a Local Database**  
   - Set up a local MySQL database. Database details (e.g., name, username, password) are specified in the `.env` file in the project root directory.

2. **Run MySQL Locally**  
   - Ensure that MySQL is running locally on your machine.

3. **Import Database Schema and Data**  
   - Navigate to the `database` folder in the project.
   - Use the provided database dump file to create tables and populate the database with initial data.

4. **Test Users**  
   - The database comes preloaded with several test users in the `users` table.
   - **Password for all test users**: `Test@1234`

---

## 2. Project Setup

1. **Node Version**  
   - Ensure Node.js version `18.20.0` is installed. You can use [nvm](https://github.com/nvm-sh/nvm) to manage and switch Node versions:
     ```bash
     nvm install 18.20.0
     nvm use 18.20.0
     ```

2. **Install Dependencies**  
   - Run the following command to install all necessary packages:
     ```bash
     npm install
     ```

3. **Start the Project**  
   - To start the project locally, use the following command:
     ```bash
     npm run local
     ```

---

## 3. Postman Collections

1. **Postman Collection**  
   - The Postman collection (in JSON format) is available in the `postman_collection` folder.

2. **Postman Environment**  
   - A Postman environment (in JSON format) is also provided in the `postman_collection` folder for easy configuration.

---

## 4. Environment Variables

- The `.env` file, which contains necessary environment variables, is included in the repository. Ensure this file is configured correctly with your local settings before running the application.

---




