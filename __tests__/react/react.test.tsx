import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';

import App from '../../client/App';

describe('App component', () => {
  it('has text', () => {
    const app = render(<App />);
  });
});
