import { Component } from '@angular/core';
import { ListItems } from './list-items';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  itemList: ListItems[] = [
    {
      id: 0,
      color: 'rgb(130, 37, 130)',
      iconName: 'notifications-outline',
      title: 'Quản lý thông báo mới',
    },
    {
      id: 1,
      color: 'rgb(80, 186, 251)',
      iconName: 'gift-outline',
      title: 'Rewards',
    },
  ];

  upComingItemList: ListItems[] = [
    {
      id: 2,
      color: 'rgb(250,66,66)',
      iconName: 'Person-circle-outline',
      title: 'Thay đổi thông tin',
    },
    {
      id: 3,
      color: 'blue',
      iconName: 'folder-outline',
      title: 'Tài liệu',
    },
    {
      id: 4,
      color: 'rgb(245,65,29)',
      iconName: 'share-social-outline',
      title: 'Chia sẻ',
    },
    {
      id: 5,
      color: 'rgb(77,251,46)',
      iconName: 'checkbox-outline',
      title: 'Ký duyệt hồ sơ',
    },
    {
      id: 6,
      color: 'rgb(249,49,197)',
      iconName: 'briefcase-outline',
      title: 'Báo cáo',
    },
    {
      id: 7,
      color: 'rgb(130,37,130)',
      iconName: 'stats-chart-outline',
      title: 'BBQ & eApp',
    },
    {
      id: 8,
      color: 'rgb(80,186,251)',
      iconName: 'clipboard-outline',
      title: 'Học trực tuyến',
    },
    {
      id: 9,
      color: 'rgb(245,65,29)',
      iconName: 'bar-chart-outline',
      title: 'eFNA',
    },
    {
      id: 10,
      color: 'rgb(113,98,113)',
      iconName: 'people-outline',
      title: 'Quản lý khách hàng',
    },
  ];
  constructor() {}
}
