import { Component } from '@angular/core';
import { TransferenciaService } from './service/transferencia/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'byte-broker';

  constructor(
    private transferenciaService: TransferenciaService
  ) {}

  transferir($event: any) {
    this.transferenciaService.adicionar($event)
  }
}
