import { Component, OnInit } from '@angular/core';
import { MenuItem, SelectItem } from 'primeng/api';

interface Document {
  invoiceNumber: string;
  date: string;
  clientName: string;
  totalTTC: number;
  status: string;
}

interface DocumentType {
  type: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  items: MenuItem[] = [];
  tabItems: MenuItem[] = [];
  selectedDocumentType: DocumentType | null = null;
  // @ts-ignore
  activeTab: MenuItem;
  stepIndex: number = 0;
  documents: Document[] = [
    { invoiceNumber: '001', date: '2024-01-01', clientName: 'Client A', totalTTC: 100, status: 'Paid' },
    { invoiceNumber: '002', date: '2024-02-01', clientName: 'Client B', totalTTC: 200, status: 'Pending' }
    // Ajoute d'autres documents ici
  ];
  documentTypes: DocumentType[] = [
    { type: 'all', label: 'Tous les documents', icon: 'pi pi-folder' },
    { type: 'factures', label: 'Factures', icon: 'pi pi-file' },
    { type: 'accompte', label: 'Accompte', icon: 'pi pi-dollar' },
    { type: 'devis', label: 'Devis', icon: 'pi pi-file-edit' },
    { type: 'brouillons', label: 'Brouillons', icon: 'pi pi-pencil' }
  ];
  displayDialog: boolean = false; // Variable pour contrôler l'affichage du dialog
  clientType: string = 'Particulier'; // Par défaut, on commence par 'Particulier'
  clientTypes: SelectItem[] = [
    { label: 'Particulier', value: 'Particulier' },
    { label: 'Entreprise', value: 'Entreprise' }
  ];

  // Variables pour les champs de formulaire
  clientFirstName: string = '';
  clientLastName: string = '';
  clientGender: string = '';
  clientAddress: string = '';
  clientPostalCode: string = '';
  clientPhone: string = '';
  clientEmail: string = '';
  clientSIRET: string = '';

  ngOnInit() {
    this.items = this.documentTypes.map(doc => ({
      label: doc.label,
      icon: doc.icon,
      command: () => this.viewDocuments(doc.type)
    }));

    this.tabItems = [
      { label: 'Liste', icon: 'pi pi-eye', command: () => this.setActiveTab('Liste') },
      { label: 'Créer', icon: 'pi pi-plus', command: () => this.setActiveTab('Créer') },
      { label: 'Modifier', icon: 'pi pi-pencil', command: () => this.setActiveTab('Modifier') },
      { label: 'Supprimer', icon: 'pi pi-trash', command: () => this.setActiveTab('Supprimer') }
    ];

    this.activeTab = this.tabItems[0]; // Initialize with the first tab
  }

  setActiveTab(label: string): void {
    this.activeTab = this.tabItems.find(tab => tab.label === label)!;
    this.stepIndex = 0;
  }

  viewDocuments(type: string): void {
    this.selectedDocumentType = this.documentTypes.find(doc => doc.type === type) || null;
    console.log(`Viewing ${type} documents`);
    // Ajoute ici la logique pour afficher les documents en fonction du type
  }

  viewExisting(): void {
    console.log('Viewing existing documents');
    // Ajoute ici la logique pour afficher les documents existants
  }

  createNew(): void {
    console.log('Creating a new document');
    // Ajoute ici la logique pour créer un nouveau document
  }

  modifyExisting(): void {
    console.log('Modifying an existing document');
    // Ajoute ici la logique pour modifier un document existant
  }

  deleteInvoice(): void {
    console.log('Deleting an invoice');
    // Ajoute ici la logique pour supprimer une facture
  }

  nextStep(): void {
    if (this.stepIndex < 3) {
      this.stepIndex++;
    }
  }

  prevStep(): void {
    if (this.stepIndex > 0) {
      this.stepIndex--;
    }
  }

  saveDraft() {
    // Logique pour enregistrer en brouillon
  }

  send() {
    // Logique pour envoyer
  }

  validate() {
    // Logique pour valider
  }

  download() {
    // Logique pour télécharger le PDF
  }


  handleTabChange(event: any): void {
    console.log(`Tab changed to: ${event}`);
  }

  showDialog(): void {
    this.displayDialog = true;
  }

  hideDialog(): void {
    this.displayDialog = false;
  }

  saveClient(): void {
    // Logique pour sauvegarder le client
    console.log('Client saved');
    this.hideDialog();
  }

  filterNumbers(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // Invalid character, prevent input
      event.preventDefault();
    }
  }

}
