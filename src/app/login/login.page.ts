import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {



  constructor(private ActivatedRoute: ActivatedRoute , private router: Router,private navCtrl: NavController) {

  }

  username: any;
  password:any;

  

  login(){

    this.router.navigate(['/home'],{queryParams:{data:this.username}})

  }

  enviarDatos2(){
    // locaStorage.setItem(name, content)
    // name = nombre del elemento
    // content = contenido del elemento

    localStorage.setItem('Nombre usuario',this.nombreUsuario);
  }
  
  

  nombreUsuario: string = ''; 
   ngOnInit() { 
    this.ActivatedRoute.queryParams.subscribe((params:any)=>{

      this.nombreUsuario = params.data;
    })
   } 

   reestablecer() {
    console.log("reestablecer() se llamó");
    this.router.navigate(['recuperar']);
  }
   
  recuperar() {
    console.log("recuperar() se llamó");
    this.router.navigate(['login']);
  }
  

}
