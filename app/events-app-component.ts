import {Component} from '@angular/core'

@Component({
    selector: 'events-app',
    template: '<h2>Hello, {{name}}</h2>'
})

export class EventsAppComponent{
     name:  string = "Vikas";

}