import React, { useState } from "react";
import PropTypes from "prop-types";
import RelatedItem from "./relatedItem.jsx";
import ComparisonModal from "./comparisonModal";

const relatedItems = [
  {
    data: { results: [{ photos: [{ url: "", thumbnail_url: "" }] }] },
  },
  {
    data: { results: [{ photos: [{ url: "", thumbnail_url: "" }] }] },
  },
  {
    data: { results: [{ photos: [{ url: "", thumbnail_url: "" }] }] },
  },
  {
    data: { results: [{ photos: [{ url: "", thumbnail_url: "" }] }] },
  },
  {
    data: { results: [{ photos: [{ url: "", thumbnail_url: "" }] }] },
  },
  {
    data: { results: [{ photos: [{ url: "", thumbnail_url: "" }] }] },
  },
  {
    data: { results: [{ photos: [{ url: "", thumbnail_url: "" }] }] },
  },
  {
    data: { results: [{ photos: [{ url: "", thumbnail_url: "" }] }] },
  },
];

const RelatedList = ({
  relatedInfo,
  relatedImages,
  showComparison,
  toggleComparison,
  currentInfo,
  ratings
}) => {
  const [compared, setCompared] = useState(relatedImages[0]);
  const [scrollOffset, setScrollOffset] = useState(0);
  const arrOfItemsAndImages = [];
  for (let i = 0; i < relatedInfo.length; i++) {
    arrOfItemsAndImages.push({
      info: relatedInfo[i],
      image: relatedImages[i] || relatedItems[i],
      rating: ratings[i] || {data: {results: ['','']}}
    });
  }
  function scrollItems(e) {
    e.preventDefault();
    if (!scrollOffset && e.target.value === "left") {
      console.log("can't scroll left");
    } else if (scrollOffset >= 100 && e.target.value === "right") {
      console.log("can't scroll right");
    } else if (e.target.value === "right") {
      setScrollOffset(scrollOffset + 20);
      console.log("scrolled right from offset ", scrollOffset);
    } else if (e.target.value === "left") {
      setScrollOffset(scrollOffset - 20);
      console.log("scrolled left from offset ", scrollOffset);
    }
  }

  return (
    <div>
      <button
        id="rel_slide_left"
        value="left"
        type="button"
        onClick={scrollItems}
      >
        {"<"}
      </button>
      <div className="container-1">
        {arrOfItemsAndImages.map((item) => (
          <RelatedItem
            item={item}
            toggleComparison={toggleComparison}
            changeCompared={(obj) => setCompared(obj)}
          />
        ))}
      </div>
      {showComparison && (
        <ComparisonModal
          currentInfo={currentInfo}
          toggleComparison={toggleComparison}
          relatedInfo={relatedInfo}
          compared={compared}
        />
      )}
      <button
        id="rel_slide_right"
        value="right"
        type="button"
        onClick={scrollItems}
      >
        {">"}
      </button>
    </div>
  );
};

RelatedList.propTypes = {
  relatedInfo: PropTypes.array.isRequired,
  relatedImages: PropTypes.array.isRequired,
  showComparison: PropTypes.bool.isRequired,
  toggleComparison: PropTypes.func.isRequired,
  currentInfo: PropTypes.object.isRequired,
  ratings: PropTypes.array.isRequired
};

export default RelatedList;
