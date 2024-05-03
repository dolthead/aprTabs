import { Component, inject } from '@angular/core';
import { Platform, AlertController, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { Share } from '@capacitor/share';
import { Camera } from '@capacitor/camera';
import { Badge } from '@awesome-cordova-plugins/badge/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonButton,  IonHeader, IonToolbar, IonTitle, IonContent],
  providers: [Badge],
})
export class Tab2Page {
  private alert: AlertController = inject(AlertController);
  private platform: Platform = inject(Platform);

  constructor() {}

  async shareNow() {
    if (this.platform.is('hybrid')) {
      await Share.share({
        title: 'See cool stuff',
        text: 'Really awesome thing you need to see right meow',
        url: 'http://ionicframework.com/',
        dialogTitle: 'Share with buddies',
      });
    } else {
      // share with web share api
      const { share } = navigator;
      if (share) {
        await share({
          title: 'See cool stuff',
          text: 'Really awesome thing you need to see right meow',
          url: 'http://ionicframework.com/',
        });
      } else {
        const alert = await this.alert.create({
          header: 'Bummer',
          message: 'Web Share API is not supported on this browser',
          buttons: ['OK'],
        });
        await alert.present();
      }
    }
  }
  
  // Share text only
  // await Share.share({
  //   text: 'Really awesome thing you need to see right meow',
  // });
  
  // // Share url only
  // await Share.share({
  //   url: 'http://ionicframework.com/',
  // });

  async sharePhotos() {
    // Share multiple files using files parameter
    const { photos } = await Camera.pickImages({
      quality: 90,
      limit: 3,
    });
    await Share.share({
      files: photos.map(photo => photo.path!),
    });
  }
}
