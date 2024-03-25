import { FC, Fragment, useState } from 'react';
import { AddItem } from './AddItem';
import { IInitialItems } from './travel-plan';
import { PackingList } from './PackingList';

let nextId = 3;

const initialItems: IInitialItems[] = [
  { id: 0, title: 'Warm socks', packed: true },
  { id: 1, title: 'Travel journal', packed: false },
  { id: 2, title: 'Watercolors', packed: false },
];

export const TravelPlan: FC = () => {
  const [items, setItems] = useState<IInitialItems[]>(initialItems);

  const total = items.length;
  const packed = items.filter((item) => item.packed).length;

  const handleAddItem = (title: string) => {
    setItems([
      ...items,
      {
        id: nextId++,
        title: title,
        packed: false,
      },
    ]);
  };

  const handleChangeItem = (nextItem: IInitialItems) => {
    setItems(
      items.map((item) => {
        if (item.id === nextItem.id) {
          return nextItem;
        } else {
          return item;
        }
      })
    );
  };
  const handleDeleteItem = (itemId: number) => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  return (
    <Fragment>
      <AddItem onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onChangeItem={handleChangeItem}
        onDeleteItem={handleDeleteItem}
      />
      <hr />
      <b>
        {packed} out of {total} packed!
      </b>
    </Fragment>
  );
};
