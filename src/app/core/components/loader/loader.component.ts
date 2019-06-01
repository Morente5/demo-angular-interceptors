import { LoaderService } from './../../services/loader.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {

  public isLoading$ = this.loaderService.isLoading$;

  constructor(
    private readonly loaderService: LoaderService,
  ) { }

}
