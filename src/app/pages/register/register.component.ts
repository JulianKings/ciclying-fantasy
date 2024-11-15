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
import { ErrorStateMatcher } from '@angular/material/core';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { NgIf } from '@angular/common';
import LocalStorageManager from '../../util/localStorageManager';
import { Router } from '@angular/router';
import { UserInterface } from '../../interfaces/user';

export class EmailErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, ReactiveFormsModule, FormsModule, MatPasswordStrengthModule, NgIf],
    templateUrl: './register.component.html',
    styleUrl: '../../styles/register.component.scss',
})

export class RegisterComponent {
    @ViewChild('password')
    password!: ElementRef;

    constructor(private router: Router ) {

    }

    passwordsMatch(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if(this.password !== undefined)
            {
                if(control.value === '' || this.password.nativeElement.value === '')
                {
                    return null;
                } else if(control.value !== this.password.nativeElement.value) {
                    return {matchPassword: {value: control.value}};
                } else {
                    return null;
                }
            } else {
                return null;
            }
        };
    }

    onSubmit(): void {
        if(this.usernameFormControl.valid && this.emailFormControl.valid && this.password.nativeElement && this.password.nativeElement.value !== '' && this.confirmPasswordFormControl.valid) {
            let userList: UserInterface[] = LocalStorageManager.getItemObject('userList');
            if(userList === null) {
                userList = [];
            }

            if(this.usernameFormControl.value !== null && this.emailFormControl.value !== null)
            {
              const user: UserInterface = {
                  id: LocalStorageManager.loadLastId('userList') + 1,
                  username: this.usernameFormControl.value,
                  email: this.emailFormControl.value,
                  password: this.password.nativeElement.value
              };

              userList.push(user);
              LocalStorageManager.setItemObject('userList', userList);
              this.router.navigate(['/login']);
            }
        }
    }

    usernameExists(): ValidatorFn  {
        return (control: AbstractControl): ValidationErrors | null => {
            const username = control.value;
            if(username !== undefined) {
                const userList = LocalStorageManager.getItemObject('userList');

                if(userList === null) {
                    return null;
                }

                const user: UserInterface = userList.find((user: UserInterface) => user.username === username);
                if(user !== undefined) {
                    return {usernameExists: {value: username}};
                } else {
                    return null;
                }
            }

            return null;
        };
    }

    emailExists(): ValidatorFn  {
        return (control: AbstractControl): ValidationErrors | null => {
            let email = control.value;
            if(email !== undefined) {
                const userList = LocalStorageManager.getItemObject('userList');

                if(userList === null) {
                    return null;
                }

                const user: UserInterface = userList.find((user: UserInterface) => user.email === email);
                if(user !== undefined) {
                    return {emailExists: {value: email}};
                } else {
                    return null;
                }
            } else {
                return null;
            }
        };
    }

    onStrengthChanged($event: number): void {
        if($event === 100)
        {
            this.safePassword = true;
        } else {
            this.safePassword = false;
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
    }

    usernameFormControl = new FormControl('', [Validators.required, this.usernameExists()]);
    emailFormControl = new FormControl('', [Validators.required, Validators.email, this.emailExists()]);
    matcher = new EmailErrorStateMatcher();
    confirmPasswordFormControl = new FormControl('', [Validators.required, this.passwordsMatch()]);
    safePassword = false;
    }
