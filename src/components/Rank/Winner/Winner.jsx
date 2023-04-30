import classes from "./Winner.module.scss";

const Winner = ({ title, winner, count }) => {
  return (
    <>
      <div className={classes}>
        <button className={classes} onClick={()=> winner(count)}>
          {title}
        </button>
      </div>
    </>
  );
};
export default Winner;
