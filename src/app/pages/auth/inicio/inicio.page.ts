import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service.spec';
import { UtilidadesService } from 'src/app/services/utilidades.service.spec';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  firebaseSvc = inject(FirebaseService);
  utilSvc = inject(UtilidadesService);
  router = inject(Router);

  constructor() { }

  ngOnInit() { }

  async logout() {
    try {
      await this.firebaseSvc.signOut();
      this.utilSvc.presentToast({
        message: "Sesión cerrada correctamente.",
        duration: 3000,
        color: "success",
        position: "middle",
        icon: "log-out-outline"
      });
      this.router.navigate(['/auth']); // Redirige al login
    } catch (error) {
      this.utilSvc.presentToast({
        message: "Error al cerrar sesión, intenta de nuevo.",
        duration: 3000,
        color: "danger",
        position: "middle",
        icon: "alert-circle-outline"
      });
    }
  }
}
