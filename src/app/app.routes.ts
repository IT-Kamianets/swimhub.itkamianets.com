import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
	},
	{
		path: 'swim-basics',
		loadComponent: () => import('./pages/topic/topic.component').then((m) => m.TopicComponent),
	},
	{
		path: 'swimming-styles',
		loadComponent: () => import('./pages/topic/topic.component').then((m) => m.TopicComponent),
	},
	{
		path: 'training-plans',
		loadComponent: () => import('./pages/topic/topic.component').then((m) => m.TopicComponent),
	},
	{
		path: 'glossary',
		loadComponent: () => import('./pages/topic/topic.component').then((m) => m.TopicComponent),
	},
	{
		path: 'health-benefits',
		loadComponent: () => import('./pages/topic/topic.component').then((m) => m.TopicComponent),
	},
	{
		path: 'swim-safety',
		loadComponent: () => import('./pages/topic/topic.component').then((m) => m.TopicComponent),
	},
	{
		path: 'famous-swimmers',
		loadComponent: () => import('./pages/topic/topic.component').then((m) => m.TopicComponent),
	},
	{
		path: '**',
		redirectTo: '/',
	},
];
