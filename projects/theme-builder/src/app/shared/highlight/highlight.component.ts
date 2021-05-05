import { Component, Input, OnChanges, AfterViewInit } from '@angular/core';

declare var Prism: any;

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.scss']
})
export class HighlightComponent implements OnChanges, AfterViewInit {
  @Input() language = 'scss';
  @Input() code: string;
  @Input() btnText: string;
  isShowCode = false;
  htmlCode: any;

  get languageClass() {
    return `language-${this.language}`;
  }

  get isShow() {
    if (this.btnText) {
      return this.isShowCode;
    } else {
      return true;
    }
  }

  constructor() { }

  ngOnChanges() {
    if (!this.code) {
      return;
    }
    this.htmlCode = Prism.highlight(this.code, Prism.languages[this.language]);
  }

  ngAfterViewInit() {
    Prism.highlightAll();
  }

}
