import { CustomProperties } from '../../shared/models/custom-properties.model';

export default () => {
  const cp = new CustomProperties({
    title: 'Themes',
    path: 'https://getbootstrap.com/docs/4.5/getting-started/theming/',
  });

  cp.stringToProperties(`
    "primary": "#54e9b8",
    "secondary": "#2b2b2b",
    "success": "#28a745",
    "info": "#17a2b8",
    "warning": "#ffc107",
    "danger": "#ff3f3f",
    "light": "#f8f9fa",
    "dark": "#343a40",
  `);

  cp.codeFunction = () => `
$primary: ${cp.propertiesObj['primary']};
$secondary: ${cp.propertiesObj['secondary']};
$success: ${cp.propertiesObj['success']};
$info: ${cp.propertiesObj['info']};
$warning: ${cp.propertiesObj['warning']};
$danger: ${cp.propertiesObj['danger']};
$light: ${cp.propertiesObj['light']};
$dark: ${cp.propertiesObj['dark']};
  `;

  return cp;
};

