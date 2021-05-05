import { Storage } from './../shared/models/storage.model';
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

import root from './configs/root';
import app from './configs/app';
import card from './configs/card';
import section from './configs/section';
import step from './configs/step';
import countDown from './configs/count-down';
import faq from './configs/faq';
import table from './configs/table';
import infoPage from './configs/info-page';

@Component({
  selector: 'app-ld-promotion',
  templateUrl: './ld-promotion.component.html',
  styleUrls: ['./ld-promotion.component.scss']
})
export class LdPromotionComponent implements OnInit {
  root = root();
  app = app();
  card = card();
  section = section();
  step = step();
  countDown = countDown();
  faq = faq();
  table = table();
  infoPage = infoPage();
  storage = new Storage({
    key: 'lp-promotion',
    root: this.root,
    app: this.app,
    card: this.card,
    section: this.section,
    step: this.step,
    countDown: this.countDown,
    faq: this.faq,
    table: this.table,
    infoPage: this.infoPage,
  });

  constructor(
  ) {
  }

  ngOnInit(): void {

  }


}
