const db = require('./../db');

module.exports.index = (req, res, next) => {
    var page = parseInt(req.query.page) || 1; // n
    var perPage = 8; // x

    var start = (page - 1) * perPage;
    var end = start * perPage;

    var drop = (page - 1) * perPage;


    res.render('products/index', {
        // products: db.get('products').value().slice(start, end)
        products: db.get('products').drop(drop).take(perPage).value()
    });
};