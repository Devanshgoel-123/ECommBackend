go into the backend Folder
Run Commands
 npm init->
 npm install express cors pg body-parser nodemon bcrypt dotenv->
 nodemon index.js (Server starts at port 3000)
 ######################  SQL CODE #########################

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
 
 INSERT INTO items(image, company, item_name, original_price, discount_percentage, rating_stars, current_price, category)
VALUES
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
('images/13.jpg', 'Tanishq', 'John Hardy Women\'s Legends Naga Gold & Silver Dragon Station Chain Bracelet', 695, 0, 5, 695, 'Clothing'),
('images/14.jpg', 'Tanishq', 'Solid Gold Petite Micropave', 168, 0, 4, 168, 'Clothing'),
('images/15.jpg', 'PC Jewellers', 'White Gold Plated Princess', 10, 0, 3, 10, 'Clothing'),
('images/16.jpg', 'PC Jewellers', 'Pierced Owl Rose Gold Plated Stainless Steel Double', 11, 0, 2, 11, 'Clothing'),
('images/17.jpg', 'SanDisk', 'WD 2TB Elements Portable External Hard Drive - USB 3.0', 64, 0, 3, 64, 'Electronics'),
('images/18.jpg', 'SanDisk', 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s', 109, 0, 3, 109, 'Electronics'),
('images/19.jpg', 'AMD', 'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5', 109, 0, 5, 109, 'Electronics'),
('images/20.jpg', 'Sony', 'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive', 114, 0, 5, 114, 'Electronics'),
('images/21.jpg', 'Acer', 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin', 599, 0, 3, 599, 'Electronics'),
('images/22.jpg', 'Samsung', 'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED', 1000, 0, 2, 1000, 'Electronics'),
('images/23.jpg', 'Lyra', 'BIYLACLESEN Women\'s 3-in-1 Snowboard Jacket Winter Coats', 57, 0, 3, 57, 'Clothing');


