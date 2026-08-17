import { Routes } from '@angular/router';

import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Customers } from './pages/customers/customers';
import { Products } from './pages/products/products';
import { Quotations } from './pages/quotations/quotations';
import { Orders } from './pages/orders/orders';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: Login
  },

  {
    path: 'dashboard',
    component: Dashboard
  },

  {
    path: 'customers',
    component: Customers
  },

  {
    path: 'products',
    component: Products
  },

  {
    path: 'quotations',
    component: Quotations
  },

  {
    path: 'orders',
    component: Orders
  },

  {
    path: '**',
    redirectTo: 'login'
  }

];