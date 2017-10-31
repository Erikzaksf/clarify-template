import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ClarityModule } from "clarity-angular";
import { AppComponent } from "./app.component";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';

@NgModule({
    imports: [
        BrowserModule,
        ClarityModule.forRoot(),
        FormsModule,
        HttpModule,
        routing,
     ],
     providers: [],
     declarations: [ 
       AppComponent,
       WelcomeComponent,
       AboutComponent,
       MarketplaceComponent,
       AlbumDetailComponent
      ],
     bootstrap: [ AppComponent ]
})
export class AppModule {    }