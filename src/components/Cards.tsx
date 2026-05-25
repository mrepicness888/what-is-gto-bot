import { Card } from "../types/types";

interface Props {
  card?: Card;
}

export default function CardView(props: Props) {
  if (!props.card) {
    return <div className="card">🂠</div>;
  }

  return (
    <div className="card">
      {props.card.rank}{props.card.suit}
    </div>
  );
}