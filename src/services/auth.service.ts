import { Injectable} from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
 
import 'rxjs/Rx'; 

@Injectable()
export class AuthService {
    isLogin: boolean  
    url: string;
    constructor(private http: Http) {
        this.isLogin=false;
    }
    
    signin(name: string,passwd: string):Observable<any> {   
        this.isLogin=true;   
        const url="http://121.78.66.28/pos/login.php?username="+name+"&password="+passwd;     
         return   this.http.get(url) 
           .map((response: Response)=> {             
               return response.json().token;
           });        

    }
     
}
