import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../../../server/model/client.model'; // Assurez-vous que le chemin est correct

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://localhost:3000/api/clients';

  constructor(private http: HttpClient) {}

  getClients(): Observable<Client[]> {
    const token = localStorage.getItem('token');
    console.log('Token used in request:', token); // Ajoute un log pour vérifier le token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<Client[]>(this.apiUrl, { headers });
  }

  addClient(client: Client): Observable<Client> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post<Client>(this.apiUrl, client, { headers });
  }

  deleteClient(client: Client): Observable<void> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = `${this.apiUrl}/${client.id}`;

    return this.http.delete<void>(url, { headers });
  }

  updateClient(client: Client): Observable<Client> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = `${this.apiUrl}/${client.id}`;

    return this.http.put<Client>(url, client, { headers });
  }
}
