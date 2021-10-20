import {Injectable} from '@angular/core';
import {environment} from "../environments/environment";
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  rutaServidor = environment.baseUrl;

  bUrl = 'http://localhost:3000/';

  constructor(private _http: HttpClient,) {
  }

  public async post(ruta: string, payload: any) {
    const respuestaRaw = await fetch(this.rutaServidor + ruta, {
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      credentials: "include",
    });
    return await respuestaRaw.json();
  }

  public async formdata(ruta: string, payload: FormData) {
    const respuestaRaw = await fetch(this.rutaServidor + ruta, {
      body: payload,
      method: "POST",
    });
    return await respuestaRaw.json();
  }

  async get(ruta: string) {
    // Por defecto se hace una petición GET
    const respuestaRaw = await fetch(this.rutaServidor + ruta, {
      credentials: "include",
    });
    return await respuestaRaw.json();
  }

  async delete(ruta: string) {
    const respuestaRaw = await fetch(this.rutaServidor + ruta, {
      credentials: "include",
      method: "DELETE",
    });
    return await respuestaRaw.json();
  }

  //ALGUNAS FUNCIONES INTERESANTES CON TOKEN:
  getTypeRequest(url) {
    return this._http.get(`${this.bUrl}${url}`).pipe(map(res => {
    return res;
    }));
  }
  postTypeRequest(url, payload) {
    return this._http.post(`${this.bUrl}${url}`, payload).pipe(map(res => {
    return res;
    }));
  }
  putTypeRequest(url, payload) {
    return this._http.put(`${this.bUrl}${url}`, payload).pipe(map(res => {
    return res;
    }));
  }

}
