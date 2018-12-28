import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title : "Mon premier post",
      content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus lobortis metus non ultricies. Ut eros ex, consectetur tempus ornare vitae, malesuada quis turpis. Pellentesque id tellus non arcu suscipit semper.",
      loveIts : 5,
      created_at : new Date()
    },
    {
      title : "Mon deuxieme post",
      content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus lobortis metus non ultricies. Ut eros ex, consectetur tempus ornare vitae, malesuada quis turpis. Pellentesque id tellus non arcu suscipit semper.",
      loveIts : -1,
      created_at : new Date()
    },
    {
      title : "Encore un post",
      content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus lobortis metus non ultricies. Ut eros ex, consectetur tempus ornare vitae, malesuada quis turpis. Pellentesque id tellus non arcu suscipit semper.",
      loveIts : 0,
      created_at : new Date()
    }
  ]

  onLove() {
    
  }

}
