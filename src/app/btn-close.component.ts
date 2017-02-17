import { Component } from '@angular/core';

@Component({
  selector: 'btn-close',
  template: `
    <a title="Close" class="btn close">
        <svg x="0px" y="0px" viewBox="0 0 10.2 10.2" class="icon">
            <polygon points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1 "></polygon>
        </svg>
    </a>`
})
export class BtnCloseComponent { }