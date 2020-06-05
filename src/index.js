import * as gridjs from 'gridjs';
import GridJsWrapper from './wrapper';

;(function ($, window, document, undefined) {
  const pluginName = 'gridjs';

  $.fn[pluginName] = function (userConfig) {
    return this.each(function () {
      if (!$.data(this, 'plugin_' + pluginName)) {
        let wrapper = new GridJsWrapper(this, userConfig);
        wrapper._name = pluginName;
        wrapper._defaults = GridJsWrapper.defaults;
        $.data(this, 'plugin_' + pluginName, wrapper);
      }
    });
  };
})(jQuery, window, document);