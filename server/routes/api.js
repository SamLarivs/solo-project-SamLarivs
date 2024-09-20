const express = require('express');
const WhoDisController = require('../controllers/WhoDisController');

const router = express.Router();

// API route to get thee peeps data
router.get('/', 
    WhoDisController.getPeople, 
    (req, res) => res.status(200).json(res.locals.people)
);

// create dat new person route
router.post('/create', 
    WhoDisController.createPerson, 
    (req, res) => {
        console.log('PERSON SUBMITTED:', res.locals.newPerson);
        return res.status(201).json(res.locals.newPerson);
    }
);
// updatorrrr route
router.put('/update/:id', 
    WhoDisController.updatePerson,
    (req, res) => {
        console.log(`Updated person with ID: ${req.params.id}`);
        return res.status(200).json(res.locals.updatedPerson); // Send back the updated person
    }
);

// Route to delete a person... by ID!
router.delete('/delete/:id', 
    WhoDisController.deletePerson,
    (req, res) => {
        //log the ID...for very important safety reasons. lol
        console.log(`Deleted person with ID: ${req.params.id}`);
        return res.status(204).send(); 
    }
);



module.exports = router;
