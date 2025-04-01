import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

const isAuthenticatedGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const userId = localStorage.getItem('userId');
  console.log(userId);
  if (!userId) {
    localStorage.setItem('lastPath', to.path);
    return next({ name: 'login' });
  }
  return next();
};

export default isAuthenticatedGuard;
