import React, { Component } from 'react'
import api from '../api'

class ReviewHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: []
        };
    }

    componentDidMount() {
        api.getAllReviews()
            .then(res => {
                this.setState({ total: res.data.data.length});
        });
    }
    render() {
        return (
            <div>
                <h2>Reviews</h2>
                <div>
                    total {this.state.total} reviews
                </div>
            </div>
        )
    }
}

export default ReviewHeader;