/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable no-sequences */
/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */
/* eslint-disable no-return-assign */
/* eslint-disable no-lone-blocks */
import React, { Component } from 'react';
import api from '../api';

class ReviewHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: [],
      reviews: [],
    };
  }

  componentDidMount() {
    // eslint-disable-next-line import/no-named-as-default-member
    api.getAllReviews()
      .then((res) => {
        this.setState({
          total: res.data.data.length,
          reviews: res.data.data,
        });
      });
  }

  render() {
    const { reviews } = this.state;
    let cleanliness = 0;
    let accuracy = 0;
    let value = 0;
    let check_in = 0;
    let communication = 0;
    let location = 0;
    let totalAverage = 0;

    { reviews.map((review, i) => (
      <div key={i}>
        {
            cleanliness += review.cleanliness,
            accuracy += review.accuracy,
            value += review.value,
            check_in += review.check_in,
            communication += review.communication,
            location += review.location
        }
      </div>
    )); }
    totalAverage = (((cleanliness + accuracy + value + check_in + communication + location)
                        / 6) / reviews.length).toFixed(2);
    return (
      <div>
        <h2>Reviews</h2>
        <div>
          ⭐️
          { totalAverage }
          {' '}
          { this.state.total }
          {' '}
          reviews
        </div>
        <div>
          cleanliness
          {' '}
          { cleanliness / reviews.length }
          {' '}
          accuracy
          {' '}
          { accuracy / reviews.length }
          {' '}
          &nbsp;
          value
          {' '}
          { value / reviews.length }
          {' '}
          check_in
          {' '}
          { check_in / reviews.length }
          {' '}
          communication
          {' '}
          { communication / reviews.length }
          {' '}
          &nbsp;
          location
          {' '}
          { location / reviews.length }
        </div>
        <div>
          {reviews.map((review, i) => (
            <div key={i}>
              {review.user_img}
              {' '}
              {review.username}
              {' '}
              {review.created_At}
              {' '}
              {review.text}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ReviewHeader;
