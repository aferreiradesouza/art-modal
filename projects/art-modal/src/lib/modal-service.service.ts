import {
    Injectable,
    ComponentFactoryResolver,
    ComponentFactory,
    ApplicationRef,
    ComponentRef,
    Type
} from '@angular/core';

import { ArtModalContainerComponent } from './modal-container.component';
import { ArtModal } from './models/modal.model';
import { ArtModalRef } from './models/modal-ref.model';

@Injectable()
export class ArtModalService {

    private modalContainer: HTMLElement;
    private modalContainerFactory: ComponentFactory<ArtModalContainerComponent>;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef
    ) {
        this.setupModalContainerFactory();
    }

    open<T extends ArtModal>(component: Type<T>, inputs?: any): ArtModalRef {
        this.setupModalContainerDiv();

        const modalContainerRef = this.appRef.bootstrap(this.modalContainerFactory, this.modalContainer);

        const modalComponentRef = modalContainerRef.instance.createModal(component);

        if (inputs) {
            modalComponentRef.instance.onInjectInputs(inputs);
        }

        const modalRef = new ArtModalRef(modalContainerRef, modalComponentRef);
        this.hiddenOverflow();
        return modalRef;
    }

    private hiddenOverflow() {
        document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    }

    private setupModalContainerDiv(): void {
        this.modalContainer = document.createElement('div');
        document.getElementsByTagName('body')[0].appendChild(this.modalContainer);
    }

    private setupModalContainerFactory(): void {
        this.modalContainerFactory = this.componentFactoryResolver.resolveComponentFactory(ArtModalContainerComponent);
    }

}
