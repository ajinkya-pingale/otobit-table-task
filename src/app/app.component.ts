import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'otobitTaskCRUD';

  constructor(){
    localStorage.setItem('token', `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL21hbnVmYWN0dXJpbmdlbnRlcnByaXNlLWFwaS5uZXVyb21vbmsuc2hyZWVrYWthamltYXNhbGUuY29tL2FwaS92MS9hZG1pbi9hZG1pbkxvZ2luIiwiaWF0IjoxNjcyODEwOTExLCJleHAiOjM3NjcyODEwOTExLCJuYmYiOjE2NzI4MTA5MTEsImp0aSI6ImFnT0R1THNPbnhyM0k5QVEiLCJzdWIiOiIzIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.XNwDyMMq89rIvUdzSXrowwsXFPIi6xkJr2mxn-R_6PI`)
  }

}
