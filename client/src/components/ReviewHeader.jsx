import React, { Component } from 'react';
import styled from 'styled-components';
import ReadMoreReact from 'read-more-react';
import Modal from './Modal.js'
import { Line } from 'rc-progress';
import api from '../api';

const HeaderContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins');
  width: 500px;
  height: 50px;
  font-family: 'Poppins';
  span:nth-child(1) {
    color: #FF385C;
  }
  span:nth-child(2) {
    color: #222222;
    font-size: 20px;
  }
  #reviewHeader {
    font-weight: bold;
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
  #cleanDiv, #communicationDiv, #checkInDiv, #accuracyDiv, #locationDiv, #valueDiv {
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
      margin: auto auto 5px;
    }
    div:nth-child(3) {
      float:right;
      width: 10%;
      margin: -25px 60px auto auto;
      font-size: 13px;
    }
  }
`;

const ReviewContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins');
  width: 1000px;
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
    color: #484848;
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
    font-size: 15px;
    font-weight: bold;
  }
`;

const ModalContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins');
  width: 1100px;
  height: 800px;
  font-family: 'Poppins';
  background: white;
  border-radius: 1%;
  margin-top: 30px;
  #closeBtn {
    width: 40px;
    height: 40px;
    margin-top: 20px;
    margin-left: 20px;
    font-size: 30px;
    background-color: Transparent;
    border: none;
    grid-template-areas: "header"
  }
  .wrapper {
    display: grid;
    gap: 50px;
    grid-template-columns: 270px 200px 220px 200px ;
    grid-template-rows: repeat(100,minmax(5px,auto));
  }
  .headerContainer {
    grid-column: 1;
    grid-row: 1 / 4;
    #wrapper1 {
      color: black;
    }
    margin-top: 20px;
    margin-left: 20px;
  } 
  .reviewContainer{
    grid-column: 3 / 5;
    grid-row: 1 / 4;
    overflow: auto;
    max-height: 100vh;
    height: 700px;
    margin-top: 20px;
    #text {
      margin-bottom: 30px;
    }
  }
`;

const ReadMoreContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins');
  font-size: 17px;
  font-family: 'Poppins';
  div:nth-child(2)::first-line  {
    font-weight: bold;
    text-decoration: underline;
    color: black;
  }
  }
`;

class ReviewHeader extends Component {
  _isMounted = false;
  
  constructor(props) {
    super(props);
    this.state = {
      total: [],
      reviews: [],
      show: false,
    };
  }

  componentDidMount() {
    this._isMounted = true;
    api.getAllReviews()
      .then((res) => {
        if(this._isMounted) {
        this.setState({
          total: res.data.data.length,
          reviews: res.data.data,
        });
      }
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  showModal = () => {
    this.setState({ show: true });
  }
  
  hideModal = () => {
    this.setState({ show: false });
  }

  render() {
    const { reviews } = this.state;
    let cleanliness = 0;
    let accuracy = 0;
    let value = 0;
    let checkIn = 0;
    let communication = 0;
    let location = 0;
    let totalAverage = 0;
    const num1 = Math.floor(Math.random() * 40);
    let num2 = num1 + 6;

    { reviews.map((review, i) => (
      <div key={i}>
        {
            cleanliness += review.cleanliness,
            accuracy += review.accuracy,
            value += review.value,
            checkIn += review.checkIn,
            communication += review.communication,
            location += review.location
        }
      </div>
    ))}
    totalAverage = (((cleanliness + accuracy + value + checkIn + communication + location)
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
              <div><Line percent={ (cleanliness / reviews.length) * 20 } strokeWidth="3" width="150" strokeColor="black" /></div>
              <div> { (cleanliness / reviews.length).toFixed(1) } </div>
            </div>
            <div id="communicationDiv">
              <div> Communication </div>
              <div><Line percent={ (communication / reviews.length) * 20 } strokeWidth="3" width="150"  strokeColor="black" /></div>
              <div>{ (communication / reviews.length).toFixed(1) }</div>
            </div>
            <div id="checkInDiv">
              <div> Check_in </div> 
              <div><Line percent={ (checkIn / reviews.length) * 20 } strokeWidth="3" width="150"  strokeColor="black" /></div>
              <div>{ (checkIn / reviews.length).toFixed(1) } </div>
            </div>
          </div>
          <div id="wrapper2">
            <div id="accuracyDiv">
              <div>Accuracy</div>
              <div><Line percent={ (accuracy / reviews.length) * 20 } strokeWidth="3" width="150"  strokeColor="black" /></div>
              <div>{ (accuracy / reviews.length).toFixed(1) }</div>
            </div>
            <div id="locationDiv">
              <div>Location </div>
              <div><Line percent={ (location / reviews.length) * 20 } strokeWidth="3" width="150"  strokeColor="black" /></div>
              <div>{ (location / reviews.length).toFixed(1) }</div>
            </div>
            <div id="valueDiv">
              <div>Value </div>
              <div><Line percent={ (value / reviews.length) * 20 } strokeWidth="3" width="150"  strokeColor="black" /></div>
              <div>{ (value / reviews.length).toFixed(1) }</div>
            </div>
          </div>
        </PointsContainer>
        <ReviewContainer>
        { reviews.slice(num1, num2).map((review, i) => (
          <div key={i}>
            <div id="userInfo">
              <img id="userImage" src={review.userImg}/>
              <div id="userInfo2">
                  <div id="username">{review.firstName}</div>
                  <div id="created_at">{review.createdMonth} {review.year}</div>
              </div>
            </div>
              <ReadMoreContainer>
              <div id="text">
              <ReadMoreReact
                text={review.text}
                min={1}
                ideal={70}
                max={150}
                readMoreText= "read more"
              />
              </div>
              </ReadMoreContainer>
          </div>
        ))}
        <Modal show={this.state.show} handleClose={this.hideModal} >
          <ModalContainer>
            <button id="closeBtn"onClick={this.hideModal}>X</button>
            <div className="wrapper">
              <div className="headerContainer">
                <HeaderContainer>
                  <div id="reviewHeader" className="reviewHeader">
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
                      <div><Line percent={ (cleanliness / reviews.length) * 20 } strokeWidth="3" width="150"  strokeColor="black" /></div>
                      <div> { (cleanliness / reviews.length).toFixed(1) } </div>
                    </div>
                    <div id="communicationDiv">
                    <div> Communication </div>
                      <div><Line percent={ (communication / reviews.length) * 20 } strokeWidth="3" width="150"  strokeColor="black" /></div>
                      <div>{ (communication / reviews.length).toFixed(1) }</div>
                    </div>
                    <div id="checkInDiv">
                    <div> Check_in </div> 
                      <div><Line percent={ (checkIn / reviews.length) * 20 } strokeWidth="3" width="150"  strokeColor="black" /></div>
                      <div>{ (checkIn / reviews.length).toFixed(1) } </div>
                    </div>
                    <div id="accuracyDiv">
                    <div>Accuracy</div>
                      <div><Line percent={ (accuracy / reviews.length) * 20 } strokeWidth="3" width="150"  strokeColor="black" /></div>
                      <div>{ (accuracy / reviews.length).toFixed(1) }</div>
                    </div>
                    <div id="locationDiv">
                    <div>Location </div>
                      <div><Line percent={ (location / reviews.length) * 20 } strokeWidth="3" width="150"  strokeColor="black" /></div>
                      <div>{ (location / reviews.length).toFixed(1) }</div>
                    </div>
                    <div id="valueDiv">
                      <div>Value </div>
                      <div><Line percent={ (value / reviews.length) * 20 } strokeWidth="3" width="150"  strokeColor="black" /></div>
                      <div>{ (value / reviews.length).toFixed(1) }</div>
                    </div>
                  </div>
              </PointsContainer>
              </div>
              <div className="reviewContainer">
                { reviews.map((review, i) => (
                <div key={i}>
                  <div id="userInfo">
                    <img id="userImage" src={review.userImg}/>
                  <div id="userInfo2">
                    <div id="username">{review.firstName}</div>
                    <div id="created_at">{review.createdMonth}</div>
                  </div>
                </div>
                <ReadMoreContainer>
                <div id="text">
                  <ReadMoreReact
                    text={review.text}
                    min={1}
                    ideal={70}
                    max={150}
                    readMoreText="read more"
                  />
                </div>
                </ReadMoreContainer>
                </div>
                ))}
              </div>
            </div>
          </ModalContainer>
        </Modal>
        <button id="reviewBtn" type="button" onClick={this.showModal}>Show all { this.state.total } reviews</button>
        </ReviewContainer>
      </div>
    );
  }
}

export default ReviewHeader;
