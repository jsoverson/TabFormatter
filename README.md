TabFormatter
============================

A simple utility method that strips
out tab characters from multi line strings
and replaces them with any arbitrary string.

Not elegant, purely useful

## Usage
```
TabFormatter.format(
  string,
  numChars,
  replacementString || ' ',
  replacementStringWidth || 1,
  prefix || '',
  suffix || ''
);
```

```
TabFormatter.format("\tvar b;\t//Hi!", 4);
// -> "    var b;  //Hi!"
TabFormatter.format("\tvar b;\t//Hi!", 4, '&nbsp;', 1);
// -> "&nbsp;&nbsp;&nbsp;&nbsp;var b;&nbsp;&nbsp;//Hi!"
TabFormatter.format("\tvar b;\t//Hi!", 4, '&nbsp;', 1, '<span>','</span>');
// -> "<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>var b;<span>&nbsp;&nbsp;</span>//Hi!"
```

### Why?

Wanted to write a blog post about tabs v spaces
and replacing tabs turned out to be more than the
single liner I hoped. So unit tests!

### Author

Jarrod Overson - [jarrodoverson.com](http://jarrodoverson.com)
