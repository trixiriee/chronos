const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product'); // Adjust path if your models are elsewhere
const User = require('./models/User');       // Adjust path if your models are elsewhere

dotenv.config();

// The product data you provided
const productsData = [{
  "_id": {
    "$oid": "687a43d41f165f8bc6e597bb"
  },
  "id": "NA002",
  "name": "Titan X-Series Chrono",
  "brand": "Titan",
  "price": 249.99,
  "currency": "₹",
  "categories": [
    "all",
    "men",
    "analog"
  ],
  "gender": "men",
  "description": "Experience precision with the Titan X-Series Chrono. This elegant timepiece combines classic design with modern functionality, featuring a durable stainless steel case and a precise chronograph movement. Perfect for the discerning individual.",
  "features": [
    "Stainless Steel Case",
    "Chronograph Function",
    "Water Resistant (50m)",
    "Date Display",
    "Mineral Glass"
  ],
  "images": [
    "assets/images/mens/men14.webp",
    "assets/images/mens/men14.webp",
    "assets/images/mens/men14.webp",
    "assets/images/mens/men14.webp"
  ],
  "isNewArrival": true,
  "dateAdded": "2025-06-25",
  "isBestseller": true,
  "salesCount": 0
},
{
  "_id": {
    "$oid": "687a43d41f165f8bc6e597bc"
  },
  "id": "NA003",
  "name": "Titan X-Series Chrono",
  "brand": "Titan",
  "price": 249.99,
  "currency": "₹",
  "categories": [
    "all",
    "men",
    "analog"
  ],
  "gender": "men",
  "description": "Experience precision with the Titan X-Series Chrono. This elegant timepiece combines classic design with modern functionality, featuring a durable stainless steel case and a precise chronograph movement. Perfect for the discerning individual.",
  "features": [
    "Stainless Steel Case",
    "Chronograph Function",
    "Water Resistant (50m)",
    "Date Display",
    "Mineral Glass"
  ],
  "images": [
    "assets/images/mens/men13.webp",
    "assets/images/mens/men13.webp",
    "assets/images/mens/men13.webp",
    "assets/images/mens/men13.webp"
  ],
  "isNewArrival": true,
  "dateAdded": "2025-06-25",
  "isBestseller": true,
  "salesCount": 0
},
{
  "_id": {
    "$oid": "687a43d41f165f8bc6e597bd"
  },
  "id": "NA004",
  "name": "Titan X-Series Chrono",
  "brand": "Titan",
  "price": 249.99,
  "currency": "₹",
  "categories": [
    "all",
    "men",
    "analog"
  ],
  "gender": "men",
  "description": "Experience precision with the Titan X-Series Chrono. This elegant timepiece combines classic design with modern functionality, featuring a durable stainless steel case and a precise chronograph movement. Perfect for the discerning individual.",
  "features": [
    "Stainless Steel Case",
    "Chronograph Function",
    "Water Resistant (50m)",
    "Date Display",
    "Mineral Glass"
  ],
  "images": [
    "assets/images/mens/men12.webp",
    "assets/images/mens/men12.webp",
    "assets/images/mens/men12.webp",
    "assets/images/mens/men12.webp"
  ],
  "isNewArrival": true,
  "dateAdded": "2025-06-25",
  "isBestseller": true,
  "salesCount": 0
},
{
  "_id": {
    "$oid": "687a43d41f165f8bc6e597be"
  },
  "id": "NA005",
  "name": "Titan X-Series Chrono",
  "brand": "Titan",
  "price": 249.99,
  "currency": "₹",
  "categories": [
    "all",
    "men",
    "analog"
  ],
  "gender": "men",
  "description": "Experience precision with the Titan X-Series Chrono. This elegant timepiece combines classic design with modern functionality, featuring a durable stainless steel case and a precise chronograph movement. Perfect for the discerning individual.",
  "features": [
    "Stainless Steel Case",
    "Chronograph Function",
    "Water Resistant (50m)",
    "Date Display",
    "Mineral Glass"
  ],
  "images": [
    "assets/images/mens/men11.webp",
    "assets/images/mens/men11.webp",
    "assets/images/mens/men11.webp",
    "assets/images/mens/men11.webp"
  ],
  "isNewArrival": true,
  "dateAdded": "2025-06-25",
  "isBestseller": true,
  "salesCount": 0
},
{
  "_id": {
    "$oid": "687a43d41f165f8bc6e597bf"
  },
  "id": "NA006",
  "name": "Titan X-Series Chrono",
  "brand": "Titan",
  "price": 249.99,
  "currency": "₹",
  "categories": [
    "all",
    "men",
    "analog"
  ],
  "gender": "men",
  "description": "Experience precision with the Titan X-Series Chrono. This elegant timepiece combines classic design with modern functionality, featuring a durable stainless steel case and a precise chronograph movement. Perfect for the discerning individual.",
  "features": [
    "Stainless Steel Case",
    "Chronograph Function",
    "Water Resistant (50m)",
    "Date Display",
    "Mineral Glass"
  ],
  "images": [
    "assets/images/mens/men10.webp",
    "assets/images/mens/men10.webp",
    "assets/images/mens/men10.webp",
    "assets/images/mens/men10.webp"
  ],
  "isNewArrival": true,
  "dateAdded": "2025-06-25",
  "isBestseller": true,
  "salesCount": 0
},
{
  "_id": {
    "$oid": "687a43d41f165f8bc6e597c0"
  },
  "id": "NA007",
  "name": "Titan X-Series Chrono",
  "brand": "Titan",
  "price": 249.99,
  "currency": "₹",
  "categories": [
    "all",
    "men",
    "analog"
  ],
  "gender": "men",
  "description": "Experience precision with the Titan X-Series Chrono. This elegant timepiece combines classic design with modern functionality, featuring a durable stainless steel case and a precise chronograph movement. Perfect for the discerning individual.",
  "features": [
    "Stainless Steel Case",
    "Chronograph Function",
    "Water Resistant (50m)",
    "Date Display",
    "Mineral Glass"
  ],
  "images": [
    "assets/images/mens/men9.webp",
    "assets/images/mens/men9.webp",
    "assets/images/mens/men9.webp",
    "assets/images/mens/men9.webp"
  ],
  "isNewArrival": true,
  "dateAdded": "2025-06-25",
  "isBestseller": false,
  "salesCount": 0
},
{
  "_id": {
    "$oid": "687a43d41f165f8bc6e597c1"
  },
  "id": "NA008",
  "name": "Titan X-Series Chrono",
  "brand": "Titan",
  "price": 249.99,
  "currency": "₹",
  "categories": [
    "all",
    "men",
    "analog"
  ],
  "gender": "men",
  "description": "Experience precision with the Titan X-Series Chrono. This elegant timepiece combines classic design with modern functionality, featuring a durable stainless steel case and a precise chronograph movement. Perfect for the discerning individual.",
  "features": [
    "Stainless Steel Case",
    "Chronograph Function",
    "Water Resistant (50m)",
    "Date Display",
    "Mineral Glass"
  ],
  "images": [
    "assets/images/mens/men8.webp",
    "assets/images/mens/men8.webp",
    "assets/images/mens/men8.webp",
    "assets/images/mens/men8.webp"
  ],
  "isNewArrival": false,
  "dateAdded": "2025-06-25",
  "isBestseller": true,
  "salesCount": 0
},
{
  "_id": {
    "$oid": "687a43d41f165f8bc6e597c2"
  },
  "id": "NA009",
  "name": "Titan X-Series Chrono",
  "brand": "Titan",
  "price": 249.99,
  "currency": "₹",
  "categories": [
    "all",
    "men",
    "analog"
  ],
  "gender": "men",
  "description": "Experience precision with the Titan X-Series Chrono. This elegant timepiece combines classic design with modern functionality, featuring a durable stainless steel case and a precise chronograph movement. Perfect for the discerning individual.",
  "features": [
    "Stainless Steel Case",
    "Chronograph Function",
    "Water Resistant (50m)",
    "Date Display",
    "Mineral Glass"
  ],
  "images": [
    "assets/images/mens/men7.webp",
    "assets/images/mens/men7.webp",
    "assets/images/mens/men7.webp",
    "assets/images/mens/men7.webp"
  ],
  "isNewArrival": false,
  "dateAdded": "2025-06-25",
  "isBestseller": true,
  "salesCount": 0
},
{
  "_id": {
    "$oid": "687a43d41f165f8bc6e597c3"
  },
  "id": "NA0010",
  "name": "Titan X-Series Chrono",
  "brand": "Titan",
  "price": 249.99,
  "currency": "₹",
  "categories": [
    "all",
    "men",
    "analog"
  ],
  "gender": "men",
  "description": "Experience precision with the Titan X-Series Chrono. This elegant timepiece combines classic design with modern functionality, featuring a durable stainless steel case and a precise chronograph movement. Perfect for the discerning individual.",
  "features": [
    "Stainless Steel Case",
    "Chronograph Function",
    "Water Resistant (50m)",
    "Date Display",
    "Mineral Glass"
  ],
  "images": [
    "assets/images/mens/men1.webp",
    "assets/images/mens/men1.webp",
    "assets/images/mens/men1.webp",
    "assets/images/mens/men1.webp"
  ],
  "isNewArrival": true,
  "dateAdded": "2025-06-29",
  "isBestseller": false,
  "salesCount": 0
},
{
  "_id": {
    "$oid": "687a43d41f165f8bc6e597c4"
  },
  "id": "NA0011",
  "name": "Fastrack Bold Smart",
  "brand": "Fastrack",
  "price": 189.99,
  "currency": "₹",
  "categories": [
    "all",
    "men",
    "analog"
  ],
  "gender": "unisex",
  "description": "Stay connected and track your fitness with the Fastrack Bold Smartwatch. Featuring a vibrant display, heart rate monitor, and smart notifications, it’s designed for an active lifestyle.",
  "features": [
    "Full Touch Display",
    "Heart Rate Monitor",
    "Sleep Tracker",
    "Smart Notifications",
    "IP68 Water Resistance"
  ],
  "images": [
    "assets/images/mens/men2.webp",
    "assets/images/mens/men2.webp",
    "assets/images/mens/men2.webp",
    "assets/images/mens/men2.webp"
  ],
  "isNewArrival": true,
  "dateAdded": "2025-06-28",
  "isBestseller": true,
  "salesCount": 0
},
{
  "_id": {
    "$oid": "687a43d41f165f8bc6e597c5"
  },
  "id": "NA0012",
  "name": "Titan's Raga E86A",
  "brand": "Titan",
  "price": 189.99,
  "currency": "₹",
  "categories": [
    "all",
    "men",
    "analog"
  ],
  "gender": "women",
  "description": "Embrace elegance with Titan's Raga E86A. This exquisite watch is crafted for sophistication, featuring a delicate design and reliable quartz movement, perfect for every special occasion.",
  "features": [
    "Stainless Steel Strap",
    "Analog Display",
    "Quartz Movement",
    "Water Resistant (30m)",
    "Elegant Design"
  ],
  "images": [
    "assets/images/mens/men3.webp",
    "assets/images/mens/men3.webp",
    "assets/images/mens/men3.webp",
    "assets/images/mens/men3.webp"
  ],
  "isNewArrival": true,
  "dateAdded": "2025-06-26",
  "isBestseller": true,
  "salesCount": 40
},
{
  "_id": {
    "$oid": "687a43d41f165f8bc6e597c6"
  },
  "id": "NA0013",
  "name": "Casio G-Shock GX56BB-1",
  "brand": "Casio",
  "price": 299,
  "currency": "₹",
  "categories": [
    "all",
    "men",
    "women",
    "digital",
    "smartwatch"
  ],
  "gender": "men",
  "description": "The King of G-SHOCK, the GX56BB-1, is built for extreme toughness. Its large, rugged case offers superior shock resistance and features solar power and mud resistance for any adventure.",
  "features": [
    "Shock Resistant",
    "Mud Resistant",
    "Solar Powered",
    "200M Water Resistance",
    "World Time"
  ],
  "images": [
    "assets/images/smartwatches/sw1.jpg",
    "assets/images/smartwatches/sw1.jpg",
    "assets/images/smartwatches/sw1.jpg"
  ],
  "isNewArrival": false,
  "dateAdded": "2025-06-29",
  "isBestseller": true,
  "salesCount": 30
},
{
  "_id": {
    "$oid": "687a43d41f165f8bc6e597c7"
  },
  "id": "NA0014",
  "name": "Fossil Gen 6 Smartwatch",
  "brand": "Fossil",
  "price": 350,
  "currency": "₹",
  "categories": [
    "all",
    "men",
    "women",
    "digital",
    "smartwatch"
  ],
  "gender": "unisex",
  "description": "Elevate your tech and style with the Fossil Gen 6 Smartwatch. Powered by Wear OS, it offers faster performance, improved health tracking, and quick charging for a seamless experience.",
  "features": [
    "Wear OS by Google",
    "Heart Rate & SpO2 Tracking",
    "Fast Charging",
    "Snapdragon Wear 4100+",
    "Built-in Speaker & Mic"
  ],
  "images": [
    "assets/images/smartwatches/sw2.jpg",
    "assets/images/smartwatches/sw2.jpg",
    "assets/images/smartwatches/sw2.jpg"
  ],
  "isNewArrival": true,
  "dateAdded": "2025-06-25",
  "isBestseller": true,
  "salesCount": 30
},
{
  "_id": {
    "$oid": "687a43d41f165f8bc6e597c8"
  },
  "id": "NA0015",
  "name": "Timex Analog Gold Tone",
  "brand": "Timex",
  "price": 120,
  "currency": "₹",
  "categories": [
    "all",
    "men",
    "analog"
  ],
  "gender": "men",
  "description": "A timeless classic, the Timex Analog Gold Tone watch offers a sophisticated look for everyday wear or special occasions. Its durable construction and elegant design make it a perfect accessory.",
  "features": [
    "Brass Case",
    "Stainless Steel Strap",
    "Analog Display",
    "Quartz Movement",
    "Water Resistant (30m)"
  ],
  "images": [
    "assets/images/mens/men4.webp",
    "assets/images/mens/men4.webp",
    "assets/images/mens/men4.webp",
    "assets/images/mens/men4.webp"
  ],
  "isNewArrival": true,
  "dateAdded": "2025-06-25",
  "isBestseller": true,
  "salesCount": 30
},
{
  "_id": {
    "$oid": "687a43d41f165f8bc6e597c9"
  },
  "id": "NA0016",
  "name": "Seiko 5 Sports Automatic",
  "brand": "Seiko",
  "price": 320,
  "currency": "₹",
  "categories": [
    "all",
    "men",
    "analog"
  ],
  "gender": "men",
  "description": "A true icon, the Seiko 5 Sports Automatic combines robust design with reliable automatic movement. Perfect for adventurers and watch enthusiasts alike, it features a unidirectional rotating bezel and a day/date display.",
  "features": [
    "Automatic Movement",
    "Stainless Steel Case",
    "Day/Date Display",
    "Hardlex Crystal",
    "Water Resistant (100m)"
  ],
  "images": [
    "assets/images/mens/men5.webp",
    "assets/images/mens/men5.webp",
    "assets/images/mens/men5.webp"
  ],
  "isNewArrival": true,
  "dateAdded": "2025-06-29",
  "isBestseller": true,
  "salesCount": 0
},
{
  "_id": {
    "$oid": "687a43d41f165f8bc6e597ca"
  },
  "id": "NA0017",
  "name": "Citizen Eco-Drive Elegance",
  "brand": "Citizen",
  "price": 280,
  "currency": "₹",
  "categories": [
    "women",
    "analog",
    "collections"
  ],
  "gender": "women",
  "description": "Powered by light, the Citizen Eco-Drive Elegance offers sophisticated style without ever needing a battery change. Its sleek design and reliable performance make it an ideal choice for the modern woman.",
  "features": [
    "Eco-Drive Technology",
    "Stainless Steel Case & Bracelet",
    "Crystallized Bezel",
    "Water Resistant (50m)",
    "Mineral Crystal"
  ],
  "images": [
    "assets/images/womens/wmen1.webp",
    "assets/images/womens/wmen1.webp",
    "assets/images/womens/wmen1.webp"
  ],
  "isNewArrival": false,
  "dateAdded": "2025-06-25",
  "isBestseller": true,
  "salesCount": 19
},
{
  "_id": {
    "$oid": "687a43d41f165f8bc6e597cb"
  },
  "id": "NA0018",
  "name": "Garmin Fenix 7 Pro",
  "brand": "Garmin",
  "price": 799,
  "currency": "₹",
  "categories": [
    "all",
    "men",
    "women",
    "digital",
    "smartwatch"
  ],
  "gender": "unisex",
  "description": "The Garmin Fenix 7 Pro is the ultimate multisport GPS smartwatch, built for peak performance. Featuring advanced training metrics, mapping, and an impressive battery life, it’s ready for any challenge.",
  "features": [
    "GPS & Multi-GNSS",
    "Advanced Training Metrics",
    "Built-in Flashlight",
    "Solar Charging",
    "Titanium Bezel"
  ],
  "images": [
    "assets/images/smartwatches/sw3.jpg",
    "assets/images/smartwatches/sw3.jpg",
    "assets/images/smartwatches/sw3.jpg"
  ],
  "isNewArrival": true,
  "dateAdded": "2025-06-26",
  "isBestseller": true,
  "salesCount": 15
},
{
  "_id": {
    "$oid": "687a43d41f165f8bc6e597cc"
  },
  "id": "NA019",
  "name": "Fitbit Sense 2",
  "brand": "Fitbit",
  "price": 249,
  "currency": "₹",
  "categories": [
    "all",
    "men",
    "women",
    "digital",
    "smartwatch"
  ],
  "gender": "unisex",
  "description": "Focus on your health with Fitbit Sense 2. This advanced health smartwatch helps you manage stress, sleep better, and live healthier with comprehensive tracking features and smart alerts.",
  "features": [
    "Stress Management",
    "Sleep Tracking",
    "EDA Scan App",
    "Heart Rate Tracking",
    "Built-in GPS"
  ],
  "images": [
    "assets/images/smartwatches/sw4.jpg",
    "assets/images/smartwatches/sw4.jpg",
    "assets/images/smartwatches/sw4.jpg"
  ],
  "isNewArrival": true,
  "dateAdded": "2025-06-27",
  "isBestseller": false,
  "salesCount": 0
},
{
  "_id": {
    "$oid": "687a43d41f165f8bc6e597cd"
  },
  "id": "NA020",
  "name": "Diesel Mega Chief",
  "brand": "Diesel",
  "price": 220,
  "currency": "₹",
  "categories": [
    "men",
    "analog",
    "all"
  ],
  "gender": "men",
  "description": "Make a statement with the Diesel Mega Chief. This bold and oversized watch features a striking dial design and a robust case, perfect for those who dare to stand out.",
  "features": [
    "Oversized Case",
    "Chronograph",
    "Stainless Steel",
    "Quartz Movement",
    "Water Resistant (100m)"
  ],
  "images": [
    "assets/images/mens/men6.webp",
    "assets/images/mens/men6.webp",
    "assets/images/mens/men6.webp"
  ],
  "isNewArrival": false,
  "dateAdded": "2025-06-21",
  "isBestseller": true,
  "salesCount": 0
},
{
  "_id": {
    "$oid": "687a43d41f165f8bc6e597ce"
  },
  "id": "NA021",
  "name": "Michael Kors Bradshaw",
  "brand": "Michael Kors",
  "price": 195,
  "currency": "₹",
  "categories": [
    "women",
    "analog",
    "collections"
  ],
  "gender": "women",
  "description": "The Michael Kors Bradshaw is a chic and sophisticated timepiece that effortlessly blends classic and contemporary style. Its elegant design and practical features make it a versatile accessory.",
  "features": [
    "Stainless Steel",
    "Chronograph",
    "Date Function",
    "Quartz Movement",
    "Water Resistant (50m)"
  ],
  "images": [
    "assets/images/womens/wmen2.webp",
    "assets/images/womens/wmen2.webp",
    "assets/images/womens/wmen2.webp"
  ],
  "isNewArrival": true,
  "dateAdded": "2025-06-25",
  "isBestseller": false,
  "salesCount": 9
},
{
  "_id": {
    "$oid": "687a43d41f165f8bc6e597cf"
  },
  "id": "NA022",
  "name": "Rolex Submariner",
  "brand": "Rolex",
  "price": 12000,
  "currency": "₹",
  "categories": [
    "women",
    "analog",
    "collections"
  ],
  "gender": "men",
  "description": "The Rolex Submariner is the quintessential dive watch, a true icon of luxury and precision. Renowned for its robustness, reliability, and timeless design, it's a symbol of exploration and achievement.",
  "features": [
    "Oystersteel Case & Bracelet",
    "Unidirectional Rotatable Bezel",
    "Waterproof to 300m",
    "Perpetual, mechanical, self-winding",
    "Chronometer certified"
  ],
  "images": [
    "assets/images/collections/coll.webp",
    "assets/images/collections/coll.webp",
    "assets/images/collections/coll.webp"
  ],
  "isNewArrival": true,
  "dateAdded": "2025-06-25",
  "isBestseller": false,
  "salesCount": 0
},
{
  "_id": {
    "$oid": "687a43d41f165f8bc6e597d0"
  },
  "id": "MW0023",
  "name": "Invicta Chrono",
  "brand": "Invicta",
  "price": 7499,
  "currency": "₹",
  "categories": [
    "women",
    "analog",
    "collections"
  ],
  "gender": "men",
  "description": "The Omega Seamaster Diver 300M has been a favorite among divers and watch enthusiasts since 1993. This latest collection updates the famous dive watch with new materials and movements.",
  "features": [
    "Chronograph",
    "Water Resistant",
    "Bold Design"
  ],
  "images": [
    "assets/images/collections/coll1.webp",
    "assets/images/collections/coll1.webp",
    "assets/images/collections/coll1.webp"
  ],
  "isNewArrival": true,
  "dateAdded": "2025-06-25",
  "isBestseller": false,
  "salesCount": 10
},
{
  "_id": {
    "$oid": "687a43d41f165f8bc6e597d1"
  },
  "id": "MW0024",
  "name": "Invicta Chrono",
  "brand": "Invicta",
  "price": 7499,
  "currency": "₹",
  "categories": [
    "women",
    "analog",
    "collections"
  ],
  "gender": "men",
  "description": "The Omega Seamaster Diver 300M has been a favorite among divers and watch enthusiasts since 1993. This latest collection updates the famous dive watch with new materials and movements.",
  "features": [
    "Chronograph",
    "Water Resistant",
    "Bold Design"
  ],
  "images": [
    "assets/images/collections/coll2.webp",
    "assets/images/collections/coll2.webp",
    "assets/images/collections/coll2.webp"
  ],
  "isNewArrival": true,
  "dateAdded": "2025-06-25",
  "isBestseller": false,
  "salesCount": 50
},
{
  "_id": {
    "$oid": "687a43d41f165f8bc6e597d2"
  },
  "id": "NA025",
  "name": "Cartier Tank Française",
  "brand": "Cartier",
  "price": 5500,
  "currency": "₹",
  "categories": [
    "women",
    "analog",
    "collections"
  ],
  "gender": "women",
  "description": "The Cartier Tank Française embodies the harmonious integration of the case and bracelet. A contemporary interpretation of the iconic Tank watch, it is both elegant and bold.",
  "features": [
    "Stainless Steel Case & Bracelet",
    "Quartz Movement",
    "Sapphire Crystal",
    "Water-resistant to 3 bar (approx. 30 metres)",
    "Sword-shaped hands"
  ],
  "images": [
    "assets/images/collections/diesel.png",
    "assets/images/collections/diesel.png",
    "assets/images/collections/diesel.png"
  ],
  "isNewArrival": false,
  "dateAdded": "2025-06-25",
  "isBestseller": true,
  "salesCount": 0
},
{
  "_id": {
    "$oid": "687a43d41f165f8bc6e597d3"
  },
  "id": "NA026",
  "name": "Fitbit Sense 2",
  "brand": "Fitbit",
  "price": 249,
  "currency": "₹",
  "categories": [
    "all",
    "men",
    "women",
    "digital",
    "smartwatch"
  ],
  "gender": "unisex",
  "description": "Focus on your health with Fitbit Sense 2. This advanced health smartwatch helps you manage stress, sleep better, and live healthier with comprehensive tracking features and smart alerts.",
  "features": [
    "Stress Management",
    "Sleep Tracking",
    "EDA Scan App",
    "Heart Rate Tracking",
    "Built-in GPS"
  ],
  "images": [
    "assets/images/smartwatches/sw5.jpg",
    "assets/images/smartwatches/sw5.jpg",
    "assets/images/smartwatches/sw5.jpg"
  ],
  "isNewArrival": true,
  "dateAdded": "2025-06-25",
  "isBestseller": false,
  "salesCount": 0
},
{
  "_id": {
    "$oid": "687a43d41f165f8bc6e597d4"
  },
  "id": "NA027",
  "name": "Fitbit Sense 2",
  "brand": "Fitbit",
  "price": 249,
  "currency": "₹",
  "categories": [
    "all",
    "men",
    "women",
    "digital",
    "smartwatch"
  ],
  "gender": "unisex",
  "description": "Focus on your health with Fitbit Sense 2. This advanced health smartwatch helps you manage stress, sleep better, and live healthier with comprehensive tracking features and smart alerts.",
  "features": [
    "Stress Management",
    "Sleep Tracking",
    "EDA Scan App",
    "Heart Rate Tracking",
    "Built-in GPS"
  ],
  "images": [
    "assets/images/smartwatches/sw6.jpg",
    "assets/images/smartwatches/sw6.jpg",
    "assets/images/smartwatches/sw6.jpg"
  ],
  "isNewArrival": true,
  "dateAdded": "2025-06-25",
  "isBestseller": true,
  "salesCount": 50
},
{
  "_id": {
    "$oid": "687a43d41f165f8bc6e597d5"
  },
  "id": "NA028",
  "name": "Fitbit Sense 2",
  "brand": "Fitbit",
  "price": 249,
  "currency": "₹",
  "categories": [
    "all",
    "men",
    "women",
    "digital",
    "smartwatch"
  ],
  "gender": "unisex",
  "description": "Focus on your health with Fitbit Sense 2. This advanced health smartwatch helps you manage stress, sleep better, and live healthier with comprehensive tracking features and smart alerts.",
  "features": [
    "Stress Management",
    "Sleep Tracking",
    "EDA Scan App",
    "Heart Rate Tracking",
    "Built-in GPS"
  ],
  "images": [
    "assets/images/smartwatches/sw7.jpg",
    "assets/images/smartwatches/sw7.jpg",
    "assets/images/smartwatches/sw7.jpg"
  ],
  "isNewArrival": true,
  "dateAdded": "2025-06-26",
  "isBestseller": false,
  "salesCount": 0
},
{
  "_id": {
    "$oid": "687a441d1f165f8bc6e597d7"
  },
  "id": "NA047",
  "name": "Michael Kors Bradshaw Brown Leather",
  "brand": "Michael Kors",
  "price": 195,
  "currency": "₹",
  "categories": [
    "women",
    "analog",
    "all"
  ],
  "gender": "women",
  "description": "The Michael Kors Bradshaw is a chic and sophisticated timepiece that effortlessly blends classic and contemporary style. Its elegant design and practical features make it a versatile accessory.",
  "features": [
    "Brown Leather Strap",
    "Chronograph",
    "Date Function",
    "Quartz Movement",
    "Water Resistant (50m)"
  ],
  "images": [
    "assets/images/womens/wmen14.webp",
    "assets/images/womens/wmen14.webp",
    "assets/images/womens/wmen14.webp"
  ],
  "isNewArrival": true,
  "dateAdded": "2025-06-29",
  "isBestseller": true,
  "salesCount": 0
},
{
  "_id": {
    "$oid": "687a441d1f165f8bc6e597d8"
  },
  "id": "NA048",
  "name": "Michael Kors Bradshaw Black Leather",
  "brand": "Michael Kors",
  "price": 195,
  "currency": "₹",
  "categories": [
    "women",
    "analog",
    "all"
  ],
  "gender": "women",
  "description": "The Michael Kors Bradshaw is a chic and sophisticated timepiece that effortlessly blends classic and contemporary style. Its elegant design and practical features make it a versatile accessory.",
  "features": [
    "Black Leather Strap",
    "Chronograph",
    "Date Function",
    "Quartz Movement",
    "Water Resistant (50m)"
  ],
  "images": [
    "assets/images/womens/wmen15.webp",
    "assets/images/womens/wmen15.webp",
    "assets/images/womens/wmen15.webp"
  ],
  "isNewArrival": true,
  "dateAdded": "2025-06-29",
  "isBestseller": false,
  "salesCount": 0
},
{
  "_id": {
    "$oid": "687a441d1f165f8bc6e597d9"
  },
  "id": "NA049",
  "name": "Michael Kors Bradshaw Silicone Strap",
  "brand": "Michael Kors",
  "price": 195,
  "currency": "₹",
  "categories": [
    "women",
    "analog",
    "all"
  ],
  "gender": "women",
  "description": "The Michael Kors Bradshaw is a chic and sophisticated timepiece that effortlessly blends classic and contemporary style. Its elegant design and practical features make it a versatile accessory.",
  "features": [
    "Silicone Strap",
    "Chronograph",
    "Date Function",
    "Quartz Movement",
    "Water Resistant (50m)"
  ],
  "images": [
    "assets/images/womens/wmen16.webp",
    "assets/images/womens/wmen16.webp",
    "assets/images/womens/wmen16.webp"
  ],
  "isNewArrival": true,
  "dateAdded": "2025-06-28",
  "isBestseller": true,
  "salesCount": 0
},
{
  "_id": {
    "$oid": "687a441d1f165f8bc6e597da"
  },
  "id": "NA050",
  "name": "Earnshaw Fitzroy Skeleton",
  "brand": "Earnshaw",
  "price": 5500,
  "currency": "₹",
  "categories": [
    "men",
    "analog",
    "collections"
  ],
  "gender": "men",
  "description": "The Earnshaw Fitzroy Skeleton showcases intricate automatic movement through its captivating skeleton dial, blending classic design with mechanical artistry.",
  "features": [
    "Automatic Movement",
    "Skeleton Dial",
    "Stainless Steel Case",
    "Leather Strap",
    "Water-resistant (50m)"
  ],
  "images": [
    "assets/images/collections/Earnshaw.png",
    "assets/images/collections/Earnshaw.png",
    "assets/images/collections/Earnshaw.png"
  ],
  "isNewArrival": true,
  "dateAdded": "2025-06-25",
  "isBestseller": true,
  "salesCount": 0
},
{
  "_id": {
    "$oid": "687a441d1f165f8bc6e597db"
  },
  "id": "NA051",
  "name": "Fria Serenity Diamond",
  "brand": "Fria",
  "price": 5500,
  "currency": "₹",
  "categories": [
    "women",
    "analog",
    "collections"
  ],
  "gender": "women",
  "description": "The Fria Serenity Diamond watch embodies minimalist elegance, featuring a sparkling diamond accent on its clean dial, perfect for a subtle touch of luxury.",
  "features": [
    "Diamond Accent",
    "Minimalist Design",
    "Stainless Steel Case",
    "Quartz Movement",
    "Sleek Bracelet"
  ],
  "images": [
    "assets/images/collections/Fria.jpg",
    "assets/images/collections/Fria.jpg",
    "assets/images/collections/Fria.jpg"
  ],
  "isNewArrival": true,
  "dateAdded": "2025-06-25",
  "isBestseller": true,
  "salesCount": 0
},
{
  "_id": {
    "$oid": "687a441d1f165f8bc6e597dc"
  },
  "id": "NA052",
  "name": "Ingersoll The Grafton Automatic",
  "brand": "Ingersoll",
  "price": 5500,
  "currency": "₹",
  "categories": [
    "men",
    "analog",
    "collections"
  ],
  "gender": "men",
  "description": "The Ingersoll Grafton is a classic automatic timepiece with a robust design, perfect for those who appreciate traditional watchmaking and enduring style.",
  "features": [
    "Automatic Movement",
    "Day-Date Display",
    "Exhibition Caseback",
    "Genuine Leather Strap",
    "Water-resistant (50m)"
  ],
  "images": [
    "assets/images/collections/ingersoll.png",
    "assets/images/collections/ingersoll.png",
    "assets/images/collections/ingersoll.png"
  ],
  "isNewArrival": true,
  "dateAdded": "2025-06-27",
  "isBestseller": true,
  "salesCount": 0
},
{
  "_id": {
    "$oid": "687a441d1f165f8bc6e597dd"
  },
  "id": "NA053",
  "name": "Invicta Pro Diver Quartz",
  "brand": "Invicta",
  "price": 5500,
  "currency": "₹",
  "categories": [
    "men",
    "analog",
    "collections"
  ],
  "gender": "men",
  "description": "The Invicta Pro Diver is a robust and stylish dive watch designed for both underwater adventures and everyday wear, featuring reliable quartz movement.",
  "features": [
    "Quartz Movement",
    "Unidirectional Bezel",
    "Flame Fusion Crystal",
    "Stainless Steel Bracelet",
    "Water Resistant (200m)"
  ],
  "images": [
    "assets/images/collections/Invicta.png",
    "assets/images/collections/Invicta.png",
    "assets/images/collections/Invicta.png"
  ],
  "isNewArrival": false,
  "dateAdded": "2025-06-25",
  "isBestseller": true,
  "salesCount": 0
},
{
  "_id": {
    "$oid": "687a441d1f165f8bc6e597de"
  },
  "id": "NA054",
  "name": "Luminox Navy SEAL Chronograph",
  "brand": "Luminox",
  "price": 5500,
  "currency": "₹",
  "categories": [
    "men",
    "analog",
    "collections"
  ],
  "gender": "men",
  "description": "Built for extreme conditions, the Luminox Navy SEAL Chronograph features self-powered illumination and rugged construction, trusted by elite military personnel.",
  "features": [
    "Luminox Light Technology",
    "Carbon Compound Case",
    "Chronograph Function",
    "Sapphire Crystal",
    "Water Resistant (200m)"
  ],
  "images": [
    "assets/images/collections/Luminox.png",
    "assets/images/collections/Luminox.png",
    "assets/images/collections/Luminox.png"
  ],
  "isNewArrival": false,
  "dateAdded": "2025-06-25",
  "isBestseller": false,
  "salesCount": 36
},
{
  "_id": {
    "$oid": "687a441d1f165f8bc6e597df"
  },
  "id": "NA055",
  "name": "Maserati Traguardo Chronograph",
  "brand": "Maserati",
  "price": 5500,
  "currency": "₹",
  "categories": [
    "men",
    "analog",
    "collections"
  ],
  "gender": "men",
  "description": "Inspired by the luxury and performance of Maserati cars, the Traguardo Chronograph is a sophisticated timepiece with sporty details and a bold design.",
  "features": [
    "Chronograph Movement",
    "Stainless Steel Case",
    "Maserati Trident Logo",
    "Date Display",
    "Water Resistant (100m)"
  ],
  "images": [
    "assets/images/collections/Maserati.png",
    "assets/images/collections/Maserati.png",
    "assets/images/collections/Maserati.png"
  ],
  "isNewArrival": false,
  "dateAdded": "2025-06-25",
  "isBestseller": false,
  "salesCount": 0
},
{
  "_id": {
    "$oid": "687a441d1f165f8bc6e597e0"
  },
  "id": "NA056",
  "name": "Mathey-Tissot Vintage Automatic",
  "brand": "Mathey-Tissot",
  "price": 5500,
  "currency": "₹",
  "categories": [
    "men",
    "analog",
    "collections"
  ],
  "gender": "men",
  "description": "The Mathey-Tissot Vintage Automatic combines classic design elements with reliable automatic movement, offering timeless elegance for the discerning wearer.",
  "features": [
    "Automatic Movement",
    "Domed Crystal",
    "Leather Strap",
    "Stainless Steel Case",
    "Vintage-inspired Dial"
  ],
  "images": [
    "assets/images/collections/Mathey-tissot.png",
    "assets/images/collections/Mathey-tissot.png",
    "assets/images/collections/Mathey-tissot.png"
  ],
  "isNewArrival": false,
  "dateAdded": "2025-06-25",
  "isBestseller": true,
  "salesCount": 9
},
{
  "_id": {
    "$oid": "687a441d1f165f8bc6e597e1"
  },
  "id": "NA057",
  "name": "Pagani Design Submariner Homage",
  "brand": "Pagani Design",
  "price": 5500,
  "currency": "₹",
  "categories": [
    "men",
    "analog",
    "collections"
  ],
  "gender": "men",
  "description": "The Pagani Design Submariner Homage offers a classic dive watch aesthetic with reliable performance at an accessible price point, perfect for everyday wear.",
  "features": [
    "Automatic Movement",
    "Ceramic Bezel",
    "Stainless Steel Case",
    "Sapphire Glass",
    "Water Resistant (100m)"
  ],
  "images": [
    "assets/images/collections/Pagani-design.png",
    "assets/images/collections/Pagani-design.png",
    "assets/images/collections/Pagani-design.png"
  ],
  "isNewArrival": true,
  "dateAdded": "2025-06-29",
  "isBestseller": true,
  "salesCount": 0
},
{
  "_id": {
    "$oid": "687a441d1f165f8bc6e597e2"
  },
  "id": "NA058",
  "name": "Sonata Classic Quartz",
  "brand": "Sonata",
  "price": 5500,
  "currency": "₹",
  "categories": [
    "women",
    "analog",
    "collections"
  ],
  "gender": "women",
  "description": "The Sonata Classic Quartz watch is designed for everyday elegance, featuring a simple yet sophisticated dial and comfortable fit for all occasions.",
  "features": [
    "Quartz Movement",
    "Stainless Steel Case",
    "Clear Analog Display",
    "Leather Strap",
    "Water Resistant (30m)"
  ],
  "images": [
    "assets/images/collections/Sonata.jpg",
    "assets/images/collections/Sonata.jpg",
    "assets/images/collections/Sonata.jpg"
  ],
  "isNewArrival": true,
  "dateAdded": "2025-06-29",
  "isBestseller": true,
  "salesCount": 0
},
{
  "_id": {
    "$oid": "687a441d1f165f8bc6e597e3"
  },
  "id": "NA059",
  "name": "Titan Edge Ultra-Slim",
  "brand": "Titan",
  "price": 5500,
  "currency": "₹",
  "categories": [
    "women",
    "analog",
    "collections"
  ],
  "gender": "women",
  "description": "The Titan Edge is renowned for its ultra-slim design, making it one of the thinnest watches in the world. It's a statement of minimalist elegance and precision engineering.",
  "features": [
    "Ultra-Slim Design",
    "Sapphire Crystal",
    "Titanium Case",
    "Quartz Movement",
    "Water Resistant (30m)"
  ],
  "images": [
    "assets/images/collections/Titan.jpg",
    "assets/images/collections/Titan.jpg",
    "assets/images/collections/Titan.jpg"
  ],
  "isNewArrival": true,
  "dateAdded": "2025-06-30",
  "isBestseller": true,
  "salesCount": 45
},
{
  "_id": {
    "$oid": "687a441d1f165f8bc6e597e4"
  },
  "id": "NA060",
  "name": "Titan Raga Pearl Dial",
  "brand": "Titan",
  "price": 5500,
  "currency": "₹",
  "categories": [
    "women",
    "analog",
    "collections"
  ],
  "gender": "women",
  "description": "The Titan Raga Pearl Dial is an exquisite timepiece for women, featuring a beautiful mother-of-pearl dial and intricate design, perfect for special occasions.",
  "features": [
    "Mother-of-Pearl Dial",
    "Elegant Design",
    "Jewelry Clasp",
    "Quartz Movement",
    "Water Resistant (30m)"
  ],
  "images": [
    "assets/images/collections/Titan_raga.jpg",
    "assets/images/collections/Titan_raga.jpg",
    "assets/images/collections/Titan_raga.jpg"
  ],
  "isNewArrival": true,
  "dateAdded": "2025-06-27",
  "isBestseller": true,
  "salesCount": 0
},
{
  "_id": {
    "$oid": "687a44391f165f8bc6e597e6"
  },
  "id": "NA036",
  "name": "Michael Kors Bradshaw Gold-Tone",
  "brand": "Michael Kors",
  "price": 195,
  "currency": "₹",
  "categories": [
    "women",
    "analog",
    "all"
  ],
  "gender": "women",
  "description": "The Michael Kors Bradshaw is a chic and sophisticated timepiece that effortlessly blends classic and contemporary style. Its elegant design and practical features make it a versatile accessory.",
  "features": [
    "Gold-Tone Stainless Steel",
    "Chronograph",
    "Date Function",
    "Quartz Movement",
    "Water Resistant (50m)"
  ],
  "images": [
    "assets/images/womens/wmen3.webp",
    "assets/images/womens/wmen3.webp",
    "assets/images/womens/wmen3.webp"
  ],
  "isNewArrival": false,
  "dateAdded": "2025-06-28",
  "isBestseller": true,
  "salesCount": 0
},
{
  "_id": {
    "$oid": "687a44391f165f8bc6e597e7"
  },
  "id": "NA037",
  "name": "Michael Kors Bradshaw Rose Gold",
  "brand": "Michael Kors",
  "price": 195,
  "currency": "₹",
  "categories": [
    "women",
    "analog",
    "all"
  ],
  "gender": "women",
  "description": "The Michael Kors Bradshaw is a chic and sophisticated timepiece that effortlessly blends classic and contemporary style. Its elegant design and practical features make it a versatile accessory.",
  "features": [
    "Rose Gold-Tone Stainless Steel",
    "Chronograph",
    "Date Function",
    "Quartz Movement",
    "Water Resistant (50m)"
  ],
  "images": [
    "assets/images/womens/wmen4.webp",
    "assets/images/womens/wmen4.webp",
    "assets/images/womens/wmen4.webp"
  ],
  "isNewArrival": true,
  "dateAdded": "2025-06-28",
  "isBestseller": false,
  "salesCount": 0
},
{
  "_id": {
    "$oid": "687a44391f165f8bc6e597e8"
  },
  "id": "NA038",
  "name": "Michael Kors Bradshaw Silver-Tone",
  "brand": "Michael Kors",
  "price": 195,
  "currency": "₹",
  "categories": [
    "women",
    "analog",
    "all"
  ],
  "gender": "women",
  "description": "The Michael Kors Bradshaw is a chic and sophisticated timepiece that effortlessly blends classic and contemporary style. Its elegant design and practical features make it a versatile accessory.",
  "features": [
    "Silver-Tone Stainless Steel",
    "Chronograph",
    "Date Function",
    "Quartz Movement",
    "Water Resistant (50m)"
  ],
  "images": [
    "assets/images/womens/wmen5.webp",
    "assets/images/womens/wmen5.webp",
    "assets/images/womens/wmen5.webp"
  ],
  "isNewArrival": true,
  "dateAdded": "2025-06-25",
  "isBestseller": true,
  "salesCount": 0
},
{
  "_id": {
    "$oid": "687a44391f165f8bc6e597e9"
  },
  "id": "NA039",
  "name": "Michael Kors Bradshaw Black Dial",
  "brand": "Michael Kors",
  "price": 195,
  "currency": "₹",
  "categories": [
    "women",
    "analog",
    "all"
  ],
  "gender": "women",
  "description": "The Michael Kors Bradshaw is a chic and sophisticated timepiece that effortlessly blends classic and contemporary style. Its elegant design and practical features make it a versatile accessory.",
  "features": [
    "Black Dial",
    "Chronograph",
    "Date Function",
    "Quartz Movement",
    "Water Resistant (50m)"
  ],
  "images": [
    "assets/images/womens/wmen6.webp",
    "assets/images/womens/wmen6.webp",
    "assets/images/womens/wmen6.webp"
  ],
  "isNewArrival": true,
  "dateAdded": "2025-06-25",
  "isBestseller": true,
  "salesCount": 0
},
{
  "_id": {
    "$oid": "687a44391f165f8bc6e597ea"
  },
  "id": "NA040",
  "name": "Michael Kors Bradshaw Pavé",
  "brand": "Michael Kors",
  "price": 195,
  "currency": "₹",
  "categories": [
    "women",
    "analog",
    "all"
  ],
  "gender": "women",
  "description": "The Michael Kors Bradshaw is a chic and sophisticated timepiece that effortlessly blends classic and contemporary style. Its elegant design and practical features make it a versatile accessory.",
  "features": [
    "Pavé Accents",
    "Chronograph",
    "Date Function",
    "Quartz Movement",
    "Water Resistant (50m)"
  ],
  "images": [
    "assets/images/womens/wmen7.webp",
    "assets/images/womens/wmen7.webp",
    "assets/images/womens/wmen7.webp"
  ],
  "isNewArrival": true,
  "dateAdded": "2025-06-25",
  "isBestseller": true,
  "salesCount": 0
},
{
  "_id": {
    "$oid": "687a44391f165f8bc6e597eb"
  },
  "id": "NA041",
  "name": "Michael Kors Bradshaw Two-Tone",
  "brand": "Michael Kors",
  "price": 195,
  "currency": "₹",
  "categories": [
    "women",
    "analog",
    "all"
  ],
  "gender": "women",
  "description": "The Michael Kors Bradshaw is a chic and sophisticated timepiece that effortlessly blends classic and contemporary style. Its elegant design and practical features make it a versatile accessory.",
  "features": [
    "Two-Tone Stainless Steel",
    "Chronograph",
    "Date Function",
    "Quartz Movement",
    "Water Resistant (50m)"
  ],
  "images": [
    "assets/images/womens/wmen8.webp",
    "assets/images/womens/wmen8.webp",
    "assets/images/womens/wmen8.webp"
  ],
  "isNewArrival": true,
  "dateAdded": "2025-06-27",
  "isBestseller": true,
  "salesCount": 40
},
{
  "_id": {
    "$oid": "687a44391f165f8bc6e597ec"
  },
  "id": "NA042",
  "name": "Michael Kors Bradshaw Pink Dial",
  "brand": "Michael Kors",
  "price": 195,
  "currency": "₹",
  "categories": [
    "women",
    "analog",
    "all"
  ],
  "gender": "women",
  "description": "The Michael Kors Bradshaw is a chic and sophisticated timepiece that effortlessly blends classic and contemporary style. Its elegant design and practical features make it a versatile accessory.",
  "features": [
    "Pink Dial",
    "Chronograph",
    "Date Function",
    "Quartz Movement",
    "Water Resistant (50m)"
  ],
  "images": [
    "assets/images/womens/wmen9.webp",
    "assets/images/womens/wmen9.webp",
    "assets/images/womens/wmen9.webp"
  ],
  "isNewArrival": true,
  "dateAdded": "2025-06-25",
  "isBestseller": true,
  "salesCount": 20
},
{
  "_id": {
    "$oid": "687a44391f165f8bc6e597ed"
  },
  "id": "NA043",
  "name": "Michael Kors Bradshaw Blue Dial",
  "brand": "Michael Kors",
  "price": 195,
  "currency": "₹",
  "categories": [
    "women",
    "analog",
    "all"
  ],
  "gender": "women",
  "description": "The Michael Kors Bradshaw is a chic and sophisticated timepiece that effortlessly blends classic and contemporary style. Its elegant design and practical features make it a versatile accessory.",
  "features": [
    "Blue Dial",
    "Chronograph",
    "Date Function",
    "Quartz Movement",
    "Water Resistant (50m)"
  ],
  "images": [
    "assets/images/womens/wmen10.webp",
    "assets/images/womens/wmen10.webp",
    "assets/images/womens/wmen10.webp"
  ],
  "isNewArrival": true,
  "dateAdded": "2025-06-25",
  "isBestseller": true,
  "salesCount": 10
},
{
  "_id": {
    "$oid": "687a44391f165f8bc6e597ee"
  },
  "id": "NA044",
  "name": "Michael Kors Bradshaw Green Dial",
  "brand": "Michael Kors",
  "price": 195,
  "currency": "₹",
  "categories": [
    "women",
    "analog",
    "all"
  ],
  "gender": "women",
  "description": "The Michael Kors Bradshaw is a chic and sophisticated timepiece that effortlessly blends classic and contemporary style. Its elegant design and practical features make it a versatile accessory.",
  "features": [
    "Green Dial",
    "Chronograph",
    "Date Function",
    "Quartz Movement",
    "Water Resistant (50m)"
  ],
  "images": [
    "assets/images/womens/wmen11.webp",
    "assets/images/womens/wmen11.webp",
    "assets/images/womens/wmen11.webp"
  ],
  "isNewArrival": true,
  "dateAdded": "2025-06-25",
  "isBestseller": true,
  "salesCount": 0
},
{
  "_id": {
    "$oid": "687a44391f165f8bc6e597ef"
  },
  "id": "NA045",
  "name": "Michael Kors Bradshaw Burgundy",
  "brand": "Michael Kors",
  "price": 195,
  "currency": "₹",
  "categories": [
    "women",
    "analog",
    "all"
  ],
  "gender": "women",
  "description": "The Michael Kors Bradshaw is a chic and sophisticated timepiece that effortlessly blends classic and contemporary style. Its elegant design and practical features make it a versatile accessory.",
  "features": [
    "Burgundy Dial",
    "Chronograph",
    "Date Function",
    "Quartz Movement",
    "Water Resistant (50m)"
  ],
  "images": [
    "assets/images/womens/wmen12.webp",
    "assets/images/womens/wmen12.webp",
    "assets/images/womens/wmen12.webp"
  ],
  "isNewArrival": true,
  "dateAdded": "2025-06-28",
  "isBestseller": true,
  "salesCount": 0
},
{
  "_id": {
    "$oid": "687a44391f165f8bc6e597f0"
  },
  "id": "NA046",
  "name": "Michael Kors Bradshaw White Dial",
  "brand": "Michael Kors",
  "price": 195,
  "currency": "₹",
  "categories": [
    "women",
    "analog",
    "all"
  ],
  "gender": "women",
  "description": "The Michael Kors Bradshaw is a chic and sophisticated timepiece that effortlessly blends classic and contemporary style. Its elegant design and practical features make it a versatile accessory.",
  "features": [
    "White Dial",
    "Chronograph",
    "Date Function",
    "Quartz Movement",
    "Water Resistant (50m)"
  ],
  "images": [
    "assets/images/womens/wmen13.webp",
    "assets/images/womens/wmen13.webp",
    "assets/images/womens/wmen13.webp"
  ],
  "isNewArrival": false,
  "dateAdded": "2025-06-27",
  "isBestseller": true,
  "salesCount": 7
},
{
  "_id": {
    "$oid": "687ce292f2688b924d70bd5b"
  },
  "id": "NA001",
  "name": "Titan X-Series Chrono",
  "brand": "Titan",
  "price": 249.99,
  "currency": "₹",
  "categories": [
    "all",
    "men",
    "analog"
  ],
  "gender": "men",
  "description": "Experience precision with the Titan X-Series Chrono. This elegant timepiece combines classic design with modern functionality, featuring a durable stainless steel case and a precise chronograph movement. Perfect for the discerning individual.",
  "features": [
    "Stainless Steel Case",
    "Chronograph Function",
    "Water Resistant (50m)",
    "Date Display",
    "Mineral Glass"
  ],
  "images": [
    "/assets/images/mens/men15.webp",
    "/assets/images/mens/men15.webp",
    "/assets/images/mens/men15.webp",
    "/assets/images/mens/men15.webp"
  ],
  "isNewArrival": false,
  "dateAdded": "2025-06-25",
  "isBestseller": true,
  "salesCount": 0
}];

// Sample users to seed
const usersData = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: 'password123', // Will be hashed automatically by the pre-save hook
    role: 'admin',
    phone: '9876543210'
  },
  {
    name: 'Regular User',
    email: 'user@example.com',
    password: 'password123', // Will be hashed automatically
    role: 'user',
    phone: '9234567890'
  }
];

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

const seedDB = async () => {
  try {
    // 1. Connect to the database
    await connectDB();

    // 2. Clear existing data
    console.log('🔥 Clearing existing data...');
    await Product.deleteMany({});
    await User.deleteMany({});

    // 3. Clean up product data (remove the MongoDB specific "$oid" wrapper)
    const cleanedProducts = productsData.map(product => {
      // The provided data already matches the schema well.
      // We just ensure the custom `id` is present and remove the mongo `_id` if it exists.
      const { _id, ...rest } = product;
      return rest;
    });

    // 4. Insert new data
    console.log('🌱 Seeding new data...');
    
    // Using User.create() instead of insertMany() to ensure 'pre-save' hooks for password hashing run
    await User.create(usersData);
    await Product.insertMany(cleanedProducts);

    console.log('✅ Data seeded successfully!');
  } catch (error) {
    console.error('❌ Error seeding data:', error);
  } finally {
    // 5. Disconnect from the database
    await mongoose.connection.close();
    console.log('🔌 MongoDB disconnected');
  }
};

// Run the seeder
seedDB();