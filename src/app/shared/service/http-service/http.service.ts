import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  /**
   *
   * @param http
   */
  constructor(private http: HttpClient) { }
  /**
   * Used for calling GET API
   */
  // public get(url: string, options = {}): Observable<any> {
  //   return this.http.get<any>(url, { params: options });
  // }
  public get(
    url: string,
    options: {
      headers?: any;
      params?: HttpParams | { [key: string]: string | string[] };
      responseType?: "json" | "text" | "blob" | "arraybuffer";
      observe?: "body" | "response";
    } = {},
  ): Observable<any> {
    // Make the HTTP GET request with the specified responseType
    return this.http.get(url, {
      params: options.params,
      responseType: options.responseType || ("json" as any),
      observe: options.observe || ("body" as any),
    });
  }

  /**
   * Used for calling POST API
   */
  public post(url: string, body: any, options?: any): Observable<any> {
    return this.http.post<any>(url, body, options);
  }

  /**
   * Used for calling Delete API
   */
  public delete(url: string): Observable<any> {
    return this.http.delete<any>(url);
  }

  /**
   * Used for calling PUT API
   */
  public put(url: string, body: any): Observable<any> {
    return this.http.put<any>(url, body);
  }

  /**
   * Used for calling PATCH API
   */
  public patch(url: string, body: any): Observable<any> {
    return this.http.patch<any>(url, body);
  }
}
