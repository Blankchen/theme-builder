export default () => {
  return `
  // theme/_light.scss"

  // Boby
  $body-bg: white;
  $body-color: #808080;

  // Typography
  $h1-font-size: 32px;
  $h2-font-size: 25px;
  $h3-font-size: 18px;
  $h4-font-size: 16px;
  $h5-font-size: 14px;
  $h6-font-size: 12px;
  $headings-color: #000000;

  // Color
  $primary: #49e2b8;
  $secondary: #8798ad;
  $danger: #ff3f3f;

  // Tables
  $table-color: #333c51;
  $table-hover-color: #333c51;
  $table-hover-bg: #f0f0f2;
  $table-border-color: #bfc5d2;
  .table {
    thead th {
      color: #c4cad7;
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
  $dropdown-color: #485063;
  $dropdown-bg: #ffffff;
  $dropdown-border-color: #e4e4e4;
  $dropdown-border-radius: 4px;
  $dropdown-link-color: #485063;
  $dropdown-divider-bg: #e4e4e4;

  // Forms
  form {
    label {
      color: #808080;
    }
  }

  $input-color: #808080;
  $input-bg: transparent;
  $input-border-color: #bfc5d2;
  $input-border-radius: 4px;
  $input-focus-border-color: $primary;
  $input-disabled-bg: #ebecee;
  // unset form icon
  $form-feedback-icon-valid: unset;
  $form-feedback-icon-invalid: unset;
  $component-active-color: black;
  // https://github.com/iconic/open-iconic
  $custom-select-indicator-color: #8e8e8f;
  $custom-select-indicator: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'><path fill='#{$custom-select-indicator-color}' d='M0 0l4 4 4-4h-8z' transform='translate(0 2)'/></svg>");

  // Input Group
  $input-group-addon-color: #bfc5d2;
  $input-group-addon-bg: #ebecee;

  .input-group-prepend {
    button {
      color: #f8f9fa;
      background-color: #8798ad;
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
  $pagination-bg: #8798ad;
  $pagination-border-color: #bfc5d2;
  $pagination-active-color: #ffffff;
  $pagination-hover-color: #ffffff;
  $pagination-hover-bg: $primary;
  $pagination-hover-border-color: $primary;;
  $pagination-disabled-color: #bfc5d2;
  $pagination-disabled-bg: #ebecee;
  $pagination-disabled-border-color: #e6e7ea;

  // Progress
  $progress-bg: #a7acb8;
  $progress-bar-color: #000000;
  $progress-border-radius: 4px;

  // Tooltips
  $tooltip-bg: #ffffff;
  $tooltip-color: #000000;

  `;
};
