// test code for returning first character and punctuation only
// User should enter in string, and string returned should be all underscores
// with except for first letter of each word, and all punctuation
// "Give me the gift of a grip-top sock,
// A dip-drape, ship-shape, tip-top sock,
// Not your spiv-slick slap-stick slip-slop stock, //  But a plastic elastic grip-top sock.
// None of your fantastic slack swap-slop
// From a slapdash, flash cash, haberdasher shop.
// Not a knick-knack, knit-lock, knock-kneed knickerbocker sock
// With a mock-shot, blob-mottled trick tick-tocker clock."

let dialogue =
  'Give me the gift of a grip-top sock, A dip-drape, ship-shape, tip-top sock, Not your spiv-slick slap-stick slip-slop stock,  But a plastic elastic grip-top sock.  None of your fantastic slack swap-slop, From a slapdash, flash cash, haberdasher shop.  Not a knick-knack, knit-lock, knock-kneed knickerbocker sock With a mock-shot, blob-mottled trick tick-tocker clock.';

let splitDialogue = dialogue.split(/[abcdefghijklmnopqrstuvwxyz]+/g);

let firstChar = splitDialogue.join('_');

console.log(firstChar);

// function firstCharWithPunc (firstChar) {

// }
