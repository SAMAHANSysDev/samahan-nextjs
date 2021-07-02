import { google } from "googleapis";

export default async function addAlertEntry({ name, cluster, number, network }) {
  try {
    const scopes = ["https://www.googleapis.com/auth/spreadsheets"];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes
    );
    const sheets = google.sheets({ version: "v4", auth: jwt });
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: 'Sheet1',
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values: [
          [name, cluster, number, network]
        ],
      }
    }).catch((err) => {
      return { success: false, error: err };
    });

    return { success: true };
  } catch (err) {
    return { success: false, error: err };
  }
}