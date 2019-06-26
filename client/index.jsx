import ReactDOM from 'react-dom';
import React from 'react';

import Card from './components/Card';

const title = 'Title';
const text = 'Description';

export default () => {
  ReactDOM.render(
    <Card title={title} text={text} />,
    document.getElementById('card'),
  );
};
