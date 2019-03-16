# Boggle game

## Rules
Boggle is a word game that is played on a 4x4 board with 16 letter tiles. The goal is to find as many words as possible given a time constraint. When a tile is blank, it can be treated as any other letter. Note that in one game it does not have to be the same character for each word.  
For example, if the tiles C, T, and * are adjacent.  The words cot, cat, and cut can all be used. 

### Restrictions
- Minimum word length is 5 letters;
- Only latin letters are allowed;
- Only words from dictionary are allowed.

### Dictionary
`aargh, abaca, abaci, aback, abaft, abaka, abalone, abamp, abampere, abandon, abase, abasedly, abash, abasia, abate, abator, abattoir, abaxile, abbey, abbot, abdicate, abdomen, abduce, abduct, abductor, abeam, abele, abelmosk, aberrant, abettal, abettor, abeyant, abfarad, abhor, abide, abject, abjure, ablate, ablaut, ablaze, ablest, abmho, aboard, abode, abohm, aboideau, aboil, aboiteau, abolla, abollae, aboma, abomasa, abomasi, aboon, aboral, abort, abortive, abound, about, above, abradant, abrade, abrasion, abrasive, abreact, abreast, abridge, abroach, abroad, abrogate, abrosia, abrupt, abscise, abscissa, abscond, abseil, absent, absolute, absolve, absonant, absorb, abstain, absterge, abstract, abstruse, absurd, abuse, abvolt, abwatt, abysm, abyssal, acari, acarid, acaroid, accept, acceptor, accord, accost, acedia, acerate, acerb`

> Dictionary can be changed in `/src/helpers/dictionary.js`.

## Setup

### Project setup
```
npm i
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
It will build project to `dist` folder.

### Run tests
```
npm run test
```

### Run tests in watch mode
```
npm run test:watch
```

### Lints and fixes files
```
npm run lint
```