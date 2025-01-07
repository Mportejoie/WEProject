// client.model.ts

export interface Client {
  id?: number;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  phoneNumber: string;
  email: string;
  lastInvoiceDate: Date;
  gender?: string; // Optionnel, si tu as ce champ
}
