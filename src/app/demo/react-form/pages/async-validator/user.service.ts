import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  isExists(id: string): Observable<boolean> {
    return this.httpClient.get<User[]>('assets/data/user.json').pipe(
      map((users) => !!users.find((user) => user.id === id)),
      tap((user) => console.log(user))
    );
  }
}
