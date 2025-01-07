import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCategoryButtonComponent } from './container-category-button.component';

describe('ContainerCategoryButtonComponent', () => {
  let component: ContainerCategoryButtonComponent;
  let fixture: ComponentFixture<ContainerCategoryButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContainerCategoryButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerCategoryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
