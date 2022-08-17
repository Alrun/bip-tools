<h1 align="center">BIP Tools</h1>

[![GitHub license](https://img.shields.io/badge/license-GPL3-blue.svg)](https://github.com/blogcrypto/portfolio/blob/master/LICENSE)
[![Test](https://github.com/Alrun/bip-tools/actions/workflows/tests.yml/badge.svg?branch=master)](https://github.com/Alrun/bip-tools/actions/workflows/tests.yml)

Most of ALL crypto wallets use BIP39 words to generate 12 or 24 word recovery phrases.

This app allows you to generate entropy for 12, 15, 18, 21, 24 words from the word list
([BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki)).
The words are selected from a specific list of 2048
common [English words](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt) which can be used to generate
a binary seed (your private key). Each of these words corresponds to a number from 0000 (abandon) to 2047 (zoo).

The generated mnemonic code is used to create a binary seed. This seed is used to generate hierarchical
deterministic extended keys ([BIP32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki)).

Extended keys can inherit child elements, and those child keys can spawn more children, and so on.
This allows you to create a tree of extended keys, where each key has its own unique derivation path
from the master key ([BIP44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki)
, [BIP49](https://github.com/bitcoin/bips/blob/master/bip-0049.mediawiki)
, [BIP84](https://github.com/bitcoin/bips/blob/master/bip-0084.mediawiki)).
