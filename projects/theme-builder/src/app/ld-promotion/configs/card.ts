import { CustomProperties } from '../../shared/models/custom-properties.model';

export default () => {
  const cp = new CustomProperties({
    title: 'Card Palette',
    path: 'src/assets/css/theme/_card.scss',
  });

  cp.stringToProperties(`
  'borderColor': '#301a35',
  'borderStyle': '#301a35',
  'headerBackgroundColor': '#301a35',
  'titleColor': '#e2dce4',
  'bodyColor': '#f5f5f5',
`);

  cp.codeFunction = () => `
$cardPalette: (
  borderColor: ${cp.propertiesObj['borderColor']},
  borderStyle: ${cp.propertiesObj['borderStyle']} 1px solid,
  headerBackgroundColor: ${cp.propertiesObj['headerBackgroundColor']},
  titleColor: ${cp.propertiesObj['titleColor']},
  bodyColor: ${cp.propertiesObj['bodyColor']},
);
  `;

  return cp;
};
