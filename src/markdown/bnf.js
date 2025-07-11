"use strict";

const bnf = `

    markdown                 ::=  ( division | error )+ ;
    
    
    division                 ::=  ( subDivision | verticalSpace )+ ;
    
    
    subDivision..            ::=  directives 
    
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


    error.                   ::=  . ;


    directives               ::=  indexDirective 
  
                               |  ignoreDirective 
  
                               |  contentsDirective 
  
                               |  footnotesDirective
                               
                               |  pageNumberDirective 
    
                               |  embedDirective ( endOfLine embedDirective )* 
                               
                               |  includeDirective ( endOfLine includeDirective )* 

                               ; 
  

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
    
    
    line.                    ::=  ( inlineListing 
    
                                  | footnoteLink 
                                 
                                  | emailLink 
                                 
                                  | hyperlink 
                                 
                                  | image 
                                 
                                  | strongText 
                                 
                                  | emphasisedText 
                                 
                                  | stronglyEmphasisedText 
                                 
                                  | plainText )+ ;
    
    
    blockLine.               ::=  blockText* endOfLine ;
    

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

`;

export default bnf;
