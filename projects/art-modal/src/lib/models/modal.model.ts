import { ArtModalRef } from './modal-ref.model';

export abstract class ArtModal {

  modalInstance: ArtModalRef;

  abstract onInjectInputs(inputs: any): void;

  close(output?: any): void {
    this.modalInstance.close(output);
    this.showOverflow();
  }

  dismiss(output?: any): void {
    this.modalInstance.dismiss(output);
    this.showOverflow();
  }

  showOverflow() {
    document.getElementsByTagName('body')[0].style.overflowY = 'auto';
  }

}
