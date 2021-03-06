import { library } from '@fortawesome/fontawesome-svg-core';

// regular icons
import {
  faStar,
  faTimesCircle,
  faCheckCircle,
} from '@fortawesome/free-regular-svg-icons';

// solid icons
import {
  faStar as fasStar,
  faCheck,
  faCaretDown,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

// add icons to library
library.add(
  faStar,
  fasStar,
  faTimesCircle,
  faCheckCircle,
  faCheck,
  faCaretDown,
  faPlus
);

/* *************INSTRUCTIONS (https://www.npmjs.com/package/@fortawesome/react-fontawesome)************* */
// 1. browse icons on https://fontawesome.com/
// 2. import icons from respective @fortawesome npm dependencies
// 3. add icons to library with library.add()
// 4. inside your react component, import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// 5. inside your react component, import '../../../assets/icons';
// 6. inside your react component, use icons with <FontAwesomeIcon icon={['replaceWithFontAwesomeStyleCode', 'replace-with-icon-code']}/>
// style code: one of "fab", "fas", "far"
// icon-code: lowercase-hyphen-cased code from https://fontawesome.com/ (don't include the style code in the icon code)
