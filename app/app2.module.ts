import { NgModule } from "@angular/core";
import { BrowserModule } 
from "@angular/platform-browser";
import { AppComponent } from "./app2.component";
import { ProductService } from "./products/products.service";

@NgModule({
        imports:[BrowserModule],
        declarations:[AppComponent],
        bootstrap:[AppComponent],
        providers: [ProductService]
    }
)
export class AppModule{


}