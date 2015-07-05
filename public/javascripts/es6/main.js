import setInnerHTML from './set-inner-html-with-element-id';
import {year as currentYear} from './year';
import {firstName, lastName} from './profile';
import * as circle from './circle';

setInnerHTML('year', currentYear);
setInnerHTML('hello',
  'Hi, my name is ' + firstName + ' ' + lastName + '!');
setInnerHTML('area', circle.area(4));
setInnerHTML('circumference', circle.circumference(4));
