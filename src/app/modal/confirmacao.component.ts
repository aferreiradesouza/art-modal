import { Component, OnInit } from '@angular/core';
import { ArtModal, ArtModalService } from 'projects/art-modal/src/public-api';

@Component({
    selector: 'app-confirmacao-idade-aposentadoria',
    templateUrl: 'confirmacao.component.html',
    styleUrls: ['confirmacao.component.scss']
})

export class ConfirmacaoIdadeAposentadoriaComponent extends ArtModal implements OnInit {

    public title: string;
    public message: string;

    ngOnInit() { }

    onInjectInputs(inputs): void {
        this.title = inputs.title;
        this.message = inputs.message;
    }

    save(): void {
        this.close({teste: 'teste de sucesso'});
    }

    cancel(): void {
        this.dismiss('canceling');
    }
}
