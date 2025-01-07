import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
// @ts-ignore
import { ClientService, Client } from '../services/clients.service';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  providers: [MessageService]
})
export class ClientsComponent implements OnInit {
  // @ts-ignore
  clients: Client[];
  selectedClient: Client = { firstName: 'UnSelected', lastName: 'Person', address: 'no where', city: 'HELL', lastInvoiceDate: new Date(), phoneNumber: '0 666 666 666', email: 'a@Please.fr' };
  display: boolean = false;
  displayEdit: boolean = false;
  newClient: Client = { firstName: '', lastName: '', address: '', city: '', lastInvoiceDate: new Date(), phoneNumber: '', email: '' };
  editClient: Client = { firstName: '', lastName: '', address: '', city: '', lastInvoiceDate: new Date(), phoneNumber: '', email: '' };
  errorMessages: any = {};
  errorMessagesEdit: any = {};

  constructor(private clientService: ClientService,private authService: AuthService, private messageService: MessageService){}

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.clientService.getClients().subscribe(
        clients => {
          this.clients = clients;
        },
        error => {
          this.messageService.add({
            severity: 'error',
            summary: 'Erreur',
            detail: 'Impossible de récupérer les clients.'
          });
        }
      );
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Erreur',
        detail: 'Non connecté.'
      });
    }
  }

  addClient(client: Client) {
   this.clearErrorMessages();
   if (this.isValidNewClient(client, 'newClient')) {
     this.clientService.addClient(client).subscribe(newClient => {
         this.clients.push(newClient);
         this.display = false;
         this.messageService.add({severity: 'success', summary: 'Succès', detail: 'Client ajouté avec succès.'});
       },
       error => {
         if (error.status === 409) {
           this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Ce client existe déjà.'});
         } else {
           this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Impossible d\'ajouter le client.'});
         }
       }
     );
   } else {
     this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Veuillez remplir tous les champs requis.'});
   }
 }
  deleteClient() {
    if (this.selectedClient) {
      this.clientService.deleteClient(this.selectedClient).subscribe( () => {
        this.clients = this.clients.filter(client => client.email !== this.selectedClient.email);
        this.selectedClient =
          { firstName: 'UnSelected', lastName: 'Person', address: 'no where', city: 'HELL', lastInvoiceDate: new Date(), phoneNumber: '', email: 'a@Please.fr' };
        this.messageService.add({ severity: 'success', summary: 'Succès', detail: 'Client supprimé avec succès.' });
        },
          error => { this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Impossible de supprimer le client.' }); }
      );
    }
    else { this.messageService.add({ severity: 'warn', summary: 'Attention', detail: 'Veuillez sélectionner un client à supprimer.' }); }
  }

  showDialog() {
    this.display = true;
  }

  showEditDialog() {
    if (this.selectedClient) {
      this.editClient = { ...this.selectedClient };
      this.displayEdit = true;
    } else {
      this.messageService.add({ severity: 'warn', summary: 'Attention', detail: 'Veuillez sélectionner un client à modifier.' });
    }
  }

  updateClient() {
    this.clearErrorMessages();
    if (this.isValidNewClient(this.editClient, 'editClient')) {
      this.clientService.updateClient(this.editClient).subscribe(
        updatedClient => {
          const index = this.clients.findIndex(client =>
            client.firstName.toLowerCase() === this.selectedClient.firstName.toLowerCase() &&
            client.lastName.toLowerCase() === this.selectedClient.lastName.toLowerCase() &&
            client.address.toLowerCase() === this.selectedClient.address.toLowerCase()
          );
          if (index !== -1) {
            this.clients[index] = updatedClient;
            this.selectedClient = updatedClient;
            this.displayEdit = false;
            this.messageService.add({ severity: 'success', summary: 'Succès', detail: 'Client modifié avec succès.' });
          }
        },
        error => {
          this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Impossible de modifier le client.' });
        }
      );
    } else {
      this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Veuillez remplir tous les champs requis.' });
    }
  }


  isValidNewClient(client: Client, clientType: string): boolean {
    let isValid = true;
    const errorMessages = clientType === 'newClient' ? this.errorMessages : this.errorMessagesEdit;
    if (client.firstName === '') {
      errorMessages.firstName = 'Prénom est requis.';
      isValid = false;
    }
    if (client.lastName === '') {
      errorMessages.lastName = 'Nom est requis.';
      isValid = false;
    }
    if (client.address === '') {
      errorMessages.address = 'Adresse est requise.';
      isValid = false;
    }
    if (client.phoneNumber === '' && client.email === '') {
      errorMessages.phone = 'Téléphone ou Email est requis.';
      errorMessages.email = 'Téléphone ou Email est requis.';
      isValid = false;
    } else if (client.phoneNumber !== '' && !this.validatePhoneNumber(client.phoneNumber)) {
      errorMessages.phone = 'Téléphone doit contenir exactement 10 chiffres.';
      isValid = false;
    }
    return isValid;
  }

  clearErrorMessages() { this.errorMessages = {}; this.errorMessagesEdit ={};}

  validatePhoneNumber(phoneNumber: string): boolean { return /^[0-9]{10}$/.test(phoneNumber); }

  validateAlpha(event: KeyboardEvent) {
    const inputChar = String.fromCharCode(event.charCode);
    if (!/^[a-zA-Z]*$/.test(inputChar)) { event.preventDefault(); }
  }
  validateNumeric(event: KeyboardEvent) {
    const inputChar = String.fromCharCode(event.charCode);
    if (!/^[0-9]*$/.test(inputChar)) { event.preventDefault(); }
  }
  validateEmail(event: KeyboardEvent) {
    const inputChar = String.fromCharCode(event.charCode);
    if (!/^[a-zA-Z0-9@._-]*$/.test(inputChar)) { event.preventDefault(); }
  }

  isDuplicateClient(): boolean {
    return this.clients.some(client =>
      client.firstName.toLowerCase() === this.newClient.firstName.toLowerCase() &&
      client.lastName.toLowerCase() === this.newClient.lastName.toLowerCase() &&
      client.address.toLowerCase() === this.newClient.address.toLowerCase() );
  }

  onRowSelect(event: any) {
    this.selectedClient = event.data;
  }

  // @ts-ignore
  @ViewChild('dt') dt: Table;

    filterGlobal(event: Event, field: string, mode: string) {
      const inputValue = (event.target as HTMLInputElement).value;
      this.dt.filter(inputValue, field, mode);
    }
}

