import { NgModule } from "@angular/core";
import { HomeRoutingModule } from "./home-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations:[],
    imports:[HomeRoutingModule,
    SharedModule
    ],
    exports:[]
})
export class HomeModule{}