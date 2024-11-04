import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { CreateLeagueDialogComponent } from './create-league/create-league.component';

interface League {
  name: string;
  playersCount: number;
  status: 'Finalizada' | 'En Proceso' | 'Preparada';
}

@Component({
  selector: 'app-league',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    CreateLeagueDialogComponent,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './league.component.html',
  styleUrl: './league.component.css',
})
export class LeagueComponent implements OnInit {
  leagues: League[] = [
    { name: 'Liga A', playersCount: 10, status: 'En Proceso' },
    { name: 'Liga B', playersCount: 8, status: 'Preparada' },
    { name: 'Liga C', playersCount: 12, status: 'Finalizada' },
    { name: 'Liga D', playersCount: 12, status: 'Finalizada' },
    { name: 'Liga D2', playersCount: 12, status: 'Finalizada' },
    { name: 'Liga D3', playersCount: 12, status: 'Finalizada' },
    { name: 'Liga D3', playersCount: 12, status: 'Finalizada' },
    { name: 'Liga D4', playersCount: 12, status: 'Finalizada' },
    { name: 'Liga D5', playersCount: 12, status: 'Finalizada' },
    { name: 'Liga D6', playersCount: 12, status: 'Finalizada' },
  ];

  ngOnInit(): void {}

  crearLiga(): void {
    console.log('Abrir formulario para crear una nueva liga');
    // Aquí puedes abrir un modal o mostrar un formulario
  }

  constructor(private dialog: MatDialog) {}

  openCreateLeagueDialog(): void {
    const dialogRef = this.dialog.open(CreateLeagueDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Liga creada:', result);
        // Aquí puedes añadir la lógica para almacenar la nueva liga en la base de datos o en la lista
      }
    });
  }
}
