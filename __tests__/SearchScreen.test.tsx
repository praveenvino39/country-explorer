import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SearchScreen from "../src/screen/SearchScreen/SearchScreen";

describe('SearchScreen', () => {

    it('renders the SearchScreen component', () => {
        const { getByTestId } = render(<SearchScreen />);

        const searchButton = getByTestId('search-button');
        const textField = getByTestId('text-field');

        expect(searchButton).toBeTruthy();
        expect(textField).toBeTruthy();
    });

    it('performs a search from network when the Search button is pressed and resolve by network', async () => {
        const { getByTestId, } = render(<SearchScreen />);
        const searchButton = getByTestId('search-button');
        const textField = getByTestId('text-field');

        fireEvent.changeText(textField, 'United States');

        fireEvent.press(searchButton);

        const detail = await waitFor(() => getByTestId('country-detail'));

        expect(detail).toBeTruthy();
    });

    it('performs a search when the Search button is pressed and resolve by cache', async () => {
        const { getByTestId, } = render(<SearchScreen />);
        const searchButton = getByTestId('search-button');
        const textField = getByTestId('text-field');

        fireEvent.changeText(textField, 'India');

        fireEvent.press(searchButton);

        const detail = await waitFor(() => getByTestId('country-detail'));

        expect(detail).toBeTruthy();
    });
});