import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  inputUser: string;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  searchUser(user: string) {
    this.searchService.getSearchUser(user)
      .subscribe(response => {
        console.log(response, 'respuesta');
      }, error => {
        console.log(error, 'error');
      });
  }

}
