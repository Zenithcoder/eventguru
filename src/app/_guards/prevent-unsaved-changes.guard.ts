/* import {Injectable} from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { SuccessComponent } from '../event/success/success.component';

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<SuccessComponent> {
    canDeactivate(component: SuccessComponent) {
      if (component.editForm.dirty) {
            return confirm('Are you sure you want to continue?  Any unsaved changes will be lost');
        }
        return true; 
    }
}
*/