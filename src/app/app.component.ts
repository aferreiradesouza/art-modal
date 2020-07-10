import { Component } from '@angular/core';
import { ConfirmacaoIdadeAposentadoriaComponent } from './modal/confirmacao.component';
import { ArtModalService } from 'art-modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'modal-module';

  constructor(private modalService: ArtModalService) { }

  teste() {
    const modalRef = this.modalService.open(
      ConfirmacaoIdadeAposentadoriaComponent,
      { title: 'Tesde de título', message: 'Teste de mensagem' }
    );

    modalRef.onResult().subscribe(
      success => console.log(success),
      dismissed => console.log('dismissed')
    );
  }
}
