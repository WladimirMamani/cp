import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PedidoModel } from '../model/pedido.model';


@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  //COMUNICACIÓN CON EL BACK ENT
  private apiURL = 'http://localhost:8000/ruta-pedido'

  //iNCORPORAMOS EL HTTP CLIENTE
  constructor(private http: HttpClient) { }

  //Llamado a los MÉTODOS

  //Consulta 1: Listar pedidos
  getTodosPedidos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL);

  }
  getOrdenarPorCodigoDesc(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL + '/consulta4');

  }

  getListarPorFechaRegistroDesc(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL + '/consulta6');

  }

  getListarPorNombre(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL + '/consulta10');

  }

  getBuscarPrecioAlto(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL + '/consulta13');

  }


  //Buscar por categoria
  // getPorCategoria(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiURL + '/consulta5');

  // }

  // ------------------ METODO CRUD ---------------------------

  agregarPedido(pedido: PedidoModel): Observable<PedidoModel> {
    // return this.http.post<TareaModel>(`${this.apiURL}/agregar`,pedido);
    return this.http.post<PedidoModel>(this.apiURL+'/agregar',pedido);
  }

  editarPedido(id: string, pedido: PedidoModel): Observable<PedidoModel> {
    return this.http.put<PedidoModel>(`${this.apiURL}/editar/${id}`,pedido);
  }

  eliminarPedido(id: string): Observable<PedidoModel> {
    console.log(id);
    console.log(`${this.apiURL}/eliminar/${id}`);

    return this.http.delete<PedidoModel>(`${this.apiURL}/eliminar/${id}`);
  }


}
