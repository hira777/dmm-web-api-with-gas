import { API_ID, AFFILIATE_ID } from 'babel-dotenv';

function doGet(request) {
  const client = new DmmClient({
    apiId: API_ID,
    affiliateId: AFFILIATE_ID,
    site: 'DMM.R18',
    service: 'digital',
  });

  const response = client.fetchItemList((request && request.parameters) || {});

  return ContentService.createTextOutput(response).setMimeType(
    ContentService.MimeType.JAVASCRIPT
  );
}
