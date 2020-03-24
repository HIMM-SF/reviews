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
