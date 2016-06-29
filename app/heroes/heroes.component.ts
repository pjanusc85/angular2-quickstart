import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../hero/hero';
import { HeroDetailComponent } from '../hero/hero-detail.component';
import { HeroService } from '../hero/hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes/heroes.component.html',
    styleUrls: ['app/heroes/heroes.component.css'],
    directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(
        private router: Router,
        private heroService: HeroService) { }

    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: Hero) { this.selectedHero = hero; }

    gotoDetail() {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}

