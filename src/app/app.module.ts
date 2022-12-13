import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PublicLayoutModule } from './public-layout/public-layout.module';
import { AppLoadingService } from './core/services/app-loading.service';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './core/interceptors/jwt-interceptor.service';
import { ProfileService } from './core/services/profile.service';

@NgModule({
    declarations: [AppComponent],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        PublicLayoutModule,
        ToastModule,
        BlockUIModule,
        ProgressSpinnerModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true,
        },
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        MessageService,
        ConfirmationService,
        AppLoadingService,
        ProfileService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
