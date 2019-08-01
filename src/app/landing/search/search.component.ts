import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  inputUser: string;
  @Output() outputSearchUser = new EventEmitter();
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  searchUser(user: string) {
    this.searchService.getSearchUser(user)
      .subscribe(response => {
        this.outputSearchUser.emit(response);
      }, error => {
        console.log(error, 'error');
      });
  }

}
