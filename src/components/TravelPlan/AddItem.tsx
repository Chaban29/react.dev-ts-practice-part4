import { ChangeEvent, FC, useState } from 'react';

interface IOnAddItem {
  onAddItem: (title: string) => void;
}

export const AddItem: FC<IOnAddItem> = ({ onAddItem }: IOnAddItem) => {
  const [title, setTitle] = useState<string>('');

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleAddClick = () => {
    setTitle('');
    onAddItem(title);
  };

  return (
    <>
      <input
        type='text'
        placeholder='Add item'
        value={title}
        onChange={handleChangeTitle}
      />
      <button type='button' onClick={handleAddClick}>
        Add
      </button>
    </>
  );
};
