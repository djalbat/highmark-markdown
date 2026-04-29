"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const bnf = `

    document                 ::=  division ;
    
    
    division                 ::=  ( subDivision | verticalSpace | error )+ ;
    
    
    subDivision..            ::=  directives 
    
                               |  container 

                               |  primaryHeading 

                               |  secondaryHeading 
                                   
                               |  tertiaryHeading 
                                   
                               |  quaternaryHeading 
                                   
                               |  table 
                                   
                               |  footnote
                                   
                               |  orderedList 
                                   
                               |  unorderedList 
                                   
                               |  blockListing 
                               
                               |  xmlElement 
      
                               |  paragraph 
                               
                               ;


    verticalSpace            ::=  endOfLine+ ;


    directives               ::=  indexDirective 
  
                               |  ignoreDirective 
  
                               |  contentsDirective 
  
                               |  footnotesDirective
                               
                               |  pageNumberDirective 
    
                               |  embedDirective ( endOfLine embedDirective )* 
                               
                               |  includeDirective ( endOfLine includeDirective )* 

                               ; 
  

    container.               ::=  [colons] className? <END_OF_LINE>+ ( primaryHeading 

                                                                     | secondaryHeading 
                                   
                                                                     | tertiaryHeading 
                                   
                                                                     | quaternaryHeading 
                                   
                                                                     | table 
                                   
                                                                     | footnote
                                   
                                                                     | orderedList 
                                   
                                                                     | unorderedList 
                                   
                                                                     | blockListing 
      
                                                                     | paragraph ) <END_OF_LINE>+ [colons] ;


    primaryHeading.          ::=  "#" line ;


    secondaryHeading.        ::=  "##" line ;


    tertiaryHeading.         ::=  "###" line ;
    
    
    quaternaryHeading.       ::=  "####" line ;


    table                    ::=  tableHead endOfLine tableDivider endOfLine tableBody ;


    footnote.                ::=  reference paragraph ;


    orderedList              ::=  orderedItem ( endOfLine orderedItem )* ;


    unorderedList            ::=  unorderedItem ( endOfLine unorderedItem )* ;


    blockListing             ::=  blockStart blockLine* blockEnd ;


    xmlElement               ::=  simpleXMLElement 
  
                               |  complexXMLElement
                                 
                               ;
                            
                               
    paragraph                ::=  line ( endOfLine line )* ;
    

    indexDirective           ::=  "@index" ;


    ignoreDirective          ::=  "@ignore" ;


    embedDirective           ::=  "@embed" ( path | nonsense ) ;


    includeDirective         ::=  "@include" ( path | nonsense ) ;


    contentsDirective        ::=  "@contents" ;


    footnotesDirective       ::=  "@footnotes" ;


    pageNumberDirective      ::=  "@pageNumber" ;


    simpleXMLElement         ::=  completeXMLTag ;


    complexXMLElement        ::=  startXMLTag ( xmlElement | xmlText )* endXMLTag ;


    completeXMLTag           ::=  "<"<NO_WHITESPACE>xmlName xmlAttribute* "/>" ;


    startXMLTag              ::=  "<"<NO_WHITESPACE>xmlName xmlAttribute* ">" ;


    endXMLTag                ::=  "</"<NO_WHITESPACE>xmlName ">" ;
  

    xmlAttribute             ::=  ( [identifier] | [word] )<NO_WHITESPACE>"="<NO_WHITESPACE>[string-literal] ;


    xmlName                  ::=  ( [identifier] | [word] ) ;


    xmlText                  ::=  ( [escaped] | [number] | [identifier] | [word] | [special] | [string-literal] | [unassigned] )+ ;
  
    
    tableHead                ::=  tableHeadRow ;
    
    
    tableBody                ::=  tableBodyRow ( endOfLine tableBodyRow )* ;

    
    orderedItem              ::=  [marker] line ( endOfLine line )* ;
    
    
    unorderedItem            ::=  [bullet] line ( endOfLine line )* ;


    tableHeadRow             ::=  tableCellDivider tableHeadCell+ ;

    
    tableBodyRow             ::=  tableCellDivider tableBodyCell+ ;


    tableHeadCell            ::=  emptyTableCell 
    
                               |  tableCell 
                              
                               ;


    tableBodyCell            ::=  emptyTableCell 
    
                               |  tableCell 
                              
                               ; 


    emptyTableCell           ::=  "." tableCellDivider ;
    

    tableCell                ::=  line tableCellDivider ;
    
    
    blockLine.               ::=  blockText* endOfLine ;
    

    line.                    ::=  ( inlineListing 
    
                                  | footnoteLink 
                                 
                                  | emailLink 
                                 
                                  | hyperlink 
                                 
                                  | image 
                                 
                                  | strongText 
                                 
                                  | emphasisedText 
                                 
                                  | stronglyEmphasisedText 
                                 
                                  | plainText )+ ;
    
    
    emailLink                ::=  "[" inlineText... "]"<NO_WHITESPACE>"(" [email-address] ")" 
    
                               |  [email-address] 
                              
                               ;


    hyperlink                ::=  "[" inlineText... "]"<NO_WHITESPACE>"(" [url] ")" 
    
                               |  [url]
                              
                               ;


    image                    ::=  "![" inlineText... "]"<NO_WHITESPACE>"(" path ")" ;


    strongText               ::=  "***" inlineText "***" ;


    emphasisedText           ::=  "**" inlineText "**" ;


    stronglyEmphasisedText   ::=  "****" inlineText "****" ;
    

    inlineText               ::=  plainText+ ;
    
    
    blockStart               ::=  [backticks] ( languageName ( ":" releaseName )? )? endOfLine ;


    blockEnd                 ::=  [backticks] ;


    className                ::=  <NO_WHITESPACE>[identifier] ;
    

    languageName             ::=  <NO_WHITESPACE>[identifier] ;
    

    releaseName              ::=  <NO_WHITESPACE>[identifier] ;
    

    blockText                ::=  [escaped] 
                              
                               |  [number] 
                              
                               |  [identifier] 
                              
                               |  [email-address]
                              
                               |  [url] 
                              
                               |  [path] 
                              
                               |  [word] 
                              
                               |  [special] 
                              
                               |  [string-literal]  
                                
                               |  [xml-delimiter]  
                                
                               |  [unassigned]  
                                
                               |  [dashes] 
 
                               |  [vertical-bar]
                              
                               ;
    

    plainText                ::=  [escaped] 
                              
                               |  [number] 
                              
                               |  [identifier] 
                              
                               |  [email-address]
                              
                               |  [url] 
                              
                               |  [path] 
                              
                               |  [word] 
                              
                               |  [special] 
                              
                               |  [string-literal] 
                              
                               |  [xml-delimiter]  
                                
                               |  [unassigned] 
                              
                               ;
    

    tableCellDivider.        ::=  [vertical-bar] ;
    
    
    tableDivider.            ::=  [dashes] ;
    
    
    inlineListing.           ::=  [backticked-literal] ;
    

    footnoteLink             ::=  [link] ;
    

    reference                ::=  [reference] ;
    

    path                     ::=  [path] ;

    
    nonsense.                ::=  ( [escaped] | [number] | [identifier] | [word] | [special] | [string-literal] | [xml-delimiter] | [unassigned] )+ ;


    endOfLine                ::=  <END_OF_LINE> ;


    error.                   ::=  . ;

`;
const _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93bi9ibmYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuICAgIGRvY3VtZW50ICAgICAgICAgICAgICAgICA6Oj0gIGRpdmlzaW9uIDtcbiAgICBcbiAgICBcbiAgICBkaXZpc2lvbiAgICAgICAgICAgICAgICAgOjo9ICAoIHN1YkRpdmlzaW9uIHwgdmVydGljYWxTcGFjZSB8IGVycm9yICkrIDtcbiAgICBcbiAgICBcbiAgICBzdWJEaXZpc2lvbi4uICAgICAgICAgICAgOjo9ICBkaXJlY3RpdmVzIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGNvbnRhaW5lciBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHByaW1hcnlIZWFkaW5nIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgc2Vjb25kYXJ5SGVhZGluZyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdGVydGlhcnlIZWFkaW5nIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBxdWF0ZXJuYXJ5SGVhZGluZyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdGFibGUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGZvb3Rub3RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIG9yZGVyZWRMaXN0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB1bm9yZGVyZWRMaXN0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBibG9ja0xpc3RpbmcgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgeG1sRWxlbWVudCBcbiAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHBhcmFncmFwaCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuICAgIHZlcnRpY2FsU3BhY2UgICAgICAgICAgICA6Oj0gIGVuZE9mTGluZSsgO1xuXG5cbiAgICBkaXJlY3RpdmVzICAgICAgICAgICAgICAgOjo9ICBpbmRleERpcmVjdGl2ZSBcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgaWdub3JlRGlyZWN0aXZlIFxuICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBjb250ZW50c0RpcmVjdGl2ZSBcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgZm9vdG5vdGVzRGlyZWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgcGFnZU51bWJlckRpcmVjdGl2ZSBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBlbWJlZERpcmVjdGl2ZSAoIGVuZE9mTGluZSBlbWJlZERpcmVjdGl2ZSApKiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBpbmNsdWRlRGlyZWN0aXZlICggZW5kT2ZMaW5lIGluY2x1ZGVEaXJlY3RpdmUgKSogXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7IFxuICBcblxuICAgIGNvbnRhaW5lci4gICAgICAgICAgICAgICA6Oj0gIFtjb2xvbnNdIGNsYXNzTmFtZT8gPEVORF9PRl9MSU5FPisgKCBwcmltYXJ5SGVhZGluZyBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzZWNvbmRhcnlIZWFkaW5nIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdGVydGlhcnlIZWFkaW5nIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXVhdGVybmFyeUhlYWRpbmcgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0YWJsZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGZvb3Rub3RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBvcmRlcmVkTGlzdCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHVub3JkZXJlZExpc3QgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBibG9ja0xpc3RpbmcgXG4gICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcGFyYWdyYXBoICkgPEVORF9PRl9MSU5FPisgW2NvbG9uc10gO1xuXG5cbiAgICBwcmltYXJ5SGVhZGluZy4gICAgICAgICAgOjo9ICBcIiNcIiBsaW5lIDtcblxuXG4gICAgc2Vjb25kYXJ5SGVhZGluZy4gICAgICAgIDo6PSAgXCIjI1wiIGxpbmUgO1xuXG5cbiAgICB0ZXJ0aWFyeUhlYWRpbmcuICAgICAgICAgOjo9ICBcIiMjI1wiIGxpbmUgO1xuICAgIFxuICAgIFxuICAgIHF1YXRlcm5hcnlIZWFkaW5nLiAgICAgICA6Oj0gIFwiIyMjI1wiIGxpbmUgO1xuXG5cbiAgICB0YWJsZSAgICAgICAgICAgICAgICAgICAgOjo9ICB0YWJsZUhlYWQgZW5kT2ZMaW5lIHRhYmxlRGl2aWRlciBlbmRPZkxpbmUgdGFibGVCb2R5IDtcblxuXG4gICAgZm9vdG5vdGUuICAgICAgICAgICAgICAgIDo6PSAgcmVmZXJlbmNlIHBhcmFncmFwaCA7XG5cblxuICAgIG9yZGVyZWRMaXN0ICAgICAgICAgICAgICA6Oj0gIG9yZGVyZWRJdGVtICggZW5kT2ZMaW5lIG9yZGVyZWRJdGVtICkqIDtcblxuXG4gICAgdW5vcmRlcmVkTGlzdCAgICAgICAgICAgIDo6PSAgdW5vcmRlcmVkSXRlbSAoIGVuZE9mTGluZSB1bm9yZGVyZWRJdGVtICkqIDtcblxuXG4gICAgYmxvY2tMaXN0aW5nICAgICAgICAgICAgIDo6PSAgYmxvY2tTdGFydCBibG9ja0xpbmUqIGJsb2NrRW5kIDtcblxuXG4gICAgeG1sRWxlbWVudCAgICAgICAgICAgICAgIDo6PSAgc2ltcGxlWE1MRWxlbWVudCBcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgY29tcGxleFhNTEVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBwYXJhZ3JhcGggICAgICAgICAgICAgICAgOjo9ICBsaW5lICggZW5kT2ZMaW5lIGxpbmUgKSogO1xuICAgIFxuXG4gICAgaW5kZXhEaXJlY3RpdmUgICAgICAgICAgIDo6PSAgXCJAaW5kZXhcIiA7XG5cblxuICAgIGlnbm9yZURpcmVjdGl2ZSAgICAgICAgICA6Oj0gIFwiQGlnbm9yZVwiIDtcblxuXG4gICAgZW1iZWREaXJlY3RpdmUgICAgICAgICAgIDo6PSAgXCJAZW1iZWRcIiAoIHBhdGggfCBub25zZW5zZSApIDtcblxuXG4gICAgaW5jbHVkZURpcmVjdGl2ZSAgICAgICAgIDo6PSAgXCJAaW5jbHVkZVwiICggcGF0aCB8IG5vbnNlbnNlICkgO1xuXG5cbiAgICBjb250ZW50c0RpcmVjdGl2ZSAgICAgICAgOjo9ICBcIkBjb250ZW50c1wiIDtcblxuXG4gICAgZm9vdG5vdGVzRGlyZWN0aXZlICAgICAgIDo6PSAgXCJAZm9vdG5vdGVzXCIgO1xuXG5cbiAgICBwYWdlTnVtYmVyRGlyZWN0aXZlICAgICAgOjo9ICBcIkBwYWdlTnVtYmVyXCIgO1xuXG5cbiAgICBzaW1wbGVYTUxFbGVtZW50ICAgICAgICAgOjo9ICBjb21wbGV0ZVhNTFRhZyA7XG5cblxuICAgIGNvbXBsZXhYTUxFbGVtZW50ICAgICAgICA6Oj0gIHN0YXJ0WE1MVGFnICggeG1sRWxlbWVudCB8IHhtbFRleHQgKSogZW5kWE1MVGFnIDtcblxuXG4gICAgY29tcGxldGVYTUxUYWcgICAgICAgICAgIDo6PSAgXCI8XCI8Tk9fV0hJVEVTUEFDRT54bWxOYW1lIHhtbEF0dHJpYnV0ZSogXCIvPlwiIDtcblxuXG4gICAgc3RhcnRYTUxUYWcgICAgICAgICAgICAgIDo6PSAgXCI8XCI8Tk9fV0hJVEVTUEFDRT54bWxOYW1lIHhtbEF0dHJpYnV0ZSogXCI+XCIgO1xuXG5cbiAgICBlbmRYTUxUYWcgICAgICAgICAgICAgICAgOjo9ICBcIjwvXCI8Tk9fV0hJVEVTUEFDRT54bWxOYW1lIFwiPlwiIDtcbiAgXG5cbiAgICB4bWxBdHRyaWJ1dGUgICAgICAgICAgICAgOjo9ICAoIFtpZGVudGlmaWVyXSB8IFt3b3JkXSApPE5PX1dISVRFU1BBQ0U+XCI9XCI8Tk9fV0hJVEVTUEFDRT5bc3RyaW5nLWxpdGVyYWxdIDtcblxuXG4gICAgeG1sTmFtZSAgICAgICAgICAgICAgICAgIDo6PSAgKCBbaWRlbnRpZmllcl0gfCBbd29yZF0gKSA7XG5cblxuICAgIHhtbFRleHQgICAgICAgICAgICAgICAgICA6Oj0gICggW2VzY2FwZWRdIHwgW251bWJlcl0gfCBbaWRlbnRpZmllcl0gfCBbd29yZF0gfCBbc3BlY2lhbF0gfCBbc3RyaW5nLWxpdGVyYWxdIHwgW3VuYXNzaWduZWRdICkrIDtcbiAgXG4gICAgXG4gICAgdGFibGVIZWFkICAgICAgICAgICAgICAgIDo6PSAgdGFibGVIZWFkUm93IDtcbiAgICBcbiAgICBcbiAgICB0YWJsZUJvZHkgICAgICAgICAgICAgICAgOjo9ICB0YWJsZUJvZHlSb3cgKCBlbmRPZkxpbmUgdGFibGVCb2R5Um93ICkqIDtcblxuICAgIFxuICAgIG9yZGVyZWRJdGVtICAgICAgICAgICAgICA6Oj0gIFttYXJrZXJdIGxpbmUgKCBlbmRPZkxpbmUgbGluZSApKiA7XG4gICAgXG4gICAgXG4gICAgdW5vcmRlcmVkSXRlbSAgICAgICAgICAgIDo6PSAgW2J1bGxldF0gbGluZSAoIGVuZE9mTGluZSBsaW5lICkqIDtcblxuXG4gICAgdGFibGVIZWFkUm93ICAgICAgICAgICAgIDo6PSAgdGFibGVDZWxsRGl2aWRlciB0YWJsZUhlYWRDZWxsKyA7XG5cbiAgICBcbiAgICB0YWJsZUJvZHlSb3cgICAgICAgICAgICAgOjo9ICB0YWJsZUNlbGxEaXZpZGVyIHRhYmxlQm9keUNlbGwrIDtcblxuXG4gICAgdGFibGVIZWFkQ2VsbCAgICAgICAgICAgIDo6PSAgZW1wdHlUYWJsZUNlbGwgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdGFibGVDZWxsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgICB0YWJsZUJvZHlDZWxsICAgICAgICAgICAgOjo9ICBlbXB0eVRhYmxlQ2VsbCBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB0YWJsZUNlbGwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7IFxuXG5cbiAgICBlbXB0eVRhYmxlQ2VsbCAgICAgICAgICAgOjo9ICBcIi5cIiB0YWJsZUNlbGxEaXZpZGVyIDtcbiAgICBcblxuICAgIHRhYmxlQ2VsbCAgICAgICAgICAgICAgICA6Oj0gIGxpbmUgdGFibGVDZWxsRGl2aWRlciA7XG4gICAgXG4gICAgXG4gICAgYmxvY2tMaW5lLiAgICAgICAgICAgICAgIDo6PSAgYmxvY2tUZXh0KiBlbmRPZkxpbmUgO1xuICAgIFxuXG4gICAgbGluZS4gICAgICAgICAgICAgICAgICAgIDo6PSAgKCBpbmxpbmVMaXN0aW5nIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZm9vdG5vdGVMaW5rIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlbWFpbExpbmsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGh5cGVybGluayBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaW1hZ2UgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHN0cm9uZ1RleHQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVtcGhhc2lzZWRUZXh0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzdHJvbmdseUVtcGhhc2lzZWRUZXh0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwbGFpblRleHQgKSsgO1xuICAgIFxuICAgIFxuICAgIGVtYWlsTGluayAgICAgICAgICAgICAgICA6Oj0gIFwiW1wiIGlubGluZVRleHQuLi4gXCJdXCI8Tk9fV0hJVEVTUEFDRT5cIihcIiBbZW1haWwtYWRkcmVzc10gXCIpXCIgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgW2VtYWlsLWFkZHJlc3NdIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgICBoeXBlcmxpbmsgICAgICAgICAgICAgICAgOjo9ICBcIltcIiBpbmxpbmVUZXh0Li4uIFwiXVwiPE5PX1dISVRFU1BBQ0U+XCIoXCIgW3VybF0gXCIpXCIgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgW3VybF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG4gICAgaW1hZ2UgICAgICAgICAgICAgICAgICAgIDo6PSAgXCIhW1wiIGlubGluZVRleHQuLi4gXCJdXCI8Tk9fV0hJVEVTUEFDRT5cIihcIiBwYXRoIFwiKVwiIDtcblxuXG4gICAgc3Ryb25nVGV4dCAgICAgICAgICAgICAgIDo6PSAgXCIqKipcIiBpbmxpbmVUZXh0IFwiKioqXCIgO1xuXG5cbiAgICBlbXBoYXNpc2VkVGV4dCAgICAgICAgICAgOjo9ICBcIioqXCIgaW5saW5lVGV4dCBcIioqXCIgO1xuXG5cbiAgICBzdHJvbmdseUVtcGhhc2lzZWRUZXh0ICAgOjo9ICBcIioqKipcIiBpbmxpbmVUZXh0IFwiKioqKlwiIDtcbiAgICBcblxuICAgIGlubGluZVRleHQgICAgICAgICAgICAgICA6Oj0gIHBsYWluVGV4dCsgO1xuICAgIFxuICAgIFxuICAgIGJsb2NrU3RhcnQgICAgICAgICAgICAgICA6Oj0gIFtiYWNrdGlja3NdICggbGFuZ3VhZ2VOYW1lICggXCI6XCIgcmVsZWFzZU5hbWUgKT8gKT8gZW5kT2ZMaW5lIDtcblxuXG4gICAgYmxvY2tFbmQgICAgICAgICAgICAgICAgIDo6PSAgW2JhY2t0aWNrc10gO1xuXG5cbiAgICBjbGFzc05hbWUgICAgICAgICAgICAgICAgOjo9ICA8Tk9fV0hJVEVTUEFDRT5baWRlbnRpZmllcl0gO1xuICAgIFxuXG4gICAgbGFuZ3VhZ2VOYW1lICAgICAgICAgICAgIDo6PSAgPE5PX1dISVRFU1BBQ0U+W2lkZW50aWZpZXJdIDtcbiAgICBcblxuICAgIHJlbGVhc2VOYW1lICAgICAgICAgICAgICA6Oj0gIDxOT19XSElURVNQQUNFPltpZGVudGlmaWVyXSA7XG4gICAgXG5cbiAgICBibG9ja1RleHQgICAgICAgICAgICAgICAgOjo9ICBbZXNjYXBlZF0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBbbnVtYmVyXSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFtpZGVudGlmaWVyXSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFtlbWFpbC1hZGRyZXNzXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgW3VybF0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBbcGF0aF0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBbd29yZF0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBbc3BlY2lhbF0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBbc3RyaW5nLWxpdGVyYWxdICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgW3htbC1kZWxpbWl0ZXJdICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgW3VuYXNzaWduZWRdICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgW2Rhc2hlc10gXG4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgW3ZlcnRpY2FsLWJhcl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcbiAgICBcblxuICAgIHBsYWluVGV4dCAgICAgICAgICAgICAgICA6Oj0gIFtlc2NhcGVkXSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFtudW1iZXJdIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgW2lkZW50aWZpZXJdIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgW2VtYWlsLWFkZHJlc3NdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBbdXJsXSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFtwYXRoXSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFt3b3JkXSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFtzcGVjaWFsXSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFtzdHJpbmctbGl0ZXJhbF0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBbeG1sLWRlbGltaXRlcl0gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBbdW5hc3NpZ25lZF0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG4gICAgXG5cbiAgICB0YWJsZUNlbGxEaXZpZGVyLiAgICAgICAgOjo9ICBbdmVydGljYWwtYmFyXSA7XG4gICAgXG4gICAgXG4gICAgdGFibGVEaXZpZGVyLiAgICAgICAgICAgIDo6PSAgW2Rhc2hlc10gO1xuICAgIFxuICAgIFxuICAgIGlubGluZUxpc3RpbmcuICAgICAgICAgICA6Oj0gIFtiYWNrdGlja2VkLWxpdGVyYWxdIDtcbiAgICBcblxuICAgIGZvb3Rub3RlTGluayAgICAgICAgICAgICA6Oj0gIFtsaW5rXSA7XG4gICAgXG5cbiAgICByZWZlcmVuY2UgICAgICAgICAgICAgICAgOjo9ICBbcmVmZXJlbmNlXSA7XG4gICAgXG5cbiAgICBwYXRoICAgICAgICAgICAgICAgICAgICAgOjo9ICBbcGF0aF0gO1xuXG4gICAgXG4gICAgbm9uc2Vuc2UuICAgICAgICAgICAgICAgIDo6PSAgKCBbZXNjYXBlZF0gfCBbbnVtYmVyXSB8IFtpZGVudGlmaWVyXSB8IFt3b3JkXSB8IFtzcGVjaWFsXSB8IFtzdHJpbmctbGl0ZXJhbF0gfCBbeG1sLWRlbGltaXRlcl0gfCBbdW5hc3NpZ25lZF0gKSsgO1xuXG5cbiAgICBlbmRPZkxpbmUgICAgICAgICAgICAgICAgOjo9ICA8RU5EX09GX0xJTkU+IDtcblxuXG4gICAgZXJyb3IuICAgICAgICAgICAgICAgICAgIDo6PSAgLiA7XG5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGJuZjtcbiJdLCJuYW1lcyI6WyJibmYiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTRWQTs7O2VBQUE7OztBQTFWQSxNQUFNQSxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd1ZiLENBQUM7TUFFRCxXQUFlQSJ9