import { NgModule } from '@angular/core';

import { MainContentComponent } from './main-content.component';
import { ThumbnailListComponent } from './thumbnail-list/thumbnail-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        MainContentComponent,
        ThumbnailListComponent,
        HeaderComponent,
        FooterComponent
    ],
    providers: []
})
export class MainContentModule { }
