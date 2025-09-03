import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantList } from './consultant-list';

describe('ConsultantList', () => {
  let component: ConsultantList;
  let fixture: ComponentFixture<ConsultantList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultantList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
