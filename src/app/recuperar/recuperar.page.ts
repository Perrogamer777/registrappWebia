import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { NgZone } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  constructor(private ActivatedRoute: ActivatedRoute , private router: Router,private ngZone: NgZone,public toastController: ToastController) { }

  ngOnInit() {
  }

  recuperar() {
    console.log("recuperar() se llamó");
    this.router.navigate(['login']);
  }

}
