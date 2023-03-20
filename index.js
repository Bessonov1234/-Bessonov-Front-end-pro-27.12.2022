const getEl = (select) => document.querySelector(select);
const creatEL = (select) => document.createElement(select);

const products = {
  shoes: [
    {
      name: "Nike",
      price: "1200",
      description:
        "Mens leather demo shoes Nike mens leather demo shoes Nike mens leather shoes become: Mens upper: Natural leather Middle: Textile Piedoch: Thermopolyurethan Style: Everyday",
    },
    {
      name: "Adidas",
      price: "1000",
      description:
        "Adidas Crosses Cholovichi Chorni Demiseasonni Adidas Supernova Shopingo Adidas Sneakers Men Black Demi Zone Adidas Supernova",
    },
    {
      name: "Puma",
      price: "1250",
      description:
        "Mens PUMA PROPLATE mesh Shoe Material of the upper - textile material of the lining - textile material of the skirt - textile material of the soleplate - a pinka of bright men's shoes PUMA PROPLAT",
    },
  ],
  pants: [
    {
      name: "Louis Vuitton",
      price: "40",
      description:
        "Louis Vuitton LV Black Shorts with Monogram Print.Louis Vuitton LV Black Shorts with Monogram Print",
    },
    {
      name: "KOMBAT",
      price: "50",
      description:
        "Army Cartoon Shorts KOMBAT UK ACU Shorts Item: kb-acus-btp-l Are you looking for the perfect tactical shorts for your next field exit? KOMBAT UK ACU Shorts are what you need!",
    },
    {
      name: "МИЛ ТЕК",
      price: "25",
      description:
        "High Quality German Mil-Tec® Wear Comfortable Elastic Modern, Slim Fit Waist Belt YKK® With Button Elastic Inserts Belt Belt Pads Wide Padding Belt 2 Half Rings Waist Loops Front 2 Side Pockets 2 Loin Pockets",
    },
  ],
  "t-shirts": [
    {
      name: "BYS",
      price: "100",
      description:
        "Beads T-shirt - Material: Turkish cotton - Landing feature: oversize - Elongated sleeve - Lowered shoulder seam - Quality not erasable print",
    },
    {
      name: "Nike",
      price: "120",
      description:
        "Introducing summer sets - men’s shorts and T-shirts with different brands (Nike, Adidas, Reebok, Under Armour, Jordan, Fila, Puma, New Balance)",
    },
    {
      name: "Polo",
      price: "90",
      description:
        "Beads T-shirt - Material: Turkish cotton - Landing feature: oversize - Elongated sleeve - Lowered shoulder seam - Quality not erasable print",
    },
  ],
};

const iterration = products.shoes;
// console.log(iterration);
const arr = Object.entries(products);
const catalog = getEl(".catalog");
const productInfo = getEl(".product");
const buyProduct = getEl(".buy");
const catalogShoes = getEl(".catalog__shoes");
const catalogPants = getEl(".catalog__pants");
const catalogTshirs = getEl(".catalog__tshirts");
const buyButton = getEl("button");
const popUp = getEl(".pop__up");
const conteiner = getEl(".between");
popUp.style.display = "none";

buyButton.style.display = "none";
function oneOnAll() {
  catalog.addEventListener("click", (e) => {
    const target = e.target;
    const clickTarget = target.innerText;
    // console.log(products[clickTarget]);

    for (let i = 0; i < products[clickTarget].length; i++) {
      console.log(products[clickTarget][i].name);
      const divProd = creatEL("div");
      divProd.innerText = products[clickTarget][i].name;
      divProd.style.cssText = `
      font-size: 22px;
      width: 100px;
      text-align: center;
      cursor:pointer
      `;
      productInfo.prepend(divProd);
    }
    console.log(products[clickTarget]);
    return products[clickTarget];
  });
}

oneOnAll();
product();
function product() {
  productInfo.addEventListener("click", (e) => {
    const productTarget = e.target;
    const clickTargetProduct = productTarget.innerText;
    console.log(clickTargetProduct);
    // console.log(products.length);
    // console.log(oneOnAll());
    // console.log(clickTargetProduct == oneOnAll());
    // console.log(products[oneOnAll()]);
    buy();
    function buy() {
      let i = 0;
      for (i; i < 3; i++) {
        for (key in products) {
          console.log(key);
          // console.log(products[key][clickTargetProduct]);
          console.log(products[key][i]);
          console.log(products[key][i].name);
          // console.log(products[clickTarget][i].name);
          console.log(clickTargetProduct);
          if (products[key][i].name == clickTargetProduct) {
            const divBuy = creatEL("div");
            console.log(products[key][i].price);
            console.log(products[key][i].description);
            divBuy.innerHTML = `<span>${products[key][i].description}</span>
            `;
            buyButton.style.display = "block";
            buyButton.innerText = `${products[key][i].price}$`;
            // <button>Buy on ${products[key][i].price} $</button style = "background=green">
            buyProduct.prepend(buyButton);
            buyProduct.prepend(divBuy);
            popUp.style.display = "none";
            buyButton.addEventListener("click", (e) => {
              popUp.style.zIndex = "999";
              popUp.style.display = "block";
              conteiner.style.opacity = "0.2";
              conteiner.style.filter = "blur(10px)";
              console.log(true);
            });
          }
        }
      }
    }
  });
}

