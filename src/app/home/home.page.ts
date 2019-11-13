import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private afAuth: AngularFireAuth) {}



logar() {
  this.afAuth.auth.onAuthStateChanged(user => {
    if (!user) {
      this.router.navigate(['/login'])
    } else {
     this.router.navigate(['/perfil']);
    }
  })

}

comprar() {
  this.afAuth.auth.onAuthStateChanged(user => {
    if (!user) {
      this.router.navigate(['/login'])
    } else {
     this.router.navigate(['/carrinho']);
    }
  })

}



}
