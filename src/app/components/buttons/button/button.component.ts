import { Component, Input } from '@angular/core';

@Component({
  selector: '[app-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: {
    '[class.btn-primary]':'color === "primary"',
    '[class.btn-secondary]':'color === "secondary"',
    '[class.btn-success]':'color === "success"',
    '[class.btn-danger]':'color === "danger"',
    '[class.btn-warning]':'color === "warning"',
    '[class.size-large]':'size === "large"',
    '[class.size-medium]':'size === "medium"',
    '[class.size-small]':'size === "small"',
    '[class.size-xsmall]':'size === "xsmall"',
  }
})
export class ButtonComponent {
  @Input() color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' = 'primary';
  @Input() size: 'large' | 'medium' | 'small' | 'xsmall' = 'large'

  constructor() {}

 }
