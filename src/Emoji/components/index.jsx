import { Component } from "react";
import { emojiData } from "../data/data";
// {this.props.winners.map((winner) => (
//   <div key={winner.id}>{winner.symbol}</div>
// ))}
class EmojiLisener extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        {emojiData.emojiList.map((el) => {
          <div key={Math.random()}> {el.emoji}</div>;
        })}
      </>
    );
  }
}
export default EmojiLisener;
