import smilesData from "./mockData/data";
import classes from "./Emoji.module.scss";
import { useState } from "react";
import Smiles from "./Smiles/Smiles";
import { v4 as uuidv4 } from "uuid";
console.log(smilesData.smileys);
const EmojiRank = () => {
  const [emojiData, setEmojiData] = useState(smilesData);
  const listemojiData = emojiData.smileys;
  let listemojiData1 = emojiData;
  const handleInc = (id) => {
    listemojiData.forEach((el) => {
      console.log(listemojiData);
      if (id == el.id) {
         el.count++
      }
    });
    setEmojiData(listemojiData)
  };

  handleInc = (id) => {
    const emoji = listemojiData.map((smiley) => {
      if (smiley.id == id) {
        console.log(smiley.count++);
       return smiley.count++;
      }
      return smiley;
    });
    setEmojiData(emoji);
  };

  return (
    <>
      <div className={classes.root__wrap}>
        <div className={classes.conteiner}>
          <div className={classes.display}>
            <div className={classes.display__wrap__for__smiles}>
              <div className={classes.display__wrap__for__smiles__wrap}>
                {smilesData.smileys.map((el) => {
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmojiRank;
