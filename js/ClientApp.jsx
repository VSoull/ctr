import React from 'react';
import { render } from 'react-dom';

const MyTitle = function MyTitle(props) {
  return React.createElement('div', { style: { color: props.color } }, props.title);
};
const MyFirstComponent = function MyFirstComponent() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      React.createElement(MyTitle, { title: 'Game of Thrones', color: 'YellowGreen' }),
      React.createElement(MyTitle, { title: 'Stranger Things', color: 'GreenYellow' }),
      React.createElement(MyTitle, { title: 'Rick and Morty', color: 'LimeGreen' }),
      React.createElement(MyTitle, { title: 'House of Cards', color: 'peru' })
    )
  );
};

render(React.createElement(MyFirstComponent), document.getElementById('app'));
