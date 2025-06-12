import { CanActivateFn } from '@angular/router';

export const accessGuardGuard: CanActivateFn = (route, state) => {
  return true;
};
