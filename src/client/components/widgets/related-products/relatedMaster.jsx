import React from "react";
import PropTypes from "prop-types";
import RelatedList from "./relatedList";
import OutfitList from "./outfitList";
import "../../../assets/scss/related.scss";

class RelatedMaster extends React.Component {
  constructor(props) {
    super(props);
    props.getCurrentProductInfo(props.productId);
    props.getRelatedProductsInfo(props.productId);
    props.getAllRelatedImages(props.productId);
  }
  
  render() {
    return (
      <div>
        <h3>RELATED PRODUCTS</h3>
        <RelatedList
          relatedInfo={this.props.relatedInfo}
          relatedImages={this.props.relatedImages}
          toggleComparison={this.props.toggleComparison}
          showComparison={this.props.showComparison}
          currentInfo={this.props.currentInfo}
        />
        <h3>YOUR OUTFIT</h3>
        <OutfitList />
      </div>
    );
  }
}

RelatedMaster.propTypes = {
  getRelatedProductsInfo: PropTypes.func.isRequired,
  getAllRelatedImages: PropTypes.func.isRequired,
  toggleComparison: PropTypes.func.isRequired,
  showComparison: PropTypes.bool.isRequired,
  relatedInfo: PropTypes.array.isRequired,
  relatedImages: PropTypes.array.isRequired,
  productId: PropTypes.number.isRequired,
  getCurrentProductInfo: PropTypes.func.isRequired,
  currentInfo: PropTypes.object.isRequired
};

export default RelatedMaster;
