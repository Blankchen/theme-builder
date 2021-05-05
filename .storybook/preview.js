
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "./documentation.json";
import { themes } from '@storybook/theming';

setCompodocJson(docJson);


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // or global addParameters
  docs: {
    theme: themes.dark,
  },
}
