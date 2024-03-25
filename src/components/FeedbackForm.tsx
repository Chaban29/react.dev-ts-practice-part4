import { ChangeEvent, FC, FormEvent, useState } from 'react';

type TypeText = string;

type TypeStatus = 'typing' | 'sent' | 'sending';

export const FeedbackForm: FC = () => {
  const [text, setText] = useState<TypeText>('');
  const [status, setStatus] = useState<TypeStatus>('typing');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    await sendMessage(text);
    setStatus('sent');
  };

  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const isSending = status === 'sending';
  const isSent = status === 'sent';

  if (isSent) return <h1>Thanks for feedback</h1>;

  return (
    <form onSubmit={handleSubmit}>
      <p>How was your stay at The Prancing Pony?</p>
      <textarea
        disabled={isSending}
        value={text}
        onChange={handleTextareaChange}
      />
      <br />
      <button disabled={isSending} type='submit'>
        Send
      </button>
      {isSending && <p>Sending...</p>}
    </form>
  );
};

const sendMessage = (text: string) => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1500);
  });
};
