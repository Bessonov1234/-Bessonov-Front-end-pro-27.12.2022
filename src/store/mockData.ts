import { CHOOSE_BURGER } from "./action";
const data = [
  {
    id: 1,
    burger: "small",
    price: 50,
    title: "Маленький",
    icon: "🍔",
    calories: 20,
  },
  {
    id: 2,
    burger: "big",
    price: 100,
    title: "Великий",
    icon: "🍔",
    calories: 40,
  },
  {
    id: 3,
    filling: "cheese",
    price: 10,
    title: "сир",
    icon: "🧀",
    calories: 20,
  },
  {
    id: 4,
    filling: "cabbage",
    price: 20,
    title: "Капуста",
    icon: "🥦",
    calories: 5,
  },
  {
    id: 5,
    filling: "potato",
    price: 15,
    title: "картопля",
    icon: "🥔",
    calories: 10,
  },
  {
    id: 6,
    supplementToFood: "condiment",
    price: 15,
    title: "приправа",
    icon: "🥵",
    calories: 0,
  },
  {
    id: 7,
    supplementToFood: "mayonnaise",
    price: 20,
    title: "майонез",
    icon: "😋",
    calories: 5,
  },
];

export default data;

export const initialState = data;
console.log(initialState);

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE_BURGER: {
      console.log(action);
      console.log(state);
    }

    default:
      break;
  }
};
