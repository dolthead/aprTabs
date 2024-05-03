import { CommonModule } from '@angular/common';
import { Component, EnvironmentInjector, OnDestroy, OnInit, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square, logoOctocat } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [CommonModule, IonBadge, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage implements OnInit, OnDestroy {
  public environmentInjector = inject(EnvironmentInjector);
  public badgeCount = 1;

  constructor() {
    addIcons({ triangle, ellipse, square, logoOctocat  });
  }
  ngOnInit() {
    window.addEventListener('badgeCount', (e: Event) =>  {
      // @ts-expect-error
      this.badgeCount = e['detail'];
    });
  }
  ngOnDestroy(): void {
    window.removeEventListener('badgeCount', () => {});
  }
}
