import { Component } from '@angular/core';
import { Notification } from './notification';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  notificationList: Notification[] = [
    {
      id: 0,
      icon: 'folder-outline',
      title: 'Kết quả chương trình Contest Bắc Âu cập nhật đến ngày 17/06',
      time: '17/06/2020 13:33',
    },
    {
      id: 1,
      icon: 'accessibility-outline',
      title: 'Thưởng hiệu quả kinh doanh cá nhân tháng 6',
      time: '17/05/2020 13:33',
    },
    {
      id: 2,
      icon: 'alert-outline',
      title: 'Có 1 HSYCBH đã được nộp về',
      time: '17/05/2020 13:33',
    },
    {
      id: 3,
      icon: 'attach-outline',
      title: 'Có 1 hồ sơ ứng viên đã được nộp',
      time: '17/05/2020 13:33',
    },
    {
      id: 4,
      icon: 'beer-outline',
      title: 'Hồ sơ ứng viên Nguyễn Văn A còn thiếu chứng từ',
      time: '17/05/2020 13:33',
    },
    {
      id: 5,
      icon: 'briefcase-outline',
      title: 'Thông báo hoàn tất HSYCBH',
      time: '17/05/2020 13:33',
    },
    {
      id: 6,
      icon: 'cloud-outline',
      title: 'Thông báo phát hành hợp đồng',
      time: '17/05/2020 13:33',
    },
    {
      id: 7,
      icon: 'diamond-outline',
      title: 'Insurance Việt Nam vinh dự nhận bằng khen của thủ tướng',
      time: '17/05/2020 13:33',
    },
  ];

  filteredNotificationList: Notification[] = [];

  constructor() {
    this.filteredNotificationList = this.notificationList;
  }

  filterResults(event: Event) {
    const text = (event.target as HTMLInputElement).value.toLowerCase();
    if (!text) {
      this.filteredNotificationList = this.notificationList;
      return;
    }
    this.filteredNotificationList = this.notificationList.filter(
      (notification: any) => {
        if (
          notification &&
          notification.title &&
          typeof notification.title === 'string'
        ) {
          return notification.title.toLowerCase().includes(text);
        }
      }
    );
  }
}
