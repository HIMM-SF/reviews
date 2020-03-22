/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable no-sequences */
/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */
/* eslint-disable no-return-assign */
/* eslint-disable no-lone-blocks */
import React, { Component } from 'react';
import styled from 'styled-components';
import ReadMoreReact from 'read-more-react';
import Modal from "/Users/minhocha/Desktop/reviews/client/src/components/Modal.js";
import api from '../api';

const HeaderContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins');
  width: 500px;
  height: 50px;
  font-size: 20px;
  font-family: 'Poppins';
  span:nth-child(1) {
    color: #FF385C;
  }
  span:nth-child(2) {
    color: #222222;
  }
`;

const PointsContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins');
  height: 100px;
  width:100%;
  width: 1000px;
  font-size: 17px;
  font-family: 'Poppins';
  margin-bottom: 20px;
  #wrapper1 {
    width: 50%;
    float:left;
    margin: auto;
  }
  #wrapper2 {
    float:right;
    width: 50%;
    margin: auto;
  }
  #cleanDiv, #communicationDiv, #check_inDiv, #accuracyDiv, #locationDiv, #valueDiv {
    width: 100%;
    div:nth-child(1) {
      float:left;
      width: 10%;
      margin: auto;
    }
    div:nth-child(2) {
      left: 0;
      right: 0;
      width: 10%;
      margin: auto auto 5px auto;
    }
    div:nth-child(3) {
      float:right;
      width: 10%;
      margin: -35px 20px auto auto;
    }
  }
`;

const ReviewContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins');
  width: 1000px;
  // height: 50px;
  font-size: 18px;
  font-family: 'Poppins';
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 100px;
  grid-row-gap: 1em;
  #created_at {
    color: #717171;
    font-size: 15px;
    margin-bottom: 15px;
  }
  #username {
    color: #222222;
  }
  #text {
    font-size: 15px;
  }
  #userInfo {
    display: flex;
    // flex-direction: row;
    div:nth-child(1) {
      // display: flex;
      // flex-direction: column;
    }
  }
  #userInfo2 {
    margin-left: 15px;
  }
  #userImage {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  #reviewBtn {
    width: 250px;
    height: 50px;
    margin-top: 20px;
    background-color: white;
    border-radius: 5%;
    border-width: 1.2px;
    border-color: black;
  }
`;

class ReviewHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: [],
      reviews: [],
      show: false,
    };
  }

  componentDidMount() {
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
    const num1 = Math.floor(Math.random() * 100);
    let num2 = num1 + 6;
    if (num1 >= 94) {
      num2 = num1 - 6;
    }

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
    ))}
    totalAverage = (((cleanliness + accuracy + value + check_in + communication + location)
                        / 6) / reviews.length).toFixed(2);
    return (
      <div>
        <HeaderContainer>
        <div id="reviewHeader">
          <div>
            <span>★</span> <span>{ totalAverage }
            {' '}
            ({ this.state.total } {' '} reviews)</span>
          </div>
        </div>
        </HeaderContainer>
        <PointsContainer>
          <div id="wrapper1">
            <div id="cleanDiv">
              <div> Cleanliness </div>
              <div><progress max="5" value={ cleanliness / reviews.length }></progress> </div>
              <div> { (cleanliness / reviews.length).toFixed(1) } </div>
            </div>
            <div id="communicationDiv">
              <div> Communication </div>
              <div><progress max="5" value={ communication / reviews.length }></progress></div>
              <div>{ (communication / reviews.length).toFixed(1) }</div>
            </div>
            <div id="check_inDiv">
              <div> Check_in </div> 
              <div><progress max="5" value={ check_in / reviews.length }></progress></div>
              <div>{ (check_in / reviews.length).toFixed(1) } </div>
            </div>
          </div>
          <div id="wrapper2">
            <div id="accuracyDiv">
              <div>Accuracy</div>
              <div><progress id="progress_accuracy" max="5" value={ accuracy / reviews.length }></progress></div>
              <div>{ (accuracy / reviews.length).toFixed(1) }</div>
            </div>
            <div id="locationDiv">
              <div>Location </div>
              <div><progress max="5" value={ location / reviews.length }></progress></div>
              <div>{ (location / reviews.length).toFixed(1) }</div>
            </div>
            <div id="valueDiv">
              <div>Value </div>
              <div><progress max="5" value={ value / reviews.length }></progress></div>
              <div>{ (value / reviews.length).toFixed(1) }</div>
            </div>
          </div>
        </PointsContainer>
        <ReviewContainer>
        { reviews.slice(num1, num2).map((review, i) => (
          <div key={i}>
            <div id="userInfo">
              <img id="userImage" src={review.user_img}/>
              <div id="userInfo2">
                  <div id="username">{review.firstName}</div>
                  <div id="created_at">{review.created_Month}</div>
              </div>
            </div>
            <div id="text">
              <ReadMoreReact
                text={review.text}
                min={1}
                ideal={70}
                max={150}
                readMoreText="read more"
              />
            </div>
          </div>
        ))}
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
          <p>Data</p>
        </Modal>
        <button id="reviewBtn" type="button" >Show all { this.state.total } reviews</button>
        </ReviewContainer>
      </div>
    );
  }
}

export default ReviewHeader;
