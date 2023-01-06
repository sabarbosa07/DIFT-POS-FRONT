import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private mensajeSubject = new Subject<any>();
  public mensaje$ = this.mensajeSubject.asObservable();
  
  constructor() { }

  add(mensaje: any) {
    this.mensajeSubject.next(mensaje);
  }
}