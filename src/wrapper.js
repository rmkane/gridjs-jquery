import * as gridjs from 'gridjs';

class GridJsWrapper {
  constructor(element, userConfig) {
    this.element = element;
    this.options = $.extend({}, GridJsWrapper.defaults, userConfig);
    this._defaults = null;
    this._name = null;
    this.init();
  }

  init() {
    new gridjs.Grid(this.options).render(this.element);
    return this;
  }
}

GridJsWrapper.defaults = {};

export default GridJsWrapper;