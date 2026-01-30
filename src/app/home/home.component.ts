import { Component,ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent {

@ViewChild('contactSection') contactSection!: ElementRef;
@ViewChild('homeSection') homeSection! : ElementRef;
@ViewChild('serviceSection') serviceSection! : ElementRef;
@ViewChild('aboutSection') aboutSection! : ElementRef;
@ViewChild('skillSection') skillSection! : ElementRef;
myForm: FormGroup;
submittedData:any =[];
constructor(private router : Router){
  this.myForm = new FormGroup({
    name:new FormControl('', [Validators.required, Validators.minLength(3)]),
    email:new FormControl('', [Validators.required, Validators.email]),
    phone:new FormControl('', [Validators.required, Validators.minLength(11)]),
    message:new FormControl('', [Validators.required, Validators.minLength(3)])
  });
}
ngOnInit(){
  this.submittedData = JSON.parse(localStorage.getItem('admin') || '[]')
}
scrollTo(section: string) {
  switch (section) {
    case 'contact':
      this.contactSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
      break;
      case 'home':
        this.homeSection.nativeElement.scrollIntoView({behavior: 'smooth' });
        break;
        case 'service':
          this.serviceSection.nativeElement.scrollIntoView({behavior: 'smooth'});
            break;
            
          case 'about':
            this.aboutSection.nativeElement.scrollIntoView({behavior: 'smooth'});
            break;
            case 'skill':
              this.skillSection.nativeElement.scrollIntoView({behavior: 'smooth'});
              break

      }
      }


onSubmit(){
  if (this.myForm.valid){
    // console.log(this.myForm.value)
  
    let submittedData = JSON.parse(localStorage.getItem('admin') || '[]')
    submittedData.push(this.myForm.value)
    localStorage.setItem('admin',JSON.stringify(submittedData));
    console.log('Form submitted:',this.myForm.value)
      this.myForm.reset();
    // this.router.navigate(['/table'])
  }
// this.router.navigate(['/about'])
}
     path(url : any){
      this.router.navigate([url])
     }
}
