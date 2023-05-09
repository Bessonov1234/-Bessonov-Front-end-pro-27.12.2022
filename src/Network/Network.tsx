import { FC } from "react";
import data, { initialState, reducer } from "../store/mockData";
import classes from "./Network.module.scss";
import { v4 as uuidv4 } from "uuid";
import MenuBurger from "./commponent/MenuBurger/menuBurger";
import { useReducer } from "react";

const Network: FC = () => {
  // const [burgerData, setBurgerData] = useState(data);
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  console.log(dispatch);

  const handleBurger = () => {
    const get = state.map((el) => {
      console.log(el);
    });
  };
  return (
    <>
      <div className={classes.root}>
        <div className={classes.conteiner}>
          <div className={classes.display} onClick={handleBurger}>
            {state.map((el) => {
              <MenuBurger
                key={uuidv4()}
                name={el.title}
                count={el.price}
                calories={el.calories}
                picture={el.icon}
                id={el.id}
                supplementToFood={el.supplementToFood}
                filling={el.filling}
              />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Network;
