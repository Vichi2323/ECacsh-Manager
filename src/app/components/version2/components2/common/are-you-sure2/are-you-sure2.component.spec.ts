import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreYouSure2Component } from './are-you-sure2.component';

describe('AreYouSure2Component', () => {
  let component: AreYouSure2Component;
  let fixture: ComponentFixture<AreYouSure2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreYouSure2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreYouSure2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
