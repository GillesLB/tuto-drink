import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterBoissonComponent } from './ajouter-boisson.component';

describe('AjouterBoissonComponent', () => {
  let component: AjouterBoissonComponent;
  let fixture: ComponentFixture<AjouterBoissonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterBoissonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterBoissonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
