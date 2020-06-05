/**
 * @description A jQuery plugin for populating a table element with data.
 */
(function($) {
  const createArray = (size) => new Array(size).fill(0).map((_, i) => i);
  const defaultOptions = {
    headers: null,
    headersIncluded : false
  };
  $.fn.populateTable = function(data, options) {
    if (data == null || !Array.isArray(data) || data.length === 0) return this;
    let opts = Object.assign({}, defaultOptions, options);
    let recordType = Array.isArray(data[0]) ? 'array' : 'object';
    let fields = opts.headers != null && Array.isArray(opts.headers) && opts.headers.length !== 0
        ? opts.headers : opts.headersIncluded && recordType === 'array' ? data[0] : null;
    if (fields == null && recordType === 'object') fields = Object.keys(data[0]);
    this.empty()
        .append($('<thead>')
            .append('<tr>')
            .append(fields.map(field => {
              return $('<th>', { text: field });
            })))
        .append($('<tbody>')
            .append(data.slice(opts.headersIncluded ? 1 : 0).map(record => {
              return $('<tr>').append(fields.map((field, index) => {
                return $('<td>', { text: recordType === 'object' ? record[field] : record[index] });
              }));
            })));
    return this;
  };
})(jQuery);