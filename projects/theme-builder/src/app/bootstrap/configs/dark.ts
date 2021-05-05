export default () => {
  return `
  // theme/_dark.scss"

  // Boby
  $body-bg: black;
  $body-color: #808080;

  // Typography
  $h1-font-size: 32px;
  $h2-font-size: 25px;
  $h3-font-size: 18px;
  $h4-font-size: 16px;
  $h5-font-size: 14px;
  $h6-font-size: 12px;
  $headings-color: #ffffff;

  // Color
  $primary: #54e9b8;
  $secondary: #2b2b2b;
  $danger: #ff3f3f;

  // Tables
  $table-color: #efefef;
  $table-hover-color: #efefef;
  $table-hover-bg: $secondary;
  $table-border-color: #3e3e3e;
  .table {
    thead th {
      color: #6f6f6f;
      border-top: unset;
    }
  }

  // Badges
  @mixin badge-variant($bg) {
    color: $bg;
    border-radius: 2px;
    border: solid 1px $bg;

    @at-root a#{&} {
      @include hover-focus() {
        color: darken($bg, 10%);
        border: solid 1px darken($bg, 10%);
      }

      &:focus,
      &.focus {
        outline: 0;
        box-shadow: 0 0 0 $badge-focus-width rgba($bg, 0.5);
      }
    }
  }

  // Breadcrumbs
  $breadcrumb-bg: transparent;
  $breadcrumb-active-color: #6f6f6f;

  // Dropdowns
  $dropdown-color: #242424;
  $dropdown-bg: #242424;
  $dropdown-border-color: #3e3e3e;
  $dropdown-border-radius: 4px;
  $dropdown-link-color: #ffffff;
  $dropdown-divider-bg: #3e3e3e;

  // Forms
  form {
    label {
      color: #808080;
    }
  }

  $input-color: #6f6f6f;
  $input-bg: $secondary;
  $input-border-color: $secondary;
  $input-border-radius: 4px;
  $input-focus-border-color: $primary;
  $input-disabled-bg: #000000;
  // unset form icon
  $form-feedback-icon-valid: unset;
  $form-feedback-icon-invalid: unset;
  $component-active-color: black;
  // https://github.com/iconic/open-iconic
  $custom-select-indicator-color: #ffffff;
  $custom-select-indicator: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'><path fill='#{$custom-select-indicator-color}' d='M0 0l4 4 4-4h-8z' transform='translate(0 2)'/></svg>");

  // Input Group
  $input-group-addon-color: #6f6f6f;
  $input-group-addon-bg: #000000;

  .input-group-prepend {
    button {
      color: #f8f9fa;
      background-color: #515151;
    }
  }

  // Navs
  $nav-tabs-border-color: #3e3e3e;
  $nav-tabs-link-active-color: $primary;
  $nav-tabs-link-active-bg: transparent;
  $nav-tabs-link-active-border-color: $primary;
  $nav-tabs-link-hover-border-color: transparent;
  $nav-link-disabled-color: #333333;

  .nav-tabs {
    .nav-link {
      color: #6f6f6f;
      &.active {
        border-width: 0 0 2px 0;
      }
    }
  }

  // Pagination
  $pagination-color: #f8f9fa;
  $pagination-bg: #515151;
  $pagination-border-color: #262626;
  $pagination-active-color: #000000;
  $pagination-hover-color: #000000;
  $pagination-hover-bg: $primary;
  $pagination-hover-border-color: $primary;;
  $pagination-disabled-color: #4c4c4c;
  $pagination-disabled-bg: #0d0d0d;
  $pagination-disabled-border-color: #262626;

  // Progress
  $progress-bg: #6f6f6f;
  $progress-bar-color: #000000;
  $progress-border-radius: 4px;

  // Tooltips
  $tooltip-bg: #ffffff;
  $tooltip-color: #000000;

  `;
};

