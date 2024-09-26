import burger from './burger.jpg'
import pizza from './pizza.jpg'
import dosa from './dosa.jpg'
import cake from './cake.jpg'
import idli from './idli.jpg'
import noodles from './noodles.jpg'
import paratha from './paratha.jpg'
import poori_bhaji from './poori_bhaji.jpg'
import butterChicken from './butter_chicken.webp'
import pasta from './pasta.webp'

const foodData = [
    {
      id:61,
      name: "Margherita Pizza",
      category: "Pizza",
      image:pizza,
      restaurants: ["Pizza Haven", "Cheesy Bites", "Crust Delight"],
      address: "123 Pizza Street, Pizzatown",
    },
    {
      id:62,
      name: "Masala Dosa",
      category: "Dosa",
      image:dosa,
      restaurants: ["Dosa Delights", "South Spice Hub", "Crispy Corner"],
      address: "456 Dosa Lane, Dosaville",
    },
    {
      id:63,
      name: "Classic Burger",
      category: "Burger",
      image:burger,
      restaurants: ["Burger King", "Grill Shack", "Bun & Patty"],
      address: "789 Burger Avenue, Burger City",
    },
    {
      id:64,
      name: "Butter Chicken",
      category: "Chicken",
      image:butterChicken,
      restaurants: ["Chicken Bliss", "Spice Palace", "Roast & Grill"],
      address: "567 Chicken Road, Chickenville",
    },
    {
      id:65,
      name: "Vegetable Pasta",
      category: "Pasta",
      image:pasta,
      restaurants: ["Pasta Paradise", "Italiano Delight", "Saucy Twirl"],
      address: "234 Pasta Lane, Pastatown",
    },
    {
      id:66,
      name: "Chocolate Cake",
      category: "Cake",
      image:cake,
      restaurants: ["Sweet Delights", "Cake Kingdom", "Choco Heaven"],
      address: "890 Cake Street, Cakeville",
    },
    // Add more items as needed
  ];
  
  export default foodData;