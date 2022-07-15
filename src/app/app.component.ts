import { Component } from '@angular/core';
import { ShttpService } from './shttp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private shttp: ShttpService) { }
  title = 'anexpg';
  post(){
    this.shttp.postapi().subscribe((record:any) =>{
      console.log(record);
    }

    )
  }
}
