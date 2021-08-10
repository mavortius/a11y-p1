import { Injectable } from '@angular/core';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class UniqueIdService {
  private static generateUniqueId(): string {
    return uuid.v1();
  }

  public generateUniqueIdWithPrefix(prefix: string): string {
    return `${prefix}-${UniqueIdService.generateUniqueId()}`;
  }
}
