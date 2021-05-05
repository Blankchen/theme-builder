import { CustomProperties } from '../../shared/models/custom-properties.model';

export default () => {
  const cp = new CustomProperties({
    title: 'Step',
    path: 'src/assets/css/theme/_table.scss',
  });

  cp.codeFunction = () => `
$tablePalette: (
  backgroundColor: map-get($main, background),
  tdBorderStyle: solid 1px var(--highlight),
  headerColor: var(--dark-red),
  textColor: var(--highlight),
  highlightBackgroundColor: rgba(#d38c09, 0.3),
);
  `;

  return cp;
};
