import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages').then((m) => m.ClienteFacturacionPage),
    children: [
      {
        path: 'facturas',
        loadComponent: () => import('./pages').then((m) => m.ClienteFacturasPage),
      },
      {
        path: 'cc-movimientos',
        loadComponent: () => import('./pages').then((m) => m.ClienteCcMovimientosPage),
      },
    ],
  },
];
