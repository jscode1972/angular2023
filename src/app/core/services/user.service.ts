import { Injectable } from '@angular/core';
import { filter, first, from, Observable, of } from 'rxjs';
import { User } from 'src/app/models';
import { USERS } from 'src/app/models/mocks';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users : User[] = [];

  constructor() { 
    this.users = USERS;
  }

  getUsers() : Observable<User[]> {
    return of(this.users );
  }

  getUser(id : string) : Observable<User> {
    var user !: User;
    from(USERS).pipe(
      filter(p => p.pid === id),
      first()
    ).subscribe( (u : User) => {
      user = u;
    });
    return of(user);
  }

  addUser(u : User) : Observable<string> {
    let pid = this.users.length+1+"";
    pid = pid.padStart(3, "0");
    u.pid = pid;
    this.users.push(u);
    return of(pid);
  }

  updUser(id : string, u : User) : Observable<string> {
    let msg : string = "fail";
    this.users.forEach( (item, index) => {
      //if(item === u) { 
      if(item.pid === id) { 
        msg = "Updeted successfully.";
        item.name = u.name;
        item.sex = u.sex;
        item.age = u.age;
      }
    });
    return of(msg);
  }

  delUser(id : string) : Observable<string> {
    let msg : string = "fail";
    this.users.forEach( (item, index) => {
      //if(item === u) { 
      if(item.pid === id) { 
        msg = "Deleted successfully.";
        this.users.splice(index,1);
      }
    });
    return of(msg);
  }
}
