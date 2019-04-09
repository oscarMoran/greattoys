import { Component, OnInit } from '@angular/core';
import { ToyService } from '../../Services/toy.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styles: []
})
export class GaleriaComponent implements OnInit {

  constructor(public toysService : ToyService){
  }
  public imgArray : any[]= [
    {id : 1 ,name: 'Figure 1', description: 'Description about figure', img : 'https://wallpapercave.com/wp/wp1893019.jpg'},
    {id : 2 ,name: 'Figure 2', description: 'Description about figure', img : 'https://wallpapercave.com/wp/wc1677386.jpg'},
    {id : 3 ,name: 'Figure 3', description: 'Description about figure', img : 'http://hdqwalls.com/wallpapers/halloween-2018-movie-5k-z6.jpg'},
    {id : 4 ,name: 'Figure 4', description: 'Description about figure', img : 'https://images7.alphacoders.com/651/thumb-1920-651211.jpg'},
    {id : 5 ,name: 'Figure 5', description: 'Description about figure', img : 'https://wallup.net/wp-content/uploads/2017/11/22/372492-leatherface-Mortal_Kombat_X.jpg'},
    {id : 6 ,name: 'Figure 6', description: 'Description about figure', img : 'http://i.imgur.com/3bd3N50.jpg'},
    {id : 7 ,name: 'Figure 7', description: 'Description about figure', img : 'https://images.alphacoders.com/787/787294.png'},
  ]

  ngOnInit() {
    
  }

}
