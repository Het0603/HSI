import axios from "axios";

export default async function handler(req, res) {
     if (req.method === 'POST') {
          const { email, orgName, firstName, lastName, city, country, mobile } = req.body;

          try {
               const response = await axios.post(process.env.ENROLL_URL, null, {
                    params: {
                         email,
                         organisation_name: orgName,
                         first_name: firstName,
                         last_name: lastName,
                         city,
                         country,
                         contact_number: mobile,
                    },
                    headers: {
                         'X-App-Key': process.env.ENROLL_KEY,
                    },
               });

               res.status(200).json(response.data);
          } catch (error) {
               console.error('API call failed:', error);
               res.status(500).json({ error: 'Failed to submit enrollment' });
          }
     } else {
          res.status(405).json({ error: 'Method not allowed' });
     }
}