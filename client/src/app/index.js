import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { ReviewHeader, FooterComponent } from '../components'

function App() {
    return (
        <Router>
            <ReviewHeader />
            <FooterComponent />
        </Router>
    )
}

export default App