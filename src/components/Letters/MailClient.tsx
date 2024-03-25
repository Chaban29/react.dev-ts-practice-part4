import { FC, useState } from 'react';
import { initialLetters } from './data';
import { IInitialLetters } from './data';
import { Letter } from './Letter';

type TypeHighlighted = IInitialLetters | null | number;

export const MailClient: FC = () => {
  const [letters, setLetters] = useState<IInitialLetters[]>(initialLetters);
  const [highlightedId, setHighlightedId] = useState<TypeHighlighted>(null);

  const handleHover = (letter: IInitialLetters) => {
    setHighlightedId(letter.id);
  };

  const handleStar = (starred: IInitialLetters | null) => {
    if (starred) {
      setLetters(
        letters.map((l) =>
          l.id === starred.id ? { ...l, isStarred: !l.isStarred } : l
        )
      );
    }
  };

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isHighlighted={highlightedId === letter.id}
            onHover={handleHover}
            onToggleStar={handleStar}
          />
        ))}
      </ul>
    </>
  );
};
