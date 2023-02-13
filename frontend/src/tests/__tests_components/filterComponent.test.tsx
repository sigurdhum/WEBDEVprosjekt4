import React from "react";
import {render,screen} from '@testing-library/react';
import {FilterComponent} from '../../components/FilterComponent';

import { MockedProvider } from "@apollo/client/testing";


//snapShot
test('Snapshot FilterComponent', () => {
    const tree = render(
        <MockedProvider>
            <FilterComponent name={"Action"} value={"Action"} />
        </MockedProvider>
    );
    expect(tree).toMatchSnapshot();
});

//unit test
test('renders filter component', () => {
    render(
        <MockedProvider>
            <FilterComponent name={'Action'} value = {'Action'}/>
        </MockedProvider>);
    expect(screen.getByRole('radio')).toBeInTheDocument();
    expect(screen.getByRole('radio')).toHaveValue('Action');
});
