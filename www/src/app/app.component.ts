import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    RouterModule,
    MatIconModule,
    CommonModule,
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  images: string[] = [
    'images/deb-bull.webp',
    'images/heinekhaine-sponsor.png',
    'images/IKILLYA-Sponsor.png.webp',
    'images/necrosoft.webp',
    'images/nesquiq.jpg',
    'images/nk.jpg',
    'images/Orcidas-2-Sponsor-1024x256.jpg.webp',
    'images/regenerade.webp',
    'images/Sponsor-Blood-Bowl-Tindelf-1024x394.webp',
    'images/the-norse-face.png',
    'images/Whaaghmart-Green-Sponsor.jpg.webp',
    'images/ZombWay-Sponsor.png.webp',
  ];
  currentImageIndex = 0;
  private intervalId: any;

  ngOnInit(): void {
    // Cambia la imagen cada 3 segundos
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 3000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Limpia el intervalo al destruir el componente
    }
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }
}
