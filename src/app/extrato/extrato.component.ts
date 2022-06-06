import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../service/transferencia/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  @Input() transferencias: Transferencia[] = [];  

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
    this.service.allTransferencias().subscribe((transferencias$: Transferencia[]) => {
      console.table(transferencias$);
      this.transferencias = transferencias$;
    })
  }



}
