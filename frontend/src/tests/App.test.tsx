import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';
import {MockedProvider} from '@apollo/react-testing';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import {RecoilRoot} from 'recoil';

it('renders app starting', async () => {
  render(
      <MockedProvider>
        <App />
      </MockedProvider>
  );
  expect(await screen.findByText("INNLEVERING 3")).toBeInTheDocument();
  //sjekker at scrollknappen er usunlig i strten
  expect(await screen.findByRole("button")).not.toBeVisible();

});
