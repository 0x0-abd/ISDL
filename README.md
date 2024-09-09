# Grocery and Fruit Shop

>   An online website to order grocery products.

A fully functional e-commerce website for grocery shopping. Users can browse items, add to cart, place orders, and track their order status. Admins have the ability to manage items and confirm orders

- [Link for demo](https://grocery-store-kohl.vercel.app/)


## Features

### User Features:
- **User Authentication:** 
  - Users can sign up and log in to their accounts.
- **View Items:** 
  - Browse through a list of available grocery items, each displayed with a corresponding image.
- **Category Filtering:** 
  - Easily filter items by category for faster navigation.
- **Add to Cart:** 
  - Select items and add them to the shopping cart.
- **Place Orders:** 
  - Finalize purchases by placing an order with the items in the cart.
- **View Orders:** 
  - Users can view their past and current orders.
- **Order Status:** 
  - Track the status of orders (e.g., pending, shipped, delivered).
- **Order Filtering:** 
  - Users can filter their orders by time (e.g., last week, last month) and status (e.g., delivered, pending).

### Admin Features:
- **View All Orders:** 
  - Admins can access and manage all orders placed on the platform.
- **Confirm Orders:** 
  - Approve and process orders for shipping.
- **Item Management:** 
  - Add new items, update existing items, or remove items from the inventory.
- **Stock Management:** 
  - Mark items as in stock or out of stock.
- **Item Images:** 
  - Every item has an associated image for better display and user interaction.
- **Intuitive UI for Item Updates:** 
  - Admins benefit from a user-friendly interface for managing inventory, making it easy to add or edit items

## Introduction

* React Frontend: Utilizes React.js for building the frontend user interface.
* Bootstrap Styling: Styled with Bootstrap for a responsive and sleek design.
* Node.js Backend: Powered by Node.js for handling server-side logic and API requests.
* MongoDB Database: Utilizes MongoDB for storing product information and user orders.
* Authentication: Support

## Tech Stack
- **Frontend:** React, TypeScript, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Deployment:** Vercel
- **Image Hosting:** Cloudinary

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
