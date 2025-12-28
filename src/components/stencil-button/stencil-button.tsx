import { Component, h, Prop, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: 'stencil-button',
  styleUrl: 'stencil-button.css',
  shadow: true
})
export class StencilButtonElement {
  @Prop() buttonLabel: string;
  @Prop() disabled: boolean = false;
  @Prop() state: 'primary' | 'error' | 'outline' = 'primary';

  @Event() click: EventEmitter<void>;

  handleClick = () => {
    this.click.emit();
  }

  render() {
    return (
      <button disabled={this.disabled} class={this.state} 
      onClick={this.handleClick}>{this.buttonLabel}</button>
    )
  }
}