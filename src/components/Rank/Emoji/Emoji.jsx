import smilesData from "./mockData/data";
import classes from "./Emoji.module.scss";
import { useState } from "react";
import Smiles from "./Smiles/Smiles";
import { v4 as uuidv4 } from "uuid";
const EmojiRank = () => {
  const [emojiData, setEmojiData] = useState(smilesData.smileys);
  const handleInc = (id) => {
    // const copyList = [...emojiData];
    const copyList = emojiData.map((el) => {
      if (el.id == id) {
        return { ...el, count: el.count + 1 };
      }
      return el;
    });
    setEmojiData(copyList);
  };

  const getresult = () => {
    let copyList = emojiData.sort((a, b) => b.count - a.count);
    const winner = copyList[0].symbol;
    copyList = {
      ...emojiData,
      winner: [winner],
    };
  };
  return (
    <>
      <div className={classes.root__wrap}>
        <div className={classes.conteiner}>
          <div className={classes.display}>
            <div className={classes.display__wrap__for__smiles}>
              <div className={classes.display__wrap__for__smiles__wrap}>
                {emojiData.map((el) => {
                  return (
                    <Smiles
                      key={uuidv4()}
                      emoji={el.symbol}
                      count={el.count}
                      id={el.id}
                      handleInc={() => handleInc(el.id)}
                    />
                  );
                })}
              </div>
              <button onClick={getresult}>Winner {emojiData.winner}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmojiRank;
