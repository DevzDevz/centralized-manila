import { Router } from 'express';
import conn2 from './connection.js';

const router = Router();



// //Profile Information
// app.get("/profile", (req, res)=>{
//   const q= "SELECT * FROM user_personal WHERE user_id = 'RL1741'"
//   conn2.query(q,(err, data)=>{
//           if(err) return res.json(err)
//           return res.json(data)
//   })
// })


router.get('/:user_id', (req, res) => {
    const user_id = req.params.user_id;

    // SQL query to fetch the user's profile data
    const sql = "SELECT * FROM user_personal WHERE user_id = ?";

    conn2.query(sql, [user_id], (err, result) => {
        if (err) {
        console.error(err);
        res.status(500).send('Error retrieving data');
        } else {
        res.json(result);
        }
    });
    });
        


// Contact Info
router.get('/contact/:user_id', (req, res) => {
    const user_id = req.params.user_id;
    
    const sql = "SELECT * FROM user_contact WHERE user_id = ?";
    
    conn2.query(sql, [user_id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error retrieving contact info');
        } else {
            res.json(result);
        }
    });
});

// Government ID
router.get('/govinfo/:user_id', (req, res) => {
    const user_id = req.params.user_id;
    const sql = "SELECT * FROM user_gov_id WHERE user_id = ?";
    conn2.query(sql, [user_id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error retrieving government info');
        } else {
            res.json(result);
        }
    });
});


export default router;