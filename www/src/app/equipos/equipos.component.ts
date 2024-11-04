import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

interface Player {
  position: string;
  attributes: { [key: string]: number };
  skills: string[];
  traits: string[];
  primary: string[];
  secondary: string[];
  cost: number;
}

interface Team {
  name: string;
  players: Player[];
}

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css'],
  imports: [MatFormFieldModule, MatSelectModule, CommonModule, MatTableModule],
  standalone: true,
})
export class EquiposComponent implements OnInit {
  teams: Team[] = [
    {
      name: 'Equipo A',
      players: [
        {
          position: 'Corredor',
          attributes: { movimiento: 7, fuerza: 3, agilidad: 3, armadura: 8 },
          skills: ['Esquivar', 'Bloquear'],
          traits: ['Valiente'],
          primary: ['Agilidad', 'General'],
          secondary: ['Fuerza'],
          cost: 70000,
        },
        // Más jugadores para el Equipo A...
      ],
    },
    {
      name: 'Equipo B',
      players: [
        {
          position: 'Blitzer',
          attributes: { movimiento: 6, fuerza: 3, agilidad: 3, armadura: 9 },
          skills: ['Bloquear', 'Perseverante'],
          traits: ['Rápido'],
          primary: ['General', 'Fuerza'],
          secondary: ['Pase'],
          cost: 90000,
        },
        // Más jugadores para el Equipo B...
      ],
    },
    // Agrega más equipos según sea necesario
  ];

  selectedTeam: Team | null = null;
  displayedColumns: string[] = [
    'position',
    'attributes',
    'skills',
    'traits',
    'primary',
    'secondary',
    'cost',
  ];

  // Datos para la tabla de incentivos
  incentiveColumns: string[] = ['name', 'price'];
  incentives = [
    { name: 'Incentivo 1', price: '0k' },
    { name: 'Incentivo 2', price: '10k' },
    // Más incentivos...
  ];

  // Datos para la tabla de jugadores estrellas
  starPlayers = [
    { name: 'Jugador Estrella 1', team: 'Equipo A', position: 'Corredor' },
    { name: 'Jugador Estrella 2', team: 'Equipo B', position: 'Blitzer' },
    // Más jugadores estrellas...
  ];

  constructor() {}

  ngOnInit(): void {}

  onTeamSelect(event: any): void {
    this.selectedTeam = event.value;
  }
}
