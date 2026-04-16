import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TabsModule } from 'primeng/tabs';
import { PanelPageHeader } from '@bod/shared';

@Component({
  selector: 'bod-cliente-facturacion-page',
  imports: [RouterOutlet, TabsModule, PanelPageHeader, RouterLink],
  templateUrl: './cliente-facturacion-page.html',
  styles: ``,
})
export class ClienteFacturacionPage {}
