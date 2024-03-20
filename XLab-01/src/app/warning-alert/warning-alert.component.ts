import { Component } from "@angular/core";

@Component({
    selector:"app-warning-alert",
    template: 
    `
        <div class="box">
        <p>This is warning alert....!!!!</p>
        </div>
    `
    ,
    styles: 
    `
        .box
        {
            color: red;
            border : 2px solid black;
            padding: 10px 10px 10px 20px;
        }

    `
})

export class WarningAlertComponent
{

}