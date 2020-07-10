import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, Type, ComponentRef } from '@angular/core';

import { ArtModal } from './models/modal.model';

@Component({
    template: `
    <div class="modal-backdrop fade in artModal" style="opacity: .4;"></div>
    <ng-template #modalContainer></ng-template>
  `,
  styleUrls: ['./modal.style.scss']
})
export class ArtModalContainerComponent {

    @ViewChild('modalContainer', { read: ViewContainerRef }) private modalContainer: ViewContainerRef;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver
    ) { }

    createModal<T extends ArtModal>(component: Type<T>): ComponentRef<T> {
        this.modalContainer.clear();

        const factory: ComponentFactory<T> = this.componentFactoryResolver.resolveComponentFactory(component);

        return this.modalContainer.createComponent(factory, 0);
    }

}
