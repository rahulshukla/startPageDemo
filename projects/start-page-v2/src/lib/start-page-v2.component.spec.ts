import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPageV2Component } from './start-page-v2.component';

describe('StartPageV2Component', () => {
  let component: StartPageV2Component;
  let fixture: ComponentFixture<StartPageV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartPageV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPageV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
