import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { from, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

interface ExternalLink {
  name: string;
  src: string;
  integrity: string;
}

interface LoadTemp {
  [key: string]: {
    loaded: boolean,
    src: string,
    integrity: string,
  };
}

// name as id
export const loaderStore: ExternalLink[] = [
  // { name: 'css', src: 'https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css', integrity: 'sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I' },
  { name: 'jquery', src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js', integrity: 'sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj' },
  { name: 'popper', src: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js', integrity: 'sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN' },
  { name: 'bootstrap', src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js', integrity: 'sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV' },

];

@Injectable({
  providedIn: 'root'
})
export class DynamicLoaderService {
  private loadTemp: LoadTemp = {};

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {
    loaderStore.forEach((x: ExternalLink) => {
      this.loadTemp[x.name] = {
        loaded: false,
        src: x.src,
        integrity: x.integrity
      };
    });
  }

  isLoad$() {
    const promises: any[] = [];
    loaderStore.forEach((x) => promises.push(this.loadAll(x.name)));
    return from(Promise.all(promises)).pipe(
      map(_ => {
        return of(true);
      }),
      catchError((err: any) => {
        console.error(err);
        return throwError(false);
      })
    );
  }

  removeAll() {
    loaderStore.forEach((x) => this.document.getElementById(x.name).remove());
  }

  private loadAll(name: string) {
    return new Promise((resolve, reject) => {
      if (this.loadTemp[name].loaded) {
        resolve({ script: name, loaded: true, status: 'Already Loaded' });
      }
      const head = this.document.getElementsByTagName('head')[0];
      const isScript = this.loadTemp[name].src.endsWith('.js');
      const scriptOrStyle = (isScript ? this.loadScript(name) : this.loadStyle(name)) as any;

      scriptOrStyle.onload = () => {
        this.loadTemp[name].loaded = true;
        resolve({ script: name, loaded: true, status: 'Loaded' });
      };

      scriptOrStyle.onerror = (error: any) => resolve({ script: name, loaded: false, status: 'Loaded' });
      head.appendChild(scriptOrStyle);
    });
  }

  private loadScript(name: string) {
    const script = document.createElement('script');
    script.id = name;
    script.type = 'text/javascript';
    script.crossOrigin = 'anonymous';
    script.integrity = this.loadTemp[name].integrity;
    script.src = this.loadTemp[name].src;
    return script;
  }

  private loadStyle(name: string) {
    const style = document.createElement('link');
    style.id = name;
    style.rel = 'stylesheet';
    style.crossOrigin = 'anonymous';
    style.integrity = this.loadTemp[name].integrity;
    style.href = this.loadTemp[name].src;
    return style;
  }

}
