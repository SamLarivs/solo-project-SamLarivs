const db = require('../models/WhoDisModels');

const WhoDisController = {
    getPeople: function (req, res, next) {
        const sql = `
        SELECT p.name, p.age, p.occupation, p.hobby, p.fav_food, p.image
        FROM people AS p`;

        db.query(sql)
            .then((data) => {
                console.log('Data fetched:', data.rows); // Log the fetched data
                // Check if data is empty
                if (data.rows.length === 0) {
                    return res.status(404).json({ message: 'No people found' });
                }

                res.locals.people = data.rows;
                return next();
            })
            .catch((err) => {
                console.error('Error fetching data:', err); // Log any errors
                const myError = {
                    log: `WhoDisController.getPeople error getting people: ${err}`,
                    status: 500,
                    message: { err: 'Error getting people data' }
                };
                return next(myError);
            });
    }
};

module.exports = WhoDisController;