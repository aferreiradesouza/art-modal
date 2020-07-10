import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConfirmacaoIdadeAposentadoriaComponent } from './modal/confirmacao.component';
import { ArtModalServiceModule } from 'art-modal';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ArtModalServiceModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmacaoIdadeAposentadoriaComponent]
})
export class AppModule { }
