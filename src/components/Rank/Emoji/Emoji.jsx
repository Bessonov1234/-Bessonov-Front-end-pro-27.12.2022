import smilesData from "./mockData/data";
import classes from "./Emoji.module.scss";
import { useState } from "react";
import Smiles from "./Smiles/Smiles";
import { v4 as uuidv4 } from "uuid";
const EmojiRank = () => {
  const [emojiData, setEmojiData] = useState(smilesData);
  const listemojiData = emojiData.smileys;

  const handleInc = (id) => {
    console.log(true);
    const copyList = [...listemojiData];
    console.log(copyList);
    copyList.map((el) => {
      return { ...el };
    });
    setEmojiData(copyList);
  };

  return (
    <>
      <div className={classes.root__wrap}>
        <div className={classes.conteiner}>
          <div className={classes.display}>
            <div className={classes.display__wrap__for__smiles}>
              <div className={classes.display__wrap__for__smiles__wrap}>
                {listemojiData.map((el) => {
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
