import { Component, OnInit } from '@angular/core';
import { Category } from '@core/models/categories/category.model';
import { CategoryService } from '@modules/categories/services/category.service';
import { ToastService } from 'src/app/common/toast/services/toast.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {

  listCategories: Array<Category> = [];
  cols: any[] = [];
  constructor(private categoryService: CategoryService, private toastService: ToastService) { }

  ngOnInit(): void {    
    //console.log('Ingreso');
    this.loadCategories();
  }

  loadCategories(): void {    
    this.categoryService.findAll$()
      .subscribe((response: Category[]) => {
        this.listCategories = response;
        // console.log(this.listCategories);
        // console.log(response);
      })
  }

  add(){
    this.toastService.add({
      key: 'tl',
      severity: 'info',
      summary: 'Info',
      detail: 'Mensaje botón',
    });
  }
}
