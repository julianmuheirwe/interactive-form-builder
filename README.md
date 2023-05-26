# vue-form-builder
vue based form builder based on a particular data structure. This library will allow developers to dynamically build forms in the backend
and be able to get user input through their products and get data posted back to them in the backend

<font style="color:white; background-color: #3480eb; padding:2px 3px; border-radius:3px;">v0.0.1</font>
<font style="color:white; background-color: #eb6b34; padding:2px 3px; border-radius:3px; font-weight:bold;">npm</font>
<font style="color:white; background-color: green; padding:2px 3px; border-radius:3px; font-weight:bold;">vue</font>
<font style="color:white; background-color: red; padding:2px 3px; border-radius:3px; font-weight:bold;">!experiment</font>

## Getting Started?
### Usage

```
<FormBuilder 
  load-from="http://127.0.0.1:3000/form-details"
  font-family="monospace"
  :columns="1" 
  theme-color="#ff00ff" 
  highlight-color="#00ff00"
  text-color="#2b2b2b"
  :has-cancel-button="true"
  v-on:onCancel="onCancel"
  v-on:onSubmitted="onSubmitted"/>
```
