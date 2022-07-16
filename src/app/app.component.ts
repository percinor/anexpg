import { Component,OnInit } from '@angular/core';
import { ShttpService } from './shttp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private shttp: ShttpService) { }
  ngOnInit(): void {
    this.dblists = [];
    this.post();
  }
  title = 'anexpg';
  para = { pa01: 's01', pa02: 'select * from comer',pa03:{ co001: 0, co002: '', co003: '' } }
  dblists = [{ co001: 0, co002: '', co003: '' }];

  post() {
    this.shttp.postapi(this.para).subscribe((record: any) => {
      this.getval(record);
      //console.log(record);
    }
    )
  }

  sumit(){
    this.para.pa01 ='i01';
    this.post();
    this.para.pa03.co002 = '';
    this.para.pa03.co003 = '';
  }
  getval(record: any) {
    switch (this.para.pa01) {
      case 's01':
        if (record[0].counter) {
          console.log(record);
        } else {
          this.dblists = record;
        }
        break;
      case 'i01':
        this.dblists.push(record[0]);
      break;
    }
  }
}
