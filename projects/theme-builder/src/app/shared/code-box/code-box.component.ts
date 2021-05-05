import { EventService } from './../../services/event.service';
import { Component, Input, ElementRef, OnChanges, Output, EventEmitter, OnInit, OnDestroy, ContentChild } from '@angular/core';
import { CustomProperties } from '../models/custom-properties.model';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-code-box',
  templateUrl: './code-box.component.html',
  styleUrls: ['./code-box.component.scss']
})
export class CodeBoxComponent implements OnInit, OnDestroy, OnChanges {
  customPropertiesValue: CustomProperties;
  @Input()
  get customProperties() {
    return this.customPropertiesValue;
  }
  set customProperties(value) {
    this.customPropertiesValue = value;
    this.customPropertiesChange.emit(this.customPropertiesValue);
  }
  @Input() themeFun: (x: object) => object;
  @Output() customPropertiesChange = new EventEmitter();
  propertySubject = new Subject();
  subscription = new Subscription();

  readonly htmlRootStyle: CSSStyleDeclaration;
  visible = false;

  constructor(
    private elementRef: ElementRef,
    private eventService: EventService,
  ) {
    this.htmlRootStyle = this.elementRef.nativeElement.style;
  }

  ngOnInit() {
    const sub = this.propertySubject.pipe(
      debounceTime(300)
    ).subscribe((property: object) => {
      this.setCustomProperties(property);
      this.customProperties.updateProperty(property);
      this.eventService.publish('storage-service', 'update');
    });
    this.subscription.add(sub);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnChanges(): void {
    if (!this.customProperties) {
      return;
    }
    this.setCustomProperties(this.customProperties.propertiesObj);
  }

  updateOne(key: string, value: string) {
    const property = {
      [key]: value
    };
    this.propertySubject.next(property);
  }

  openCode() {
    this.visible = true;
    this.customProperties.generateCode();
  }

  private setCustomProperties(theme: object) {
    if (this.themeFun) {
      theme = this.themeFun(theme);
    }
    Object.keys(theme).forEach(k =>
      this.htmlRootStyle.setProperty(`--${k}`, theme[k])
    );
  }


}
