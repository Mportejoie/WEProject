import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  newUsername: string = '';
  newPassword: string = '';
  displayRegisterDialog: boolean = false;

  @Output() loginSuccess = new EventEmitter<void>();

  constructor(private authService: AuthService, private messageService: MessageService,private router: Router) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      success => {
        this.messageService.add({ severity: 'success', summary: 'Succès', detail: 'Connexion réussie.' });
        this.closeLoginDialog();
        this.loginSuccess.emit();
        this.router.navigate(['/home']);
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Nom d\'utilisateur ou mot de passe incorrect.' });
      }
    );
  }

  showRegister() {
    this.displayRegisterDialog = true;
  }

  onRegister() {
    this.authService.register(this.newUsername, this.newPassword).subscribe(
      success => {
        this.messageService.add({ severity: 'success', summary: 'Succès', detail: 'Inscription réussie. Vous pouvez maintenant vous connecter.' });
        this.displayRegisterDialog = false;
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Erreur lors de l\'inscription. Veuillez réessayer.' });
      }
    );
  }

  closeLoginDialog() {
    // @ts-ignore
    this.displayLoginDialog = false; // Ferme le pop-up de connexion
  }
}
