import { Component, inject } from '@angular/core';
import { AlertController, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [ IonHeader, IonToolbar, IonTitle, IonContent]
})
export class Tab2Page {
  private alert: AlertController = inject(AlertController);

  constructor() {}

}
