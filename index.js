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

    for (let i = 0; i < products[clickTarget].length; i++) {
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
    return products[clickTarget];
  });
}

oneOnAll();
product();
function product() {
  productInfo.addEventListener("click", (e) => {
    const productTarget = e.target;
    const clickTargetProduct = productTarget.innerText;

    buy();
    function buy() {
      let i = 0;
      for (i; i < 3; i++) {
        for (key in products) {
          if (products[key][i].name == clickTargetProduct) {
            const divBuy = creatEL("div");
            divBuy.innerHTML = `<span>${products[key][i].description}</span>
            `;
            buyButton.style.display = "block";
            buyButton.innerText = `${products[key][i].price}$`;
            buyProduct.prepend(buyButton);
            buyProduct.prepend(divBuy);
            // popUp.style.display = "none";
            buyButton.addEventListener("click", (e) => {
              popUp.style.zIndex = "999";
              popUp.style.display = "block";
              conteiner.style.opacity = "0.2";
              conteiner.style.filter = "blur(10px)";
            });
          }
        }
      }
    }
  });
}

// ! Form code

const form = getEl("#form__reg");
const buttonform = getEl("#button__submit");
const endPay = getEl(".end__pay");
const name = form.name;
const lastname = form.lastname;
const number = form.number;
const selectCity = form.city;
const selecDepartment = form.department;
const selectPay = form.payment;
const divForForm = creatEL("div");
function validationForStringLength(value, length) {
  return value.length >= length;
}
function validationForValue(value) {
  return !!value.trim();
}
const inputs = [
  {
    inputEl: name,
    name: "name",
    validationRules: [validationForStringLength, validationForValue],
    isValid: false,
    maxLengthValidatoin: 2,
  },
  {
    inputEl: lastname,
    name: "lastname",
    validationRules: [validationForStringLength, validationForValue],
    isValid: false,
    maxLengthValidatoin: 3,
  },
];
function pay() {
  selectPay.addEventListener("change", (e) => {
    const targetPay = e.target.value;
    return console.log(targetPay);
  });
}

buttonform.addEventListener("click", (e) => {
  e.preventDefault();

  const allValidationForm = inputs.map((el) => {
    const allValidation = el.validationRules.map((meFunc) => {
      return meFunc(el.inputEl.value, el.maxLengthValidatoin);
    });
    return allValidation.every((el) => el == true);
  });
  function endPayProduct() {
    divForForm.className = "end_order";
    divForForm.innerText = `The goods are already eating in the city ${selectCity.value}, in ${selecDepartment.value}  ${selectPay.value}, count ${number.value} `;
    endPay.prepend(divForForm);
    popUp.style.display = "none";
    conteiner.style.opacity = "1";
    conteiner.style.filter = "blur(0px)";
  }

  if (allValidationForm.every((el) => el == true)) {
    endPayProduct();
  } else {
    alert("Ви щось робете не так первірте правельність своєї форми");
  }
});
