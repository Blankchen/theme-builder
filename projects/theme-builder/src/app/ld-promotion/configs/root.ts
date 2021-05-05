import { CustomProperties } from '../../shared/models/custom-properties.model';

export default () => {
  const cp = new CustomProperties({
    title: ':root',
    path: 'src/index.css',
  });

  cp.stringToProperties(`
  'orange': '#ff9700',
  'light-yellow': '#ecd67e',
  'white': '#ffffff',
  'highlight': '#ffbb00',
  'dark-red': '#5b0202',
  `);

  cp.codeFunction = () => `
:root {
  --orange: ${cp.propertiesObj['orange']};
  --light-yellow: ${cp.propertiesObj['light-yellow']};
  --white: ${cp.propertiesObj['white']};
  --highlight: ${cp.propertiesObj['highlight']};
  --dark-red: ${cp.propertiesObj['dark-red']};
}
  `;

  return cp;
};
