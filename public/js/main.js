const cloneData = (data) => JSON.parse(JSON.stringify(data));

const main = async () => {
  let headers = ['Name', 'Email', 'Phone Number'];
  let data = await fetchJsonData('assets/data.json');

  /**
   * @description Render a gridjs table from loaded data
   */
  $('#render').gridjs({
    columns: headers,
    data: cloneData(data),
    search: true,
    sort: true
  });

  /**
   * @description Render a gridjs table from an existing table with a wrapper
   */
  $('#from-with-wrapper').populateTable(data, {
    headers : headers
  }).gridjs({
    search: true,
    sort: true
  }, {
    targetSelector : '#from-wrapper'
  });

  /**
   * @description Render a gridjs table from an existing table without a wrapper
   */
  $('#from-without-wrapper').populateTable(data, {
    headers : headers
  }).gridjs({
    search: true,
    sort: true
  });

  /**
   * @description Render a gridjs table in-place of an existing one
   */
  $('#from-replace').populateTable(data, {
    headers : headers
  }).gridjs({
    search: true,
    sort: true
  }, {
    replace : true
  });
};

/**
 * @description Returns a JSON promise
 * @param {string} filename
 * @returns {Promise<T>}
 */
const fetchJsonData = async (filename) => {
  return fetch(filename)
      .then(response => response.json());
};

main().then(res => null);