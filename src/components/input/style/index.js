import styled from 'styled-components';

export const InputStyle = styled.div`
.br-input {
  --input-background: var(--color-secondary-01);
  --input-border-color: var(--color-secondary-06);
  --input-border-width: 1px;
  --input-border-style: solid;
  --input-button-margin: var(--spacing-scale-half);
  --input-icon-color: var(--color-secondary-06);
  --input-icon-margin: var(--spacing-scale-baseh);
  --input-color: var(--color-secondary-08);
  --input-margin-bottom: var(--spacing-scale-base);
  --input-margin-top: var(--spacing-scale-half);
  --input-padding: 0 var(--spacing-scale-2x);
  --input-padding-button: var(--spacing-scale-5x);
  --input-padding-icon: var(--spacing-scale-5x);
  --input-radius: var(--surface-rounder-sm);
  --input-size: var(--input-medium);
  --input-small: 32px;
  --input-medium: 40px;
  --input-large: 48px;
  --input-highlight: 56px;
  color: var(--text-color);
  position: relative;
}
.br-input input {
  background: var(--input-background);
  border: var(--input-border-width) var(--input-border-style) var(--input-border-color);
  border-radius: var(--input-radius);
  color: var(--input-color);
  display: block;
  font-size: var(--font-size-scale-up-01);
  font-weight: var(--font-weight-medium);
  height: var(--input-size);
  margin-bottom: var(--input-margin-bottom);
  margin-top: var(--input-margin-top);
  padding: var(--input-padding);
  width: 100%;
}
.br-input input::placeholder {
  --text-color: var(--input-color);
}
.br-input input::-ms-reveal, .br-input input::-ms-clear, .br-input input::-webkit-calendar-picker-indicator {
  display: none;
}
.br-input input[type=search]::-webkit-search-decoration, .br-input input[type=search]::-webkit-search-cancel-button, .br-input input[type=search]::-webkit-search-results-button, .br-input input[type=search]::-webkit-search-results-decoration {
  appearance: none;
}
.br-input.input-inline {
  display: flex;
 
}
.br-input.input-inline .input-label {
  margin-right: var(--spacing-scale-baseh);
  margin-top: calc(var(--input-size) * 0.5 - var(--spacing-scale-half));
  
}
.br-input.input-inline .input-content {
  flex: 1;
  
}
.br-input .input-group {
  position: relative;
  width: 100%;
}
.br-input .input-icon {
  align-items: center;
  color: var(--input-icon-color);
  display: flex;
  height: var(--input-size);
  margin-left: var(--input-icon-margin);
  position: absolute;
}
.br-input .input-icon + input {
  padding-left: var(--input-padding-icon);
}
.br-input .br-button {
  --button-size: var(--button-small);
  --color: var(--color-light);
  --color-rgb: var(--color-light-rgb);
  --color-hsl: var(--color-light-hsl);
  --text-color: var(--color);
  --interactive: var(--interactive-light);
  --interactive-rgb: var(--interactive-light-rgb);
  --interactive-hsl: var(--interactive-light-hsl);
  --visited: var(--blue-warm-vivid-80);
  --hover: var(--surface-opacity-xs);
  --pressed: var(--surface-opacity-md);
  --focus-color: var(--gold-vivid-40);
  --focus: var(--gold-vivid-40);
  --active: var(--blue-warm-vivid-80);
  border-radius: 50%;
  float: right;
  margin-right: var(--input-button-margin);
  margin-top: calc((var(--input-size) + var(--input-margin-bottom)) * -1);
  padding: 0;
  position: relative;
  transform: translateY(calc((var(--input-size) - var(--button-size)) * 0.5));
  width: var(--button-size);
}
.br-input.input-button input {
  padding-right: var(--input-padding-button);
}
.br-input.has-icon .br-button.circle {
  float: right;
  margin-right: var(--spacing-scale-half);
  margin-top: calc((var(--button-size) + var(--spacing-scale-half) + var(--input-margin-bottom)) * -1);
  transform: translateY(0);
}
.br-input.has-icon.small .br-button.circle {
  margin-top: calc((var(--button-size) + var(--spacing-scale-base)) * -1);
}
.br-input.has-icon.large .br-button.circle {
  margin-top: calc(var(--button-size) * -1);
}
.br-input.input-highlight {
  --input-background: var(--color-secondary-02);
  --input-border-color: transparent;
  --input-button-margin: var(--spacing-scale-2x);
  --input-icon-margin: var(--spacing-scale-3x);
  --input-padding: 0 var(--spacing-scale-3x);
  --input-padding-button: var(--spacing-scale-7x);
  --input-padding-icon: var(--spacing-scale-7x);
  --input-size: var(--input-highlight);
}
.br-input .br-list {
  box-shadow: var(--surface-shadow-md);
  max-height: 530px;
  overflow: auto;
  position: absolute;
  width: 100%;
  z-index: var(--z-index-layer-2);
}
.br-input .br-list::-webkit-scrollbar {
  width: 8px;
}
.br-input .br-list::-webkit-scrollbar-track {
  background: var(--color-secondary-03);
}
.br-input .br-list::-webkit-scrollbar-thumb {
  background: var(--color-secondary-06);
}
.br-input .br-list .br-item {
  --item-padding-y: var(--spacing-scale-2x);
  --interactive-rgb: var(--rgb-secondary-08);
}
.br-input .br-list .br-item:not(:disabled):hover {
  background-image: linear-gradient(rgba(var(--interactive-rgb), var(--hover)), rgba(var(--interactive-rgb), var(--hover)));
}
.br-input .br-list .br-item:not(:disabled):active {
  background-image: linear-gradient(rgba(var(--interactive-rgb), var(--pressed)), rgba(var(--interactive-rgb), var(--pressed)));
}
.br-input .br-list .br-item:not(:first-child) {
  border-top: var(--surface-width-sm) solid var(--color-secondary-04);
}
.br-input.success input, .br-input[data-success] input {
  border-color: var(--color-success);
  border-width: 2px;
}
.br-input.danger input, .br-input[data-danger] input {
  border-color: var(--color-danger);
  border-width: 2px;
}
.br-input.warning input, .br-input[data-warning] input {
  border-color: var(--color-warning);
  border-width: 2px;
}
.br-input.info input, .br-input[data-info] input {
  border-color: var(--color-info);
  border-width: 2px;
}
.br-input input {
  --interactive-rgb: var(--rgb-secondary-08);
}
.br-input input:not(:disabled):hover {
  background-image: linear-gradient(rgba(var(--interactive-rgb), var(--hover)), rgba(var(--interactive-rgb), var(--hover)));
}
.br-input input:not(:disabled):active {
  background-image: linear-gradient(rgba(var(--interactive-rgb), var(--pressed)), rgba(var(--interactive-rgb), var(--pressed)));
}
.br-input input:focus, .br-input input:focus-visible, .br-input input.focus-visible {
  border-color: var(--focus) !important;
  box-shadow: 0 0 0 var(--surface-width-md) var(--focus);
  outline: none;
}
.br-input .feedback {
  margin-bottom: var(--spacing-scale-half);
}
.br-input.small, .br-input[data-small] {
  --input-size: var(--input-small);
}
.br-input.medium, .br-input[data-medium] {
  --input-size: var(--input-medium);
}
.br-input.large, .br-input[data-large] {
  --input-size: var(--input-large);
}
`

export default InputStyle;