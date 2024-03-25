import { FC, Fragment, useState } from 'react';
import { initialLetters } from '../Letters/data';
import { SecondaryLetter } from './SecondaryLetter';

export const InBox: FC = () => {
  const [selectedIds, setSelectedIds] = useState(new Set());

  const selectedCount = selectedIds.size;

  const handleToggle = (toggleId: number) => {
    const nextIds = new Set(selectedIds);
    if (nextIds.has(toggleId)) {
      nextIds.delete(toggleId);
    } else {
      nextIds.add(toggleId);
    }
    setSelectedIds(nextIds);
  };

  return (
    <Fragment>
      <h1>Inbox</h1>
      <ul>
        {initialLetters.map((initialLetter) => (
          <SecondaryLetter
            key={initialLetter.id}
            letter={initialLetter}
            isSelected={selectedIds.has(initialLetter.id)}
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>You selected {selectedCount} letters</b>
        </p>
      </ul>
    </Fragment>
  );
};
