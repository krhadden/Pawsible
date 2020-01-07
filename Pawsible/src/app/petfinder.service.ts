import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import PetfinderAuth from '../../../Pawsible/PetfinderAuth.json';

@Injectable({
  providedIn: 'root',
})
export class PetfinderService {

  constructor(public http: HttpClient) {}

  getKitties() {
    let token = this.getRequestToken();
  }

  getRequestToken() {
    let body = {
      "grant_type": "client_credentials",
      "client_id": PetfinderAuth.key,
      "client_secret": PetfinderAuth.secret
    }
    this.http.post("https://api.petfinder.com/v2/oauth2/token", body).subscribe(result => {
      console.log(result);
      return result;
    });
  }

}