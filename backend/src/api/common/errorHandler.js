const _ = require("lodash");

module.exports = (req, res, next) => {
    const bundle = res.locals.bundle;

    if (bundle.errors) {
        const errors = parseErrors(bundle.errors);
        res.status(500).json({ errors });
    } else {
        next();
    }
};

const parseErrors = (nodeRestfulErors) => {
    const errors = [];
    _.forIn(nodeRestfulErors, (error) => errors.push(error.message));
    return errors;
};
