import ReactCardFlip from "react-card-flip";
import { universePokemon } from "../Images";
import { CardProps } from "../PlayingField";

interface Props {
  onClick: () => void;
  card: CardProps;
}

function Card(props: Props) {
  return (
    <div onClick={props.onClick}>
      <ReactCardFlip
        isFlipped={props.card.isFlipped}
        flipDirection="horizontal"
        flipSpeedFrontToBack={0.7}
        flipSpeedBackToFront={0.7}
      >
        <img src={universePokemon} alt="front" width={150} />
        <img src={props.card.img} alt="back" width={150} />
      </ReactCardFlip>
    </div>
  );
}

export default Card;
