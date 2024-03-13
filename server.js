const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { google } = require('googleapis');

// Initialize the Google Sheets API client
const auth = new google.auth.GoogleAuth({
  keyFile: './config/data-vis-project-3-80be54215644.json',
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const spreadsheetId = '1XE-RJOsJrHnWL7jkX1MfWSZSIXIi0G1YO_1qSIKj1Xg';


async function appendData(guessedValueArray, correctValueArray) {
  const authClient = await auth.getClient();
  const googleSheets = google.sheets({ version: 'v4', auth: authClient });

  const range = 'Sheet1';
  const valueInputOption = 'RAW';
  const values = [[...guessedValueArray, ...correctValueArray]];

  const request = {
    spreadsheetId,
    range,
    valueInputOption,
    resource: { values },
  };

  try {
    await googleSheets.spreadsheets.values.append(request);
    return { status: 'Success' };
  } catch (err) {
    console.error('The API returned an error: ' + err);
    throw err;
  }
}

// Set up the Express server
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/append-data', async (req, res) => {
  const { guessedValueArray, correctValueArray } = req.body;
  try {
    const result = await appendData(guessedValueArray, correctValueArray);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
