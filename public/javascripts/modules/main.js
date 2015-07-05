define(["./set-inner-html-with-element-id", "./year", "./profile", "./circle"], function($__0,$__2,$__4,$__6) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {default: $__2};
  if (!$__4 || !$__4.__esModule)
    $__4 = {default: $__4};
  if (!$__6 || !$__6.__esModule)
    $__6 = {default: $__6};
  var setInnerHTML = $__0.default;
  var currentYear = $__2.year;
  var $__5 = $__4,
      firstName = $__5.firstName,
      lastName = $__5.lastName;
  var circle = $__6;
  setInnerHTML('year', currentYear);
  setInnerHTML('hello', 'Hi, my name is ' + firstName + ' ' + lastName + '!');
  setInnerHTML('area', circle.area(4));
  setInnerHTML('circumference', circle.circumference(4));
  return {};
});
