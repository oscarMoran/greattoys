import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IToysInterface} from '../interfaces/IToys.interface'

@Injectable({
    providedIn: 'root'
  })
  export class ToyService {

    public toys : IToysInterface[] = [];
    constructor(private http : HttpClient) { 
        this.getToys();
      }
    
    public getToys(){
        return new Promise( (resolve, reject ) =>{
        this.http.get('https://angular-html-75781.firebaseio.com/toys.json').subscribe(
            (response : IToysInterface[]) =>{ 
            this.toys = response;
            resolve();
            }
        );
        }); 
    }
  }