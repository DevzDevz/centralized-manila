import { Router } from 'express';
import conn2 from './connection.js';

const router = Router();


router.get("/", async (req, res) => {
    const query = "SELECT * FROM user_reg";
    const query1 = "SELECT * FROM user_auth";

    try {
    const result = await queryDatabase(query);
    const result1 = await queryDatabase(query1);
    
    res.json({ user_reg: result, user_auth: result1 });
    } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving data');
    }
});


router.post('/', async (req, res) => {
    const primaryKey = generatePrimaryKey(req.body.f_name, req.body.l_name, req.body.mobile_no);

    const query = "INSERT INTO user_reg (`f_name`, `l_name`, `mobile_no`, `user_id`) VALUES (?, ?, ?, ?)";
    const values = [req.body.f_name, req.body.l_name, req.body.mobile_no, primaryKey];

    const query1 = "INSERT INTO user_auth (`mobile_no`, `user_pass`, `user_id`) VALUES (?, ?, ?)";
    const values1 = [req.body.mobile_no, req.body.user_pass, primaryKey];

    try {
    const result = await queryDatabase(query, values);
    const result1 = await queryDatabase(query1, values1);

    res.json({
        message: "Successfully executed",
        user_reg_result: result,
        user_auth_result: result1,
    });
    } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error executing queries" });
    }
});


function queryDatabase(query, values) {
    return new Promise((resolve, reject) => {
    conn2.query(query, values, (err, data) => {
        if (err) {
        reject(err);
        } else {
        resolve(data);
        }
    });
    });
}

    
function generatePrimaryKey(firstName, lastName, mobileNo) {
        // Extract the first letter of the first name
        const firstLetterFirstName = firstName.charAt(0).toUpperCase();
    
        // Extract the first letter of the last name
        const firstLetterLastName = lastName.charAt(0).toUpperCase();
    
        // Extract the last 4 digits of the mobile number
        const last4DigitsMobile = mobileNo.slice(-4);
    
        // Concatenate the components to create the primary key
        const primaryKey = `${firstLetterFirstName}${firstLetterLastName}${last4DigitsMobile}`;
    
        console.log(primaryKey)
        return primaryKey;
    }

export default router;