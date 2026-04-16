import { Component, inject, signal } from '@angular/core';
import { CuentaCorrienteApi } from '../../core/api';
import { Movimiento } from '../../core/models';
import {
  DataTable,
  DataSourcePaginator,
  PaginatedVistaColumn,
  PaginationRequest,
} from '@bod/shared';

@Component({
  selector: 'bod-cliente-cc-movimientos-page',
  imports: [DataTable],
  templateUrl: './cliente-cc-movimientos-page.html',
  styles: ``,
})
export class ClienteCcMovimientosPage {
  private readonly cuentaCorrienteApi = inject(CuentaCorrienteApi);
  public readonly movimientosDataSource = new DataSourcePaginator<Movimiento>({
    fetchData: (request: PaginationRequest) =>
      this.cuentaCorrienteApi.getClienteCCMovimientosPagination(request),
  });
  public readonly columns = signal<PaginatedVistaColumn[]>([
    {
      header: 'Fecha',
      key: 'dateCreated',
      type: 'date',
    },
    {
      header: 'Referencia',
      key: 'referencia',
      type: 'text',
    },
    {
      header: 'Monto',
      key: 'monto',
      type: 'number',
    },
  ]);
}
