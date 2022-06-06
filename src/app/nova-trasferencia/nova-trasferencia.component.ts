import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TransferenciaService } from '../service/transferencia/transferencia.service';

@Component({
  selector: 'app-nova-trasferencia',
  templateUrl: './nova-trasferencia.component.html',
  styleUrls: ['./nova-trasferencia.component.css']
})
export class NovaTrasferenciaComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter();

  valor: number = 0;
  destino: number = 0;

  constructor(
    private service: TransferenciaService, private router: Router
  ) { }

  ngOnInit(): void {
  }

  transferir() {
    console.log('Transferência enviada...');
    const dadosTransferencia = {valor: this.valor, destino: this.destino};
    
    this.service.adicionar(dadosTransferencia).subscribe(resultado => {
      console.log(resultado);
      this.router.navigateByUrl('extrato')
    },
    error => console.error(error)
    )

    this.limparCampos();
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }

}
