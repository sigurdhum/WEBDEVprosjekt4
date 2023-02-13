import React from "react";
import {render,screen,cleanup} from '@testing-library/react';
import {Navbar} from '../../components/Navbar';
import { MockedProvider } from "@apollo/client/testing";

//snapshot
test('Snapshot Navbar', () => {
    const tree = render(
      <MockedProvider>
        <Navbar />
      </MockedProvider>);
    expect(tree).toMatchSnapshot();
});

//unit test

test('renders navbar', () => {
  render(
    <MockedProvider>
      <Navbar />
    </MockedProvider>
    );
  const linkElement = screen.getByText(/Hedda's and Chill/i);
  expect(linkElement).toBeInTheDocument();
});
