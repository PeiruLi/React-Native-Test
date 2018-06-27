import 'react-native';
import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';

import renderer from 'react-test-renderer';

describe('root', function () {
  test('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    // console.log(tree.children);
    expect(tree).toMatchSnapshot();
  });

  test('renders as expected', () => {
    const wrapper = shallow(<App />);
    console.log(wrapper.find('Text').get(0).props.children);
    expect(wrapper.find('Text').get(0).props.children).toBe('Welcome to React Native!');
  });

  test('Click Button', () => {
    const wrapper = shallow(<App />);
    wrapper.find('Button').simulate('press');
    console.log(wrapper.find('Button').get(0).props.title);
    expect(wrapper.find('Button').get(0).props.title).toBe('Learn More');
  });

});