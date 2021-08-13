import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  constructor() { }
   
  showErrorAlert() {
    let alertrElement = document.getElementById('error-alert');
      alertrElement?.classList.add('show');
      setTimeout(() => {
        this.hideErrorAlert();
      }, 5000);
  }


  hideErrorAlert() {
    let alertrElement = document.getElementById('error-alert');
    alertrElement?.classList.remove('show');
    alertrElement?.classList.add('hide');
  }

}
