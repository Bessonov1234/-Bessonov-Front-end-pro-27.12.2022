import smilesData from "./mockData/data";
import classes from "./Emoji.module.scss";
import { useState } from "react";
import Smiles from "./Smiles/Smiles";
import { v4 as uuidv4 } from 'uuid';

const EmojiRank = () => {
  const [emojiData, setEmojiData] = useState(smilesData);
  const listemojiData = emojiData.smileys;

  const handleInc = (id) => {
    console.log(id);
    listemojiData.map((el) => {
      if (el.id == id) {
        console.log(el.id);
        return { ...el, count: el.count + 1 };
      }
    });
    setEmojiData(listemojiData);
  };

  return (
    <>
      <div className={classes.root__wrap}>
        <div className={classes.conteiner}>
          <div className={classes.display}>
            <div className={classes.display__wrap__for__smiles}>
              <div className={classes.display__wrap__for__smiles__wrap}>
                {smilesData.smileys.map((id, symbol, count) => {
                  return (
                    <Smiles
                      key={uuidv4()}
                      symbol={symbol}
                      count={count}
                      onClick={handleInc(id)}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmojiRank;
