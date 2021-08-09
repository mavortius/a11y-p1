import { ContentChildren, Directive, HostListener, QueryList } from '@angular/core';

import { KeyboardManagerItemDirective } from './keyboard-manager-item.directive';

enum ArrowDirections {
  LEFT = -1,
  RIGHT = 1
}

@Directive({
  selector: '[appKeyboardManager]'
})
export class KeyboardManagerDirective {

  @ContentChildren(KeyboardManagerItemDirective)
  items: QueryList<KeyboardManagerItemDirective> = null;

  @HostListener('keyup', ['$event'])
  manageKeys(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
        this.moveFocus(ArrowDirections.RIGHT).focus();
        break;
      case 'ArrowDown':
        this.moveFocus(ArrowDirections.LEFT).focus();
        break;
      case 'ArrowLeft':
        this.moveFocus(ArrowDirections.LEFT).focus();
        break;
      case 'ArrowRight':
        this.moveFocus(ArrowDirections.RIGHT).focus();
        break;
    }
  }

  moveFocus(direction: ArrowDirections): KeyboardManagerItemDirective {
    const items = this.items.toArray();
    const selectedIndex = items.findIndex(item => item.isFocused());
    const focusedElement = items[selectedIndex + direction];

    if (focusedElement) {
      return focusedElement;
    }

    return direction === ArrowDirections.LEFT ? items[items.length - 1] : items[0];
  }
}
