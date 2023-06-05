import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { AuthComponent } from './auth/auth.component';
import { ContentComponent } from './content/content.component';
import { ResourcesComponent } from './resources/resources.component';
import { TestComponent } from './test/test.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { StuDashboardComponent } from './stu-dashboard/stu-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SetTestComponent } from './set-test/set-test.component';

const routes: Routes = [
	{ path: "", component: ContentComponent, pathMatch: 'full' },
	{ path: "stuDashboard", component: StuDashboardComponent, pathMatch: 'full',
		canActivate: [AuthGuard]
	},
	{path: "adminDashboard", component: AdminDashboardComponent, pathMatch: 'full',
		canActivate: [AuthGuard]
	},
	{ path: "setTest", component: SetTestComponent, pathMatch: 'full',
		canActivate: [AuthGuard] },
	{ path: "resources", component: ResourcesComponent, pathMatch: 'full',
	canActivate:[AuthGuard]
	},
	{ path: "guidelines", component: GuidelinesComponent, pathMatch: 'full',
	canActivate:[AuthGuard]
	},
	{ path: "mock-test", component: TestComponent, pathMatch: 'full',
		canActivate:[AuthGuard]
	},
	{ path: "auth", component: AuthComponent, pathMatch: 'full' },
	{ path: "**", redirectTo: "/" },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
