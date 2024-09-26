import mcdlogo from './McDonalds-Logo-PNG.webp'
import kfc_logo from './kfc_logo.webp'
import burgerking_logo from './burger_king.png'
import starbucks from './starbucks.jpg'
import subway from './subway.png'
import pizzahut from './pizzahut.webp'
import dunkin from './dunkin.jpg'
import tacobell from './TACO-BELL.jpg'

const brands = [
  {
    id: 1,
    brand: "McDonald's",
    category: "Fast Food",
    logo: mcdlogo, // Replace with actual image path
    menu: [
      { id: 1, dish: 'Big Mac', price: 4.99 },
      { id: 2, dish: 'Cheeseburger', price: 2.49 },
      { id: 3, dish: 'McDouble', price: 3.99 },
      { id: 4, dish: 'McChicken', price: 3.79 },
      { id: 5, dish: 'Spicy McChicken', price: 4.29 },
      { id: 6, dish: 'Chicken McNuggets (6pc)', price: 5.99 },
      { id: 7, dish: 'French Fries (Small)', price: 1.89 },
      { id: 8, dish: 'Apple Slices', price: 1.29 },
      { id: 9, dish: 'Side Salad', price: 2.49 },
      { id: 10, dish: 'Coca-Cola (Medium)', price: 1.79 },
      { id: 11, dish: 'Sprite (Medium)', price: 1.79 },
      { id: 12, dish: 'Iced Coffee', price: 2.49 },
      { id: 13, dish: 'Apple Pie', price: 1.29 },
      { id: 14, dish: 'McFlurry', price: 2.99 },
      { id: 15, dish: 'Soft-Serve Cone', price: 1.49 },
    ],
    locations: [
      { city: "New York", address: "123 Main St" },
      { city: "Los Angeles", address: "456 Oak St" },
    ],
  },
  {
    id: 2,
    brand: "KFC",
    category: "Fast Food",
    logo: kfc_logo, // Replace with actual image path
    menu: [
      { dish: "Original Recipe Chicken", price: 5.99 },
      { dish: "Chicken Tenders", price: 6.99 },
      { dish: "Zinger Burger", price: 4.99 },
      { dish: "Famous Bowl", price: 5.49 },
      { dish: "Popcorn Chicken", price: 3.99 },
      { dish: "Twister Wrap", price: 4.79 },
      { dish: "Hot Wings", price: 3.99 },
      { dish: "Mashed Potatoes", price: 2.49 },
      { dish: "Grilled Chicken", price: 6.99 },
      { dish: "Macaroni and Cheese", price: 3.79 },
      { dish: "Coleslaw", price: 1.99 },
      { dish: "Chicken Pot Pie", price: 5.49 },
      { dish: "Biscuits", price: 1.29 },
      { dish: "Corn on the Cob", price: 1.99 },
      { dish: "Chocolate Chip Cookie", price: 0.99 },
      { dish: "Soft Drink (Medium)", price: 1.89 },
    ],
    locations: [
      { city: "London", address: "789 High St" },
      { city: "Tokyo", address: "101 Sakura St" },
    ],
  },
  {
    id: 3,
    brand: "Burger King",
    category: "Fast Food",
    logo: burgerking_logo, // Replace with actual image path
    menu: [
      { dish: "Whopper", price: 4.99 },
      { dish: "Chicken Fries", price: 3.49 },
      { dish: "BK Big Fish", price: 4.29 },
      { dish: "Cheeseburger", price: 1.29 },
      { dish: "Bacon King", price: 6.99 },
      { dish: "Spicy Nuggets (10 pcs)", price: 2.99 },
      { dish: "Crispy Chicken Sandwich", price: 4.79 },
      { dish: "Onion Rings", price: 1.79 },
      { dish: "Sausage, Egg & Cheese Croissan'wich", price: 3.69 },
      { dish: "Oreo Shake", price: 2.99 },
    ],
    locations: [
      { city: "Paris", address: "345 Rue de la Burger" },
      { city: "Sydney", address: "567 King's Cross" },
    ],
  },
  {
    id: 4,
    brand: "Starbucks",
    category: "Coffee",
    logo: starbucks, // Replace with actual image path
    menu: [
      { dish: "Caffè Americano", price: 2.45 },
      { dish: "Caramel Macchiato", price: 4.75 },
      { dish: "Flat White", price: 3.95 },
      { dish: "Iced Green Tea Latte", price: 4.25 },
      { dish: "Peppermint Mocha", price: 4.95 },
      { dish: "Nitro Cold Brew", price: 3.95 },
      { dish: "Caramel Frappuccino", price: 5.25 },
      { dish: "Chai Tea Latte", price: 3.95 },
      { dish: "Salted Caramel Hot Chocolate", price: 4.45 },
      { dish: "Pumpkin Spice Latte", price: 5.45 },
    ],
    locations: [
      { city: "Seattle", address: "789 Pike Pl" },
      { city: "Tokyo", address: "101 Sakura St" },
    ],
  },
  {
    id: 5,
    brand: "Subway",
    category: "Sandwiches",
    logo: subway, // Replace with actual image path
    menu: [
      { dish: "Italian B.M.T.", price: 6.99 },
      { dish: "Turkey Breast", price: 5.49 },
      { dish: "Veggie Delight", price: 4.99 },
      { dish: "Chicken Bacon Ranch", price: 7.29 },
      { dish: "Steak and Cheese", price: 7.99 },
      { dish: "Tuna", price: 6.49 },
      { dish: "Spicy Italian", price: 6.79 },
      { dish: "Meatball Marinara", price: 5.99 },
      { dish: "Roast Beef", price: 6.79 },
      { dish: "Subway Club", price: 6.59 },
    ],
    locations: [
      { city: "New York", address: "123 Sub St" },
      { city: "London", address: "456 Metro St" },
    ],
  },
  {
    id: 6,
    brand: "Pizza Hut",
    category: "Pizza",
    logo: pizzahut, // Replace with actual image path
    menu: [
      { dish: "Pepperoni Lover's", price: 14.99 },
      { dish: "Margherita", price: 12.99 },
      { dish: "Supreme", price: 15.99 },
      { dish: "Meat Lover's", price: 16.99 },
      { dish: "Veggie Lover's", price: 14.99 },
      { dish: "Hawaiian", price: 13.99 },
      { dish: "BBQ Chicken", price: 15.99 },
      { dish: "Cheese Lover's", price: 13.99 },
      { dish: "Buffalo Chicken", price: 16.99 },
      { dish: "Vegan Veggie", price: 14.99 },
    ],
    locations: [
      { city: "Rome", address: "789 Piazza Navona" },
      { city: "Chicago", address: "101 Deep Dish Ave" },
    ],
  },
  {
    id: 7,
    brand: "Dunkin'",
    category: "Coffee",
    logo: dunkin, // Replace with actual image path
    menu: [
      { dish: "Classic Coffee", price: 2.49 },
      { dish: "Glazed Donut", price: 1.29 },
      { dish: "Bacon, Egg & Cheese Bagel", price: 4.99 },
      { dish: "Iced Caramel Latte", price: 3.99 },
      { dish: "Boston Kreme Donut", price: 1.49 },
      { dish: "Sausage, Egg & Cheese Croissant", price: 5.49 },
      { dish: "Cold Brew Coffee", price: 3.79 },
      { dish: "Old Fashioned Donut", price: 1.29 },
      { dish: "Egg White Dunkin' Bowl", price: 5.99 },
      { dish: "Iced Matcha Latte", price: 4.29 },
    ],
    locations: [
      { city: "Boston", address: "123 Donut Dr" },
      { city: "Berlin", address: "456 Dunkin' Platz" },
    ],
  },
  {
    id: 8,
    brand: "Taco Bell",
    category: "Mexican",
    logo: tacobell, // Replace with actual image path
    menu: [
      { dish: "Crunchy Taco", price: 1.19 },
      { dish: "Bean Burrito", price: 1.49 },
      { dish: "Cheesy Gordita Crunch", price: 3.19 },
      { dish: "Quesarito", price: 2.99 },
      { dish: "Doritos Locos Tacos", price: 1.89 },
      { dish: "Chicken Quesadilla", price: 3.99 },
      { dish: "Cinnamon Twists", price: 1.29 },
      { dish: "Nacho Fries", price: 1.39 },
      { dish: "Grilled Stuft Burrito", price: 4.29 },
      { dish: "Chalupa Supreme", price: 3.49 },
    ],
    locations: [
      { city: "Mexico City", address: "789 Taco Blvd" },
      { city: "Los Angeles", address: "101 Burrito St" },
    ],
  },
];

export default brands