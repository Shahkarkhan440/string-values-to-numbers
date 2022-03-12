# string-values-to-numbers

This package will convert your string values/numbers from your request body to numbers either int, float, double. you dont need specifically to convert/parse to int float each time.

This package uses recursive calling mechanism which can convert Numbers values in string in your nested objects, arrays at upto any level.

It handles most Cases like:

```
String Numbers => "4.5"/"6" => 4.5/6

Boolean String:  "true"/"false"  => true/false

Null String => "null" => null

Undefined String => "undefined" => undefined
```


Here are some screenshots of request body before and OUTPUT.

Request Body Screenshot:

![request_body](https://i.imgur.com/qoKpazi.png)


 

Output Screenshot:

![output_body](https://i.imgur.com/okpA5RN.png)




REQUEST BODY:

 ```javascript
 {
    a: 0,
    b: {
        c: "4",
        d: 4.5
    },

    e: [
        {
            f: "4.1"
        },
        {
            g: "4"
        },
        4,
        "Shahkar",
        "Rizwan",
        "5.4",
        null,
        undefined,
        [],
        {},
        false

    ],
    h: [],
    i: {},
    k: true

}

```

OUTPUT BODY:

 ```javascript

{
  a: 0,
  b: {
    c: 4,
    d: 4.5
  },
  e: [
    {
      f: 4.1
    },
    {
      g: 4
    },
    4,
    "Shahkar",
    "Rizwan",
    5.4,
    null,
    null,
    [],
    {},
    false
  ],
  h: [],
  i: {},
  k: true
}
```

For any suggestions & bugs reporting please comment issue's. or reach me at shahkarkhan02@gmail.com
