import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterToolbar } from './filter-toolbar';

describe('FilterToolbar', () => {
  let component: FilterToolbar;
  let fixture: ComponentFixture<FilterToolbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterToolbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterToolbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
