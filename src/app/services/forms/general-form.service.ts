import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class GeneralFormService {

  private formToCreateToDo$ = new FormGroup({
    user: new FormControl(null, [Validators.required]),
    title: new FormControl(null, [Validators.required]),
  });

  get formToCreateToDo(): FormGroup {
    return this.formToCreateToDo$;
  }
  
}
