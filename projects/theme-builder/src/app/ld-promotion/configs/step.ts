import { CustomProperties } from '../../shared/models/custom-properties.model';

export default () => {
  const cp = new CustomProperties({
    title: 'Step',
    path: 'src/assets/css/theme/_step.scss',
  });

  cp.codeFunction = () => `
$stepPalette: (
  topTitleBackground: linear-gradient(to top, var(--orange), var(--light-yellow)),
  topTitleColor: var(--highlight),
  topTitleHintColor: var(--white),
  textHeaderColor: var(--white),
  textShadow: 0 0 6px rgba(#000, 0.9),
  textContentColor: var(--white),
  titleBackgroundImage: url('../../../assets/images/rule/rule-title.png'),
);
  `;

  return cp;
};
