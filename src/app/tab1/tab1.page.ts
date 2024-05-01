import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonSelect, IonSelectOption, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList, IonItem, IonInput, IonTabButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { Router, RouterModule } from '@angular/router';
import { add } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [ RouterModule, IonSelect, IonSelectOption, IonIcon, IonTabButton, IonInput, IonItem, IonList, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, FormsModule],
})
export class Tab1Page {
  private router: Router = inject(Router);
  name = 'Page';
  option = 1;

  constructor() {
    addIcons({ add });
  }

  onClick() {}
  
  goToTab3() {
    this.router.navigate(['/tabs/tab3'])
  }
}
