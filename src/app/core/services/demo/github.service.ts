import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repos } from 'src/app/models/demo';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  baseURL:string="https://api.github.com/";
  constructor(private http:HttpClient){ }

  getRepos(userName:string): Observable<Repos[]> {
       return this.http.get<Repos[]>(this.baseURL + 'users/' + userName + '/repos')
  }
}
/* 呼叫範例
@Component({
    templateUrl: './repo-list.component.html',
})
export class RepoListComponent
{
    userName: string ="angular"
    repos: repos[];
    loading: boolean=false;
    errorMessage;
 
    constructor(private githubService: GitHubService) { }
 
    public getRepos() {
        this.loading=true;
        this.errorMessage="";
        this.githubService.getRepos(this.userName)
            .subscribe((response) => {this.repos=response;},
                       (error) => { this.errorMessage=error; this.loading=false; },
                       () => {this.loading=false;}
                      );
    }
}
*/
