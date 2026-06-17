import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToogleGroup } from './toogle-group';

describe('ToogleGroup', () => {
  let component: ToogleGroup;
  let fixture: ComponentFixture<ToogleGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToogleGroup],
    }).compileComponents();

    fixture = TestBed.createComponent(ToogleGroup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
