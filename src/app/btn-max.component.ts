import { Component } from '@angular/core';

@Component({
  selector: 'btn-max',
  template: `
    <a title="Maximize" class="btn max">
        <svg x="0px" y="0px" viewBox="0 0 10.2 10.1" class="icon">
            <path d="M0,0v10.1h10.2V0H0z M9.2,9.2H1.1V1h8.1V9.2z"></path>
        </svg>
    </a>`
})
export class BtnMaxComponent { }