const StringToNumber = (value) => {

    if (!isNaN(value)) {
        return Number(value)
    } else {

        let temp = Number(value)

        if (isNaN(temp)) {

            return value
        }
        return temp
    }
}


exports.StringValuesConvert = (dataObject) => {

    Object.keys(dataObject).forEach((key) => {

        if (dataObject[key] === null || dataObject[key] === undefined || dataObject[key] === [] || dataObject[key] === {}) {
            return dataObject[key]
        }

        else if (typeof dataObject[key] === "string") {
            let temp = StringToNumber(dataObject[key])
            dataObject[key] = temp
        }

        else if (typeof dataObject[key] === "object") {

            return StringValuesConvert(dataObject[key]);
        }

        else if (Array.isArray(dataObject[key])) {

            if (dataObject[key] === null || dataObject[key] === undefined || dataObject[key] === [] || dataObject[key] === {}) {
                return dataObject[key]
            }

            else if (typeof dataObject[key] === "object") {

                StringValuesConvert(dataObject[key]);

            } else if (typeof dataObject[key] === "string") {

                let temp = StringToNumber(dataObject[key])
                dataObject[key] = temp
            }

        }
        else {
            return dataObject[key]
        }

    })

    return dataObject
}


//this is for you guts if you want to test  :) 


// console.log(StringValuesConvert(

//     {
//         a: 0,
//         b: {
//             c: "4",
//             d: 4.5
//         },

//         e: [
//             {
//                 f: "4.1",
//                 hel: [
//                     {
//                         name: "55",

//                     }
//                 ]
//             },
//             {
//                 g: "4"
//             },
//             4,
//             "Shahkar",
//             "Rizwan",
//             "5.4",
//             null,
//             undefined,
//             [],
//             {},
//             false

//         ],
//         h: [],
//         i: {},
//         k: true

//     }
    
//     )


// )




