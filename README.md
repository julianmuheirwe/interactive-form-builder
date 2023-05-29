# interactive-form-builder
This is a VueJs based form builder that allows you to define your form in your backend, 
have it rendered on the front end and interactive-form-builder will have it submitted back to your backend 
as you will see in the usage below. 


> **Warning:** This library is still in experiment mode

### Pre requisites
- Vue 3.x
- Vite
- axios

### Usage
```
<FormBuilder 
  load-from="http://127.0.0.1/form"
  font-family="monospace"
  theme-color="#ff00ff" 
  highlight-color="#00ff00"
  text-color="#2b2b2b"
  :has-cancel-button="true"
  @cancel="onCancel"
  @submitted="onSubmitted"/>
```
### Define form objects that take the following structure

### Structure of the server defined in the backend

```
{
    title:"Form Title",
    server:{
        url:http://127.0.0.1/submit,
    },
    columns:[ 
        {
            fields:[ ...formObjects] 
        },
        ...
    ]
}
```

#### For an input-[text]

```
{
    label:"first name",
    variable:"firstName",
    type:"text",
    validations:{
        maxLength:50
    },
    required:true
}
```

#### For an input-[date]

```
{
    label:"dob",
    variable:"dob",
    type:"date",
    required:true
}
```

#### For an input-[number]

```
{
    label:"height",
    variable:"height",
    type:"number",
    validations:{
        max:50,
        min:10,
    },
    required:false
}
```

#### For a select

```
{
    label:"sex",
    variable:"sex",
    type:"select",
    options:["Male","Female"],
    required:false
}
```

#### For radio buttons

```
{
    label:"nationality",
    variable:"nationality",
    type:"radio",
    options:["Ugandan", "Other"],
    required:false
}
```

#### For checkboxes

```
{
    label:"hobbies",
    variable:"hobbies",
    type:"checkbox",
    options:["Dancing", "Singing", "Reading", "Fitness"],
    required:false
}
```

#### For adding instructions at the top of the form

```
instructions:{
    information:"Lorem Ipsum...",
    backgroundColor:"#06912b"
},
```

