import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-create-league-dialog',
  templateUrl: './create-league.component.html',
  styleUrls: ['./create-league.component.css'],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
})
export class CreateLeagueDialogComponent {
  leagueForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreateLeagueDialogComponent>,
    private fb: FormBuilder
  ) {
    this.leagueForm = this.fb.group({
      name: ['', Validators.required],
      mode: ['', Validators.required],
      participants: ['', [Validators.required, Validators.min(2)]],
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.leagueForm.valid) {
      this.dialogRef.close(this.leagueForm.value); // Envía los datos al componente principal
    }
  }
}
