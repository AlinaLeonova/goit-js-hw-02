
function formatString(string, maxLength = 40) {


    if (string.length <= maxLength) {
        return string
    }

    if (string.length > maxLength) {

        string = string.slice(0, maxLength);
        let newString = `${string} ...`

        return newString
    }

}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));