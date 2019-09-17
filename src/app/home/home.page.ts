import { Component } from '@angular/core';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  targetUrl : string ;
  entries : Array<any> = [];
  constructor(private http: HTTP, private iab: InAppBrowser, private httpClient: HttpClient) {

    
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad RSSPage');
    this.httpClient.get('http://localhost:8082/posts/')
    .subscribe(data => {
      console.log('my data: ', data);
    })

}
openUrl(entry){

    this.iab.create(entry.link,"_system");

}
parseUrlWrapper(){

    return new Promise((resolve,reject)=>{
    // RSSParser.parseURL(this.targetUrl, function(err, parsed) {
    //     console.log(parsed.feed.title);
    //     console.log(parsed.feed.entries);
    //     if(err){
    //     reject(err);
    //     }
    //     resolve(parsed.feed.entries);
    // });
    });

}
parseUrl(){
    this.parseUrlWrapper().then((entries : Array<any>)=>{
        this.entries = entries;
    })
}
}
