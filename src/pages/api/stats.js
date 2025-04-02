import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get(process.env.COUNTER_URL, {
      headers: {
        'X-App-Key': process.env.COUNTER_KEY,
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.log("API call failed:", error);
    res.status(500).json({ error: 'Failed to fetch data from external API' });
  }
}
