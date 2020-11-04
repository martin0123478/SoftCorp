import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(
    private http: HttpClient
  ) { }


  createCliente (cliente){
    return this.http.post('http://localhost:8090/api/cliente', cliente);
  }


}
