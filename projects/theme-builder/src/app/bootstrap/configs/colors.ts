import { CustomProperties } from '../../shared/models/custom-properties.model';

export default () => {
  const cp = new CustomProperties({
    title: 'Colors',
    path: 'https://getbootstrap.com/docs/4.5/utilities/colors/',
  });

  cp.stringToProperties(`
    white:    #fff,
    gray-100: #f8f9fa,
    gray-200: #e9ecef,
    gray-300: #dee2e6,
    gray-400: #ced4da,
    gray-500: #adb5bd,
    gray-600: #6c757d,
    gray-700: #495057,
    gray-800: #343a40,
    gray-900: #212529,

    blue:    #007bff,
    indigo:  #6610f2,
    purple:  #6f42c1,
    pink:    #e83e8c,
    red:     #dc3545,
    orange:  #fd7e14,
    yellow:  #ffc107,
    green:   #28a745,
    teal:    #20c997,
    cyan:    #17a2b8,
    black:    #000,
  `);

  cp.codeFunction = () => `
$white: ${cp.propertiesObj['white']};
$gray-100: ${cp.propertiesObj['gray-100']};
$gray-200: ${cp.propertiesObj['gray-200']};
$gray-300: ${cp.propertiesObj['gray-300']};
$gray-400: ${cp.propertiesObj['gray-400']};
$gray-500: ${cp.propertiesObj['gray-500']};
$gray-600: ${cp.propertiesObj['gray-600']};
$gray-700: ${cp.propertiesObj['gray-700']};
$gray-800: ${cp.propertiesObj['gray-800']};
$gray-900: ${cp.propertiesObj['gray-900']};
$black: ${cp.propertiesObj['black']};

$blue: ${cp.propertiesObj['blue']};
$indigo: ${cp.propertiesObj['indigo']};
$purple: ${cp.propertiesObj['purple']};
$pink: ${cp.propertiesObj['pink']};
$red: ${cp.propertiesObj['red']};
$orange: ${cp.propertiesObj['orange']};
$yellow: ${cp.propertiesObj['yellow']};
$green: ${cp.propertiesObj['green']};
$teal: ${cp.propertiesObj['teal']};
$cyan: ${cp.propertiesObj['cyan']};
  `;

  return cp;
};

