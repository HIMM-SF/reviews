import React, { Component } from 'react'
import api from '../api'

class ReviewHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: [],
            reviews: []
        };
    }

    componentDidMount() {
        api.getAllReviews()
            .then(res => {
                this.setState({ 
                    total: res.data.data.length,
                    reviews: res.data.data
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

        {reviews.map((review, i) => <div key={i}>{ 
            cleanliness += review.cleanliness,
            accuracy += review.accuracy,
            value += review.value,
            check_in += review.check_in,
            communication += review.communication,
            location += review.location
        }</div>)}
        totalAverage = (((cleanliness + accuracy + value + check_in + communication + location) / 6) / reviews.length).toFixed(2);
        return (
            <div>
                <h2>Reviews</h2>
                <div>
                    ⭐️{ totalAverage } &nbsp;
                    {this.state.total} reviews
                </div>
                <div>
                    cleanliness { cleanliness / reviews.length } &nbsp;
                    accuracy { accuracy / reviews.length } &nbsp;
                    value { value / reviews.length } &nbsp;
                    check_in { check_in / reviews.length } &nbsp;
                    communication { communication / reviews.length } &nbsp;
                    location { location / reviews.length }
                </div>
                <div>
                    {reviews.map((review, i) => <div key={i}>{review.user_img} {review.username} &nbsp; {review.created_At} &nbsp; {review.text}</div>)}
                </div>
            </div>
        )
    }
}

export default ReviewHeader;