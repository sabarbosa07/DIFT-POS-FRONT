import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '@core/models/categories/category.model';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = environment.base_url;
  
  constructor(private http: HttpClient) { }

  findAll$(): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.baseUrl}//categories`);
  }
}
