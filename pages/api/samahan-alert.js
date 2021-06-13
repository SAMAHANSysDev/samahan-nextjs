import addAlertEntry from 'utils/sheets';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, number, network } = req.body;
      if (!name || !number || !network) {
        res.status(500).send({ error: 'Missing field entry!' });
      }

      res.status(200).json(await addAlertEntry({ name, number, network }));
    } catch (err) {
      res.status(500).send({ error: err });
    }
  } else {
    res.status(404).json({ error: 'Not found!' });
  }
}