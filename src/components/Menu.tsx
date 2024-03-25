import { ChangeEvent, FC, useState } from 'react';

interface IInitialItems {
  title: string;
  id: number;
}

const initialItems: IInitialItems[] = [
  { title: 'pretzels', id: 0 },
  { title: 'crispy seaweed', id: 1 },
  { title: 'granola bar', id: 2 },
];

export const Menu: FC = () => {
  const [items, setItems] = useState<IInitialItems[]>(initialItems);
  const [selectedId, setSelectedId] = useState<IInitialItems>(items[0]);

  const handleClick = (item: IInitialItems) => {
    setSelectedId(item);
  };

  const handleItemChange = (
    id: number,
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            title: event.target.value,
          };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <>
      <h2>What's your travel snack?</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type='text'
              value={item.title}
              onChange={(event) => handleItemChange(item.id, event)}
            />
            <button onClick={() => handleClick(item)}>Choose</button>
          </li>
        ))}
      </ul>
      <p>You picked {selectedId.title}.</p>
    </>
  );
};
