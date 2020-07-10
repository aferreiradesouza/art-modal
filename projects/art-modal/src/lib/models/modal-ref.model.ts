import { ComponentRef } from '@angular/core';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

import { ArtModalContainerComponent } from './../modal-container.component';
import { ArtModal } from './modal.model';

export class ArtModalRef {

    private result$ = new Subject<any>();

    constructor(
        private modalContainer: ComponentRef<ArtModalContainerComponent>,
        private modal: ComponentRef<ArtModal>,
    ) {
        this.modal.instance.modalInstance = this;
    }

    close(output: any): void {
        this.result$.next(output);
        this.destroy$();
    }

    dismiss(output: any): void {
        this.result$.error(output);
        this.destroy$();
    }

    onResult(): Observable<any> {
        return this.result$.asObservable();
    }

    private destroy$(): void {
        this.modal.destroy();
        this.result$.complete();
        this.modalContainer.destroy();
        this.removeTag();
        if (!document.getElementsByClassName('artModal').length) {
          this.showOverflow();
        }
    }

    removeTag() {
        try {
            document.getElementsByClassName('artModal')[document.getElementsByClassName('artModal').length - 1].parentElement.remove();
        } catch (err) { }
    }

    showOverflow() {
      document.getElementsByTagName('body')[0].style.overflowY = 'auto';
    }

}
