import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCostumerFormComponent } from './new-costumer-form.component';

describe('NewCostumerFormComponent', () => {
  let component: NewCostumerFormComponent;
  let fixture: ComponentFixture<NewCostumerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCostumerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCostumerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
