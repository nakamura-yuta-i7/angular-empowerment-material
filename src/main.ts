import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import 'hammerjs';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  console.log("ENABLE_PROD_MODE");
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
