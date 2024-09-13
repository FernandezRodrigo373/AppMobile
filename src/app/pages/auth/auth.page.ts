import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service.spec';
import { UtilidadesService } from 'src/app/services/utilidades.service.spec';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})


export class AuthPage implements OnInit {

  form = new FormGroup({
    correo: new FormControl('', [Validators.required, Validators.email]),
    clave: new FormControl('', [Validators.required]),
  })


  firebaseSvc = inject(FirebaseService);
  utilSvc = inject(UtilidadesService)
  router = inject(Router); // Inyecta el Router para redirigir

  ngOnInit() {

  }

 async submit(){

   this.firebaseSvc.signIn(this.form.value as User).then(res => 
   {
      (console.log(res))

      this.router.navigate(['/inicio']);
      this.form.reset();
   }).catch(error => {
    this.utilSvc.presentToast({
      message: "El correo y/o clave es incorrecto, Por favor intenta de nuevo. ",
      duration: 3000,
      color: "primary",
      position: "middle",
      icon: "alert-circle-outline"
      
    })
   })



  }

  setUser(email: string, password: string) {
    this.form.patchValue({
      correo: email,
      clave: password
    });
  }

}
