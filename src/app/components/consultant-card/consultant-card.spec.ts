import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantCard } from './consultant-card';

describe('ConsultantCard', () => {
  let component: ConsultantCard;
  let fixture: ComponentFixture<ConsultantCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultantCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
