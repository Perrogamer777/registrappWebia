import { Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Observable } from 'rxjs';

import { ApiServicioService } from '../api-servicio.service'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage implements OnInit {
  isModalOpen = false;

  username: string='';
  password: string='';

  //para llamar el objeto
  data: any = {};



  //wardar datos
  enviarDatos(){
    // locaStorage.setItem(name, content)
    // name = nombre del elemento
    // content = contenido del elemento
    localStorage.setItem('Nombre usuario',this.nombreUsuario);
  }
  
  eliminarDatos(){
    localStorage.removeItem('Nombre usuario');
  }

  limpiarDatos(){
    localStorage.clear();
  }


  
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  async canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  }

  constructor(private ActivatedRoute: ActivatedRoute , private router: Router, 
    private ApiServicioService: ApiServicioService) {}

  nombreUsuario: string = ''; 
  nombre=localStorage.getItem('Nombre usuario');
   ngOnInit() { 

    this.llenarData()

    console.log('Se cargó el ngOnInit')
    this.ActivatedRoute.queryParams.subscribe((params:any)=>{

      this.nombreUsuario = params.data;
    })

    console.log('Nombre usuario: ', this.nombre);
   }

   llenarData(){
    this.ApiServicioService.getPosts().subscribe((data: any) =>{
      this.data = data;
      console.log(this.data);
    })
   }
   

  
   
   
   loginback() {
    console.log("loginback() se llamó");
    this.router.navigate(['login']);
  }
  
  registerback() {
    console.log("registerback() se llamó");
    this.router.navigate(['registro-user']);
  }

 recuperarback() {
    console.log("recuperarback() se llamó");
    this.router.navigate(['recuperar']);
  }

  profile(){
    console.log("profile() se llamó");
    this.router.navigate(['profile']);
  }
  
  cerrarSesion() {
    this.nombreUsuario='';
    this.username = '';
    this.password = '';
  }

  ionViewWillEnter(){
    console.log('Se cargó ionViewWillEnter')
  }

  ionViewDidEnter(){
    console.log('Se cargó ionViewDidEnter')
  }

  ionViewWillLeave(){
    console.log('Se cargó ionViewWillLeave ')
  }

  ionViewDidLeave(){
    console.log('Se cargó ionViewDidLeave ')
  }

  ngOnDestroy(){
    console.log('Se cargó ngOnDestroy')
  }

  irApi(){
    this.router.navigate(['vista-api']);
  }
  }

  



 


  
