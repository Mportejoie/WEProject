import { AccountingComponent } from './accounting/accounting.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CategoryButtonComponent } from './category-button/category-button.component';
import { ChartModule } from 'primeng/chart';
import { ClientsComponent } from './clients/clients.component';
import { ContainerCategoryButtonComponent } from './container-category-button/container-category-button.component';
import { DialogModule } from 'primeng/dialog';
import { DockModule } from 'primeng/dock';
import { FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { InputTextModule } from 'primeng/inputtext';
import { InvoicesComponent } from './invoices/invoices.component';
import { KeyFilterModule } from 'primeng/keyfilter';
import { KnobModule } from 'primeng/knob';
import { MenuModule } from 'primeng/menu';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
import { NgModule } from '@angular/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SettingsComponent } from './settings/settings.component';
import { StocksComponent } from './stocks/stocks.component';
import { StockManagementComponent } from './stock-management/stock-management.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import {HttpClientModule} from '@angular/common/http';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {SelectButtonModule} from 'primeng/selectbutton';
import { PdfPreviewComponent } from './pdf-preview/pdf-preview.component';
import { LoginComponent } from './login/login.component';
import {DividerModule} from "primeng/divider";
import {CheckboxModule} from "primeng/checkbox";

@NgModule({
  declarations: [
    AccountingComponent,
    AppComponent,
    CategoryButtonComponent,
    ClientsComponent,
    ContainerCategoryButtonComponent,
    HomeComponent,
    InvoicesComponent,
    SettingsComponent,
    StocksComponent,
    StockManagementComponent,
    PdfPreviewComponent,
    LoginComponent
  ],
    imports: [
        AppRoutingModule,
        ButtonModule,
        BrowserAnimationsModule,
        BrowserModule,
        CardModule,
        ChartModule,
        DialogModule,
        DockModule,
        FormsModule,
        HttpClientModule,
        InputTextModule,
        KeyFilterModule,
        KnobModule,
        MenuModule,
        MessageModule,
        MessagesModule,
        RadioButtonModule,
        TabMenuModule,
        TableModule,
        ToastModule,
        TreeModule,
        TreeTableModule,
        ToggleButtonModule,
        SelectButtonModule,
        DividerModule,
        CheckboxModule
    ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
