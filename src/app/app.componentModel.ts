import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

export class Customer {
  CustomerCode: string = "";
  CustomerName: string = "";
  CustomerAmount: number = 0;
  formCustomerGroup: FormGroup = null; //Create object of formgroup

  constructor() {}

  // {
  //     var _builder=new FormBuilder();
  //     this.formCustomerGroup= _builder.group({});//use builder to create

  //     //1control-> 1 validation

  //     this.formCustomerGroup.addControl
  //     ("CustomerNameControl" ,new FormControl
  //     ('', Validators.required));

  //     var validationcollection=[];
  //     validationcollection.push(Validators.required);
  //     validationcollection.push(Validators.pattern("^[0-9]{4,4}$"));

  //     this.formCustomerGroup.addControl
  //     ("CustomerCodeControl" ,new FormControl
  //     ('',Validators.compose(validationcollection)));

  // }
}
