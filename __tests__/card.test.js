import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../client/components/Card';

it('Card', () => {
  const params = {
    title: 'title',
    text: 'text',
  };
  const component = renderer.create(<Card {...params} />);
  expect(component.toJSON()).toMatchSnapshot();
});
