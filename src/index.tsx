import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { App } from './App';
import './App.css';

const rootElement = ReactDOMClient.createRoot(
  document.getElementById('root') as HTMLDivElement
);

rootElement.render(<App />);
