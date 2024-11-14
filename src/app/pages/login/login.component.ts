import { Component, ElementRef, SimpleChanges, ViewChild } from '@angular/core';
import {
    FormControl,
    FormGroupDirective,
    NgForm,
    Validators,
    FormsModule,
    ReactiveFormsModule,
    AbstractControl,
    ValidationErrors,
    ValidatorFn,
} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import LocalStorageManager from '../../util/localStorageManager';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, ReactiveFormsModule, FormsModule, MatPasswordStrengthModule],
  templateUrl: './login.component.html',
  styleUrl: '../../styles/login.component.scss'
})
export class LoginComponent {
  constructor(private router: Router ) {

  }

  onSubmit(): void {
      if(this.passwordFormControl.valid && this.emailFormControl.valid) {
          let userList = LocalStorageManager.getItemObject('userList');
          if(userList === null) {
              userList = [];
          }

          /*const user = {
              username: this.usernameFormControl.value,
              email: this.emailFormControl.value,
              password: this.password.nativeElement.value
          };

          userList.push(user);
          LocalStorageManager.setItemObject('userList', userList);
          this.router.navigate(['/login']);*/
      }
  }

  passwordFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

}
