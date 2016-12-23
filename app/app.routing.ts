import { RouterModule, Routes } from '@angular/router';

import { DocumentsComponent } from './documents/documents.component';

const app_routes: Routes = [
  { path: '',  pathMatch:'full', redirectTo: '/documents' },
  { path: 'documents', component: DocumentsComponent }
];

export const app_routing = RouterModule.forRoot(app_routes);