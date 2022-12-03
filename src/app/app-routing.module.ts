import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { AuthComponent } from './auth/auth.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResourcesComponent } from './resources/resources.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
	{ path: "", component: ContentComponent, pathMatch: 'full' },
	{ path: "dashboard", component: DashboardComponent, pathMatch: 'full',
		canActivate:[AuthGuard]
	},
	{ path: "resources", component: ResourcesComponent, pathMatch: 'full'},
	{ path: "mock-test", component: TestComponent, pathMatch: 'full',
		canActivate:[AuthGuard]
	},
	{ path: "auth", component: AuthComponent, pathMatch: 'full' },
	{ path: "**", redirectTo: "" },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
