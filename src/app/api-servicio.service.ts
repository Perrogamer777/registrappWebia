import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { retry, catchError } from 'rxjs/operators';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServicioService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }

  apiURL = 'https://jsonplaceholder.typicode.com'

  constructor(private http:HttpClient) {}

  getPosts():Observable<any>{
    return this.http.get(this.apiURL+'/posts/').pipe(
      retry(3)
    );
  }
  //llamado conjunto de info con filtro
  getPost(id: number):Observable<any>{
    return this.http.get(this.apiURL+'/posts/'+id).pipe(
      retry(3)
    );
  }
  //crear objetos
  createPost(post: any):Observable<any>{
    return this.http.post(this.apiURL+'/posts',post,this.httpOptions).pipe(retry(3));
  }
  //actualizar objetos
  updatePost(id: number,post: any):Observable<any>{
    return this.http.put(this.apiURL+'/posts/'+id,post,this.httpOptions).pipe(retry(3));
  }

  //eliminar objetos
  deletePost(id: number):Observable<any>{
    return this.http.delete(this.apiURL+'/posts/'+id,this.httpOptions);
  }

}



