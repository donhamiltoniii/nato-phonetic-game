import Link from "next/link";
import { useEffect, useState } from "react";
import { NATO_PHONETIC_MAP } from "../constant/nato-phonetic-alphabet";
import { PHRASES } from "../constant/phrases";
import { getCorrectResponse } from "../utils/response";

export default function Index() {
  const [correctAnswer, setCorrectAnswer] = useState<string>("");
  const [guess, setGuess] = useState<string>("");
  const [phrase, setPhrase] = useState<string>("");

  useEffect(() => {
    const selectedPhrase = PHRASES[Math.floor(Math.random() * PHRASES.length)];
    setPhrase(selectedPhrase);
    setCorrectAnswer(getCorrectResponse(NATO_PHONETIC_MAP, selectedPhrase));
  }, []);

  return (
    <div className="index">
      <h1>Nato Phonetic Game</h1>
      <p>
        The object of the game is to use the correct{" "}
        <Link href="https://en.wikipedia.org/wiki/NATO_phonetic_alphabet">
          NATO Phonetic Alphabet
        </Link>{" "}
        to represent the word or phrase provided
      </p>
      <h2>Phrase</h2>
      <p>{phrase}</p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          alert(
            guess.toLowerCase() === correctAnswer
              ? "You won!"
              : "You lost, idiot..."
          );
          setGuess("");
        }}
      >
        <input
          onChange={(event) => {
            const { value } = event.currentTarget;
            setGuess(value);
          }}
          type="text"
          value={guess}
        />
        <button>Guess</button>
      </form>
    </div>
  );
}
