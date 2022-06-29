const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const worldsWithoutSpace = expr.split('**********')
    const decoderWorld = []
    for (const world of worldsWithoutSpace) {
        const symbolsArray = []
        const tempArr = world.split('')
        let count = 0
        let str = ''
        for (let i = 0; i<tempArr.length+2; i+=2){
            if(count === 5){
                symbolsArray.push(MORSE_TABLE[str])
                str = ''
                count = 0
            }
            if(parseInt(tempArr[i])){
                let strByNumber = tempArr[i] + tempArr[i+1]
                if (strByNumber === '10'){
                    str+= '.'
                } else {
                    str+= '-'
                }
            }
            count++;
        }
        decoderWorld.push(symbolsArray.join(''))
        symbolsArray.length = 0
    }
    return decoderWorld.join(' ')
}

module.exports = {
    decode
}