import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Greet from '../greet';

test('greet prop component to be return hello', () => {
   render(<Greet />)
   const greetEl = screen.getByText(/hello/i);
   expect(greetEl).toBeInTheDocument();
});

