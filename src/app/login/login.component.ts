import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  errorMessage: string = '';
  signinForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService) {
  }

  ngOnInit() {
    this.signinForm = this.fb.group({
      'username': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required])
    });

    this.auth.errorEmitter.subscribe((error: string) => {
      this.errorMessage = error;
    });
  }

  onLogin() {
    const user = this.signinForm.value;
    this.auth.login(user.username, user.password);
  }
}
