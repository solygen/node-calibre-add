calibre-add
===========

>add entered isbn to calibre database

### Preparation
+ install calibre and create an empty database
+ run calibre
+ be sure you have enabled [command line interface](http://manual.calibre-ebook.com/cli/cli-index.html)

### Usage

```
node ../bin/calibre-add.js

```
+ enter an isbn number and hit enter
+ repeat as long as you like
+ exit by typing 'quit' _[ENTER]_

### Details
every time you entering an isbn the calibre cli is used to add an empty book with this command

```
calibredb add -i [your isbn] -e
```

### calibre docs
+ [http://manual.calibre-ebook.com/cli/calibredb.html](http://manual.calibre-ebook.com/cli/calibredb.html)
