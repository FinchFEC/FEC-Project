import React from 'react';
import Overview from './widgets/overview/Overview.js';
// import ProductListContainer from '../redux/containers/productListContainer.js';
import RelatedProducts from './widgets/related-products/relatedMaster.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <div>
          <Overview />
          <RelatedProducts />
        </div>
      </div>
    );
  }
}

export default App;
