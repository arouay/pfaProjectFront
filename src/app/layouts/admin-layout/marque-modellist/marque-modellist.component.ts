import {Component, Input, OnInit} from '@angular/core';
import {MarqueService} from 'app/services/marque.service'
import {ModelService} from '../../../services/model.service';
import {Marque} from '../../../entities/marque';
import {Model} from '../../../entities/model';

@Component({
    selector: 'app-marque-modellist',
    templateUrl: './marque-modellist.component.html',
    styleUrls: ['./marque-modellist.component.scss']
})
export class MarqueModellistComponent implements OnInit {
    @Input() private marque: Marque;
    @Input() private marqueAdd: Marque = new Marque();
    @Input() private model: Model;

    private marques_initial: Marque[] = [];
    private models_initial: Model[] = [];

    private marques: Marque[] = [];
    private models: Model[] = [];

    //Pagination des marques
    currentPage1: number = 1;
    perPage1: number = 3;

    //Pagination des marques
    currentPage2: number = 1;
    perPage2: number = 5;
    totalP: number = 0;


    constructor(private _marqueService: MarqueService, private _modelService: ModelService) {
    }

    ngOnInit() {
        this.InitModelMarque();
        this._marqueService.getAll(this.currentPage1 - 1, this.perPage1).subscribe((data) =>
            (this.marques_initial = data['content'],
                this.marques = data['content'], this.marque = data['content'][0]));

        this._modelService.getAll(this.currentPage2 - 1, this.perPage2).subscribe((data) =>
            (this.models = data['content'], this.totalP = data['totalPages']));

        this._modelService.getAll(0, 1000).subscribe((data) =>
            (this.models_initial = data['content']));
    }

    filterById(id: number) {
        this.marque = this.marques.find(ma => ma.id === id);
        this.models = this.models_initial;
        this.models = this.models.filter(m => {
            return m.marque.id === this.marques.find(ma => ma.id === id).id
        })
    }

    addMarque() {
        this._marqueService.add(this.marqueAdd);
        this.marqueAdd = new Marque();
        this.ngOnInit();
    }

    addModel() {
        this.model.marque = this.marque;
        this._modelService.add(this.model);
        this.models.push(this.model);
        this.models_initial.push(this.model);
        this.model = new Model();
    }

    refrech() {
        this.ngOnInit();
    }

    InitModelMarque() {
        this.marque = new Marque();
        this.model = new Model();
        this.model.energie = 'Diesel';
        this.model.boiteVitesse = 'Manuelle';
    }

    ModelPagination(a) {
        if (a === -1 && this.currentPage2 > 1) {
            console.log(this.currentPage2);
            this.currentPage2--;
        } else if (a === 0 && this.currentPage2 < this.totalP - 1) {
            this.currentPage2++;
        } else if (a !== -1 && a !== 0) {
            this.currentPage2 = a;
        }
        this._modelService.getAll(this.currentPage2 - 1, this.perPage2).subscribe((data) =>
            (this.models = data['content'], this.totalP = data['totalPages']));
    }
}
