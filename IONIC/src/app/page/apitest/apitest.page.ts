import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicio/api.service';

@Component({
  selector: 'app-apitest',
  templateUrl: './apitest.page.html',
  styleUrls: ['./apitest.page.scss'],
})
export class ApitestPage implements OnInit {

  constructor(private api:ApiService) {

    this.api.getPosts().subscribe((res)=>{
      console.log(res);
    },(error)=>{
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
