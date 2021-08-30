import { Pipe, PipeTransform } from '@angular/core';
import { parsePhoneNumber } from 'libphonenumber-js';

@Pipe({
  name: 'phone',
})
export class PhonePipe implements PipeTransform {
  transform(phoneNumber: string): string {
    if (!phoneNumber) {
      return '';
    }
    const parsedNumber = parsePhoneNumber(phoneNumber, 'US');
    return parsedNumber.formatNational();
  }
}
