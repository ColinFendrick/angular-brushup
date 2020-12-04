import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { takeUntil } from 'rxjs';

import { ApiService } from '../api.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
	products: any[] = [];
	constructor(private apiService: ApiService) { }

	ngOnInit(): void {
		this.apiService.sendGetRequest()
			.pipe(takeUntil(this.destroy$))
			.subscribe((res: HttpResponse<any>) => {
				this.products = res.body;
			});
	}

	public firstPage(): void {
		this.products = [];
		this.apiService.sendGetRequestToUrl(this.apiService.first)
			.pipe(takeUntil(this.destroy$))
			.subscribe((res: HttpResponse<any>) => {
				this.products = res.body;
			});
	}

	public previousPage(): void {
		if (this.apiService.prev !== undefined && this.apiService.prev !== '') {
			this.products = [];
			this.apiService.sendGetRequestToUrl(this.apiService.prev)
				.pipe(takeUntil(this.destroy$))
				.subscribe((res: HttpResponse<any>) => {
					this.products = res.body;
				});
		}
	}

	public nextPage(): void {
		if (this.apiService.next !== undefined && this.apiService.next !== '') {
			this.products = [];
			this.apiService.sendGetRequestToUrl(this.apiService.next)
				.pipe(takeUntil(this.destroy$))
				.subscribe((res: HttpResponse<any>) => {
					this.products = res.body;
				});
		}
	}

	public lastPage(): void {
		this.products = [];
		this.apiService.sendGetRequestToUrl(this.apiService.last)
			.pipe(takeUntil(this.destroy$))
			.subscribe((res: HttpResponse<any>) => {
				this.products = res.body;
			});
	}
}
