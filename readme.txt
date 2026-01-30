CHRONOS - WATCH ECOMMERCE WEBSITE
Chronos is a full-featured ecommerce website dedicated to luxury and modern watches, built with the MERN stack (MongoDB, Express, React, Node.js). It allows users to explore products, filter by categories or brands, add items to cart or wishlist, create an account, and make purchases. The project includes a complete admin panel for product management and is designed to be fully responsive across desktops, tablets, and mobile phones.

FEATURES OF THE WEBSITE
User Features
Homepage: A welcoming landing page with featured products, new arrivals, and bestsellers.

Live Search: Instant search functionality to look up watches by name, category, or brand as you type, with results appearing in a real-time dropdown.

Product Pages: Detailed pages for each watch with specifications, features, and related product recommendations.

Advanced Filtering: System to refine results based on price range, category, and brand.

Wishlist & Cart: Full-featured wishlist to save favorite watches and a shopping cart with quantity updates.

Secure Authentication: Robust user and admin login/signup system using JSON Web Tokens (JWT) for security.

User Account: A personal account page to manage profile details, view saved addresses, and check order history.

Contact Page: A form to send queries, view contact details, rate service quality, and see a location map.

Responsive Design: A modern layout with a collapsible hamburger menu that adapts seamlessly to all device sizes.

Admin Features
Secure Admin Panel: A dedicated and protected route (/admin) accessible only to administrators.

Product Management: Full CRUD (Create, Read, Update, Delete) capabilities for watches.

Add New Watches: An easy-to-use form to add new watches to the catalog.

Control Visibility: Admins can show or hide specific watches from regular users.

Delete Products: Securely delete watches from the database with a toast notification for confirmation.

INSTALLATION AND SETUP INSTRUCTIONS
This project can be run locally for development and testing. The following guide covers setup for both macOS and Windows.

Requirements
Before you begin, you need to have GIT, NODE.JS, NPM, and MONGODB installed on your machine.

FOR MACOS USERS:

Open the TERMINAL app.

The easiest way to install the requirements is using Homebrew. If you don't have it, install it first.

Install Node.js (which includes npm) and Git:
brew install node
brew install git

Install MongoDB Community Edition:
brew tap mongodb/brew
brew install mongodb-community

FOR WINDOWS USERS:

Open COMMAND PROMPT or POWERSHELL.

Download and run the official installers from the following websites:

Node.js (LTS version recommended)

Git for Windows

MongoDB Community Server

Steps to Install Locally
Follow these steps to get both the backend server and the frontend application running.

Step 1: Get the Project Files
You can either clone the repository using Git or download and unzip the project folder.

* OPTION A (CLONE WITH GIT):
    `git clone https://github.com/your-username/chronos-ecommerce.git`
    `cd chronos-ecommerce`

* OPTION B (UNZIP THE FILE):
    1. Download and extract the .zip file.
    2. Open your terminal or command prompt and navigate into the extracted folder:
       `cd path/to/chronos-ecommerce`
Step 2: Install Backend Dependencies
First, navigate to the server directory.

`cd server`

Next, install all the required packages. The project comes without the `node_modules` folder to save space. This next command reads the `package.json` file and downloads all the necessary libraries into a new `node_modules` folder.

`npm install`
'npm install nanoid@3'
Step 3: Create the Backend Environment File
Inside the server folder, create a new file named .env and add the following configuration. This file stores your secret keys and database connection string.

`MONGO_URI=mongodb://localhost:27017/chronos`
`JWT_SECRET=thisisav3rysup3rs3cr3tkeyf0ry0ur4ppl1c4t10n`
`PORT=5000`
Step 4: Seed the Database (Optional but Recommended)
This script will populate your database with sample watches and user accounts, including the default admin. Make sure you are in the server directory in your terminal before running these commands.

### OPTION A: USING NPM SCRIPTS (RECOMMENDED)
1. First, add these helper scripts to your `server/package.json` file:
    `"scripts": {`
    `"start": "node server.js",`
    `"seed:import": "node seeder.js",`
    `"seed:destroy": "node seeder.js -d"`
    `},`

2. Then, run the desired command:
    `# To import all data`
    `npm run seed:import`

    `# To delete all data`
    `npm run seed:destroy`

### OPTION B: RUNNING THE SEEDER MANUALLY
You can execute the seeder script directly with Node.js. The script checks for a `-d` flag to determine whether to import or destroy data.

* To import all data (run with no arguments):
    `node seeder.js`

* To delete all data (run with the -d flag):
    `node seeder.js -d`
Step 5: Start the Backend Server
From the server directory, run:

`npm start`

The backend will now be running on `http://localhost:5000`. Keep this terminal open.
Step 6: Install Frontend Dependencies
Open a NEW terminal window or tab and navigate to the client directory.

`cd client`

Just like with the backend, you need to install the frontend's dependencies to create its `node_modules` folder.

`npm install`
Step 7: Start the Frontend Application
Finally, from the client directory, start the React development server.

`npm start`

The website will open automatically in your browser at `http://localhost:3000`. You can now browse and test the full application.
TEST ACCOUNT INFORMATION
To test the website's features, including the admin panel, you can use the following pre-seeded login credentials:

Name: Admin User

Email: admin@example.com

Password: password123

This account has admin privileges and can be used to add, edit, hide, and delete watches via the /admin page.

PROJECT FOLDER STRUCTURE
The Chronos project is structured as a monorepo with separate client and server directories for the frontend and backend.

chronos-mern/
|-- client/ (React frontend)

|   |-- public/

|   |-- src/

|   |   |-- components/ (Header.jsx, Footer.jsx, AdminRoute.jsx)

|   |   |-- context/ (AuthContext.js)

|   |   |-- pages/ (Home.jsx, BookDetail.jsx, AdminPanel.jsx)

|   |   |-- App.js

|-- server/ (Node.js backend)

|   |-- config/

|   |-- controllers/ (authController.js, bookController.js, adminController.js)

|   |-- middleware/ (authMiddleware.js)

|   |-- models/ (User.js, Book.js)

|   |-- routes/ (authRoutes.js, bookRoutes.js, adminRoutes.js)

|   |-- seeder.js (Database seeder script)

|   |-- server.js



CONTACT DETAILS
If you need any help running or testing the Chronos project, or if you'd like to report bugs or suggest improvements, feel free to reach out to the developer team at contact@chronos.com.