import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaApiPage } from './vista-api.page';

describe('VistaApiPage', () => {
  let component: VistaApiPage;
  let fixture: ComponentFixture<VistaApiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VistaApiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
