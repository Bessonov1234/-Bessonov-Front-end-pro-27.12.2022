import smilesData from "../mockData/data";
import classes from "./Smiles.module.scss";

const Smiles = (props, { handleInc }) => {
  return (
    <>
      <div className={classes.wrap__for__smiles}>
        <span>count - {props.count}</span>
        <br />
        <span>{props.emoji}</span>
        <br />
        <br />
        <br />
        <button onClick={props.handleInc}>TAB</button>
      </div>
    </>
  );
};
export default Smiles;
