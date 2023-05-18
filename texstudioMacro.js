let tl = editor.document().textLines();
let empty = true;

for (let i = 0; i < tl.length; i++) {
    // replaces tabs by 2 spaces and removes trailing whitespace
    tl[i] = tl[i].replace(/\t/g, '  ').replace(/\s+$/, '');

    // removes empty lines at the beginning of the file
    // and removes duplicate empty lines elsewhere
    if (tl[i] !== '') {
        empty = false;
    } else if (empty) {
        tl.splice(i, 1);
        i--;
    } else {
        empty = true;
    }
}

// ensures new line at the end of the file
if (tl[tl.length - 1] !== '') {
    tl.push('');
}

editor.setText(tl.join('\n'));
