import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  url1 = 'https://raw.githubusercontent.com/hatemhosny/svg-icon/master/dist/trimmed-svg/';
  url2 = '/assets/si-sprite.svg';

  icons = [
    'logos/alfresco',
    'logos/angular-icon',
    'ant/appstore-o',
    'ant/chrome',
    'ant/like',
    'ant/star',
    'ant/star-o',
    'ant/tag',
    'ant/tag-o',
    'material/done-all',
    'subway/glass',
    'logos/facebook',
    'logos/twitter',
    'foundation/credit-card',
    'awesome/close',
  ];

  sprites = [
    'si-ant-appstore-o',
    'si-ant-appstore',
    'si-awesome-align-center',
    'si-awesome-align-justify',
    'si-awesome-align-left',
    'si-logos-alfresco',
    'si-logos-component',
  ]
}
