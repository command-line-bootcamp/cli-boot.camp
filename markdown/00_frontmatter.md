# Command-line Bootcamp

## Introduction

This 'bootcamp adventure' is intended to provide the reader with a basic overview of essential Unix/Linux commands that will allow them to navigate a file system and move, copy, edit files. It will also introduce a brief overview of some 'power' commands in Unix.

## Why Unix?

The [Unix operating system][Unix] has been around since 1969. Back then there was no such thing as a graphical user interface. You typed everything. It may seem archaic to use a keyboard to issue commands today, but it's much easier to automate keyboard tasks than mouse tasks. There are several variants of Unix (including [Linux][Linux]), though the differences do not matter much for most basic functions.

[Unix]: http://en.wikipedia.org/wiki/Unix
[Linux]: http://en.wikipedia.org/wiki/Linux

Unix is particularly suited to working with text files, even very large ones, and has several powerful (and flexible) commands that can process your data for you. The real strength of learning Unix is that most of these commands can be combined in an almost unlimited fashion. So if you can learn just five Unix commands, you will be able to do a lot more than just five things.

## How to read this tutorial

Command-line examples that you are meant to type into a terminal window will be shown indented in a constant-width font, e.g.

```bash
ls -lrh
```

Sometimes the accompanying text will include a reference to a Unix command. Any such text will also be in a constant-width, boxed font. E.g.

>Type the `pwd` command again.

From time to time this documentation will contain [web links][] to pages that will help you find out more about certain Unix commands. Usually, the _first_ mention of a command or function will be a hyperlink to Wikipedia. Important or critical points will be styled like so:

>***This is an important point!***

[web links]: http://en.wikipedia.org/wiki/Hyperlink


## License

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a>

This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a><.

The bootcamp tutorial text was adapted from [the original](http://korflab.ucdavis.edu/bootcamp.html) by [Keith Bradnam](http://www.keithbradnam.com/). The Infrastructure, including [adventure-time](https://github.com/maxogden/adventure-time) and [docker-browser-server](https://github.com/mafintosh/docker-browser-server), was built by [@maxogden](github.com/maxogden) and [@mafintosh](github.com/maxogden). The setup of this app was based on the [get-dat adventure](https://github.com/maxogden/get-dat). This adventure was made by [Richard Smith-Unna](http://rik.smith-unna.com/about).

Please post feedback at https://github.com/blahah/command_line_bootcamp.
