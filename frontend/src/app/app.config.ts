import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { StarRatingModule } from 'angular-star-rating';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(StarRatingModule.forRoot()), provideHttpClient()]
};
