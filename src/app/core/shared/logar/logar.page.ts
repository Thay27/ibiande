import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-logar',
  templateUrl: './logar.page.html',
  styleUrls: ['./logar.page.scss'],
})
export class LogarPage implements OnInit {

  constructor(private router: Router, private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  logar() {
      if (this.afAuth.auth.currentUser.uid) {
       this.router.navigate(['/perfil']);
       } else {
         this.router.navigate(['/login']);
       }
  }
}
