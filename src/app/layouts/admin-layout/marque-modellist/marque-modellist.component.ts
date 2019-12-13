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
    @Input() private model: Model;

    private marques_initial: Marque[] = [];
    private models_initial: Model[] = [];

    private marques: Marque[] = [];
    private models: Model[] = [];

    constructor(private _marqueService: MarqueService, private _modelService: ModelService) {
    }

    ngOnInit() {
        this.InitModelMarque();
        this._marqueService.getAll().subscribe((data: Marque[]) =>
            (this.marques_initial = data,
                this.marques = data, this.marque = data[0]));
        this._modelService.getAll().subscribe((data: Model[]) => (this.models_initial = data, this.models = data));
    }

    filterById(id: number) {
        this.marque = this.marques.find(ma => ma.id === id);
        this.models = this.models_initial;
        this.models = this.models.filter(m => {
            return m.marque.id === this.marques.find(ma => ma.id === id).id
        })
    }

    addMarque() {
        this._marqueService.add(this.marque);
        this.marques_initial.push(this.marque);
        this.marques = this.marques_initial;
        this.marque = new Marque();
    }

    addModel() {
        this.model.marque = this.marque;
        console.log(this.marque);
        console.log(this.model);
        this._modelService.add(this.model);
        this.models_initial.push(this.model);
        this.models = this.models_initial;
        this.model = new Model();
    }

    refrech() {
        this.models = this.models_initial;
    }

    InitModelMarque() {
        this.marque = new Marque();
        this.model = new Model();
        this.model.energie = 'Diesel';
        this.model.boiteVitesse = 'Manuelle';
    }
}
