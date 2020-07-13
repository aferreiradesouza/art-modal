
# Art Modal

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Art Modal is an easy-to-use library.

DEMO: coming soon

# Install

```
$ npm i art-modal
```

# How to use

**1:** Import the ArtModalServiceModule into your app.module

```typescript
import { ArtModalServiceModule } from 'art-modal';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    ArtModalServiceModule.forRoot()
  ],
  providers: [...],
})
export class AppModule { }
```
**2:** Create a component and extend the ArtModal class

**note**: Create your modal with 1040 z-index

```typescript
import { Component, OnInit } from  '@angular/core';
import { ArtModal } from  'art-modal';

@Component({...})

export  class  ModalExample  extends  ArtModal {
	public  title: string;
	public  message: string;

	constructor() { }

	onInjectInputs(inputs): void {
		this.title = inputs.title;
		this.message = inputs.message;
	}

	save(): void {
		this.close('save');
	}

	cancel(): void {
		this.dismiss('canceling');
	}
}
```

**3**: In the app.component, inject the ArtModalService

```typescript
import { Component } from  '@angular/core';
import { ModalExample } from  './modal/modal-example.component';
import { ArtModalService } from  'art-modal';

@Component({ ... })

export  class  AppComponent {

	constructor(private  modalService: ArtModalService) { }

	showModal() {
		const  modalRef = this.modalService.open(
		ModalExample, // Import the modal component here
		{ title:  'Title', message:  'message' });

		modalRef.onResult().subscribe(
			success  =>  console.log(success),
			dismissed  =>  console.log('dismissed'));
	}
}
```