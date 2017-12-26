import { platformBrowserDynamic} 
from '@angular/platform-browser-dynamic'

import {AppModule} 
from './app2.module'



platformBrowserDynamic()
.bootstrapModule(AppModule)