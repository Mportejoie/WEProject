import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'MAFAD-Project';
  currentPage: string = 'home';
  displayLoginDialog = false;
  username: string | null = null;

  constructor(private authService: AuthService) { this.username = this.authService.getUsername(); }
  showLoginDialog() { this.displayLoginDialog = true; }
  logout() { this.authService.logout(); this.username = null;}
  onLoginSuccess() { this.username = this.authService.getUsername(); this.displayLoginDialog = false; }
  // @ts-ignore
  dockItems: MenuItem[];

  ngOnInit() {


    this.dockItems = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => {
          // Logique pour la commande Home
          console.log('Home clicked');
          this.setCurrentPage('home');
        }
      },
      /*{
        label: 'Search',
        icon: 'pi pi-search',
        command: () => {
          // Logique pour la commande Search
          console.log('Search clicked');
          this.setCurrentPage('search');
        }
      },*/
      {
        label: 'Clients',
        icon: 'pi pi-users',
        command: () => {
          this.setCurrentPage('clients');
        }
      },
      {
        label: 'Stocks',
        icon: 'pi pi-box',
        command: () => {
          this.setCurrentPage('stocks');
        }
      },
      {
        label: 'Invoices',
        icon: 'pi pi-file',
        command: () => {
          this.setCurrentPage('invoices');
        }
      },
      {
        label: 'Accounting',
        icon: 'pi pi-wallet',
        command: () => {
          this.setCurrentPage('accounting');
        }
      },
      {
        label: 'Settings',
        icon: 'pi pi-cog',
        command: () => {
          // Logique pour la commande Settings
          console.log('Settings clicked');
          this.setCurrentPage('settings');
        }
      }
    ];
  }

  setCurrentPage(page: string) { this.currentPage = page; }

}
