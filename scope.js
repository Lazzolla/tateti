const example = 'Generic value'
function getName() {
    const example = 'Tomi';
    function innerFunction() {
        const innerExample = `${example} Duhart`
        console.log(innerExample)
    }
    innerFunction()
}

function otherGetName() {
    console.log(example);
}

getName()
// innerFunction()