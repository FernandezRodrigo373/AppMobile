import { TestBed } from '@angular/core/testing';

import { inject, Injectable } from '@angular/core';
import { ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilidadesService {

  erroresCtrl = inject(ToastController);




  async presentToast(opts?: ToastOptions) {
    const toast = await this.erroresCtrl.create(opts);
    toast.present();
  }
}
