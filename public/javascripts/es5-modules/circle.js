define([], function() {
  "use strict";
  function area(radius) {
    return Math.PI * radius * radius;
  }
  ;
  function circumference(radius) {
    return 2 * Math.PI * radius;
  }
  ;
  return {
    get area() {
      return area;
    },
    get circumference() {
      return circumference;
    },
    __esModule: true
  };
});
