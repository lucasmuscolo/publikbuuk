import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonInput, IonIcon, IonFab } from '@ionic/angular/standalone';
import { chevronForward, lockClosedOutline, personOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { LoadingController } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonFab, 
    IonIcon, 
    IonInput, 
    IonItem, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,
    ReactiveFormsModule, 
    RouterLink]
})
export class LoginPage implements OnInit {
  
  public loginForm!: FormGroup;

  constructor(
    public formBuilder:FormBuilder,
    public loadingCtrl:LoadingController,
    public authService: AuthenticationService
  ) { 
    addIcons({ personOutline, lockClosedOutline, chevronForward})

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email:['',[
        Validators.required,
        Validators.email,
        Validators.pattern(`[a-z0-9.%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$`),
      ]],
      password:['',[
        Validators.required,
        Validators.pattern(`(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}`)
      ]]
    });
  }

  get errorControl(){
    return this.loginForm?.controls;
  }

  async signUp(){
     const loading = this.loadingCtrl.create();
     (await loading).present();
      if(this.loginForm?.valid){
       //const user = await this.authService.registerUser(this.loginForm.value.email, this.loginForm.value.password);
     } 
  }

}
