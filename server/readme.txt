
CHRONOS - WATCH ECOMMERCE WEBSITE

Chronos is a full-featured ecommerce website dedicated to luxury and modern watches. 
It allows users to explore products, filter by categories or brands, add items to cart or wishlist, create an account, and make purchases. This project uses the MERN stack (MongoDB, Express, React, and Node.js) and is designed to be responsive across devices, including desktops, tablets, and mobile phones.

FEATURES OF THE WEBSITE
- Homepage with featured products, new arrivals, and bestsellers.
- Individual product detail pages with specifications, features, and related products.
- Advanced search functionality to look up watches by name, category, or brand.
- Filter system to refine results based on price range, category, and brand.
- Wishlist functionality to save favorite products.
- Cart system with item quantity updates and checkout section.
- Secure user login and signup system using JWT tokens.
- User account page to manage profile details, saved addresses, and order history.
- Contact page to send queries, view contact details, rate service quality, and view the map.
- Fully responsive header, navigation, and layout that adapts to mobile devices using a collapsible hamburger menu.

INSTALLATION AND SETUP INSTRUCTIONS
This project can be run locally for development and testing purposes. Below are the instructions to install and run both the client and the backend server.

REQUIREMENTS:
- Node.js and npm should be installed on your machine.
- MongoDB installed locally or you can use a MongoDB Atlas cloud database.
- A modern web browser like Chrome or Firefox.

STEPS TO INSTALL LOCALLY:

Step 1: Clone the project repository
Open your terminal or command prompt and run:
git clone https://github.com/chaitanya/chronos-watchstore.git

Step 2: Navigate to the project directory
cd chronos-watchstore

Step 3: Install backend dependencies
cd server
npm install

Step 4: Create an environment variable file
Inside the 'server' folder, create a file named .env and paste the following configuration:
PORT=5000
MONGODB_URI=mongodb://localhost:27017/chronos
JWT_SECRET=your_jwt_secret_key

Step 5: Start the backend server
npm start
The backend will run on http://localhost:5000

Step 6: Install frontend dependencies
Open a new terminal or tab
cd client
npm install

Step 7: Start the frontend application
npm start
The website will run on http://localhost:3000

Now you should be able to browse and test the Chronos ecommerce website in your browser.


TEST ACCOUNT INFORMATION
To test the website's features without registering, you can use the following login credentials:
Email: testuser@chronos.com
Password: test1234

This account can be used to view your profile, add items to cart or wishlist, and access the account page.

PROJECT FOLDER STRUCTURE
chronos-watchstore/
|-- client/ (React frontend)
|   |-- public/
|   |-- src/
|   |-- components/ (Header, Footer, Product Cards, etc.)
|   |-- pages/ (Home, Product Detail, Wishlist, Cart, etc.)
|   |-- css/ (CSS files for styling the pages)
|   |-- App.js (Main React app structure)
|-- server/ (Node.js backend)
|   |-- controllers/ (Handles logic for authentication, products, etc.)
|   |-- models/ (Mongoose models for users, products, etc.)
|   |-- routes/ (API route handlers)
|   |-- server.js (Main server entry point)

CONTACT DETAILS
If you need any help running or testing the Chronos project, or if you'd like to report bugs or improvements, feel free to reach out to the developer team at:
Email: contact@chronos.com

Alternatively, you can use the contact form available on the Contact page of the website.

NOTES
- The database used by default is local MongoDB. If you're using MongoDB Atlas, update the MONGODB_URI accordingly.
- Make sure ports 3000 (frontend) and 5000 (backend) are free before starting the application.
- The JWT_SECRET in the .env file should be a long random string for production security.
