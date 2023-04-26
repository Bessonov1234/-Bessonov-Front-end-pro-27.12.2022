import smilesData from "../mockData/data";

const Smiles = (props, { handleInc }) => {
  return (
    <>
      <span>id - {props.id}</span>
      <br />
      <br />
      <br />
      <span>count - {props.count}</span>
      <br />
      <span>{props.emoji}</span>
      <br />
      <br />
      <br />
      <button onClick={props.handleInc}>TAB</button>
    </>
  );
};
export default Smiles;
