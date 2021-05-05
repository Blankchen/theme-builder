import { CustomProperties } from '../../shared/models/custom-properties.model';

export default () => {
  const cp = new CustomProperties({
    title: 'FAQ',
    path: 'src/assets/css/theme/_faq.scss',
  });

  cp.codeFunction = () => `
$faqPalette: (
  textColor: var(--highlight),
);
  `;

  return cp;
};
