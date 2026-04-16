export type ClienteFactura = any;

export interface Movimiento {
  uuid: string;
  status: number;
  dateCreated: number;
  uuidCuentaCorriente: string;
  referencia: string;
  monto: number;
}
