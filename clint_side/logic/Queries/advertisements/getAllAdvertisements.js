import domain from '../../../data/domain';
const getAllAdvertisements = (callback) => {
    fetch(`${domain}/api/advertisements`).then((response) => {
        return response.json();
    }).then((data) => {
        callback(data);
    }).catch((err) => {
        console.log(err);
    });
}

export default getAllAdvertisements;