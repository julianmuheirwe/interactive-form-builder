# interactive-form-builder
vue based form builder based on a particular data structure. This library will allow developers to dynamically build forms in the backend
and be able to get user input through their products and get data posted back to them in the backend


> **Warning:** This library is still in experiment mode

## Getting Started?
### Usage

```
<FormBuilder 
  load-from="http://127.0.0.1:3000/form-details"
  font-family="monospace"
  theme-color="#ff00ff" 
  highlight-color="#00ff00"
  text-color="#2b2b2b"
  :has-cancel-button="true"
  v-on:onCancel="onCancel"
  v-on:onSubmitted="onSubmitted"/>
```
