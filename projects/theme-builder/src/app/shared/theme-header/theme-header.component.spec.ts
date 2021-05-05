import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '../shared.module';
import { Storage } from '../../shared/models/storage.model';

import { ThemeHeaderComponent } from './theme-header.component';

describe('ThemeHeaderComponent', () => {
  let component: ThemeHeaderComponent;
  let fixture: ComponentFixture<ThemeHeaderComponent>;

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
    fixture = TestBed.createComponent(ThemeHeaderComponent);
    component = fixture.componentInstance;
    component.storage = new Storage({ key: 'lp-promotion', });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
