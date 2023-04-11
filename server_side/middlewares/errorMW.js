module.exports = (err,req,res) => {
    for(let key in err.errors) {
        console.log(err.errors[key].message);
        res.status(500).send("internal server error");
    }
}