import { Injectable} from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'; 

@Injectable()
export class UniformService {
 
    constructor(private http: Http) {}
    addUniform(
        depart:string,
        name: string,
        grade: string,
        neck: number,
        breath: number,
        sholder: number,
        wrist: number,
        reach: number,
        waist: number,
        heap: number,
        gijang: number
    ) : Observable<any> {
    
     const url="http://121.78.66.28/pos/uniform.php?depart="+depart+"&name="+name+
     "&grade="+grade+"&neck="+neck+"&breath="+breath+"&sholder="+sholder+
     "&wrist="+wrist+"&reach="+reach+"&waist="+waist+"&heap="+heap+"&gijang="+gijang;
     
       return this.http.get(url)
         .map((res: Response)=> {
               console.log(res); 
                 return res.json().result;
         }); 


    }
}