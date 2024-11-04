import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

interface Participant {
  username: string;
  nickname: string;
  teamName: string;
  race: string;
  rating: number;
  avatar: string; // URL de la imagen del usuario
}

@Component({
  standalone: true,
  imports: [CommonModule, MatIconModule],
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css'],
})
export class ParticipantsComponent {
  participants: Participant[] = [
    {
      username: 'Carlos',
      nickname: 'Nick1',
      teamName: 'Equipo A',
      race: 'Orcos',
      rating: 1500,
      avatar: 'assets/user1.jpg', // URL de ejemplo
    },
    {
      username: 'Patricio',
      nickname: 'Nick2',
      teamName: 'Equipo B',
      race: 'Elfos',
      rating: 1600,
      avatar: 'assets/user2.jpg',
    },
    {
      username: 'Juan',
      nickname: 'Nick3',
      teamName: 'Equipo C',
      race: 'Humanos',
      rating: 1550,
      avatar: 'assets/user3.jpg',
    },
    {
      username: 'Ale',
      nickname: 'Nick4',
      teamName: 'Equipo D',
      race: 'No Muertos',
      rating: 1580,
      avatar: 'assets/user4.jpg',
    },
    {
      username: 'Javi',
      nickname: 'Nick4',
      teamName: 'Equipo D',
      race: 'No Muertos',
      rating: 1580,
      avatar: 'assets/user4.jpg',
    },
  ];

  // Obtener las iniciales del nombre de usuario
  getInitials(username: string): string {
    const names = username.split(' ');
    return names.map((name) => name.charAt(0).toUpperCase()).join('');
  }

  // Generar un color aleatorio para el avatar
  getAvatarColor(username: string): string {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1'];
    const index = username.charCodeAt(0) % colors.length; // Basado en el primer carácter del username
    return colors[index];
  }
}
