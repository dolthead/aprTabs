import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { take } from 'rxjs/operators';
import { IonList, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonProgressBar, IonButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { CommonModule, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonButton, IonProgressBar,  HttpClientModule, CommonModule, TitleCasePipe, RouterLink, IonList, IonItem, IonSearchbar, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class Tab3Page implements OnInit {

  private http: HttpClient = inject(HttpClient);

  constructor() {
  }

  url = 'https://pokeapi.co/api/v2/pokemon?limit=1000'; // download all 1015!
  list: any[] = [];
  filteredList: any[] = [];
  isLoading = false;

  ngOnInit() {
    this.isLoading = true;
    this.http.get<any>(this.url)
      .pipe(take(1))
      .subscribe((pokeData:any) => {
        this.list = pokeData.results;
        this.list.sort((a: any, b: any) => a.name > b.name ? 1 : -1);
        this.filteredList = [...this.list];
        this.isLoading = false;
      });
  }

  filterItems(event: any) {
    this.isLoading = true;
    const text = event.srcElement.value.trim().toLowerCase();
    this.filteredList = text
      ? this.list.filter(item => item.name.toLowerCase().includes(text))
      : [...this.list];
    this.isLoading = false;
  }
}

