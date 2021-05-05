export default () => {
  return `
  // Almost same as https://getbootstrap.com/docs/4.5/getting-started/theming/#importing

  // mixins first, will be overwritten by theme mixins
  @import "./scss/mixins";

  // import one of the themes]
  @import "./theme/light";
  @import "./theme/dark";

  // Required
  @import "./scss/functions";
  @import "./scss/variables";
  // Optional
  @import "./scss/type";
  @import "./scss/images";
  @import "./scss/grid";
  @import "./scss/tables";
  @import "./scss/forms";
  @import "./scss/buttons";
  @import "./scss/transitions";
  @import "./scss/dropdown";
  @import "./scss/button-group";
  @import "./scss/input-group";
  @import "./scss/custom-forms";
  @import "./scss/breadcrumb";
  @import "./scss/pagination";
  @import "./scss/badge";
  @import "./scss/alert";
  @import "./scss/progress";
  @import "./scss/tooltip";
  @import "./scss/utilities";
  `;
};


