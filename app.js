const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Clarins",
    price: 139,
    description: "An oxygen shot for skin! The proven double oxygenating power of rose-myrtle and acerola seeds extracts boosts cellular respiration to revive a dull complexion, revealing brighter, radiant skin and a healthy glow from within. This set contains : Bright Plus 30ml Cleansing Micellar Water 100ml SOS Primer 10ml Miniature Wonder Perfect Mascara 4D",
    colors: [
      {
        code: "black",
        img: "./img/clarins.jpg",
      },
      {
        code: "darkblue",
        img: "./img/clarins.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Lancome",
    price: 101,
    description: "Start your 2022 fresh with a new skincare routine featuring the Advanced Génifique Winter Set! This skincare set contains: - Advanced Génifique Youth Activating Serum 30ml - Advanced Génifique Youth Activating Serum 7ml - Advanced Génifique Yeux Light-Pearl 5ml - Advanced Génifique Eye 6ml",
    colors: [
      {
        code: "lightgray",
        img: "./img/lancome.jpg",
      },
      {
        code: "green",
        img: "./img/lancome.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Estee Lauder",
    price: 120,
    description: "Give your skin a treat! Discover these high-performance formulas to deeply nourish skin and reduce the look of lines and wrinkles. Skin feels firmer, its density and elasticity significantly improved. Limited-time collection includes these essentials in an exclusive gift box: • Advanced Night Repair Synchronized Multi-Recovery Complex, deluxe travel size (.5 oz./15ml) • Revitalizing Supreme+ Global Anti-Aging Cell Power Creme, full-size (1.7 oz./50ml) • Revitalizing Supreme+ Global Anti-Aging Cell Power Eye Balm, deluxe travel size (.17 oz./5ml) • Perfectly Clean Multi-Action Foam Cleanser/Purifying Mask, deluxe travel size (1 oz./30ml)",
    colors: [
      {
        code: "lightgray",
        img: "./img/Estee.jpg",
      },
      {
        code: "green",
        img: "./img/Estee.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Elizabeth Arden",
    price: 138,
    description: "Lift & Firm Youth Restoring Solutions./ Solutions rénovatrices de jeunesse, liftantes et raffermissantes. Set includes: ADVANCED Ceramide Capsules Daily Youth Restoring Serum, 60pc ADVANCED Ceramide Capsules Daily Youth Restoring Eye Serum, 7pc Ceramide Purifying Cream Cleanser, 50ml Superstart Skin Renewal Booster, 5ml",
    colors: [
      {
        code: "black",
        img: "./img/Elizabeth.jpg",
      },
      {
        code: "lightgray",
        img: "./img/Elizabeth.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Clinique",
    price: 54,
    description: "For all-over dewy hydration. Skin Types: All What It Does: • Three essentials to keep skin dewy for days—in just minutes. • All day – Moisture Surge™ 100-Hour Auto-Replenishing Hydrator delivers stabilizing hydration against your daily dehydrators. • Overnight – Moisture Surge™ Overnight Mask deeply moisturizes while you sleep. • For eyes – Moisture Surge™ Eye 96-Hour Hydro-Filler instantly re-floods and tightens skin around the eye area. Set Includes: Moisture Surge™ 100-Hour Auto-Replenishing Hydrator 1.7oz/50ml Moisture Surge™ Overnight Mask 1oz/30ml Moisture Surge™ Eye 96-Hour Hydro-Filler 0.17oz/5ml Free Of: Paraben-free, Phalate-free, Fragrance-free.",
    colors: [
      {
        code: "gray",
        img: "./img/Clinique.jpg",
      },
      {
        code: "black",
        img: "./img/Clinique.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentproductDesc = document.querySelector(".productDesc");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentproductDesc.textContent = choosenProduct.description;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});