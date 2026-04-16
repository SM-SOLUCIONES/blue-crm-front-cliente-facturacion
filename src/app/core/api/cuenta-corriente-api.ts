import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENDPOINTS } from '../config/endpoints';
import { Movimiento } from '../models';
import { Pagination, PaginationRequest } from '@bod/shared';

@Injectable({
  providedIn: 'root',
})
export class CuentaCorrienteApi {
  private readonly http = inject(HttpClient);

  public getClienteCCMovimientosPagination(
    request: PaginationRequest,
  ): Observable<Pagination<Movimiento>> {
    const endpoint = ENDPOINTS.CUENTA_CORRIENTE.GET_CLIENTE_CC_MOVIMIENTOS_PAGINATION;
    return this.http.request<Pagination<Movimiento>>(endpoint.method, endpoint.toString(), {
      body: request,
    });
  }
}
