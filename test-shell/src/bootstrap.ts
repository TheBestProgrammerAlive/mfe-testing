import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {ErrorHandlerService} from "./app/services/error-handler.service";


platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => {
    console.log('error');
    console.error(err);
  });
