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
  nbClients: number = 12;
  piechart: number[] = [0, 0, 10, 5];
  barchartNbInter: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  barchartBenefice: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  interventions: Intervention[];

  constructor(private _serviceFacture: FactureService, private _serviceIntervention: InterventionService, private serviceFacture:FactureService) { }

  //polar chart
  public radarChartLabels = ['Interventions', 'Bénéfice', "nombre d'heures de travail", 'Charges'];
  public radarChartData = [
    { data: this.piechart, label: 'Récapitulatif' }
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
    { data: this.barchartNbInter, label: "Nombre d'interventions" },
    { data: this.barchartBenefice, label: 'Bénéfice atteint (en 100 x 1 DHs)' }
  ];

  ngOnInit() {
    //total des revenues
    this._serviceFacture.getAll().subscribe(
      (response: Facture[]) => {
        response.forEach(element => {
          this.totalRevenue += element.montant;
        });
      }, (error) => {
        console.log(error);
      }
    );

    //les interventions en attentes ce sont eux qui occupe des places
    this._serviceIntervention.getAll().subscribe(
      (response: Intervention[]) => {
        this.interventions = response; 
        ////PieChart
        this.piechart[0] = this.interventions.length; 
        this.radarChartData = [{ data: this.piechart, label: 'Récapitulatif' }];
        ////                              
        response.forEach(element => {
          if ((element.etats.find(i => i.faite == false) != undefined) || element.etats.length == 0) {
            this.enAttente++;
          }
        });
      }, (error) => {
        console.log(error);
      }
    );

    //get data to bar chart
    this._serviceIntervention.getIntervsParMois().subscribe(
      (response:number[])=>{
        this.barchartNbInter = response;        
        this._serviceIntervention.getBeneficeParMois().subscribe(
          (response:number[])=>{
            this.barchartBenefice = response;  
            ////PieChart
            this.barchartBenefice.forEach(element => {
              this.piechart[1]+=element;
            });
            this.radarChartData = [{ data: this.piechart, label: 'Récapitulatif' }];
            ////                  
            this.barChartData = [
              { data: this.barchartNbInter, label: "Nombre d'interventions" },
              { data: this.barchartBenefice, label: 'Bénéfice atteint (en 100 x 1 DHs)' }
            ];
          }
        );
      }
    );
   
  }

}
