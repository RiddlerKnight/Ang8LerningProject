import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-show-get-param',
  templateUrl: './show-get-param.component.html',
  styleUrls: ['./show-get-param.component.scss']
})

export class ShowGetParamComponent implements OnInit {

  user:{
    id: number,
    name: string
  }

  constructor(private activeRoute:ActivatedRoute, private router:Router) { 
  }

  ngOnInit() {

    //when you sent the param by direct url, you need this statement to fetch the param 
    this.user = {
      id : this.activeRoute.snapshot.params['id'],
      name : this.activeRoute.snapshot.params['name']
    }
    
    //init observable object; this statement is used if you pass the param without refresh the page
    //because it will not init this component again
    this.activeRoute.params.subscribe(
      (param: Params) => {
        this.user.id = param['id'];
        this.user.name = param['name'];
      }
    );
  }

  SendNewParams()
  {
    this.router.navigate(['param-testing', 10, 'Yoda']);
  }
}