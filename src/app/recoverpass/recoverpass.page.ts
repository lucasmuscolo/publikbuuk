import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonFabButton, IonFab, IonInput, IonItem } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personOutline, chevronForward } from 'ionicons/icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recpass',
  templateUrl: './recoverpass.page.html',
  styleUrls: ['./recoverpass.page.scss'],
  standalone: true,
  imports: [
    IonItem,
    IonInput, 
    IonFab, 
    IonFabButton, 
    IonIcon, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule, 
    RouterLink
  ]
})
export class RecoverpassPage implements OnInit {

  constructor() { 
    addIcons({ personOutline, chevronForward});
  }

  ngOnInit() {
    let vari = 0;
  }

}
