const categoryProductData = {
  "gamingConsole": {
    featuredImage: "image/top seller/Google Laptop.png",
    displayName: "Gaming Console",
    Products: [
      { id: 1, name: "PlayStation 5", regPrice: "$499", salePrice: "$399", image: "image/Gamingconsole.png" },
      { id: 2, name: "Xbox Series X", regPrice: "$499", salePrice: "$399", image: "image/gamingconsole/Kidrobot-SEGA-Genesis-Gaming-Console-Plush-6.webp" },
      { id: 3, name: "Nintendo Switch", regPrice: "$299", salePrice: "$259", image: "image/gamingconsole/games_gear_series-x-removebg-preview.png", isBestSeller: true },
      { id: 4, name: "Steam Deck", regPrice: "$399", salePrice: "$299", image: "image/gamingconsole/ps5-product-thumbnail-01-en-14sep21.webp" },
      { id: 5, name: "PlayStation 4", regPrice: "$299", salePrice: "$199", image: "image/gamingconsole/Xbox 02123m.png", isFeatured: true, isBestSeller: true },
      { id: 6, name: "Xbox One", regPrice: "$299", salePrice: "$199", image: "image/gamingconsole/XBox 01.png", isFeatured: true }
    ]
  },
  "smartTv": {
    featuredImage: "image/top seller/led 32 inch screen.jpg",
    displayName: "Smart TV",
    Products: [
      { id: 7, name: "LED 32 INCHES", regPrice: "$209", salePrice: "$179", image: "image/LED's/led 32.png" },
      { id: 8, name: "LED 42 INCHES", regPrice: "$199", salePrice: "$159", image: "image/LED's/Led 42 inches.jpg", isFeatured: true, isBestSeller: true, },
      { id: 9, name: "LED Smart TV 52 INCHES", regPrice: "$899", salePrice: "$799", image: "image/LED's/led smart LED 52.png" },
      { id: 10, name: "LED Smart TV", regPrice: "$89", salePrice: "$59", image: "image/LED's/LED Smart xcsad.png", isBestSeller: true },
      { id: 11, name: "smart LED 52 INCHES", regPrice: "$199", salePrice: "$149", image: "/image/LED's/smart LED 52.png", isFeatured: true },
    ]
  },
  "smartWatch": {
    featuredImage: "image/top seller/Google Laptop.png",
    displayName: "Smart Watch",
    Products: [
      { id: 12, name: "Smart Watch 1", regPrice: "$199", salePrice: "$159", image: "image/SmartWatch/Smart Watch 1.png" },
      { id: 13, name: "Smart Watch 2", regPrice: "$99", salePrice: "$59", image: "image/SmartWatches/smart watch 02.webp", isFeatured: true },
      { id: 14, name: "Smart Watch 3", regPrice: "$129", salePrice: "$99", image: "image/SmartWatches/smartwacth03.webp", isFeatured: true },
      { id: 15, name: "Smart Watch 4", regPrice: "$109", salePrice: "$89", image: "image/SmartWatches/smartwatch04.webp", isBestSeller: true }
    ]
  },
  "wirelessHeadphones": {
    featuredImage: "image/top seller/Google Laptop.png",
    displayName: "Wireless Headphones",
    Products: [
      { id: 16, name: "Wireless Headphones 1", regPrice: "$149", salePrice: "$129", image: "image/wireless Headphones/wirelessheadphones.jpg" },
      { id: 17, name: "Wireless Headphones 2", regPrice: "$99", salePrice: "$79", image: "image/wireless Headphones/Headphone02.png", isFeatured: true },
      { id: 18, name: "Wireless Headphones 3", regPrice: "$119", salePrice: "$109", image: "image/wireless Headphones/headphones03.png", isFeatured: true },
      { id: 19, name: "Wireless Headphones 4", regPrice: "$109", salePrice: "$79", image: "image/wireless Headphones/headphones04.png", isBestSeller: true }
    ]
  },
  "computerAccessories": {
    featuredImage: "image/top seller/Google Laptop.png",
    displayName: "Computer Accessories",
    Products: [
      { id: 20, name: "USB Kingston", regPrice: "$29", salePrice: "$19", image: "image/computer accessories/Kingstone.jpg", isBestSeller: true },
      { id: 21, name: "Mouse Logitech Rtx0098", regPrice: "$49", salePrice: "$39", image: "/image/computer accessories/mouse.webp", isFeatured: true },
      { id: 22, name: "Hp Laptop", regPrice: "$729", salePrice: "$699", image: "image/computer accessories/hplaptop.png", isFeatured: true },
      { id: 23, name: "Hp Gaming Keyboard", regPrice: "$599", salePrice: "$549", image: "image/computer accessories/black gaming keyboard.webp", isBestSeller: true }
    ],
  },
  "smartPhone": {
    featuredImage: "image/top seller/Google Laptop.png",
    displayName: "Smart Phone",
    Products: [
      { id: 24, name: "Samsung Galaxy S22", regPrice: "$799", salePrice: "$699", image: "image/smartphone/samsung galaxy s22.png" }
    ]
  },
  "electricalBike": {
    featuredImage: "image/top seller/Google Laptop.png",
    displayName: "Electrical Bike",
    Products: [
      { id: 25, name: "E-Bike 1", regPrice: "$899", salePrice: "$799", image: "image/electrical Bike/e-bike.png" }
    ]
  },
  "smartHomeDevices": {
    featuredImage: "image/top seller/Google Laptop.png",
    displayName: "Smart Home Devices",
    Products: [
      { id: 26, name: "Smart Home Device 1", regPrice: "$199", salePrice: "$159", image: "image/smart home devices/smart home device 1.png" },
      { id: 27, name: "Smart Home Device 2", regPrice: "$299", salePrice: "$259", image: "image/smart home devices/smart home device 2.png", isFeatured: true },
      { id: 28, name: "Smart Home Device 3", regPrice: "$399", salePrice: "$359", image: "image/smart home devices/smart home device 3.png" }
    ]
  },
  "smartSpeakers": {
    featuredImage: "image/top seller/Google Laptop.png",
    displayName: "Smart Speakers",
  Products: [
    { id: 29, name: "Smart Speaker 1", regPrice: "$199", salePrice: "$159", image: "image/smart speakers/smart speaker 1.png" },
    { id: 30, name: "Smart Speaker 2", regPrice: "$299", salePrice: "$259", image: "image/smart speakers/smart speaker 2.png", isFeatured: true },
    { id: 31, name: "Smart Speaker 3", regPrice: "$399", salePrice: "$359", image: "image/smart speakers/smart speaker 3.png" }
  ]
},
}
export default categoryProductData;