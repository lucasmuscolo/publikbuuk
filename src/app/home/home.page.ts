import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFabButton, IonIcon, IonFab, IonTabButton, IonLabel, IonTabBar, IonTabs } from '@ionic/angular/standalone';
import { AuthenticationService } from '../services/authentication.service';
import { addIcons } from 'ionicons';
import { exit, exitOutline } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonLabel, IonTabButton, IonFab, IonIcon, IonFabButton, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  public enviromentInjector = inject(EnvironmentInjector);
  constructor(
    public authenticationService: AuthenticationService,
    public router: Router
  ) {
    addIcons({ exit, exitOutline })
  }

  logOut(){
    this.authenticationService.signOut();
    this.router.navigate(['/login']);
  }
}
