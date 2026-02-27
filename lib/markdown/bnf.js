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


    paragraph                ::=  line ( endOfLine line )* ;
    

    indexDirective           ::=  "@index" ;


    ignoreDirective          ::=  "@ignore" ;


    embedDirective           ::=  "@embed" ( path | nonsense ) ;


    includeDirective         ::=  "@include" ( path | nonsense ) ;


    contentsDirective        ::=  "@contents" ;


    footnotesDirective       ::=  "@footnotes" ;


    pageNumberDirective      ::=  "@pageNumber" ;


    nonsense.                ::=  ( [escaped] | [number] | [identifier] | [word] | [special] | [unassigned] )+ ;


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
    
    
    blockStart               ::=  [backticks] className? endOfLine ;


    blockEnd                 ::=  [backticks] ;


    className                ::=  <NO_WHITESPACE>[identifier] ;
    

    blockText                ::=  [escaped] 
                              
                               |  [number] 
                              
                               |  [identifier] 
                              
                               |  [email-address]
                              
                               |  [url] 
                              
                               |  [path] 
                              
                               |  [word] 
                              
                               |  [special] 
                              
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
                              
                               |  [unassigned] 
                              
                               ;
    

    tableCellDivider.        ::=  [vertical-bar] ;
    
    
    tableDivider.            ::=  [dashes] ;
    
    
    inlineListing.           ::=  [backticked-literal] ;
    

    footnoteLink             ::=  [link] ;
    

    reference                ::=  [reference] ;
    

    path                     ::=  [path] ;

    
    endOfLine                ::=  <END_OF_LINE> ;


    error.                   ::=  . ;

`;
const _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93bi9ibmYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuICAgIGRvY3VtZW50ICAgICAgICAgICAgICAgICA6Oj0gIGRpdmlzaW9uIDtcbiAgICBcbiAgICBcbiAgICBkaXZpc2lvbiAgICAgICAgICAgICAgICAgOjo9ICAoIHN1YkRpdmlzaW9uIHwgdmVydGljYWxTcGFjZSB8IGVycm9yICkrIDtcbiAgICBcbiAgICBcbiAgICBzdWJEaXZpc2lvbi4uICAgICAgICAgICAgOjo9ICBkaXJlY3RpdmVzIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGNvbnRhaW5lciBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHByaW1hcnlIZWFkaW5nIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgc2Vjb25kYXJ5SGVhZGluZyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdGVydGlhcnlIZWFkaW5nIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBxdWF0ZXJuYXJ5SGVhZGluZyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdGFibGUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGZvb3Rub3RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIG9yZGVyZWRMaXN0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB1bm9yZGVyZWRMaXN0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBibG9ja0xpc3RpbmcgXG4gICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBwYXJhZ3JhcGggXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgICB2ZXJ0aWNhbFNwYWNlICAgICAgICAgICAgOjo9ICBlbmRPZkxpbmUrIDtcblxuXG4gICAgZGlyZWN0aXZlcyAgICAgICAgICAgICAgIDo6PSAgaW5kZXhEaXJlY3RpdmUgXG4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGlnbm9yZURpcmVjdGl2ZSBcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgY29udGVudHNEaXJlY3RpdmUgXG4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGZvb3Rub3Rlc0RpcmVjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHBhZ2VOdW1iZXJEaXJlY3RpdmUgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgZW1iZWREaXJlY3RpdmUgKCBlbmRPZkxpbmUgZW1iZWREaXJlY3RpdmUgKSogXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgaW5jbHVkZURpcmVjdGl2ZSAoIGVuZE9mTGluZSBpbmNsdWRlRGlyZWN0aXZlICkqIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOyBcbiAgXG5cbiAgICBjb250YWluZXIuICAgICAgICAgICAgICAgOjo9ICBbY29sb25zXSBjbGFzc05hbWU/IDxFTkRfT0ZfTElORT4rICggcHJpbWFyeUhlYWRpbmcgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc2Vjb25kYXJ5SGVhZGluZyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHRlcnRpYXJ5SGVhZGluZyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHF1YXRlcm5hcnlIZWFkaW5nIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdGFibGUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBmb290bm90ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgb3JkZXJlZExpc3QgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1bm9yZGVyZWRMaXN0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmxvY2tMaXN0aW5nIFxuICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBhcmFncmFwaCApIDxFTkRfT0ZfTElORT4rIFtjb2xvbnNdIDtcblxuXG4gICAgcHJpbWFyeUhlYWRpbmcuICAgICAgICAgIDo6PSAgXCIjXCIgbGluZSA7XG5cblxuICAgIHNlY29uZGFyeUhlYWRpbmcuICAgICAgICA6Oj0gIFwiIyNcIiBsaW5lIDtcblxuXG4gICAgdGVydGlhcnlIZWFkaW5nLiAgICAgICAgIDo6PSAgXCIjIyNcIiBsaW5lIDtcbiAgICBcbiAgICBcbiAgICBxdWF0ZXJuYXJ5SGVhZGluZy4gICAgICAgOjo9ICBcIiMjIyNcIiBsaW5lIDtcblxuXG4gICAgdGFibGUgICAgICAgICAgICAgICAgICAgIDo6PSAgdGFibGVIZWFkIGVuZE9mTGluZSB0YWJsZURpdmlkZXIgZW5kT2ZMaW5lIHRhYmxlQm9keSA7XG5cblxuICAgIGZvb3Rub3RlLiAgICAgICAgICAgICAgICA6Oj0gIHJlZmVyZW5jZSBwYXJhZ3JhcGggO1xuXG5cbiAgICBvcmRlcmVkTGlzdCAgICAgICAgICAgICAgOjo9ICBvcmRlcmVkSXRlbSAoIGVuZE9mTGluZSBvcmRlcmVkSXRlbSApKiA7XG5cblxuICAgIHVub3JkZXJlZExpc3QgICAgICAgICAgICA6Oj0gIHVub3JkZXJlZEl0ZW0gKCBlbmRPZkxpbmUgdW5vcmRlcmVkSXRlbSApKiA7XG5cblxuICAgIGJsb2NrTGlzdGluZyAgICAgICAgICAgICA6Oj0gIGJsb2NrU3RhcnQgYmxvY2tMaW5lKiBibG9ja0VuZCA7XG5cblxuICAgIHBhcmFncmFwaCAgICAgICAgICAgICAgICA6Oj0gIGxpbmUgKCBlbmRPZkxpbmUgbGluZSApKiA7XG4gICAgXG5cbiAgICBpbmRleERpcmVjdGl2ZSAgICAgICAgICAgOjo9ICBcIkBpbmRleFwiIDtcblxuXG4gICAgaWdub3JlRGlyZWN0aXZlICAgICAgICAgIDo6PSAgXCJAaWdub3JlXCIgO1xuXG5cbiAgICBlbWJlZERpcmVjdGl2ZSAgICAgICAgICAgOjo9ICBcIkBlbWJlZFwiICggcGF0aCB8IG5vbnNlbnNlICkgO1xuXG5cbiAgICBpbmNsdWRlRGlyZWN0aXZlICAgICAgICAgOjo9ICBcIkBpbmNsdWRlXCIgKCBwYXRoIHwgbm9uc2Vuc2UgKSA7XG5cblxuICAgIGNvbnRlbnRzRGlyZWN0aXZlICAgICAgICA6Oj0gIFwiQGNvbnRlbnRzXCIgO1xuXG5cbiAgICBmb290bm90ZXNEaXJlY3RpdmUgICAgICAgOjo9ICBcIkBmb290bm90ZXNcIiA7XG5cblxuICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmUgICAgICA6Oj0gIFwiQHBhZ2VOdW1iZXJcIiA7XG5cblxuICAgIG5vbnNlbnNlLiAgICAgICAgICAgICAgICA6Oj0gICggW2VzY2FwZWRdIHwgW251bWJlcl0gfCBbaWRlbnRpZmllcl0gfCBbd29yZF0gfCBbc3BlY2lhbF0gfCBbdW5hc3NpZ25lZF0gKSsgO1xuXG5cbiAgICB0YWJsZUhlYWQgICAgICAgICAgICAgICAgOjo9ICB0YWJsZUhlYWRSb3cgO1xuICAgIFxuICAgIFxuICAgIHRhYmxlQm9keSAgICAgICAgICAgICAgICA6Oj0gIHRhYmxlQm9keVJvdyAoIGVuZE9mTGluZSB0YWJsZUJvZHlSb3cgKSogO1xuXG4gICAgXG4gICAgb3JkZXJlZEl0ZW0gICAgICAgICAgICAgIDo6PSAgW21hcmtlcl0gbGluZSAoIGVuZE9mTGluZSBsaW5lICkqIDtcbiAgICBcbiAgICBcbiAgICB1bm9yZGVyZWRJdGVtICAgICAgICAgICAgOjo9ICBbYnVsbGV0XSBsaW5lICggZW5kT2ZMaW5lIGxpbmUgKSogO1xuXG5cbiAgICB0YWJsZUhlYWRSb3cgICAgICAgICAgICAgOjo9ICB0YWJsZUNlbGxEaXZpZGVyIHRhYmxlSGVhZENlbGwrIDtcblxuICAgIFxuICAgIHRhYmxlQm9keVJvdyAgICAgICAgICAgICA6Oj0gIHRhYmxlQ2VsbERpdmlkZXIgdGFibGVCb2R5Q2VsbCsgO1xuXG5cbiAgICB0YWJsZUhlYWRDZWxsICAgICAgICAgICAgOjo9ICBlbXB0eVRhYmxlQ2VsbCBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB0YWJsZUNlbGwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuICAgIHRhYmxlQm9keUNlbGwgICAgICAgICAgICA6Oj0gIGVtcHR5VGFibGVDZWxsIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHRhYmxlQ2VsbCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDsgXG5cblxuICAgIGVtcHR5VGFibGVDZWxsICAgICAgICAgICA6Oj0gIFwiLlwiIHRhYmxlQ2VsbERpdmlkZXIgO1xuICAgIFxuXG4gICAgdGFibGVDZWxsICAgICAgICAgICAgICAgIDo6PSAgbGluZSB0YWJsZUNlbGxEaXZpZGVyIDtcbiAgICBcbiAgICBcbiAgICBibG9ja0xpbmUuICAgICAgICAgICAgICAgOjo9ICBibG9ja1RleHQqIGVuZE9mTGluZSA7XG4gICAgXG5cbiAgICBsaW5lLiAgICAgICAgICAgICAgICAgICAgOjo9ICAoIGlubGluZUxpc3RpbmcgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBmb290bm90ZUxpbmsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVtYWlsTGluayBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaHlwZXJsaW5rIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbWFnZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3Ryb25nVGV4dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW1waGFzaXNlZFRleHQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHN0cm9uZ2x5RW1waGFzaXNlZFRleHQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBsYWluVGV4dCApKyA7XG4gICAgXG4gICAgXG4gICAgZW1haWxMaW5rICAgICAgICAgICAgICAgIDo6PSAgXCJbXCIgaW5saW5lVGV4dC4uLiBcIl1cIjxOT19XSElURVNQQUNFPlwiKFwiIFtlbWFpbC1hZGRyZXNzXSBcIilcIiBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBbZW1haWwtYWRkcmVzc10gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuICAgIGh5cGVybGluayAgICAgICAgICAgICAgICA6Oj0gIFwiW1wiIGlubGluZVRleHQuLi4gXCJdXCI8Tk9fV0hJVEVTUEFDRT5cIihcIiBbdXJsXSBcIilcIiBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBbdXJsXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgICBpbWFnZSAgICAgICAgICAgICAgICAgICAgOjo9ICBcIiFbXCIgaW5saW5lVGV4dC4uLiBcIl1cIjxOT19XSElURVNQQUNFPlwiKFwiIHBhdGggXCIpXCIgO1xuXG5cbiAgICBzdHJvbmdUZXh0ICAgICAgICAgICAgICAgOjo9ICBcIioqKlwiIGlubGluZVRleHQgXCIqKipcIiA7XG5cblxuICAgIGVtcGhhc2lzZWRUZXh0ICAgICAgICAgICA6Oj0gIFwiKipcIiBpbmxpbmVUZXh0IFwiKipcIiA7XG5cblxuICAgIHN0cm9uZ2x5RW1waGFzaXNlZFRleHQgICA6Oj0gIFwiKioqKlwiIGlubGluZVRleHQgXCIqKioqXCIgO1xuICAgIFxuXG4gICAgaW5saW5lVGV4dCAgICAgICAgICAgICAgIDo6PSAgcGxhaW5UZXh0KyA7XG4gICAgXG4gICAgXG4gICAgYmxvY2tTdGFydCAgICAgICAgICAgICAgIDo6PSAgW2JhY2t0aWNrc10gY2xhc3NOYW1lPyBlbmRPZkxpbmUgO1xuXG5cbiAgICBibG9ja0VuZCAgICAgICAgICAgICAgICAgOjo9ICBbYmFja3RpY2tzXSA7XG5cblxuICAgIGNsYXNzTmFtZSAgICAgICAgICAgICAgICA6Oj0gIDxOT19XSElURVNQQUNFPltpZGVudGlmaWVyXSA7XG4gICAgXG5cbiAgICBibG9ja1RleHQgICAgICAgICAgICAgICAgOjo9ICBbZXNjYXBlZF0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBbbnVtYmVyXSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFtpZGVudGlmaWVyXSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFtlbWFpbC1hZGRyZXNzXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgW3VybF0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBbcGF0aF0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBbd29yZF0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBbc3BlY2lhbF0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBbdW5hc3NpZ25lZF0gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBbZGFzaGVzXSBcbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBbdmVydGljYWwtYmFyXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuICAgIFxuXG4gICAgcGxhaW5UZXh0ICAgICAgICAgICAgICAgIDo6PSAgW2VzY2FwZWRdIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgW251bWJlcl0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBbaWRlbnRpZmllcl0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBbZW1haWwtYWRkcmVzc11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFt1cmxdIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgW3BhdGhdIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgW3dvcmRdIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgW3NwZWNpYWxdIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgW3VuYXNzaWduZWRdIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuICAgIFxuXG4gICAgdGFibGVDZWxsRGl2aWRlci4gICAgICAgIDo6PSAgW3ZlcnRpY2FsLWJhcl0gO1xuICAgIFxuICAgIFxuICAgIHRhYmxlRGl2aWRlci4gICAgICAgICAgICA6Oj0gIFtkYXNoZXNdIDtcbiAgICBcbiAgICBcbiAgICBpbmxpbmVMaXN0aW5nLiAgICAgICAgICAgOjo9ICBbYmFja3RpY2tlZC1saXRlcmFsXSA7XG4gICAgXG5cbiAgICBmb290bm90ZUxpbmsgICAgICAgICAgICAgOjo9ICBbbGlua10gO1xuICAgIFxuXG4gICAgcmVmZXJlbmNlICAgICAgICAgICAgICAgIDo6PSAgW3JlZmVyZW5jZV0gO1xuICAgIFxuXG4gICAgcGF0aCAgICAgICAgICAgICAgICAgICAgIDo6PSAgW3BhdGhdIDtcblxuICAgIFxuICAgIGVuZE9mTGluZSAgICAgICAgICAgICAgICA6Oj0gIDxFTkRfT0ZfTElORT4gO1xuXG5cbiAgICBlcnJvci4gICAgICAgICAgICAgICAgICAgOjo9ICAuIDtcblxuYDtcblxuZXhwb3J0IGRlZmF1bHQgYm5mO1xuIl0sIm5hbWVzIjpbImJuZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNlNBOzs7ZUFBQTs7O0FBM1NBLE1BQU1BLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeVNiLENBQUM7TUFFRCxXQUFlQSJ9