// const exampleRequest = require("./request-example.json")

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

const stringObjectManipulation = (item) => {
    if (item === "true") {
        item = true
    }
    else if (item === "false") {
        item = false
    } else if (item === "null") {
        item = null
    } else if (item == "undefined") {
        item = "undefined"
    } else {
        let temp = StringToNumber(item)
        item = temp
    }
    return item
}

const ConvertStringValues = (dataObject) => {
    try {
        Object.keys(dataObject).forEach((key) => {
            if (dataObject[key] === null || dataObject[key] === undefined || dataObject[key] === [] || dataObject[key] === {}) {
                return dataObject[key]
            } if (typeof dataObject[key] === "string") {
                dataObject[key] = stringObjectManipulation(dataObject[key])
            } else if (typeof dataObject[key] === "object") {
                return ConvertStringValues(dataObject[key]);
            } else if (Array.isArray(dataObject[key])) {
                if (dataObject[key] === null || dataObject[key] === undefined || dataObject[key] === [] || dataObject[key] === {}) {
                    return dataObject[key]
                } else if (typeof dataObject[key] === "object") {
                    return ConvertStringValues(dataObject[key]);
                } else if (typeof dataObject[key] === "string") {
                    dataObject[key] = stringObjectManipulation(dataObject[key])
                }
            } else {
                return dataObject[key]
            }
        })
        return dataObject
    } catch (error) {
        return error
    }

}

module.exports = ConvertStringValues

//if case if you want to test ..
// console.log(ConvertStringValues(exampleRequest))


