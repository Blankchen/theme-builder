import { CustomProperties } from '../../shared/models/custom-properties.model';

export default () => {
  const cp = new CustomProperties({
    title: 'Info Page',
    path: 'src/assets/css/theme/_info-page.scss',
  });

  cp.stringToProperties(`
  'background': '#1b0000',
  `);

  cp.codeFunction = () => `
$infoPagePalette: (
  textColor: var(--white),
  textShadow: 1px 1px 2px rgba(var(--white), 0.9),
  background: (
    desktop: (
      url('../../../assets/images/ld-promotion/info-page/bg-top.png') left top no-repeat,
      url('../../../assets/images/ld-promotion/info-page/bg-bottom.png') right bottom no-repeat,
      url('../../../assets/images/ld-promotion/info-page/page-bg.png') center top no-repeat,
      ${cp.propertiesObj['background']},
    ),
    mobile: (
      url('../../../assets/images/ld-promotion/info-page/bg-top-s.png') left top no-repeat,
      url('../../../assets/images/ld-promotion/info-page/bg-bottom-s.png') right bottom no-repeat,
      url('../../../assets/images/ld-promotion/info-page/page-bg.png') center top/cover no-repeat,
      ${cp.propertiesObj['background']},
    ),
  ),
);
  `;

  return cp;
};
