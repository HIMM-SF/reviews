/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReviewHeader } from '../components';

class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <ReviewHeader />
      </Router>
    );
  }
}

export default Review;
