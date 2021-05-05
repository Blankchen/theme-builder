import { Component, OnInit } from '@angular/core';
import colors from '../configs/colors';
import themes from '../configs/themes';

@Component({
  selector: 'app-variable',
  templateUrl: './variable.component.html',
  styleUrls: ['./variable.component.scss']
})
export class VariableComponent implements OnInit {
  colors = colors();
  themes = themes();

  constructor() { }

  ngOnInit(): void {
  }

  themeFun(theme: object) {
    const rgbToHsl = (red, green, blue) => {
      const r = Number(red.toString().trim()) / 255;
      const g = Number(green.toString().trim()) / 255;
      const b = Number(blue.toString().trim()) / 255;

      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      let h;
      let s;
      let l = (max + min) / 2;

      if (max === min) {
        h = s = 0; // achromatic
      } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
          default:
            break;
        }
        h /= 6;
      }

      h = Math.round(360 * h);
      s = Math.round(100 * s);
      l = Math.round(100 * l);

      return [h, s, l];
    };

    // from @josh3736 | https://stackoverflow.com/a/3732187
    const colorToHsl = (color: string): any[] => {
      if (color.startsWith('#')) {
        if (color.length === 4) {
          const r = parseInt(color.substr(1, 1) + color.substr(1, 1), 16);
          const g = parseInt(color.substr(2, 1) + color.substr(2, 1), 16);
          const b = parseInt(color.substr(3, 1) + color.substr(3, 1), 16);
          return rgbToHsl(r, g, b);
        } else {
          const r = parseInt(color.substr(1, 2), 16);
          const g = parseInt(color.substr(3, 2), 16);
          const b = parseInt(color.substr(5, 2), 16);
          return rgbToHsl(r, g, b);
        }
      } else if (color.startsWith('rgba')) {
        const [r, g, b] = color.slice(5, -1).split(',');
        return rgbToHsl(r, g, b).slice(0, 3);
      } else if (color.startsWith('rgb')) {
        const [r, g, b] = color.slice(4, -1).split(',');
        return rgbToHsl(r, g, b);
      } else if (color.startsWith('hsla')) {
        return color.slice(5, -1).split(',').slice(0, 3);
      } else if (color.startsWith('hsl')) {
        return color.slice(4, -1).split(',');
      } else {
        // named color values are not yet supported
        console.error('Named color values are not supported in the config. Convert it manually using this chart: https://htmlcolorcodes.com/color-names/');
        return [0, 0, 16]; // defaults to dark gray
      }
    };

    const result = Object.keys(theme).reduce((prev, key) => {
      const hsl = colorToHsl(theme[key]);
      prev[`${key}`] = `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`;
      prev[`${key}-h`] = `${hsl[0]}`;
      prev[`${key}-s`] = `${hsl[1]}%`;
      prev[`${key}-l`] = `${hsl[2]}%`;
      return prev;
    }, {});
    return result;
  }
}
