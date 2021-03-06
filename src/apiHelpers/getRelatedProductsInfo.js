import axios from "axios";

function getRelatedProductsInfo(productId) {
  return axios
    .get(`http://18.224.37.110/products/${productId}/related`)
    .then(({ data }) => {
      const arrOfUrls = [];
      data.forEach((id) => {
        arrOfUrls.push(`http://18.224.37.110/products/${id}`);
      });
      return Promise.all(arrOfUrls.map((url) => axios.get(url)));
    })
    .then((results) => {
      return results;
    })
    .catch((err) => console.error(err));
}

export default getRelatedProductsInfo;
