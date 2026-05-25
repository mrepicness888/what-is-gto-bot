import { Card } from "../types/types";

export function createDeck() {
    const suits = ["hearts", "diamonds", "clubs", "spades"] as const;
    const ranks = [
        "2", "3", "4", "5", "6", "7", "8", "9", "10",
        "J", "Q", "K", "A"
    ] as const;
    const deck: Card[] = [];
    for (const suit of suits) {
        for (const rank of ranks) {
            deck.push({ rank, suit });
        }
    }
    return deck;
}

export function createShuffledDeck() {
    const deck = createDeck();
    // Fisher-Yates algorithm
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    return deck;
}