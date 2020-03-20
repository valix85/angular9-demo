import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'nxt-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit, OnDestroy {

  isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(private loaderService: LoaderService) {
    console.log('spinner invocato');
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log('spinner distrutto');
  }

}
