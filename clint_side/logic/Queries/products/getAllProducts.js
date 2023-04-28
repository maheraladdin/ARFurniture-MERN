import domain from "../../../data/domain";
const getAllProducts = (callback) => {
    fetch(`${domain}/api/products`)
        .then((res) => res.json())
        .then((data) => {
            callback(data);
        })
        .catch((err) => console.log(err));
}

export default getAllProducts;