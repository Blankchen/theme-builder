import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeBoxComponent } from './code-box.component';
import { SharedModule } from '../shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomProperties } from '../models/custom-properties.model';

describe('CodeBoxComponent', () => {
  let component: CodeBoxComponent;
  let fixture: ComponentFixture<CodeBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        SharedModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeBoxComponent);
    component = fixture.componentInstance;
    component.customProperties = new CustomProperties();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
