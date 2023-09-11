/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: import explicitly to use the types shiped with jest.
import { it } from '@jest/globals';

// Note: test renderer must be required after react-native.
import { fireEvent, render } from '@testing-library/react-native'
import Text from '../src/components/Text/Text';
import TextField from '../src/components/TextField/TextField';
import SearchScreen from '../src/screen/SearchScreen/SearchScreen';


jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);


describe('Test for custom component', () => {

  it('renders text correctly', () => {
    const { getByText } = render(<Text>Hello world</Text>);
    const textElement = getByText("Hello world")
    expect(textElement.children.toString()).toBe("Hello world")
  });

  it('renders and change the input correctly', () => {
    let text = ""
    const { getByTestId } = render(<TextField onChangeText={(v) => text = v} />);
    const textField = getByTestId("text-field")
    fireEvent(textField, 'changeText', "Hello world")
    expect(text).toBe("Hello world")
  });
  // it('renders and change the input correctly', () => {
  //   const { getByTestId } = render(<SearchScreen />);
  //   const textField = getByTestId("text-field")
  //   fireEvent(textField, 'changeText', "Hello world")

  //   expect(textField.props.value).toBe("")
  // });

  // it('renders and display country detail', () => {
  //   let country: Country = {
  //     name: "India",
  //     capitals: ["New Delhi"],
  //     area: {
  //       kilometres: 3287263,
  //       miles: 2042610.529508
  //     },
  //     currencies: [{ name: "Rupee", symbol: "₹" }],
  //     flag: {
  //       assetLink: "https://flagcdn.com/in.svg",
  //       alt: "Indian flag"
  //     },
  //     languagesSpoken: ["Tamil", "Hindi", "English"],
  //     population: 1300000,
  //     timezones: ["UTC+5:30"]
  //   }
  //   const { getByTestId } = render(<CountryDetail country={country} />);
  //   const countryDetail = getByTestId('country-detail')
  //   expect(countryDetail).toBeDefined()
  // });

})


// describe('Test for TextField Component', () => {

// })

// describe('Test for TextField Component', () => {
//   it('renders text correctly', () => {
//     let text = ""
//     const { getByTestId } = render(<TextField onChangeText={(v) => text = v} />);
//     const textField = getByTestId("text-field")
//     fireEvent(textField, 'changeText', "Hello world")
//     expect(text).toBe("Hello world")
//   });
// })