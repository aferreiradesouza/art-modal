import { Component, OnInit } from '@angular/core';
import { ArtModal, ArtModalService } from 'art-modal';

@Component({
    selector: 'app-confirmacao-idade-aposentadoria',
    templateUrl: 'confirmacao.component.html',
    styleUrls: ['confirmacao.component.scss']
})

export class ConfirmacaoIdadeAposentadoriaComponent extends ArtModal implements OnInit {

    public title: string;
    public message: string;

    constructor(private modalService: ArtModalService) { super(); }

    ngOnInit() { }

    onInjectInputs(inputs): void {
        this.title = inputs.title;
        this.message = inputs.message;
    }

    save(): void {
        this.close({ teste: 'teste de sucesso' });
    }

    cancel(): void {
        this.dismiss('canceling');
    }

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
