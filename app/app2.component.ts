import { Component } from "@angular/core";


@Component({
    selector:'pm-app',
    template: `
            <div>
                <h2>Hello, world!</h2>
                <h2>This is {{name}}</h2>
            </div>
        `
}
)

export class AppComponent{
    name: string = "Abhishek";

}