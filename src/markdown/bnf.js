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

    
    verticalSpace            ::=  <END_OF_LINE>+ ;


    error.                   ::=  . ;


    directives               ::=  indexDirective 
  
                               |  ignoreDirective 
  
                               |  contentsDirective 
  
                               |  footnotesDirective
                               
                               |  pageNumberDirective 
    
                               |  embedDirective ( endOfLine embedDirective )* 
                               
                               |  includeDirective ( endOfLine includeDirective )* 

                               ; 
  

    primaryHeading           ::=  "#" line ;


    secondaryHeading         ::=  "##" line ;


    tertiaryHeading          ::=  "###" line ;
    
    
    quaternaryHeading        ::=  "####" line ;


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


    nonsense                 ::=  ( [escaped] | [number] | [identifier] | [word] | [special] | [unassigned] )+ ;


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
                                 
                                  | plainText 
                                 
                                  | strongText 
                                 
                                  | emphasisedText 
                                 
                                  | stronglyEmphasisedText )+ ;
    
    
    blockLine.               ::=  blockText* endOfLine ;
    

    footnoteLink             ::=  [link] ;
    

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
    
    
    className                ::=  <NO_WHITESPACE>[identifier] ;
    

    blockStart               ::=  [backticks] className? <END_OF_LINE> ;


    blockEnd                 ::=  [backticks] ;


    tableCellDivider         ::=  [vertical-bar] ;
    
    
    tableDivider             ::=  [dashes] ;
    
    
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
    

    inlineListing            ::=  [backticked-literal] ;
    

    reference                ::=  [reference] ;
    

    path                     ::=  [path] ;


    endOfLine                ::=  <END_OF_LINE> ;

`;

export default bnf;
