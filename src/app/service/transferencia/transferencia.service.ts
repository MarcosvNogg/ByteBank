import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Transferencia } from 'src/app/models/transferencia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  
  private listaTransferencias: Transferencia[];
  private url = 'http://localhost:3000/transferencias';
  
  constructor(
    private http: HttpClient
  ) {
    this.listaTransferencias = [];
   }

  get transferencias(): Transferencia[] {
    return this.listaTransferencias;
  }

  allTransferencias(): Observable<Transferencia[]> {
    return this.http.get<Transferencia[]>(this.url)
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.hidratar(transferencia);
    
    return this.http.post<Transferencia>(this.url, transferencia);
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
