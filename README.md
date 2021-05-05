# RCTInternalWebsite

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Add Jest
https://medium.com/angular-in-depth/migrate-your-angular-library-to-jest-faba9579591a


## Currently Issues:
Design not follow the Bootstrap SCSS theme rule <=> Just edit from Sketch component one by one.

Design guideline: https://medium.com/@wenchien0213/如何著手開始design-guideline-5842b2d045c2

The theme dark and light are also with different color rules.

Declare all variable and used by components like bootstrap: https://github.com/twbs/bootstrap/blob/main/scss/_variables.scss 

What’s the theme builder development start from? (CSS framework or component design?)

Top-down or bottom-up? http://teddy-chen-tw.blogspot.com/2014/03/top-downbottom-up.html

 

### Problem
Recently, we have lots of projects with different JS / CSS frameworks or libs, but without the same standard or process with them. This situation causes many redundant codes when reskinning component, and can not reuse the component in different projects. Another issue is designers and develops care in different areas so that may exist some gap, by the corporation in this project can deep know each other and make the standard for the company.

### Solution
Follow and reskin one CSS lib for all Javascript (Same source for all javascript e.g. Bootstrap )

Follow and reskin one CSS and implement in different Javascript framework one by one (e.g. Material Design and Ant Design)

Make our custom CSS theme with the code snippets (With shared lib different Javascript framework).

### Alternative
Them builder opensource lib:

https://pikock.github.io/bootstrap-magic/app/index.html#!/editor

https://bootstrap.build/app

https://themestr.app/builder

### Other topics
Shared lib code document (like bootstrap, ng-zorro and angular…)

https://blog.angular-university.io/how-to-create-an-angular-2-library-and-how-to-consume-it-jspm-vs-webpack/

Image load performance

Can test new technologies in this project (Compony internal project)

Integrate with Storybook and sort out the library with jest test

storybook as a design system: https://www.learnstorybook.com/design-systems-for-developers/react/en/introduction/

Already test in it
PWA / Ngrx / Jest

JS performance tuning (with the lighthouse)

Reference
https://hackerthemes.com/kit/