JsPara : A JavaScript URL parser and parameter extractor
========================================================

JsPara is a simple and efficient JavaScript class for extracting GET parameters from a URL query string
Support extracting parameters from both usual string and hash string ( i.e. AJAX based URL  )

USAGE
-----

1) Initialize the JsPara object with the window URI

 jp = new JsPara(window.location);
 //ex: http://example.com/index.html?search=keyword&nothing&page=1#p=new
 
2) Getting all parameters extracted
 var paras = jp.params;
 //output: search, page, p, nothing
 
3) Getting value of a parameter
 var search = jp.param['search']
 //output: keyword
 

 
