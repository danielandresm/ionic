import { Component } from '@stencil/core';


@Component({
  tag: 'ion-footer',
  host: {
    theme: 'footer'
  }
})
export class Footer {
  protected render() {
    return <slot></slot>;
  }
}
