import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
admin:any[] = [];
submittedData:any[] = [];
users: any[] =[];
ngOnInit(){
  this.submittedData=JSON.parse(localStorage.getItem('admin') || '[]');
  console.log(this.submittedData)
  this.admin = [...this.submittedData];
}
deleteUser(index:number){
  this.submittedData.splice(index,1);
  this.admin = [...this.submittedData]
  localStorage.setItem('admin',JSON.stringify(this.admin))
}
}
