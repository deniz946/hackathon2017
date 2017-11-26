import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class NationalityService {

  // private _nationalities = Nationality;
  private api:string = 'http://localhost:3000';
  constructor() { }


}
