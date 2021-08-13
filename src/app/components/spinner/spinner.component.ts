import { Component, ElementRef, Input, OnChanges, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  @ViewChild('spinnerElement') element: ElementRef | undefined;
  
  constructor(private renderer: Renderer2, ) { }

  showSpinner(){
    this.renderer.removeClass(this.element?.nativeElement, 'hide-flex');
    this.renderer.addClass(this.element?.nativeElement, 'display-flex');
  }

  hideSpinner() {
    this.renderer.removeClass(this.element?.nativeElement, 'display-flex');
    this.renderer.addClass(this.element?.nativeElement, 'hide-flex');
  }


}
