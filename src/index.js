module.exports = function toReadable(number) {
    const units = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    }

    const teen = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    }

    const dozens = {
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    }

    let a = number.toString().split('').map(Number);
    if (a.length == 1) {
        return units[a[0]]
    }

    if (a.length == 2) {
        let unit = units[a[1]];
        if (+a.join('') <= 19) {
            return teen[+a.join('')]
        }
        if (a[1] === 0) {
            return dozens[+a.join('')]
        }
        if (a[1] !== 0 && a[0] > 1) {
            let dozen = dozens[+`${a[0]}0`];
            return `${dozen} ${unit}`
        }
    }

    if (a.length == 3) {
        let hundred = `${units[a[0]]} hundred`;
        let dozen = dozens[+`${a[1]}0`];
        let unit = units[a[2]];
        if (a[1] === 0 && a[2] === 0) {
            return hundred
        } else

        if (a[1] !== 0 && a[2] === 0) {
            if (+`${a[1]}${a[2]}` === 10) {
                return `${hundred} ten`
            } else {
                return `${hundred} ${dozen}`
            }
        } else

        if (a[1] === 0 && a[2] !== 0) {
            return `${hundred} ${unit}`
        } else {
            if (+`${a[1]}${a[2]}` <= 19) {
                return `${hundred} ${teen[+`${a[1]}${a[2]}`]}`
            } else {
                return `${hundred} ${dozen} ${unit}`
            }
        }
    }
}
