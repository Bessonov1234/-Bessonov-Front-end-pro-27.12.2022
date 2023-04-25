import smilesData from "../mockData/data";

const Smiles = (props, handleInc) => {
  return (
    <>
      <span>{props.count}</span>
      {props.emoji}
      <button onClick={()=>handleInc(props.id)}>TAB</button>
    </>
  );
};
export default Smiles;
