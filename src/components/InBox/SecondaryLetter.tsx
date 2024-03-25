import { FC } from 'react';
import { IInitialLetters } from '../Letters/data';

interface ISecondaryLetterProps {
  letter: IInitialLetters;
  onToggle: (letterId: number) => void;
  isSelected: boolean;
}

export const SecondaryLetter: FC<ISecondaryLetterProps> = ({
  letter,
  onToggle,
  isSelected,
}: ISecondaryLetterProps) => {
  return (
    <li className={isSelected ? 'selected' : ''}>
      <label>
        <input
          type='checkbox'
          checked={isSelected}
          onChange={() => onToggle(letter.id)}
        />
        {letter.subject}
      </label>
    </li>
  );
};
