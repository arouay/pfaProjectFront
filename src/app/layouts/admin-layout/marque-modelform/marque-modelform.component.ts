import {Component, Input, OnInit} from '@angular/core';
import {MarqueService} from '../../../services/marque.service';
import {ModelService} from '../../../services/model.service';
import {Marque} from '../../../entities/marque';
import {Model} from '../../../entities/model';

@Component({
    selector: 'app-marque-modelform',
    templateUrl: './marque-modelform.component.html',
    styleUrls: ['./marque-modelform.component.scss']
})
export class MarqueModelformComponent implements OnInit {
    @Input() private marque: Marque;
    @Input() private model: Model;

    constructor(private _marqueService: MarqueService, private _modelService: ModelService) {
    }

    ngOnInit() {

    }

    addMarque() {
    }

}
