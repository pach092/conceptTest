import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { DxTreeViewComponent } from 'devextreme-angular';
import CustomStore from 'devextreme/data/custom_store';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(DxTreeViewComponent, { static: false }) treeView: any;
  treeDataSource: any;
  treeBoxValue: string[];
  gridDataSource: any;
  gridBoxValue: number[] = [3];
  title = 'conceptTest';

  constructor() {
    this.treeDataSource = [
      {
        ID: 1,
        name: 'Stores',
        expanded: true
      },
      {
        ID: '1_1',
        categoryId: 1,
        name: 'Super Mart of the West',
        expanded: true
      },
      {
        ID: '1_1_1',
        categoryId: '1_1',
        name: 'Video Players'
      },
      {
        ID: '1_1_1_1',
        categoryId: '1_1_1',
        name: 'HD Video Player',
        price: 220
      },
      {
        ID: '1_1_1_2',
        categoryId: '1_1_1',
        name: 'SuperHD Video Player',
        price: 270
      },
      {
        ID: '1_1_2',
        categoryId: '1_1',
        name: 'Televisions',
        expanded: true
      },
      {
        ID: '1_1_2_1',
        categoryId: '1_1_2',
        name: 'SuperLCD 42',
        price: 1200
      },
      {
        ID: '1_1_2_2',
        categoryId: '1_1_2',
        name: 'SuperLED 42',
        price: 1450
      },
      {
        ID: '1_1_2_3',
        categoryId: '1_1_2',
        name: 'SuperLED 50',
        price: 1600
      },
      {
        ID: '1_1_2_4',
        categoryId: '1_1_2',
        name: 'SuperLCD 55',
        price: 1750
      },
      {
        ID: '1_1_2_5',
        categoryId: '1_1_2',
        name: 'SuperLCD 70',
        price: 4000
      },
      {
        ID: '1_1_3',
        categoryId: '1_1',
        name: 'Monitors'
      },
      {
        ID: '1_1_3_1',
        categoryId: '1_1_3',
        name: '19\''
      },
      {
        ID: '1_1_3_1_1',
        categoryId: '1_1_3_1',
        name: 'DesktopLCD 19',
        price: 160
      },
      {
        ID: '1_1_4',
        categoryId: '1_1',
        name: 'Projectors'
      },
      {
        ID: '1_1_4_1',
        categoryId: '1_1_4',
        name: 'Projector Plus',
        price: 550
      },
      {
        ID: '1_1_4_2',
        categoryId: '1_1_4',
        name: 'Projector PlusHD',
        price: 750
      }
    ];
    this.gridDataSource = [
      {
        ID: 1,
        CompanyName: 'Premier Buy',
        Address: '7601 Penn Avenue South',
        City: 'Richfield',
        State: 'Minnesota',
        Zipcode: 55423,
        Phone: '(612) 291-1000',
        Fax: '(612) 291-2001',
        Website: 'http://www.nowebsitepremierbuy.com'
      },
      {
        ID: 2,
        CompanyName: 'ElectrixMax',
        Address: '263 Shuman Blvd',
        City: 'Naperville',
        State: 'Illinois',
        Zipcode: 60563,
        Phone: '(630) 438-7800',
        Fax: '(630) 438-7801',
        Website: 'http://www.nowebsiteelectrixmax.com'
      },
      {
        ID: 3,
        CompanyName: 'Video Emporium',
        Address: '1201 Elm Street',
        City: 'Dallas',
        State: 'Texas',
        Zipcode: 75270,
        Phone: '(214) 854-3000',
        Fax: '(214) 854-3001',
        Website: 'http://www.nowebsitevideoemporium.com'
      },
      {
        ID: 4,
        CompanyName: 'Screen Shop',
        Address: '1000 Lowes Blvd',
        City: 'Mooresville',
        State: 'North Carolina',
        Zipcode: 28117,
        Phone: '(800) 445-6937',
        Fax: '(800) 445-6938',
        Website: 'http://www.nowebsitescreenshop.com'
      },
      {
        ID: 5,
        CompanyName: 'Braeburn',
        Address: '1 Infinite Loop',
        City: 'Cupertino',
        State: 'California',
        Zipcode: 95014,
        Phone: '(408) 996-1010',
        Fax: '(408) 996-1012',
        Website: 'http://www.nowebsitebraeburn.com'
      },
      {
        ID: 6,
        CompanyName: 'PriceCo',
        Address: '30 Hunter Lane',
        City: 'Camp Hill',
        State: 'Pennsylvania',
        Zipcode: 17011,
        Phone: '(717) 761-2633',
        Fax: '(717) 761-2334',
        Website: 'http://www.nowebsitepriceco.com'
      },
      {
        ID: 7,
        CompanyName: 'Ultimate Gadget',
        Address: '1557 Watson Blvd',
        City: 'Warner Robbins',
        State: 'Georgia',
        Zipcode: 31093,
        Phone: '(995) 623-6785',
        Fax: '(995) 623-6786',
        Website: 'http://www.nowebsiteultimategadget.com'
      },
      {
        ID: 8,
        CompanyName: 'EZ Stop',
        Address: '618 Michillinda Ave.',
        City: 'Arcadia',
        State: 'California',
        Zipcode: 91007,
        Phone: '(626) 265-8632',
        Fax: '(626) 265-8633',
        Website: 'http://www.nowebsiteezstop.com'
      },
      {
        ID: 9,
        CompanyName: 'Clicker',
        Address: '1100 W. Artesia Blvd.',
        City: 'Compton',
        State: 'California',
        Zipcode: 90220,
        Phone: '(310) 884-9000',
        Fax: '(310) 884-9001',
        Website: 'http://www.nowebsiteclicker.com'
      },
      {
        ID: 10,
        CompanyName: 'Store of America',
        Address: '2401 Utah Ave. South',
        City: 'Seattle',
        State: 'Washington',
        Zipcode: 98134,
        Phone: '(206) 447-1575',
        Fax: '(206) 447-1576',
        Website: 'http://www.nowebsiteamerica.com'
      },
      {
        ID: 11,
        CompanyName: 'Zone Toys',
        Address: '1945 S Cienega Boulevard',
        City: 'Los Angeles',
        State: 'California',
        Zipcode: 90034,
        Phone: '(310) 237-5642',
        Fax: '(310) 237-5643',
        Website: 'http://www.nowebsitezonetoys.com'
      },
      {
        ID: 12,
        CompanyName: 'ACME',
        Address: '2525 E El Segundo Blvd',
        City: 'El Segundo',
        State: 'California',
        Zipcode: 90245,
        Phone: '(310) 536-0611',
        Fax: '(310) 536-0612',
        Website: 'http://www.nowebsiteacme.com'
      }
    ];
    this.treeBoxValue = ['1_1'];
    console.log(this.treeDataSource)
  }

  makeAsyncDataSource(http: HttpClient, jsonFile: string) {
    return new CustomStore({
      loadMode: 'raw',
      key: 'ID',
      load() {
        return lastValueFrom(http.get(`data/${jsonFile}`));
      },
    });
  }

  onDropDownBoxValueChanged(e: any) {
    this.updateSelection(this.treeView && this.treeView.instance);
  }

  onTreeViewReady(e: { component: any; }) {
    this.updateSelection(e.component);
  }

  updateSelection(treeView: { unselectAll: () => void; selectItem: (arg0: string) => void; }) {
    if (!treeView) return;

    if (!this.treeBoxValue) {
      treeView.unselectAll();
    }

    if (this.treeBoxValue) {
      this.treeBoxValue.forEach(((value) => {
        treeView.selectItem(value);
      }));
    }
  }

  onTreeViewSelectionChanged(e: { component: { getSelectedNodeKeys: () => string[]; }; }) {
    this.treeBoxValue = e.component.getSelectedNodeKeys();
  }
}
