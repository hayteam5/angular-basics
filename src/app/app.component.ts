import { Component } from '@angular/core';
import {Observable} from "rxjs";

export interface Post {
  title: string
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  search = ''
  searchField = 'title'

  posts: Post[] = [
    {title: 'beer', text: 'best drink'},
    {title: 'Bread', text: 'the name of Pit'},
    {title: 'JS', text: 'best language'}
  ]

  addPost() {
    this.posts.push({
      title: 'Angular',
      text: 'Learning'
    })
  }

  promise: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => resolve('Promise resolved'), 5000)
  })

  date : Observable<Date> = new Observable<Date>(obs => {
    setInterval(() => {
      obs.next(new Date())
    }, 1000)
  })

}
