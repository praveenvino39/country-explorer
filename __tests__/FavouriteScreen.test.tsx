import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import FavouriteScreen from '../src/screen/FavouriteScreen/FavouriteScreen';

jest.mock('@react-navigation/native', () => ({
    useNavigation: jest.requireActual('../__mocks__/useNavigation').useNavigation,
    useHeaderHeight: (): number => 0,
}));




describe('FavouriteScreen', () => {


    it('should render "No country favourited yet" when no favorite countries are available', async () => {
        const { getByTestId } = render(<FavouriteScreen />);
        await waitFor(() => {
            const noFavList = getByTestId('no-favourite-list')
            expect(noFavList).toBeTruthy();
        });
    });

    it('should render a list of favorite countries when they are available', async () => {

        const { getByText } = render(<FavouriteScreen />);

        // Ensure the country names are rendered
        await waitFor(() => {
            const favCountry = getByText("India")
            expect(favCountry).toBeTruthy();
        });
    });
});
