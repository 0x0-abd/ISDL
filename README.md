# Grocery and Fruit Shop

>   An online website to order grocery products.

This is a full-stack grocery website created using React, Bootstrap, Node.js, and MongoDB. Customers can browse through products via category and order them from the cart. Admins can confirm orders and add new products. Visit https://isdl-front-end.vercel.app/ for a live working demo.

## Introduction

* React Frontend: Utilizes React.js for building the frontend user interface.
* Bootstrap Styling: Styled with Bootstrap for a responsive and sleek design.
* Node.js Backend: Powered by Node.js for handling server-side logic and API requests.
* MongoDB Database: Utilizes MongoDB for storing product information and user orders.
* Authentication: Supports authentication for customers and admins.

## Installation

Clone the repository
```
git clone https://github.com/your-username/grocery-website.git
```

Navigate into the project directory
```
cd ISDL
```

Install client and server dependencies
```
cd client
npm install
cd ..
npm install
```

In the terminal
- Create a .env file in the root of your server directory.
- Supply the following credentials

```
MONGO_URI = 
PORT = 5000

```

Please follow [This tutorial](https://dev.to/dalalrohit/how-to-connect-to-mongodb-atlas-using-node-js-k9i) to create your mongoDB connection url, which you'll use as your MONGO_URI.

To run both server and client concurrently
```
$ cd client
$ npm run both
```
