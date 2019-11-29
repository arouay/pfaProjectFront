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
        this.marque = new Marque();
        this.model = new Model();
        this._marqueService.getAll().subscribe((data: Marque[]) => (this.marques_initial = data, this.marques = data));
        this._modelService.getAll().subscribe((data: Model[]) => (this.models_initial = data, this.models = data));
    }

    filterById(id: number) {
        this.models = this.models_initial;
        this.models = this.models.filter(m => {
            return m.marque.id === this.marques.find(ma => ma.id === id).id
        })
    }

    addMarque() {
        this._marqueService.add(this.marque);
        this.ngOnInit();
        //à enlever , mise pour eviter non chargement marques
        console.log(this.marques)
    }

}
