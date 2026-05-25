import { createNewGame, startNewHand } from "../poker/gamestate";
import { Player } from "../types/types";
import CardView from "./Cards";


export default function Table() {
    const newPlayer = {
        id: "player1",
        name: "Alice",
        chips: 1000,
    } as Player;

    const newGameState = createNewGame();
    newGameState.players.push(newPlayer);
    const newHandState = startNewHand(newGameState);

    return (
        <>
            {newHandState.players.map((player) => (
                player.holeCards.map((card) => (
                    <CardView card={card} />
                ))
            ))}
        </>
    );
}