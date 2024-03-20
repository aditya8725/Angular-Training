import { Component } from "@angular/core";

@Component({
    selector:"binding",
    templateUrl:"./binding.component.html",
    styles:
    `
        .box{
            border: 1px red solid;
            padding: 10px 10px 10px 10px;
            
        }
        .bgyellow{
            background-color: aqua;
        }
        .bgaqua{
            background-color: yellow;
        }
        .bgred{
            background-color: red;
        }
    `
})
export class BindingComponent
{
    message :string = "Hello"
    clickHandler()
    {
        console.log('button ...!!!');
        alert('Ooohh Yaaa u have clicked....!!!')
    }
}