// main entry point
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

//enableProdMode(); //Uncomment for production
platformBrowserDynamic().bootstrapModule(AppModule)
  .then((success: any) => console.log('App bootstrapped'))
  .catch((err: any) => console.error(err));