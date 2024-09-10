import { Injectable } from "@angular/core";



@Injectable({
  providedIn : 'root'
})


 export class UserService {
    users : Array <any> =  [{
        age : 30 ,
         name : 'Joe Doe',
       email : 'JoeDoe@gmail.com'
       },
       {
         age : 20 ,
         name : 'John Smith',
       email : 'JoeSmith@gmail.com'
       },
       {
         age : 50 ,
          name : 'Sam Walker',
        email : 'SamWalker@gmail.com'
        },
        {
         age : 40 ,
          name : 'Lisa David',
        email : 'LisaDavid@gmail.com'
        },]
}