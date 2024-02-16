import React, { useCallback, useEffect, useState } from "react";
import "./style.css";
import Punctuation from "../Punctuation";
import { Button } from "@mantine/core";
import Card from "../Card";

export interface CardProps {
  id: number;
  img: string;
  isFlipped: boolean;
  pairs: boolean;
}

interface PokemonType {
  name: string;
  id: number;
  sprites: {
    front_default: string;
  };
}

function PlayingField() {
  const [isWaitingTimeout, setIsWaitingTimeout] = useState<boolean>(false);
  const [lastCard, setLastCard] = useState<CardProps | null>(null);
  const [pointsState, setPointsState] = useState<number>(0);
  const [cardList, setCardList] = useState<CardProps[]>([]);

  function handleClick(clickedCard: CardProps) {
    console.log("entrou aqui");
    if (
      cardList.find((card) => card.id === clickedCard.id)?.pairs ||
      isWaitingTimeout
    ) {
      return;
    }

    let newCardList = [...cardList];

    newCardList = newCardList.map((card) => {
      if (card.id === clickedCard.id) {
        return { ...card, isFlipped: !card.isFlipped };
      } else {
        return card;
      }
    });

    if (clickedCard.img === lastCard?.img && clickedCard.id !== lastCard?.id) {
      setPointsState(pointsState + 1);
      setLastCard(null);
      newCardList = newCardList.map((card) => {
        if (card.img === clickedCard.img) {
          return { ...card, pairs: true };
        } else {
          return card;
        }
      });
    } else {
      if (lastCard) {
        setIsWaitingTimeout(true);
        setTimeout(() => {
          newCardList = newCardList.map((card) => {
            if (card.id === clickedCard.id || card.id === lastCard.id) {
              return { ...card, isFlipped: false };
            } else {
              return card;
            }
          });

          setCardList(newCardList);
          setLastCard(null);
          setIsWaitingTimeout(false);
        }, 1000);
      }
      setLastCard(clickedCard);
    }

    setCardList(newCardList);
  }

  function shuffleArray(array: CardProps[]) {
    let currentIndex = array.length; //12
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  function transformPokemonToCards(results: PokemonType[]): CardProps[] {
    return results.map((pokemon) => ({
      id: pokemon.id,
      img: pokemon.sprites.front_default,
      isFlipped: false,
      pairs: false,
    }));
  }

  const fetchPokemons = useCallback(async (pokemonNames: string[]) => {
    try {
      const requests = pokemonNames.map((name) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) =>
          response.json()
        )
      );

      const results = await Promise.all(requests);
      const pokemonCards = transformPokemonToCards(results);

      const duplicatedItems = pokemonCards.flatMap((item) => [
        item,
        { ...item, id: item.id + pokemonCards.length },
      ]);

      setCardList(shuffleArray(duplicatedItems));
    } catch (error) {
      console.error("Erro ao buscar dados dos Pokémon:", error);
    }
  }, []);

  useEffect(() => {
    const pokemonNames = [
      "pikachu",
      "bulbasaur",
      "charmander",
      "squirtle",
      "eevee",
      "snorlax",
      "mewtwo",
      "charizard",
      "blastoise",
      "venusaur",
      "jigglypuff",
      "meowth",
    ];

    fetchPokemons(pokemonNames);
  }, [fetchPokemons]);

  return (
    <div className="components">
      <Button variant="outline" onClick={() => window.location.reload()}>
        New Game
      </Button>
      <div className="bodyPlayingField">
        {cardList.map((card, index) => (
          <Card onClick={() => handleClick(card)} card={card} key={index} />
        ))}
      </div>
      <Punctuation points={pointsState} />
    </div>
  );
}

export default PlayingField;
