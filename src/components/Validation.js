


let Errors = []

function checkForDuplicatesClass(array) {
    // console.log(array, 'array');
    let valuesAlreadySeen = []

    for (let i = 0; i < array.length; i++) {
        let value = array[i]
        if (valuesAlreadySeen.indexOf(value) !== -1) {
            return true
        }
        valuesAlreadySeen.push(value)
    }
    return false
}
function classNameChecks(array) {

    for (let i = 0; i < array.length; i++) {
        const value = array[i];
        // console.log(array[i], 'array', i, 'index')
        // console.log(value, 'value');

        // Check if the value starts with a capital letter
        if (!/^[A-Z]/.test(value)) {
            // console.log(`Value "${value}" at index ${i} does not start with a capital letter.`);
            Errors = [...Errors, { ClassName: value, error: `ClassName " ${value} " should be start with a capital letter.` }]
        }

        // Check if the value ends with an underscore
        if (/_$/.test(value)) {
            // console.log(`Value "${value}" at index ${i} ends with an underscore.`);
            Errors = [...Errors, { ClassName: value, error: `ClassName " ${value} " should not ends with an underscore.` }]
        }

        // Check if the value contains any special characters except underscore
        if (/[^A-Za-z0-9_]/.test(value)) {
            // console.log(`Value "${value}" at index ${i} contains special characters.`);
            Errors = [...Errors, { ClassName: value, error: `ClassName "${value}" should not contains special characters except '_'.` }]
        }
    }
}
function checkArrayMethods(array) {
    // console.log(array, 'arrayMethods');
    // Regular expression to check for camel case
    const camelCaseRegex = /^[a-z]+(?:[A-Z][a-z]*)*$/;
    // console.log(array.length, 'array.length')
    for (let i = 0; i < array.length; i++) {
        const Class = array[i];
        // Check if value is a string and matches camel case regex
        for (let index = 0; index < Class?.Methods.length; index++) {

            const method = Class?.Methods[index]?.replace('-', '')?.replace('+', '')?.replace('()', '')?.split(':')[0];
            // console.log(method, 'method');
            const methodNEW = Class?.Methods[index]?.split(':')[0];
            // console.log(methodNEW, 'methodNEW');
            const methodFull = Class?.Methods[index];
            // console.log(methodFull, 'methodFull');

            //check method have prenthesis
            let containPrenthesis = false
            if (methodFull?.toLowerCase()?.trim()?.includes("(") && methodFull?.toLowerCase()?.trim()?.includes(")")) {
                containPrenthesis = true
            }
            if (containPrenthesis === false) {
                Errors = [...Errors, { ClassName: Class?.ClassName, error: `The Method ${methodFull} of class ${Class?.ClassName} Have Bracket Issue` }]
            }
            //////////////


            var dataTypes = ["integer", "void", "long", "char", "short", "date", "string", "class", "float", "double", "int", "boolean", "bool", "byt", "String" ]
            if (methodFull[0] == "+" || methodFull[0] == "-" || methodFull[0] == "#") {
                // console.log("the method ${methodFull} of class ${Class?.ClassName} have access specifier");

            }
            else {
                // console.log(`The Method ${methodFull} of class ${Class?.ClassName} should have start with access specifier`);
                Errors = [...Errors, { ClassName: Class?.ClassName, error: `The Method ${methodFull} of class ${Class?.ClassName} should have start with access specifier` }]
            }

            // Define the regular expression pattern
            const pattern = /^.*:(integer|void|long|char|short|date|string|class|float|double|int|String)$/;
            if (!(pattern.test(methodFull) && dataTypes.includes(methodFull.split(":")[1]) || dataTypes.includes(methodFull.split(": ")[1]))) {
                Errors = [...Errors, { ClassName: Class?.ClassName, error: `The Method ${methodFull} of class ${Class?.ClassName} has invalid dataType` }]
                // console.log("Yes, the value exists!", methodFull)
            }
            //////////////
            ///// check camel case
            if (!camelCaseRegex.test(method)) {

                console.log(`Value "${method}" of Class ${Class?.ClassName} passes the checks.`);
                Errors = [...Errors, { ClassName: Class?.ClassName, error: `The method "${methodFull}" of Class ${Class?.ClassName} is not in camel case.` }]
            }
            //////check special characters
            const specialPattern = /^[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*$/;
            if (!specialPattern.test(method) && !method.endsWith("_"))
            {
                Errors = [...Errors, { ClassName: Class?.ClassName, error: `The method "${methodFull}" of Class ${Class?.ClassName} may special characters error.` }]
            }
            //////////////

            
        }
    }

    // if (dataTypes.indexOf(methodFull?.toLowerCase()) !== -1) {
    //     console.log("Yes, the value exists!")
    //     return false
    // }

    // if (methodFull?.includes(dataTypes)) {
    //     return false
    // } else {
    //     // console.log(`The Method ${methodFull} of class ${Class?.ClassName} should have  Data Type`);


    // }
    //////////////
    /////////check 13.	The method of class should have have access specifier, data type, method name and parameter list
    // if (methodFull?.includes('+') || methodFull?.includes('-')) {

    //     if (dataTypes.indexOf(methodFull?.toLowerCase()) !== -1) {
    //         var regExp = /[a-zA-Z]/g;
    //         if (regExp.test(methodFull)) {
    //             return false
    //         } else {
    // console.log(`The Method ${methodNEW} of class ${Class?.ClassName} should Contain Characters`);
    // Errors = [...Errors, { ClassName: Class?.ClassName, error: `The Method ${methodFull} of class ${Class?.ClassName} should Contain Characters` }]
    // }
    // } else {
    // console.log(`The Method ${methodNEW} of class ${Class?.ClassName} should have  access specifier, data type and Method Parameter List`);
    // Errors = [...Errors, { ClassName: Class?.ClassName, error: `The Method ${methodFull} of class ${Class?.ClassName} should have  access specifier, data type and Method Parameter List` }]
    // }
    // } else {
    // console.log(`The Method ${methodNEW} of class ${Class?.ClassName} should have  (access specifier or data type or Method Parameter List)`);
    // Errors = [...Errors, { ClassName: Class?.ClassName, error: `The Method ${methodFull} of class ${Class?.ClassName} should have  (access specifier or data type or Method Parameter List)` }]

    // }
    // let checkMethodsParams = false
    // if (methodFull?.includes("(") && methodFull?.includes(")")) {
    //     console.log("correct");
    //     let newString = "";
    //     newString = methodFull?.split(")")[0];
    //     newString = newString?.split("(")[1];
    //     console.log(newString);


    //     for (let index = 0; index < dataTypes.length; index++) {
    //         const element = dataTypes[index];
    //         if (newString === "") {
    //             checkMethodsParams = true
    //         } else if (
    //             newString
    //                 ?.toLowerCase()
    //                 ?.trim()
    //                 ?.includes(element?.toLowerCase()?.trim())
    //         ) {
    //             checkMethodsParams = true;
    //         }
    //     }
    //     if (checkMethodsParams === false) {
    //         Errors = [...Errors, { ClassName: Class?.ClassName, error: `The Method ${methodFull} of class ${Class?.ClassName} Have Parameter Issue ` }]
    //     }
    // } else {
    //     Errors = [...Errors, { ClassName: Class?.ClassName, error: `The Method ${methodFull} of class ${Class?.ClassName} Have Bracket Issue` }]

    // }

    // let contain = false
    // for (let index = 0; index < dataTypes.length; index++) {
    //     const element = dataTypes[index];
    //     if (methodFull?.toLowerCase()?.trim()?.includes(element?.toLowerCase()?.trim())) {
    //         contain = true
    //     }
    // }
    // if (contain === false) {
    // Errors = [...Errors, { ClassName: Class?.ClassName, error: `The Method ${methodFull} of class ${Class?.ClassName} should have  (access specifier or data type or Method Parameter List)` }]
    // Errors = [...Errors, { ClassName: Class?.ClassName, error: `The Method ${methodFull} of class ${Class?.ClassName} should have  Data Type` }]
}
///////////
// if (camelCaseRegex.test(method)) {
// Check if value contains any character values
// if (/[a-zA-Z]/.test(method)) {
// console.log(`Value "${method}" of Class ${Class?.ClassName} passes the checks.`);
// return false
// }
// } else {

// console.log(`Value "${method}" of Class ${Class?.ClassName} is not in camel case.`);
// Errors = [...Errors, { ClassName: Class?.ClassName, error: `Value "${method}" of Class ${Class?.ClassName} is not in camel case.` }]
// }
// }
// }
// }
function checkArrayAttributes(array) {
    // Regular expression to check for camel case
    const camelCaseRegex = /^[a-zA-Z]+([A-Z][a-z]+)+$/g;

    for (let i = 0; i < array.length; i++) {
        const Class = array[i];

        // Check if value is a string and matches camel case regex
        for (let index = 0; index < Class?.Attrbiutes.length; index++) {
            const attrbiute = Class?.Attrbiutes[index]?.replace('-', '')?.replace('+', '')?.split(':')[0];
            const attrbiuteNEW = Class?.Attrbiutes[index]?.split(':')[0];
            const attrbiuteFull = Class?.Attrbiutes[index];
            // var dataTypes = ["integer", "void", "long", "char", "short", "date", "String", "class", "float", "double", "int"]
            
            var dataTypes = ["integer", "void", "long", "char", "short", "date", "string", "class", "float", "double", "int", "boolean", "bool", "byt", "String" ]
            if (attrbiuteFull[0] == "+" || attrbiuteFull[0] == "-" || attrbiuteFull[0] == "#") {
                // console.log("the method ${methodFull} of class ${Class?.ClassName} have access specifier");

            }
            else {
                // console.log(`The Method ${methodFull} of class ${Class?.ClassName} should have start with access specifier`);
                Errors = [...Errors, { ClassName: Class?.ClassName, error: `The attribute ${attrbiuteNEW} of class ${Class?.ClassName} should Contain valid access Specifier` }]
                // Errors = [...Errors, { ClassName: Class?.ClassName, error: `The Method ${methodFull} of class ${Class?.ClassName} should have start with access specifier` }]
            }
            



            ////////////////// 11.	The data type will be   integer,void,long,char,short,date,string,class,float and double.
            if (attrbiuteFull?.includes(dataTypes)) {
                return false
            }
            //////////////
            /////////check 10.	The attribute of class should have have access specifier, data type and attribute name
            if (attrbiuteFull?.includes('+') || attrbiuteFull?.includes('-')) {

                if (attrbiuteFull?.trim()?.includes(dataTypes)) {
                    var regExp = /[a-zA-Z]/g;
                    if (regExp.test(attrbiuteFull)) {
                        return false
                    } else {
                        // console.log(`The attribute ${attrbiuteNEW} of class ${Class?.ClassName} should Contain Characters`);
                        Errors = [...Errors, { ClassName: Class?.ClassName, error: `The attribute ${attrbiuteNEW} of class ${Class?.ClassName} should Contain Characters` }]
                    }
                }
            }
            else {
                Errors = [...Errors, { ClassName: Class?.ClassName, error: `The attribute ${attrbiuteNEW} of class ${Class?.ClassName} should Contain Access Specifier` }]

            }

            let containSemiColon = false

            if (attrbiuteFull?.toLowerCase()?.trim()?.includes(":")) {
                containSemiColon = true
            }
            if (containSemiColon === false) {
                Errors = [...Errors, { ClassName: Class?.ClassName, error: `The Method ${attrbiuteFull} of class ${Class?.ClassName} Have Fromat Issue` }]

            }

            let contain = false
            for (let index = 0; index < dataTypes.length; index++) {
                const element = dataTypes[index];
                if (attrbiuteFull?.toLowerCase()?.trim()?.includes(element?.toLowerCase()?.trim())) {
                    contain = true
                }
            }
            if (contain === false) {
                Errors = [...Errors, { ClassName: Class?.ClassName, error: `The attribute ${attrbiuteFull} of class ${Class?.ClassName} should have  (access specifier or data type or attribute name)` }]
                Errors = [...Errors, { ClassName: Class?.ClassName, error: `The attribute ${attrbiuteFull} of class ${Class?.ClassName} should have  Data Type` }]
            }
            ///////////
            if (camelCaseRegex.test(attrbiute)) {
                // Check if value contains any character values
                if (/[a-zA-Z]/.test(attrbiute)) {
                    // console.log(`Value "${attrbiute}" of Class ${Class?.ClassName} passes the checks.`);
                    return false
                }
            } else {
                // console.log(`Value "${attrbiute}" of Class ${Class?.ClassName} is not in camel case.`);
                Errors = [...Errors, { ClassName: Class?.ClassName, error: `Value "${attrbiute}" of Class ${Class?.ClassName} is not in camel case.` }]

            }
        }
    }
}
export const CheckErrors = (
    Data,
    checkData
) => {
    console.log(Data, 'Data');
    
    Errors = checkData ? [] : Errors
    //////////////
    if (Data.length === 0) {
        // console.log("Error: At least One Class have to be present");
        Errors = [...Errors, { ClassName: "Class Error", error: "Error: At least One Class have to be present" }]
    }
    // Errors = [...Errors, { ClassName: "Class Error", error: "Error: At least One Relationship have to be present" }]
    /////////////
    for (let index = 0; index < Data.length; index++) {
        const Class = Data[index];
        let methods = Class.Methods?.map((item => 1)).reduce((partialSum, a) => partialSum + a, 0);
        let attrbiutes = Class.Attrbiutes?.map((item => 1)).reduce((partialSum, a) => partialSum + a, 0);
        //console.log(Data[index].ClassName, 'className', methods, 'methods', index, 'index' )
        // console.log(Data[index].ClassName, 'className', attrbiutes, 'attrbiutes', index, 'index' )
        if (methods === 0) {
            // console.log(`"Error: ${Class?.ClassName} At least One method have to be present"`);
            Errors = [...Errors, { ClassName: Class?.ClassName, error: `Error: ${Class?.ClassName} At least One method have to be present` }]
        }
        if (attrbiutes === 0) {
            // console.log(`"Error: ${Class?.ClassName} At least One method and one attributes have to be present"`);
            Errors = [...Errors, { ClassName: Class?.ClassName, error: `Error: ${Class?.ClassName} At least One attributes have to be present` }]
        }


    }
    /////////////
    let checkClassUniqueNames = checkForDuplicatesClass(Data?.map((item => item?.ClassName)))
    // console.log(checkClassUniqueNames, 'checkClassUniqueNames');
    if (checkClassUniqueNames) {
        // console.log(`"Error:  Class Names Should be Unique`);
        Errors = [...Errors, { ClassName: "Class Error", error: `"Error:  Class Names Should be Unique` }]
    }
    /////////////
    classNameChecks(Data?.map((item => item?.ClassName)))
    //////////
    /////////////
    checkArrayMethods(Data?.map((item => item)))
    //////////
    /////////////
    checkArrayAttributes(Data?.map((item => item)))
    //////////
    // console.log(Errors, 'Errors');
    return Errors

}