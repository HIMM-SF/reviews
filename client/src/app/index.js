import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ReviewHeader, PointsComponent, CommentsComponent, FooterComponent } from '../components'

function App() {
    return (
        <Router>
            <ReviewHeader />
            <PointsComponent />
            <CommentsComponent />
            <FooterComponent />
        </Router>
    )
}

export default App