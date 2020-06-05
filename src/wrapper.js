import * as gridjs from 'gridjs';

class GridJsWrapper {
  constructor(element, userConfig, pluginOptions) {
    this.element = element;
    this.options = $.extend({}, GridJsWrapper.defaults, pluginOptions);
    this._defaults = null;
    this._name = null;
    this.init(userConfig);
  }

  init(userConfig) {
    if (this.element.tagName === 'TABLE') {
      let $target = this.options.replace ? $(this.element) : this.locateOrCreateWrapper();
      new gridjs.Grid(Object.assign(userConfig, {
        from: this.element
      })).render($target.empty().get(0));
      if (!$target.is(':visible')) {
        $target.show();
      }
    } else {
      new gridjs.Grid(userConfig).render(this.element);
    }
    return this;
  }

  locateOrCreateWrapper() {
    let $wrapper = null;
    if (this.options.wrapperSelector) {
      $wrapper = $(this.options.wrapperSelector);
    }
    if ($wrapper == null || $wrapper.length === 0) {
      $wrapper = $('<div>');
      $(this.element).after($wrapper);
    }
    return $wrapper
  }
}

GridJsWrapper.defaults = {
  replace : false,
  wrapperSelector : null
};

export default GridJsWrapper;