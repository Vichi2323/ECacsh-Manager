import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseServerV2Component } from './database-server-v2.component';

describe('DatabaseServerV2Component', () => {
  let component: DatabaseServerV2Component;
  let fixture: ComponentFixture<DatabaseServerV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabaseServerV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabaseServerV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
