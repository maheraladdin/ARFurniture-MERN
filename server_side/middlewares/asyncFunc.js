module.exports = (routeHandler) =>  {
    return async (req, res, next) => {
        try {
            // business logic
            await routeHandler(req, res);
        } catch (err) {
            // error handling
            next(err);
        }
    }
}