import { Component, OnInit } from '@angular/core';
import { FactureService } from 'app/services/facture.service';
import { Facture } from 'app/entities/facture';
import { InterventionService } from 'app/services/intervention.service';
import { Intervention } from 'app/entities/intervention';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalRevenue: number = 0;
  enAttente: number = 0;
  nbClients: number = 0;  

  constructor(private _serviceFacture:FactureService, private _serviceIntervention:InterventionService) { }

  //polar chart
  public radarChartLabels = ['Interventions', 'Bénéfice', "nombre d'heures de travail", 'Charges'];
  public radarChartData = [
    {data: [120, 130, 180, 70], label: '2017'},
    {data: [90, 150, 200, 45], label: '2018'}
  ];
  public radarChartType = 'radar';

  //bar chart
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  }; 
  public barChartLabels = ['Décembre', 'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre'];
  public barChartType = 'bar';
  public barChartLegend = true; 
  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56], label: "Nombre d'interventions" },
    { data: [28, 48, 40, 19, 86, 27, 90, 40, 19, 86, 27, 90], label: 'Bénéfice atteint (en 100 x 1 DHs)' }
  ];

  ngOnInit() {    
    //total des revenues
    this._serviceFacture.getAll().subscribe(
      (response:Facture[])=>{ 
        response.forEach(element => {
          this.totalRevenue += element.montant;
        });
      }, (error)=>{
        console.log(error);
      }
    );
    
    //les interventions en attentes ce sont eux qui occupe des places
    this._serviceIntervention.getAll().subscribe(
      (response:Intervention[])=>{
        response.forEach(element => {
          if((element.etats.find(i=>i.faite == false) != undefined) || element.etats.length == 0){
            this.enAttente++;
          }
        });
      }, (error)=>{
        console.log(error);
      }
    );
  }

}
