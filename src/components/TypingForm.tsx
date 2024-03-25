import { ChangeEvent, FC, Fragment, useState } from 'react';

interface IUser {
  firstName: string;
  lastName: string;
}

export const TypingForm: FC = () => {
  const [user, setUser] = useState<IUser>({ firstName: '', lastName: '' });

  const handleUser = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const fullName = `${user.firstName} ${user.lastName}`;

  const handleClearInputs = () => {
    setUser({ firstName: '', lastName: '' });
  };

  return (
    <Fragment>
      <h2>Let’s check you in</h2>
      <label>
        First name:{' '}
        <input name='firstName' value={user.firstName} onChange={handleUser} />
      </label>
      <label>
        Last name:{' '}
        <input name='lastName' value={user.lastName} onChange={handleUser} />
      </label>
      <button type='button' onClick={handleClearInputs}>
        Clear
      </button>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </Fragment>
  );
};
