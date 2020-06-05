const main = async () => {
  $('#wrapper').gridjs({
    columns: ['Name', 'Email', 'Phone Number'],
    data: await fetchJsonData('assets/data.json'),
    search: true,
    sort: true
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