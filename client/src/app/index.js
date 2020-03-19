/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReviewHeader, FooterComponent } from '../components';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <ReviewHeader />
        <FooterComponent />
      </Router>
    );
  }
}

export default App;

// function App() {
//   return (
//     <Router>
//       <ReviewHeader />
//       <FooterComponent />
//     </Router>
//   );
// }