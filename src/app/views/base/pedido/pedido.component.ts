import { Component } from '@angular/core';
import { PedidoService } from '../servicios/pedido.service';
import { AlignDirective, BorderDirective, ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, FormControlDirective, FormDirective, FormLabelDirective, HtmlAttributesDirective, ListGroupDirective, ListGroupItemDirective, PageItemComponent, PageLinkDirective, PaginationComponent, RowComponent, TableActiveDirective, TableColorDirective, TableDirective, TextColorDirective } from '@coreui/angular';
import { FormsModule } from '@angular/forms';
import { PedidoModel } from '../model/pedido.model';
import { DocsExampleComponent } from "../../../../components/docs-example/docs-example.component";
import { RouterLink } from '@angular/router';



@Component({
    selector: 'app-pedido',
    standalone: true,
    templateUrl: './pedido.component.html',
    styleUrl: './pedido.component.scss',
    imports: [
        ListGroupDirective,
        ListGroupItemDirective,
        ButtonDirective,
        RowComponent,
        ColComponent,
        CardComponent,
        CardHeaderComponent,
        CardBodyComponent,
        FormsModule,
        FormDirective,
        FormLabelDirective,
        FormControlDirective,
        DocsExampleComponent,
        RowComponent,
        ColComponent,
        TextColorDirective,
        CardComponent,
        CardHeaderComponent,
        CardBodyComponent,
        DocsExampleComponent,
        TableDirective,
        TableColorDirective,
        TableActiveDirective,
        BorderDirective,
        AlignDirective,
        RowComponent,
        ColComponent,
        TextColorDirective,
        CardComponent,
        CardHeaderComponent,
        CardBodyComponent,
        DocsExampleComponent,
        PaginationComponent,
        PageItemComponent,
        PageLinkDirective, 
        RouterLink
    ]
})
export class PedidoComponent {
  listaPedidos : any[] = [];
  pedido: PedidoModel;

  
  constructor(private pedidoServicios: PedidoService) {
    this.pedido = new PedidoModel;

    
    
  }
  ngOnInit(){
    this.getPedidos();
  }

  getPedidos(){
    this.pedidoServicios.getTodosPedidos().subscribe(
      (data) => {
        this.listaPedidos = data;
        console.log(this.listaPedidos); 
      },
      (error) => console.error()
      
    )
  }

  //Consulta 4: Ordenar por codigo desc
  getOrdenarPedidoPorCodigoDesc(){
    this.pedidoServicios.getOrdenarPorCodigoDesc().subscribe(
      (data) => {
        this.listaPedidos = data;
        console.log(this.listaPedidos); 
      },
      (error) => console.error()
      
    )
  }

  //Consulta 6: Listar por fecha registro desc
  getListarPorFechaPedidoDesc(){
    this.pedidoServicios.getListarPorFechaRegistroDesc().subscribe(
      (data) => {
        this.listaPedidos = data;
        console.log(this.listaPedidos); 
      },
      (error) => console.error()
      
    )
  }


  //Consulta 10: Listar por Nombre
  getListarPorNombre(){
    this.pedidoServicios.getListarPorNombre().subscribe(
      (data) => {
        this.listaPedidos = data;
        console.log(this.listaPedidos); 
      },
      (error) => console.error()
      
    )
  }

  //Consulta 13: Buscar pedido con más precio
  getBuscarPrecioAlto(){
    this.pedidoServicios.getBuscarPrecioAlto().subscribe(
      (data) => {
        this.listaPedidos = data;
        console.log(this.listaPedidos); 
      },
      (error) => console.error()
      
    )
  }




  //CRUD

  // Agregar Pedido
  agregarPedido(){
    // console.log(this.pedido);
    if (this.pedido._id == null || this.pedido._id == ''){
        //agregar
        this.pedidoServicios.agregarPedido(this.pedido).subscribe(
          (data: PedidoModel) => {
            console.log("Pedido agregada:", data);
            this.getPedidos();
          },
          (error) => console.log(error)
        );
        //Editar
    } else {
      this.pedidoServicios.editarPedido(this.pedido._id,this.pedido).subscribe(
        (data: PedidoModel) => {
          console.log("Pedido editado:", data);
          this.getPedidos();
        },
        (error) => console.log(error)
      );
    }
  }

  editarPedido(item : PedidoModel){
    console.log(item);
    this.pedido = item;
  }
  
  eliminarPedido(item : PedidoModel){
    this.pedidoServicios.eliminarPedido(item._id).subscribe(
      (data: PedidoModel) => {
        console.log("Pedido eliminado:", data);
        this.getPedidos();
      },
      (error) => console.log(error)
    );
  }


}
