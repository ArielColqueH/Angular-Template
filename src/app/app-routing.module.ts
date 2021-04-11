import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./layout/main/main.component";
import { ConfiguracionesComponent } from "./modules/home/pages/home/configuraciones/configuraciones.component";
import { DashboardComponent } from "./modules/home/pages/home/dashboard/dashboard.component";
import { HomeComponent } from "./modules/home/pages/home/home.component";
import { TiendasComponent } from "./modules/home/pages/home/tiendas/tiendas.component";
import { LoginComponent } from "./modules/home/pages/login/login.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/dashboard" },
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "tiendas",
        component: TiendasComponent,
      },
      {
        path: "configuraciones",
        component: ConfiguracionesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
