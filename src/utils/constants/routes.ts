// Route Constants

export const ROUTES = {
  // Public Routes
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  
  // Protected Routes
  DASHBOARD: '/dashboard',
  TODOS: '/todos',
  TODO_CREATE: '/todos/create',
  TODO_EDIT: '/todos/:id/edit',
  TODO_DETAIL: '/todos/:id',
  
  // Profile Routes
  PROFILE: '/profile',
  SETTINGS: '/settings',
  
  // Error Routes
  NOT_FOUND: '/404',
  UNAUTHORIZED: '/401',
  SERVER_ERROR: '/500',
} as const;

export type RouteKeys = keyof typeof ROUTES;
export type RouteValues = typeof ROUTES[RouteKeys]; 