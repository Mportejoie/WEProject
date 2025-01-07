import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  selectedBackground: string = '';
  selectedColor: string = '#ffffff';
  notificationsEnabled: boolean = true;
  selectedLanguage: string = 'fr';
  twoFactorAuthEnabled: boolean = false;
  trackingEnabled: boolean = true;

  backgroundImages = [
    { name: 'Image 1', value: 'image1.jpg' },
    { name: 'Image 2', value: 'image2.jpg' },
    { name: 'Image 3', value: 'image3.jpg' }
  ];

  languages = [
    { name: 'Français', value: 'fr' },
    { name: 'Anglais', value: 'en' }
  ];

  exportData() {
    // Logique pour exporter les données de l'utilisateur
    console.log('Exportation des données...');
  }

  deleteData() {
    // Logique pour supprimer les données de l'utilisateur
    if (confirm('Êtes-vous sûr de vouloir supprimer toutes vos données ?')) {
      console.log('Suppression des données...');
    }
  }
}
