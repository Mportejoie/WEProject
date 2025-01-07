import { Component, Input, OnChanges } from '@angular/core';
import { jsPDF } from 'jspdf';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-pdf-preview',
  templateUrl: './pdf-preview.component.html',
  styleUrls: ['./pdf-preview.component.css']
})
export class PdfPreviewComponent implements OnChanges {
  @Input() clientFirstName: string = '';
  @Input() clientLastName: string = '';
  @Input() clientAddress: string = '';
  @Input() clientPostalCode: string = '';
  @Input() clientPhone: string = '';
  @Input() clientEmail: string = '';

  pdfDataUri: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges() {
    this.generatePDF();
  }

  generatePDF() {
    const doc = new jsPDF();

    // Ajouter les valeurs au PDF
    doc.text(`Prénom: ${this.clientFirstName}`, 10, 10);
    doc.text(`Nom: ${this.clientLastName}`, 10, 20);
    doc.text(`Adresse: ${this.clientAddress}`, 10, 30);
    doc.text(`Code Postal: ${this.clientPostalCode}`, 10, 40);
    doc.text(`Téléphone: ${this.clientPhone}`, 10, 50);
    doc.text(`Email: ${this.clientEmail}`, 10, 60);

    // Obtenir le PDF en tant que Data URL
    const pdfDataUri = doc.output('datauristring');
    this.pdfDataUri = this.sanitizer.bypassSecurityTrustResourceUrl(pdfDataUri);
  }
}
