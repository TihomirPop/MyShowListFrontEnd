import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  errorMessage: string = '';
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      'username': new FormControl('', [Validators.required, Validators.minLength(4)]),
      'password': new FormControl('', [Validators.required]),
      'repeatPassword': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.email]),
    }, {validators: this.confirmPasswordValidator});

    this.userService.errorEmitter.subscribe(e => this.errorMessage = e);
  }

  confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    return control.value.password === control.value.repeatPassword ? null : {PasswordNoMatch: true};
  };

  onRegister() {
    const {repeatPassword, ...user} = this.registerForm.value;

    if (this.userService.addUsers(user))
      this.router.navigate(['/login']);
  }
}
