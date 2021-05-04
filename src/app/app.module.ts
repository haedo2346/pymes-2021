import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { ArticulosFamiliasComponent } from "./components/articulos-familias/articulos-familias.component";
import { HttpClientModule } from "@angular/common/http";

import { RouterModule } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";
import { MenuComponent } from "./components/menu/menu.component";

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ArticulosFamiliasComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", redirectTo: "/inicio", pathMatch: "full" },
      { path: "inicio", component: InicioComponent },
      { path: "articulosfamilias", component: ArticulosFamiliasComponent }
    ])
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
  bootstrap: [AppComponent]
})
export class AppModule {}
