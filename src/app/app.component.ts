import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [
    {
      url: 'https://tatuagenstattoo.com.br/wp-content/uploads/2016/08/1540-phoenix-tribal_large-1.jpg',
      description: 'tatoo phoenix tribal',
    },
    {
      url: 'https://i.pinimg.com/originals/dc/62/47/dc6247f16ecf8dc8b9e38dfb6d56f8e5.png',
      description: 'Tatoo Basquete'
    }
  ];
}
