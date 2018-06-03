class DmmClient {
  constructor({ apiId, affiliateId, site, service }) {
    this.baseParameters = {
      api_id: apiId,
      affiliate_id: affiliateId,
      site: site,
      service: service,
    };
    this.baseUri = 'https://api.dmm.com/affiliate/v3/';
  }

  fetchItemList(parameters) {
    return this._request({
      path: 'ItemList',
      parameters: {
        ...this.baseParameters,
        ...parameters,
      },
    });
  }

  _request({ path, parameters }) {
    const endPoint = `${this.baseUri}${path}?${queryString(parameters)}`;
    const response = UrlFetchApp.fetch(endPoint);

    if (response.getResponseCode() === 200) {
      return response.getContentText();
    }

    return false;
  }
}
