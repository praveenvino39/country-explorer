import React from 'react';

export const useNavigation = () => {
    const navigation = {
        navigate: jest.fn(),
        push: jest.fn(),
        goBack: jest.fn(),
        addListener: (event, cb) => {
            cb()
        }
        // Add any other navigation methods you want to mock here
    };

    return navigation;
};