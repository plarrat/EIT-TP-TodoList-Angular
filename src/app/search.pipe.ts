import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  pure: false,
})
export class SearchPipe implements PipeTransform {
  transform(liste: string[], search: string) {
    search = search.toLowerCase();
    let res = liste.filter((todo: any) => {
      todo = todo.toLowerCase();
      if (todo.indexOf(search) > -1) return todo;
      else return null;
    });
    return res;
  }
}
