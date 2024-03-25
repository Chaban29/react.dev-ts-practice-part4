import { ChangeEvent, FC } from 'react';
import { IInitialItems } from './travel-plan';

interface IPackingListProps {
  items: IInitialItems[];
  onChangeItem: (nextItem: IInitialItems) => void;
  onDeleteItem: (itemId: number) => void;
}

export const PackingList: FC<IPackingListProps> = ({
  items,
  onChangeItem,
  onDeleteItem,
}: IPackingListProps) => {
  const handleChangeItem = (
    event: ChangeEvent<HTMLInputElement>,
    item: IInitialItems
  ) => {
    onChangeItem({ ...item, packed: event.target.checked });
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <label>
            <input
              type='checkbox'
              checked={item.packed}
              onChange={(event) => handleChangeItem(event, item)}
            />{' '}
            {item.title}
          </label>
          <button type='button' onClick={() => onDeleteItem(item.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
