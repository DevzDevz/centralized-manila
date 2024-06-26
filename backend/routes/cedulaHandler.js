import { Router } from 'express';
import conn2 from './connection.js';
import { v4 as uuidv4 } from 'uuid';
import multer from "multer";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const router = Router();

router.get('/', async (req, res) => {
    const query = "SELECT * FROM user_transaction";
    const query1 = "SELECT * FROM transaction_info";
    const query2 = "SELECT * FROM cedula_cert";
    const query3 = "SELECT * FROM cedula_doc_owner";
    const query4 = "SELECT * FROM cedula_other_info";
    const query5 = "SELECT * FROM cedula_transaction_info";

    

    try {
        const result = await queryDatabase(query);
        const result1 = await queryDatabase(query1);
        const result2 = await queryDatabase(query2);
        const result3 = await queryDatabase(query3);
        const result4 = await queryDatabase(query4);
        const result5 = await queryDatabase(query5);



        res.json({ user_transaction: result, transaction_info: result1, cedula_cert: result2, cedula_doc_owner: result3, cedula_other_info: result4, cedula_transaction_info: result5 });
    } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving data');
    }
  });


  let transID = null;

  router.post('/ctc/:user_id', async (req, res) => {
    const user_id = req.params.user_id;

  const {
    ctc_lname,
    ctc_fname,
    ctc_mname,
    ctc_suffix,
    ctc_sex,
    ctc_region,
    ctc_province,
    ctc_municipal,
    ctc_reqbrgy,
    ctc_reqhnum,
    ctc_reqstreet,
    ctc_reqzip,
    ctc_civilstatus,
    ctc_cznstatus,
    ctc_height,
    ctc_weight,
    ctc_aliencor,
    ctc_employmentstatus,
    ctc_taxpayeraccno,
    ctc_incomeca,
    ctc_grossta,
    ctc_salariesta,
    ctc_validid,
    ctc_profession,
    ctc_purpose,
    ctc_copies,
    ctc_print,
    amount,
    ctc_residencetaxdue,
    totalAmountPaid
   // deathc_amount,
} = req.body;

    transID = generateTransactionID();

    const purpose = parseInt(req.body.ctc_purpose, 10) || null;
    // const transID = generateTransactionID();
    const transType = '4';
    const notif_title = 'Transaction Payment Pending';
    const plainAmount = amount;
    const trans_type = 'Community Tax Certificate';
    const statusType = 'Pending';
    const notif_message = `<p className="text-[0.8rem] pb-2">Your request for <span className="font-medium dark:text-white">${trans_type}: ${transID}</span> is currently awaiting payment. Please pay the required amount of <span className="font-medium dark:text-white">P ${plainAmount}</span>.</p>`;
    const date = new Date();
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
    const expiryDate = new Date();
    expiryDate.setDate(date.getDate() + 5);
    const formattedExpiryDate = `${expiryDate.getFullYear()}-${(expiryDate.getMonth() + 1).toString().padStart(2, '0')}-${expiryDate.getDate().toString().padStart(2, '0')} ${expiryDate.getHours().toString().padStart(2, '0')}:${expiryDate.getMinutes().toString().padStart(2, '0')}:${expiryDate.getSeconds().toString().padStart(2, '0')}`;

    const processValue = value => value === '' || value === null ? null : value;


    const query = "INSERT INTO user_transaction (`transaction_id`, `user_id`, `trans_type_id`, `status_type`, `date_processed`, `expiry_date`) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [
      processValue(transID),
      processValue(user_id),
      processValue(transType),
      processValue(statusType),
      processValue(formattedDate),
      processValue(formattedExpiryDate)
    ];

    const query1 = "INSERT INTO transaction_info (`transaction_id`, `amount`, `copies`, `print_id`, `valid_id`, `purpose_id`) VALUES (?, ?, ?, ?, ?, ?)";
    const values1 = [
      processValue(transID),
      processValue(amount),
      processValue(ctc_copies),
      processValue(ctc_print),
      processValue(ctc_validid),
      processValue(purpose)
    ];

    const query2 = "INSERT INTO cedula_cert (`transaction_id`, `region_id`, `prov_id`, `city_id`, `cedula_date`) VALUES (?, ?, ?, ?, ?)";
    const values2 = [
      processValue(transID),
      processValue(ctc_region),
      processValue(ctc_province),
      processValue(ctc_municipal),
      processValue(ctc_residencetaxdue)
    ];

    const query3 = "INSERT INTO cedula_doc_owner (`transaction_id`, `l_name`, `f_name`, `m_name`, `suffix_type`, `sex_id`) VALUES (?, ?, ?, ?, ?, ?)";
    const values3 = [
      processValue(transID),
      processValue(ctc_lname),
      processValue(ctc_fname),
      processValue(ctc_mname),
      processValue(ctc_suffix),
      processValue(ctc_sex)
    ];

    const query4 = "INSERT INTO cedula_other_info (`transaction_id`, `cvl_id`, `czn_id`, `height`, `weight`, `acr_no`) VALUES (?, ?, ?, ?, ?, ?)";
    const values4 = [
      processValue(transID),
      processValue(ctc_civilstatus),
      processValue(ctc_cznstatus),
      processValue(ctc_height),
      processValue(ctc_weight),
      processValue(ctc_aliencor)
    ];

    const query5 = "INSERT INTO cedula_transaction_info (`transaction_id`, `emp_status`, `acc_no`, `valid_id`, `pob_status`, `income_id`, `salary_id`, `gross_id`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    const values5 = [
      processValue(transID),
      processValue(ctc_employmentstatus),
      processValue(ctc_taxpayeraccno),
      processValue(ctc_validid),
      processValue(ctc_profession),
      processValue(ctc_incomeca),
      processValue(ctc_salariesta),
      processValue(ctc_grossta)
    ];

    const query6 = "INSERT INTO address_info (`transaction_id`, `region_id`, `prov_id`, `city_id`, `brgy_dist`, `house_floor`, `bldg_name`, `zip_code`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    const values6 = [
      processValue(transID),
      processValue(ctc_region),
      processValue(ctc_province),
      processValue(ctc_municipal),
      processValue(ctc_reqbrgy),
      processValue(ctc_reqhnum),
      processValue(ctc_reqstreet),
      processValue(ctc_reqzip)
    ];

    const query7 = "INSERT INTO user_notif (`user_id`, `date`, `title`, `message`) VALUES (?, ?, ?, ?)";
    const values7 = [
      processValue(user_id),
      processValue(formattedDate),
      processValue(notif_title),
      processValue(notif_message)
    ];


    try {
        const result = await queryDatabase(query, values);
        const result1 = await queryDatabase(query1, values1);
        const result2 = await queryDatabase(query2, values2);
        const result3 = await queryDatabase(query3, values3);
        const result4 = await queryDatabase(query4, values4);
        const result5 = await queryDatabase(query5, values5);
        const result6 = await queryDatabase(query6, values6);
        const result7 = await queryDatabase(query7, values7);

  
        res.json({
            message: "Successfully executed",
            user_transaction_result: result,
            transaction_info_result: result1,
            cedula_cert_result: result2,
            cedula_doc_owner_result: result3,
            cedula_other_info_result: result4,
            cedula_transaction_info: result5,
            address_info_result: result6,
            notif_result: result7,
        });
        console.log('Successful Insertion')
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error executing queries" });
    }
});

  

  router.post('/insert-data', async (req, res) => {
    try {
      // Parse totalAmountPaid
      const parsedTotalAmountPaid = parseFloat(req.body.totalAmountPaid);
  
      // Check if parsedTotalAmountPaid is a valid number
      if (!isNaN(parsedTotalAmountPaid) && isFinite(parsedTotalAmountPaid)) {
        // Use Prepared Statements
        const query = "INSERT INTO transaction_info (`transaction_id`, `amount`, `copies`, `print_type`, `valid_id`, `purpose_id`) VALUES (?, ?, ?, ?, ?, ?)";
        const values = [transID, parsedTotalAmountPaid, ctc_copies, ctc_print, ctc_validid, purpose];
  
        // Execute the query
        const [rows, fields] = await pool.execute(query, values);
  
        // Log success
        console.log('Inserted successfully:', rows);
  
        // Send a success response to the client
        res.status(200).json({ success: true });
      } else {
        // Log an error for invalid totalAmountPaid
        console.error('Invalid totalAmountPaid:', req.body.totalAmountPaid);
  
        // Send an error response to the client
        res.status(400).json({ success: false, error: 'Invalid totalAmountPaid' });
      }
    } catch (error) {
      // Log an error for database insertion failure
      console.error('Error inserting data:', error);
  
      // Send an error response to the client
      res.status(500).json({ success: false, error: 'Database insertion error' });
    }
  });


  const uniqueKey = generateUniqueFileID();

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../frontend/uploads/cedula')); //frontend directory
      // cb(null, path.join(__dirname, '../uploads')); //backend directory
    },
    filename: function (req, file, cb) {
      const originalName = path.parse(file.originalname);
      const uniqueFileName = `${originalName.name}_${uniqueKey}${originalName.ext}`;
      cb(null, uniqueFileName);
    },
  });

  const upload = multer({ storage });

  router.post('/ctcimg', upload.single('ctc_attachment'), async (req, res) => {
    try {
      const file = req.file;

      transID = transID;
  
      const query = "INSERT INTO cedula_images (`transaction_id`, `ctc_attachment`) VALUES (?, ?)";
      
      const getFileName = (file) => {
        if (file) {
          const originalName = path.parse(file.originalname);
          return `${originalName.name}_${uniqueKey}${originalName.ext}`;
        }
        return null;
      };
  
      const values = [
        transID,
        getFileName(file)
      ];
      
      const result = await queryDatabase(query, values);
      
      res.json({
        success: true,
        message: "File uploaded successfully",
        file_uploaded: result,
      });
  
    } catch (error) {
      console.error('Error during file upload:', error);
      res.status(500).json({ success: false, message: 'File upload failed' });
    }
  
    console.log(req.file);
  });


  // function queryDatabase(query, values) {
  //   return new Promise((resolve, reject) => {
  //   conn2.query(query, values, (err, data) => {
  //       if (err) {
  //       reject(err);
  //       } else {
  //       resolve(data);
  //       }
  //   });
  //   });
  // }



  async function queryDatabase(query, values) {
    try {
      const connection = await conn2.getConnection();
      try {
        const [rows] = await connection.query(query, values);
        return rows;
      } finally {
        connection.release();
      }
    } catch (err) {
      throw err;
    }
}

  function generateTransactionID() {
    const timestamp = new Date().getTime().toString().slice(0, 8);
    const uniqueID = uuidv4().split('-').join('').substring(0, 9); // Use a portion of UUID
    const transactionID = `${timestamp}-${uniqueID}`;

    return transactionID.toUpperCase();
  }

  function generateUniqueFileID() {
    const uniqueFileID = uuidv4().split('-').join('').substring(0, 5); 

    return uniqueFileID.toUpperCase();
  }

export default router;