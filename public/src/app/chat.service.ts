import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private _http: HttpClient) { }

  getChatByRoom(room) {
    console.log("SERVICE: "+room)
    return new Promise((resolve, reject) => {
      this._http.get('/' + room)
        // .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  saveChat(data) {
    return new Promise((resolve, reject) => {
        this._http.post('/', data)
          // .map(res => res.json())
          .subscribe(res => {
            console.log("saveChat res : "+JSON.stringify(res))
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }
}
