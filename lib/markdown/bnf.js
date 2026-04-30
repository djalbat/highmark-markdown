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


    completeXMLTag           ::=  "<"<NO_WHITESPACE>xmlName xmlAttribute* "/>" endOfLine* ;


    startXMLTag              ::=  "<"<NO_WHITESPACE>xmlName xmlAttribute* ">" endOfLine* ;


    endXMLTag                ::=  "</"<NO_WHITESPACE>xmlName ">" endOfLine* ;
  

    xmlText                  ::=  ( [escaped] | [number] | [identifier] | [word] | [special] | [string-literal] | [unassigned] )+ endOfLine* ;
  
    
    xmlAttribute             ::=  ( [identifier] | [word] )<NO_WHITESPACE>"="<NO_WHITESPACE>[string-literal] ;


    xmlName                  ::=  ( [identifier] | [word] ) ;


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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93bi9ibmYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuICAgIGRvY3VtZW50ICAgICAgICAgICAgICAgICA6Oj0gIGRpdmlzaW9uIDtcbiAgICBcbiAgICBcbiAgICBkaXZpc2lvbiAgICAgICAgICAgICAgICAgOjo9ICAoIHN1YkRpdmlzaW9uIHwgdmVydGljYWxTcGFjZSB8IGVycm9yICkrIDtcbiAgICBcbiAgICBcbiAgICBzdWJEaXZpc2lvbi4uICAgICAgICAgICAgOjo9ICBkaXJlY3RpdmVzIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGNvbnRhaW5lciBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHByaW1hcnlIZWFkaW5nIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgc2Vjb25kYXJ5SGVhZGluZyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdGVydGlhcnlIZWFkaW5nIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBxdWF0ZXJuYXJ5SGVhZGluZyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdGFibGUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGZvb3Rub3RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIG9yZGVyZWRMaXN0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB1bm9yZGVyZWRMaXN0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBibG9ja0xpc3RpbmcgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgeG1sRWxlbWVudCBcbiAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHBhcmFncmFwaCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuICAgIHZlcnRpY2FsU3BhY2UgICAgICAgICAgICA6Oj0gIGVuZE9mTGluZSsgO1xuXG5cbiAgICBkaXJlY3RpdmVzICAgICAgICAgICAgICAgOjo9ICBpbmRleERpcmVjdGl2ZSBcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgaWdub3JlRGlyZWN0aXZlIFxuICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBjb250ZW50c0RpcmVjdGl2ZSBcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgZm9vdG5vdGVzRGlyZWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgcGFnZU51bWJlckRpcmVjdGl2ZSBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBlbWJlZERpcmVjdGl2ZSAoIGVuZE9mTGluZSBlbWJlZERpcmVjdGl2ZSApKiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBpbmNsdWRlRGlyZWN0aXZlICggZW5kT2ZMaW5lIGluY2x1ZGVEaXJlY3RpdmUgKSogXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7IFxuICBcblxuICAgIGNvbnRhaW5lci4gICAgICAgICAgICAgICA6Oj0gIFtjb2xvbnNdIGNsYXNzTmFtZT8gPEVORF9PRl9MSU5FPisgKCBwcmltYXJ5SGVhZGluZyBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzZWNvbmRhcnlIZWFkaW5nIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdGVydGlhcnlIZWFkaW5nIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXVhdGVybmFyeUhlYWRpbmcgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0YWJsZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGZvb3Rub3RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBvcmRlcmVkTGlzdCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHVub3JkZXJlZExpc3QgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBibG9ja0xpc3RpbmcgXG4gICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcGFyYWdyYXBoICkgPEVORF9PRl9MSU5FPisgW2NvbG9uc10gO1xuXG5cbiAgICBwcmltYXJ5SGVhZGluZy4gICAgICAgICAgOjo9ICBcIiNcIiBsaW5lIDtcblxuXG4gICAgc2Vjb25kYXJ5SGVhZGluZy4gICAgICAgIDo6PSAgXCIjI1wiIGxpbmUgO1xuXG5cbiAgICB0ZXJ0aWFyeUhlYWRpbmcuICAgICAgICAgOjo9ICBcIiMjI1wiIGxpbmUgO1xuICAgIFxuICAgIFxuICAgIHF1YXRlcm5hcnlIZWFkaW5nLiAgICAgICA6Oj0gIFwiIyMjI1wiIGxpbmUgO1xuXG5cbiAgICB0YWJsZSAgICAgICAgICAgICAgICAgICAgOjo9ICB0YWJsZUhlYWQgZW5kT2ZMaW5lIHRhYmxlRGl2aWRlciBlbmRPZkxpbmUgdGFibGVCb2R5IDtcblxuXG4gICAgZm9vdG5vdGUuICAgICAgICAgICAgICAgIDo6PSAgcmVmZXJlbmNlIHBhcmFncmFwaCA7XG5cblxuICAgIG9yZGVyZWRMaXN0ICAgICAgICAgICAgICA6Oj0gIG9yZGVyZWRJdGVtICggZW5kT2ZMaW5lIG9yZGVyZWRJdGVtICkqIDtcblxuXG4gICAgdW5vcmRlcmVkTGlzdCAgICAgICAgICAgIDo6PSAgdW5vcmRlcmVkSXRlbSAoIGVuZE9mTGluZSB1bm9yZGVyZWRJdGVtICkqIDtcblxuXG4gICAgYmxvY2tMaXN0aW5nICAgICAgICAgICAgIDo6PSAgYmxvY2tTdGFydCBibG9ja0xpbmUqIGJsb2NrRW5kIDtcblxuXG4gICAgeG1sRWxlbWVudCAgICAgICAgICAgICAgIDo6PSAgc2ltcGxlWE1MRWxlbWVudCBcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgY29tcGxleFhNTEVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBwYXJhZ3JhcGggICAgICAgICAgICAgICAgOjo9ICBsaW5lICggZW5kT2ZMaW5lIGxpbmUgKSogO1xuICAgIFxuXG4gICAgaW5kZXhEaXJlY3RpdmUgICAgICAgICAgIDo6PSAgXCJAaW5kZXhcIiA7XG5cblxuICAgIGlnbm9yZURpcmVjdGl2ZSAgICAgICAgICA6Oj0gIFwiQGlnbm9yZVwiIDtcblxuXG4gICAgZW1iZWREaXJlY3RpdmUgICAgICAgICAgIDo6PSAgXCJAZW1iZWRcIiAoIHBhdGggfCBub25zZW5zZSApIDtcblxuXG4gICAgaW5jbHVkZURpcmVjdGl2ZSAgICAgICAgIDo6PSAgXCJAaW5jbHVkZVwiICggcGF0aCB8IG5vbnNlbnNlICkgO1xuXG5cbiAgICBjb250ZW50c0RpcmVjdGl2ZSAgICAgICAgOjo9ICBcIkBjb250ZW50c1wiIDtcblxuXG4gICAgZm9vdG5vdGVzRGlyZWN0aXZlICAgICAgIDo6PSAgXCJAZm9vdG5vdGVzXCIgO1xuXG5cbiAgICBwYWdlTnVtYmVyRGlyZWN0aXZlICAgICAgOjo9ICBcIkBwYWdlTnVtYmVyXCIgO1xuXG5cbiAgICBzaW1wbGVYTUxFbGVtZW50ICAgICAgICAgOjo9ICBjb21wbGV0ZVhNTFRhZyA7XG5cblxuICAgIGNvbXBsZXhYTUxFbGVtZW50ICAgICAgICA6Oj0gIHN0YXJ0WE1MVGFnICggeG1sRWxlbWVudCB8IHhtbFRleHQgKSogZW5kWE1MVGFnIDtcblxuXG4gICAgY29tcGxldGVYTUxUYWcgICAgICAgICAgIDo6PSAgXCI8XCI8Tk9fV0hJVEVTUEFDRT54bWxOYW1lIHhtbEF0dHJpYnV0ZSogXCIvPlwiIGVuZE9mTGluZSogO1xuXG5cbiAgICBzdGFydFhNTFRhZyAgICAgICAgICAgICAgOjo9ICBcIjxcIjxOT19XSElURVNQQUNFPnhtbE5hbWUgeG1sQXR0cmlidXRlKiBcIj5cIiBlbmRPZkxpbmUqIDtcblxuXG4gICAgZW5kWE1MVGFnICAgICAgICAgICAgICAgIDo6PSAgXCI8L1wiPE5PX1dISVRFU1BBQ0U+eG1sTmFtZSBcIj5cIiBlbmRPZkxpbmUqIDtcbiAgXG5cbiAgICB4bWxUZXh0ICAgICAgICAgICAgICAgICAgOjo9ICAoIFtlc2NhcGVkXSB8IFtudW1iZXJdIHwgW2lkZW50aWZpZXJdIHwgW3dvcmRdIHwgW3NwZWNpYWxdIHwgW3N0cmluZy1saXRlcmFsXSB8IFt1bmFzc2lnbmVkXSApKyBlbmRPZkxpbmUqIDtcbiAgXG4gICAgXG4gICAgeG1sQXR0cmlidXRlICAgICAgICAgICAgIDo6PSAgKCBbaWRlbnRpZmllcl0gfCBbd29yZF0gKTxOT19XSElURVNQQUNFPlwiPVwiPE5PX1dISVRFU1BBQ0U+W3N0cmluZy1saXRlcmFsXSA7XG5cblxuICAgIHhtbE5hbWUgICAgICAgICAgICAgICAgICA6Oj0gICggW2lkZW50aWZpZXJdIHwgW3dvcmRdICkgO1xuXG5cbiAgICB0YWJsZUhlYWQgICAgICAgICAgICAgICAgOjo9ICB0YWJsZUhlYWRSb3cgO1xuICAgIFxuICAgIFxuICAgIHRhYmxlQm9keSAgICAgICAgICAgICAgICA6Oj0gIHRhYmxlQm9keVJvdyAoIGVuZE9mTGluZSB0YWJsZUJvZHlSb3cgKSogO1xuXG4gICAgXG4gICAgb3JkZXJlZEl0ZW0gICAgICAgICAgICAgIDo6PSAgW21hcmtlcl0gbGluZSAoIGVuZE9mTGluZSBsaW5lICkqIDtcbiAgICBcbiAgICBcbiAgICB1bm9yZGVyZWRJdGVtICAgICAgICAgICAgOjo9ICBbYnVsbGV0XSBsaW5lICggZW5kT2ZMaW5lIGxpbmUgKSogO1xuXG5cbiAgICB0YWJsZUhlYWRSb3cgICAgICAgICAgICAgOjo9ICB0YWJsZUNlbGxEaXZpZGVyIHRhYmxlSGVhZENlbGwrIDtcblxuICAgIFxuICAgIHRhYmxlQm9keVJvdyAgICAgICAgICAgICA6Oj0gIHRhYmxlQ2VsbERpdmlkZXIgdGFibGVCb2R5Q2VsbCsgO1xuXG5cbiAgICB0YWJsZUhlYWRDZWxsICAgICAgICAgICAgOjo9ICBlbXB0eVRhYmxlQ2VsbCBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB0YWJsZUNlbGwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuICAgIHRhYmxlQm9keUNlbGwgICAgICAgICAgICA6Oj0gIGVtcHR5VGFibGVDZWxsIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHRhYmxlQ2VsbCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDsgXG5cblxuICAgIGVtcHR5VGFibGVDZWxsICAgICAgICAgICA6Oj0gIFwiLlwiIHRhYmxlQ2VsbERpdmlkZXIgO1xuICAgIFxuXG4gICAgdGFibGVDZWxsICAgICAgICAgICAgICAgIDo6PSAgbGluZSB0YWJsZUNlbGxEaXZpZGVyIDtcbiAgICBcbiAgICBcbiAgICBibG9ja0xpbmUuICAgICAgICAgICAgICAgOjo9ICBibG9ja1RleHQqIGVuZE9mTGluZSA7XG4gICAgXG5cbiAgICBsaW5lLiAgICAgICAgICAgICAgICAgICAgOjo9ICAoIGlubGluZUxpc3RpbmcgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBmb290bm90ZUxpbmsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVtYWlsTGluayBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaHlwZXJsaW5rIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbWFnZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3Ryb25nVGV4dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW1waGFzaXNlZFRleHQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHN0cm9uZ2x5RW1waGFzaXNlZFRleHQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBsYWluVGV4dCApKyA7XG4gICAgXG4gICAgXG4gICAgZW1haWxMaW5rICAgICAgICAgICAgICAgIDo6PSAgXCJbXCIgaW5saW5lVGV4dC4uLiBcIl1cIjxOT19XSElURVNQQUNFPlwiKFwiIFtlbWFpbC1hZGRyZXNzXSBcIilcIiBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBbZW1haWwtYWRkcmVzc10gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuICAgIGh5cGVybGluayAgICAgICAgICAgICAgICA6Oj0gIFwiW1wiIGlubGluZVRleHQuLi4gXCJdXCI8Tk9fV0hJVEVTUEFDRT5cIihcIiBbdXJsXSBcIilcIiBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBbdXJsXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgICBpbWFnZSAgICAgICAgICAgICAgICAgICAgOjo9ICBcIiFbXCIgaW5saW5lVGV4dC4uLiBcIl1cIjxOT19XSElURVNQQUNFPlwiKFwiIHBhdGggXCIpXCIgO1xuXG5cbiAgICBzdHJvbmdUZXh0ICAgICAgICAgICAgICAgOjo9ICBcIioqKlwiIGlubGluZVRleHQgXCIqKipcIiA7XG5cblxuICAgIGVtcGhhc2lzZWRUZXh0ICAgICAgICAgICA6Oj0gIFwiKipcIiBpbmxpbmVUZXh0IFwiKipcIiA7XG5cblxuICAgIHN0cm9uZ2x5RW1waGFzaXNlZFRleHQgICA6Oj0gIFwiKioqKlwiIGlubGluZVRleHQgXCIqKioqXCIgO1xuICAgIFxuXG4gICAgaW5saW5lVGV4dCAgICAgICAgICAgICAgIDo6PSAgcGxhaW5UZXh0KyA7XG4gICAgXG4gICAgXG4gICAgYmxvY2tTdGFydCAgICAgICAgICAgICAgIDo6PSAgW2JhY2t0aWNrc10gKCBsYW5ndWFnZU5hbWUgKCBcIjpcIiByZWxlYXNlTmFtZSApPyApPyBlbmRPZkxpbmUgO1xuXG5cbiAgICBibG9ja0VuZCAgICAgICAgICAgICAgICAgOjo9ICBbYmFja3RpY2tzXSA7XG5cblxuICAgIGNsYXNzTmFtZSAgICAgICAgICAgICAgICA6Oj0gIDxOT19XSElURVNQQUNFPltpZGVudGlmaWVyXSA7XG4gICAgXG5cbiAgICBsYW5ndWFnZU5hbWUgICAgICAgICAgICAgOjo9ICA8Tk9fV0hJVEVTUEFDRT5baWRlbnRpZmllcl0gO1xuICAgIFxuXG4gICAgcmVsZWFzZU5hbWUgICAgICAgICAgICAgIDo6PSAgPE5PX1dISVRFU1BBQ0U+W2lkZW50aWZpZXJdIDtcbiAgICBcblxuICAgIGJsb2NrVGV4dCAgICAgICAgICAgICAgICA6Oj0gIFtlc2NhcGVkXSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFtudW1iZXJdIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgW2lkZW50aWZpZXJdIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgW2VtYWlsLWFkZHJlc3NdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBbdXJsXSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFtwYXRoXSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFt3b3JkXSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFtzcGVjaWFsXSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFtzdHJpbmctbGl0ZXJhbF0gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBbeG1sLWRlbGltaXRlcl0gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBbdW5hc3NpZ25lZF0gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBbZGFzaGVzXSBcbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBbdmVydGljYWwtYmFyXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuICAgIFxuXG4gICAgcGxhaW5UZXh0ICAgICAgICAgICAgICAgIDo6PSAgW2VzY2FwZWRdIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgW251bWJlcl0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBbaWRlbnRpZmllcl0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBbZW1haWwtYWRkcmVzc11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFt1cmxdIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgW3BhdGhdIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgW3dvcmRdIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgW3NwZWNpYWxdIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgW3N0cmluZy1saXRlcmFsXSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFt4bWwtZGVsaW1pdGVyXSAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFt1bmFzc2lnbmVkXSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcbiAgICBcblxuICAgIHRhYmxlQ2VsbERpdmlkZXIuICAgICAgICA6Oj0gIFt2ZXJ0aWNhbC1iYXJdIDtcbiAgICBcbiAgICBcbiAgICB0YWJsZURpdmlkZXIuICAgICAgICAgICAgOjo9ICBbZGFzaGVzXSA7XG4gICAgXG4gICAgXG4gICAgaW5saW5lTGlzdGluZy4gICAgICAgICAgIDo6PSAgW2JhY2t0aWNrZWQtbGl0ZXJhbF0gO1xuICAgIFxuXG4gICAgZm9vdG5vdGVMaW5rICAgICAgICAgICAgIDo6PSAgW2xpbmtdIDtcbiAgICBcblxuICAgIHJlZmVyZW5jZSAgICAgICAgICAgICAgICA6Oj0gIFtyZWZlcmVuY2VdIDtcbiAgICBcblxuICAgIHBhdGggICAgICAgICAgICAgICAgICAgICA6Oj0gIFtwYXRoXSA7XG5cbiAgICBcbiAgICBub25zZW5zZS4gICAgICAgICAgICAgICAgOjo9ICAoIFtlc2NhcGVkXSB8IFtudW1iZXJdIHwgW2lkZW50aWZpZXJdIHwgW3dvcmRdIHwgW3NwZWNpYWxdIHwgW3N0cmluZy1saXRlcmFsXSB8IFt4bWwtZGVsaW1pdGVyXSB8IFt1bmFzc2lnbmVkXSApKyA7XG5cblxuICAgIGVuZE9mTGluZSAgICAgICAgICAgICAgICA6Oj0gIDxFTkRfT0ZfTElORT4gO1xuXG5cbiAgICBlcnJvci4gICAgICAgICAgICAgICAgICAgOjo9ICAuIDtcblxuYDtcblxuZXhwb3J0IGRlZmF1bHQgYm5mO1xuIl0sIm5hbWVzIjpbImJuZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNFZBOzs7ZUFBQTs7O0FBMVZBLE1BQU1BLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3VmIsQ0FBQztNQUVELFdBQWVBIn0=