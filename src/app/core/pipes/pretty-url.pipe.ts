import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyUrl',
})
export class PrettyUrlPipe implements PipeTransform {
  transform(url: string): string {
    return url.split('www.')[1];
  }
}
