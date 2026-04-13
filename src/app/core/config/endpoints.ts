import { Endpoint } from '@bod/shared';
import { environment } from 'src/environments/environment';

export const ENDPOINTS = {
  COBRANZAS: {
    CREATE_PAGO: new Endpoint('cobranza/pagos/crear', 'POST', environment.apiBaseUrl),
  },
  FACTURACION: {
    GET_CLIENTE_FACTURAS_PAGINATION: new Endpoint(
      'facturacion/cliente/paginar',
      'POST',
      environment.apiBaseUrl,
    ),
    GET_CLIENTE_FACTURAS_VISTAS_PAGINATION: new Endpoint(
      'facturacion/vistas/paginar',
      'POST',
      environment.apiBaseUrl,
    ),
    GET_CLIENTE_FACTURAS_VISTAS_COLUMNAS: new Endpoint(
      'facturacion/vistas/obtener-campos',
      'GET',
      environment.apiBaseUrl,
    ),
  },
};
