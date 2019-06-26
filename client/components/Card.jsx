import React from 'react';

export default class Card extends React.Component {
  render() {
    const { title, text } = this.props;

    return (
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{text}</p>
          <button type="button" className="btn btn-primary">Go somewhere</button>
        </div>
      </div>
    );
  }
}
