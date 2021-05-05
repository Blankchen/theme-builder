import { CustomProperties } from '../../shared/models/custom-properties.model';

export default () => {
  const cp = new CustomProperties({
    title: 'Section',
    path: 'src/assets/css/theme/_section.scss',
  });

  cp.codeFunction = () => `
$sectionPalette: (
  textTitleColor: var(--highlight),
  textContentColor: var(--white),
);
  `;

  return cp;
};
