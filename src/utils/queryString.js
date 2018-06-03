function queryString(obj) {
  let qs = [];

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const name = encodeURIComponent(key);
      const value = encodeURIComponent(obj[key]);

      qs.push(`${name}=${value}`);
    }
  }

  return qs.join('&');
}
