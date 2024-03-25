import { FC, Fragment } from 'react';
import { IInitialLetters } from './data';

interface ILetterProps {
  letter: IInitialLetters;
  isHighlighted: boolean;
  onHover: (letter: IInitialLetters) => void;
  onToggleStar: (starred: IInitialLetters) => void;
}

export const Letter: FC<ILetterProps> = ({
  letter,
  isHighlighted,
  onHover,
  onToggleStar,
}: ILetterProps) => {
  return (
    <Fragment>
      <li
        className={isHighlighted ? 'highlighted' : ''}
        onMouseEnter={() => letter && onHover(letter)}
        onPointerMove={() => {
          onHover(letter);
        }}
      >
        <button
          onClick={() => {
            onToggleStar(letter);
          }}
        >
          {letter.isStarred ? 'Unstar' : 'Star'}
        </button>
        {letter.subject}
      </li>
    </Fragment>
  );
};
