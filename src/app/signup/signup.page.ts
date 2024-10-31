import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFabButton, IonIcon, IonItem, IonInput, IonFab, IonText } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { LoadingController } from '@ionic/angular';
import { chevronForward, lockClosedOutline, personOutline } from 'ionicons/icons';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonText, 
    IonFab, 
    IonInput, 
    IonItem, 
    IonIcon, 
    IonFabButton, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,
    ReactiveFormsModule, 
    RouterLink
  ]
})
export class SignupPage implements OnInit {

  regForm: FormGroup;

  constructor(
    public formBuilder:FormBuilder,
    public loadingCtrl:LoadingController,
    public authService: AuthenticationService,
    public router: Router
  ) { 
    addIcons({ personOutline, lockClosedOutline, chevronForward});
  }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      fullname:['', [Validators.required]],
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
    return this.regForm?.controls;
  }

  async signUp(){
    const loading = this.loadingCtrl.create();
    (await loading).present();
    if(this.regForm?.valid){
      const user = await this.authService.registerUser(this.regForm.value.email, this.regForm.value.password).catch(async (error)=>{
        console.log(error);
        (await loading).dismiss();
      });

      if(user){
        (await loading).dismiss();
        this.router.navigate(['/home']);
      }
    }
  }
}
