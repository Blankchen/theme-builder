import { CustomProperties } from '../../shared/models/custom-properties.model';

export default () => {
  const cp = new CustomProperties({
    title: 'App',
    path: 'src/assets/css/theme/_main.scss',
  });

  cp.stringToProperties(`
  'app-background': '#1b0000',
`);

  cp.codeFunction = () => `
$main: (
  background: ${cp.propertiesObj['app-background']},
);
  `;

  return cp;
};
