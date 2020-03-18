import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nxt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  elaboraRotta(): void {
    console.log('cliccato');
    console.log(this.route); // info sulla rotta attuale, parametri e altro
    this.router.navigateByUrl('/todos'); // router ti permette di navigare tra rotte
  }

}
