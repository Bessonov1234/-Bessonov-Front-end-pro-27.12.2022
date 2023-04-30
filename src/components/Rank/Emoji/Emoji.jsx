import smilesData from "./mockData/data";
import classes from "./Emoji.module.scss";
import { useState } from "react";
import Smiles from "./Smiles/Smiles";
import { v4 as uuidv4 } from "uuid";
import Winner from "../Winner/Winner";
const EmojiRank = () => {
  const [emojiData, setEmojiData] = useState(smilesData.smileys);
  const handleInc = (id) => {
    const copyList = emojiData.map((el) => {
      if (el.id == id) {
        return { ...el, count: el.count + 1 };
      }
      return el;
    });
    setEmojiData(copyList);
  };

  const getresult = (count) => {
    console.log(count);
    const sortedSmileys = [...count].sort((a, b) => b.count - a.count);
    console.log(sortedSmileys);
    const maxCount = sortedSmileys[0].count;
    const winners = sortedSmileys.filter((smiley) => smiley.count === maxCount);
    setEmojiData(winners);
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
              {emojiData.some((el) => el.count > 0) ? (
                <Winner title={"Winner"} winner={() => getresult(emojiData)} />
              ) : (
                <p>Please vote at least once to see the result</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmojiRank;
