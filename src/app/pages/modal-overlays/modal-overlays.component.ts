import { Component } from '@angular/core';

@Component({
  selector: 'ngx-modal-overlays',
  template: `
  <ngx-dialog></ngx-dialog>
    <router-outlet></router-outlet>
  `,
})

export class ModalOverlaysComponent {
}
