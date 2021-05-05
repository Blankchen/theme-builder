import { CustomProperties } from '../../shared/models/custom-properties.model';

export default () => {
  const cp = new CustomProperties({
    title: 'Count down',
    path: 'src/assets/css/theme/_count-down.scss',
  });

  cp.stringToProperties(`
  'textColor': '#ab1c1c',
`);

  cp.codeFunction = () => `
$countDownPalette: (
  backgroundImage: url('../../../assets/images/background/timer-highlight.png'),
  backgroundImageMobile: url('../../../assets/images/background/timer-highlight-m.png'),
  textColor: ${cp.propertiesObj['textColor']},
);
  `;

  return cp;
};
