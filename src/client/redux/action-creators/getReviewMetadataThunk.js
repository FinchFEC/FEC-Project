import getReviewMetadata from '../../../apiHelpers/getReviewMetadata';

export default function getReviewMetadataThunk() {
  return (dispatch, getState) => {
    getReviewMetadata(getState().productId).then((data) => {
      dispatch({ type: 'GET_REVIEW_RATINGS', ratings: data.data.ratings });
      dispatch({
        type: 'GET_REVIEW_RECOMMENDED',
        recommended: data.data.recommended,
      });
      dispatch({
        type: 'GET_REVIEW_CHARACTERISTICS',
        characteristics: data.data.characteristics,
      });
    });
  };
}