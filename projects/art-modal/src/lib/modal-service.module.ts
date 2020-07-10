import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtModalContainerComponent } from './modal-container.component';
import { ArtModalService } from './modal-service.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ArtModalContainerComponent
    ],
    entryComponents: [
        ArtModalContainerComponent
    ]
})
export class ArtModalServiceModule {
    static forRoot() {
        return {
            ngModule: ArtModalServiceModule,
            providers: [
                ArtModalService
            ]
        };
    }
}
