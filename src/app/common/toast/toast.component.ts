import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Subscription } from 'rxjs';
import { ToastService } from './services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  providers: [MessageService],
})
export class ToastComponent implements OnInit, OnDestroy {
  subs: Subscription = new Subscription; 
  lisObservers$: Array<Subscription> = [];
  constructor(private messageService: MessageService,
    private toastService: ToastService,
    private primengConfig: PrimeNGConfig,
    
    ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.subs = this.toastService.mensaje$.subscribe((msg) => {
      this.messageService.add(msg);
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
