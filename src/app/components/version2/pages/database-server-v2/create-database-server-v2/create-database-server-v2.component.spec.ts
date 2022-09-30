import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDatabaseServerV2Component } from './create-database-server-v2.component';

describe('CreateDatabaseServerV2Component', () => {
  let component: CreateDatabaseServerV2Component;
  let fixture: ComponentFixture<CreateDatabaseServerV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDatabaseServerV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDatabaseServerV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
