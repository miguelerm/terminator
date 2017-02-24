import { Component, Input } from '@angular/core';
import { LineModel } from './line.model';

@Component({
    selector: 'line',
    template: `<span class="prompt">&gt;</span><span class="comando">{{model.text}}</span><span *ngIf="model.current" class="cursor">_</span>`
})
export class LineComponent {
    @Input()
    model: LineModel;
}