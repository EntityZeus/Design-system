import { Component, h, AttachInternals, Prop } from "@stencil/core";

@Component({
  tag: 'stencil-input',
  styleUrl: 'stencil-input.css',
  shadow: true,
  formAssociated: true
})
export class StencilInputElement {
  
  @Prop() value: string | number;
  @Prop() type: 'text' | 'number' = 'number';
  @Prop() label: string = 'Enter the value';
  @Prop() min: number;
  @Prop() max: number;
  @AttachInternals() internals: ElementInternals;

  componentWillLoad() {
    this.internals.setFormValue('');
  }

  formResetCallback() {
    this.internals.setFormValue('');
    this.internals.setValidity({});
  }

  handleInput(event){
    const target = event.target;
    this.value = target.value;
    this.internals.setFormValue(String(this.value));
  }

  render() {
    return <div class="input-container">
      <label class="input-label">{this.label}</label>
      <input type={this.type} value={this.value} onInput={this.handleInput} />
    </div> 
  }
}