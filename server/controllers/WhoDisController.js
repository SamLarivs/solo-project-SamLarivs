const db = require('../models/WhoDisModels');

const WhoDisController = {
    getPeople: function (req, res, next) {
        const sql = `SELECT p.id, p.name, p.age, p.occupation, p.hobby, p.fav_food, p.image FROM people AS p`;

        db.query(sql)
            .then((data) => {
                console.log('Data fetched:', data.rows);
                if (data.rows.length === 0) {
                    return res.status(404).json({ message: 'No people found' });
                }
                res.locals.people = data.rows;
                return next();
            })
            .catch((err) => {
                console.error('Error fetching data:', err);
                const myError = {
                    log: `WhoDisController.getPeople error getting people: ${err}`,
                    status: 500,
                    message: { err: 'Error getting people data' }
                };
                return next(myError);
            });
    },

    createPerson: function (req, res, next) {
        const text = `
            INSERT into people (name, age, occupation, hobby, fav_food, image)
            VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;

        const { name, age, occupation, hobby, fav_food, image } = req.body;
        const params = [name, age, occupation, hobby, fav_food, image];

        db.query(text, params)
            .then((data) => {
                console.log('UPLOADED DATA', data.rows[0]);
                res.locals.newPerson = data.rows[0];
                return next();
            })
            .catch((err) => {
                console.error('Error creating person:', err);
                const myError = {
                    log: `WhoDisController.createPerson error: ${err}`,
                    status: 500,
                    message: { err: 'Error creating person' }
                };
                return next(myError);
            });
    },

    updatePerson: function (req, res, next) {
        const { id } = req.params;
        const { name, age, occupation, hobby, fav_food, image } = req.body;
    
        console.log('Request Body:', req.body);
    
        const text = `
            UPDATE people
            SET name = $1, age = $2, occupation = $3, hobby = $4, fav_food = $5, image = $6
            WHERE id = $7
            RETURNING *`;
    
        const params = [name, age, occupation, hobby, fav_food, image, id];
    
        console.log('SQL Query:', text);
        console.log('Parameters:', params);
    
        db.query(text, params)
            .then(data => {
                if (data.rows.length === 0) {
                    return res.status(404).json({ error: 'Person not found' });
                }
                console.log('Updated Person:', data.rows[0]);
                res.locals.updatedPerson = data.rows[0]; // Return the updated person
                return next();
            })
            .catch(err => {
                console.error('Error updating person:', err);
                return next(err);
            });
    },

    deletePerson: function (req, res, next) {
        const { id } = req.params; // Get the ID from the URL
        console.log('THIS IS THE DELETE ID', req.params)
        const sql = 'DELETE FROM people WHERE id = $1 RETURNING *';
        
        db.query(sql, [id])
          .then((data) => {
            if (data.rowCount === 0) {
              return res.status(404).json({ message: 'Person not found' });
            }
            return res.status(200).json({ message: 'Person deleted successfully' });
          })
          .catch((err) => {
            console.error('Error deleting person:', err);
            return next({
              log: `WhoDisController.deletePerson error: ${err}`,
              status: 500,
              message: { err: 'Error deleting person' }
            });
          });
      }
};

module.exports = WhoDisController;
