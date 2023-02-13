import { MockedProvider } from '@apollo/client/testing';
import { fireEvent } from '@testing-library/dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { act } from 'react-dom/test-utils';


import { SearchBar } from '../../components/SearchBar';

test('Snapshot SearchBar', () => {
    const tree = render(
    <MockedProvider>
        <SearchBar/>
    </MockedProvider>)
    expect(tree).toMatchSnapshot()
});

test('test input from searchbar', () => {
    render(
        <MockedProvider>
            <SearchBar/>
        </MockedProvider>
    );
    //sjekker at søkebaren tar inn input
    const input = screen.getByRole('text', { name: 'Søk her' });
    act(() => {
        userEvent.type(input,'Comedy')
    });
    expect(input).toBe('Comedy');

});

