import domain from '../../../data/domain';
const getProductsByCategory = (callback,category) => {
    fetch(`${domain}/api/products/category/${category}`)
        .then((res) => res.json())
        .then((data) => {
            callback(data);
        })
        .catch((err) => console.log(err));
}

export default getProductsByCategory;