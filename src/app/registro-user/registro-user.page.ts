import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { NgZone } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-registro-user',
  templateUrl: './registro-user.page.html',
  styleUrls: ['./registro-user.page.scss'],
})
export class RegistroUserPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  vollogin() {
    console.log("vollogin() se llamó");
    this.router.navigate(['login']);
  }

}
