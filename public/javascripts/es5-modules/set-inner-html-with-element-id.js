define([], function() {
  "use strict";
  function setInnerHTMLWithElementId(elementId, innerHTML) {
    document.getElementById(elementId).innerHTML = innerHTML;
  }
  var $__default = setInnerHTMLWithElementId;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});
