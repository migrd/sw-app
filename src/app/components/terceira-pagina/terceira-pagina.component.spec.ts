import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceiraPaginaComponent } from './terceira-pagina.component';

describe('TerceiraPaginaComponent', () => {
  let component: TerceiraPaginaComponent;
  let fixture: ComponentFixture<TerceiraPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerceiraPaginaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceiraPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
