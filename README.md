E-Commerce Backend Server

This is the backend server for an E-Commerce application built using Express.js and PostgreSQL. It provides endpoints to manage items, orders, users, and order details.

Getting Started

To get started with this project, follow these steps:

Install Dependencies: In the backend folder, run npm install to install all necessary dependencies.
Database Configuration: Ensure you have PostgreSQL installed and running. Create a new database and configure its credentials in the .env file.
Database Setup: Run the provided SQL script in your PostgreSQL environment to set up the necessary tables for items, orders, users, and order details.
Run the Server: Execute nodemon index.js to start the server. The server will run on port 3000 by default.
Available Endpoints

GET /items: Get all items available in the store.
POST /items: Add a new item to the store.
GET /orders: Get all orders placed by users.
POST /orders: Place a new order.
GET /users: Get all registered users.
POST /users/register: Register a new user.
POST /users/login: Log in an existing user.
Database Configuration

Make sure to configure your database settings properly in the .env file. Provide values for DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, and DB_DATABASE.

Database Schema

The database schema consists of the following tables:

items: Contains information about the items available for purchase.
orders: Stores information about orders placed by users.
users: Stores user information for registration and authentication.
order_details: Maps items to orders, tracking the quantity of each item ordered.
Suggestions for Database Management

Here is the Data to enter initially into the table to get things started
//
CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  image VARCHAR(255) NOT NULL,
  company VARCHAR(255) NOT NULL,
  item_name VARCHAR(255) NOT NULL,
  original_price INTEGER NOT NULL,
  discount_percentage INTEGER NOT NULL,
  rating_stars INTEGER NOT NULL,
  current_price INTEGER NOT NULL,
  category VARCHAR(255) NOT NULL
);

INSERT INTO items(image, company, item_name, original_price, discount_percentage, rating_stars, current_price, category) VALUES 
('images/1.jpg', 'Carlton London', 'Rhodium-Plated CZ Floral Studs', 1045, 42, 5, 606, 'Clothing'), 
('images/2.jpg', 'CUKOO', 'Women Padded Halter Neck Swimming Dress', 2599, 42, 4, 1507, 'Clothing'), 
('images/3.jpg', 'NUEVOSDAMAS', 'Women Red & White Printed A-Line Knee-Length Skirts', 1599, 69, 4, 495, 'Clothing'), 
('images/4.jpg', 'ADIDAS', 'Indian Cricket ODI Jersey', 999, 0, 5, 999, 'Clothing'), 
('images/5.jpg', 'Roadster', 'Pure Cotton T-shirt', 1399, 65, 4, 489, 'Clothing'), 
('images/6.jpg', 'Nike', 'Men ReactX Running Shoes', 14995, 0, 0, 14995, 'Clothing'), 
('images/7.jpg', 'The Indian Garage Co', 'Men Slim Fit Regular Shorts', 1599, 60, 4, 639, 'Clothing'), 
('images/8.jpg', 'Nivea', 'Men Fresh Deodrant 150ml', 285, 50, 4, 142, 'Clothing'), 
('images/9.jpg', 'Fjallraven', 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops', 110, 0, 4, 110, 'Clothing'), 
('images/10.jpg', 'Puma', 'Mens Casual Premium Slim Fit T-Shirts', 22, 0, 4, 22, 'Clothing'), 
('images/11.jpg', 'Adidas', 'Mens Cotton Jacket', 56, 0, 5, 56, 'Clothing'), 
('images/12.jpg', 'Adidas', 'Mens Casual Slim Fit', 16, 0, 2, 16, 'Clothing'), 
('images/13.jpg', 'Tanishq', 'John Hardy Women''s Legends Naga Gold & Silver Dragon Station Chain Bracelet', 695, 0, 5, 695, 'Clothing'), 
('images/14.jpg', 'Tanishq', 'Solid Gold Petite Micropave', 168, 0, 4, 168, 'Clothing'), 
('images/15.jpg', 'PC Jewellers', 'White Gold Plated Princess', 10, 0, 3, 10, 'Clothing'), 
('images/16.jpg', 'PC Jewellers', 'Pierced Owl Rose Gold Plated Stainless Steel Double', 11, 0, 2, 11, 'Clothing'), 
('images/17.jpg', 'SanDisk', 'WD 2TB Elements Portable External Hard Drive - USB 3.0', 64, 0, 3, 64, 'Electronics'), 
('images/18.jpg', 'SanDisk', 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s', 109, 0, 3, 109, 'Electronics'), 
('images/19.jpg', 'AMD', 'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5', 109, 0, 5, 109, 'Electronics'), 
('images/20.jpg', 'Sony', 'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive', 114, 0, 5, 114, 'Electronics'), 
('images/21.jpg', 'Acer', 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin', 599, 0, 3, 599, 'Electronics'), 
('images/22.jpg', 'Samsung', 'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED', 1000, 0, 2, 1000, 'Electronics'), 
('images/23.jpg', 'Lyra', 'BIYLACLESEN Women''s 3-in-1 Snowboard Jacket Winter Coats', 57, 0, 3, 57, 'Clothing');

CREATE TABLE orders(
  order_id SERIAL PRIMARY KEY,
  order_value INTEGER NOT NULL,
  order_date TIMESTAMP DEFAULT NOW()
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT,
  email TEXT,
  password TEXT,
  phone TEXT
);

CREATE TABLE order_details(
  detail_id SERIAL PRIMARY KEY,
  order_id INTEGER REFERENCES orders(order_id),
  product_id INTEGER REFERENCES items(id),
  quantity INTEGER NOT NULL,
  user_id INTEGER REFERENCES users(id)
);
//

It is recommended to use tools like pgAdmin to interact with the PostgreSQL database effectively. This allows for easier management of tables, data, and queries.

Contributors
Devansh Goel
