import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DinoService {

baseUri:string='https://dyno-api-ds02.herokuapp.com/api';
headers=new HttpHeaders().set('Content-Type','application/json');

  
  constructor(private http:HttpClient) { }

  //metodo para agregar un nuevo dinosaurio
  agregarDino(data):Observable<any>{
    let url=`${this.baseUri}/create`;
    return this.http.post(url,data).pipe(catchError(this.errorManagement));
  }

  //método para obtener a todos los dinosaurios
  getDinos(){
    let url=`${this.baseUri}/dinos`;
    return this.http.get(url);
}

  //metodo para obtener un solo dinosaurio
  getDino(id){
    let url=`${this.baseUri}/dino/${id}`;
    return this.http.get(url,{headers:this.headers}).pipe(
      map((res:Response)=>{
        return res||{};
      }),
      catchError(this.errorManagement)
    );
  }

  //metodo para actualizar un dinosaurio
  updateDino(id,data):Observable<any>{
    let url=`${this.baseUri}/update/${id}`;
    return this.http.put(url,data,{headers:this.headers}).pipe(
      catchError(this.errorManagement)
    );
  }

  //metodo para eliminar un dinosaurio
  deleteDino(id){
    let url=`${this.baseUri}/delete/${id}`;
    return this.http.delete(url,{headers:this.headers}).pipe(catchError(this.errorManagement)
    );
  }

  //manejador de errores
  errorManagement(error:HttpErrorResponse){
    let errorMessage='';
    if(error.error instanceof ErrorEvent){
      //obtenemos el error del lado del cliente
      errorMessage=error.error.message;
    }else{
      //obtenemos el rror del lado del swervidor
      errorMessage=`Codigo de error: ${error.status}\nMensaje: ${error.message}`;

    }
    console.log(errorMessage);
    return throwError(()=>{
      return errorMessage;
    });
  }
}
