// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: "John Doe" });
// }

// pages/api/tshirt.js

// export default function handler(req, res) {
//   if (req.method === 'GET') {
//     res.status(200).json({
//       tshirt: '1',
//       size: 'large'
//     });
//   } else if (req.method === 'POST') {
//     const { id, logo } = req.body;

//     if (!logo) {
//       return res.status(418).json({
//         message: "We need logo"
//       });
//     }

//     res.status(200).json([{
//       tshirt: '1',
//       id,
//       logo
//     },
//     {
//       tshirt: '1',
//       id,
//       logo
//     }]);
//   } else {
//     res.setHeader('Allow', ['GET', 'POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

// export default function handler(req, res) {
//   if (req.method === 'GET') {
//     res.status(200).json([
//       {
//         tshirt: '1',
//         size: 'large'
//       },
//       {
//         tshirt: '2',
//         size: 'medium'
//       },
//       {
//         tshirt: '3',
//         size: 'small'
//       }
//     ]);
//   } else if (req.method === 'POST') {
//     const { id, logo } = req.body;

//     if (!logo) {
//       return res.status(418).json({
//         message: "We need logo"
//       });
//     }

//     res.status(200).json([{
//       tshirt: '1',
//       id,
//       logo
//     },
//     {
//       tshirt: '2',
//       id,
//       logo
//     }]);
//   } else {
//     res.setHeader('Allow', ['GET', 'POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }


// import fs from 'fs';
// import path from 'path';
// import csv from 'csv-parser';

// export default function handler(req, res) {
//   if (req.method === 'GET') {
//     // Path to the CSV file (assuming it's in the same directory as the API route file)
//     const csvFilePath = path.join(__dirname, '/home/alli/Desktop/0x0MAY21/vercel/db');

//     // Create an empty array to store the parsed CSV data
//     const data = [];

//     // Read the CSV file and parse it
//     fs.createReadStream(csvFilePath)
//       .pipe(csv())
//       .on('data', (row) => {
//         // Push each row of the CSV file to the data array
//         data.push(row);
//       })
//       .on('end', () => {
//         // Send the parsed data as JSON response
//         res.status(200).json(data);
//       });
//   } else {
//     // Handle unsupported request methods
//     res.setHeader('Allow', ['GET']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

import fs from 'fs';
import csv from 'csv-parser';

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Absolute path to the CSV file
    const csvFilePath = '//home/alli/Desktop/0x0MAY21/vercel/SSR-table/db/large_data.csv';

    // Create an empty array to store the parsed CSV data
    const data = [];

    // Read the CSV file and parse it
    fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on('data', (row) => {
        // Push each row of the CSV file to the data array
        data.push(row);
      })
      .on('end', () => {
        // Send the parsed data as JSON response
        res.status(200).json(data);
      });
  } else {
    // Handle unsupported request methods
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
