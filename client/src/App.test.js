import React from 'react';
import * as rtl from '@testing-library/react'; 
import App from './App';
import { Children } from 'react';

describe('PlayerCards div', () => {
  const container = rtl.render(
    <div className="players-container"></div>
  ); 

   

  it('renders PlayerCards without crashing?', () => {
    

      console.log(container.debug()); 
    
  });

  it('renders players', () => {

    const h1 = container.queryByText(/Women's World Cup players/i);
     expect(h1)
  });

}); 