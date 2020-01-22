import { Component } from '@angular/core';
import {DeletePage} from '../delete/delete'
import { HomePage } from '../home/home';
import { CartPage } from '../cart/cart';
import { SettingPage } from '../setting/setting';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = DeletePage;
  tab3Root = CartPage;
  tab4Root = SettingPage;

  constructor() {

  }
}
