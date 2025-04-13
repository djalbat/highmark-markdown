"use strict";

const bnf = `

    division                ::=  ( subDivision | endOfLine | error )+ ;
    
    
    subDivision             ::=  verticalSpace ( directives 
    
                                               | primaryHeading 
         
                                               | secondaryHeading 
                                                   
                                               | tertiaryHeading 
                                                   
                                               | quaternaryHeading 
                                                   
                                               | table 
                                                   
                                               | footnote
                                                   
                                               | orderedList 
                                                   
                                               | unorderedList 
                                                   
                                               | blockListing 
                      
                                               | paragraph ) ;

    
    endOfLine.              ::=  <END_OF_LINE> ;


    error.                  ::=  . ;


    verticalSpace.          ::=  <START_OF_CONTENT> <END_OF_LINE>*
    
                              |  <END_OF_LINE> <END_OF_LINE>+ 
    
                              ;


    directives              ::=  indexDirective 
  
                               | ignoreDirective 
  
                               | contentsDirective 
  
                               | footnotesDirective
                               
                               | pageNumberDirective 
    
                               | embedDirective ( endOfLine embedDirective )* 
                               
                               | includeDirective ( endOfLine includeDirective )* 

                               ; 
  

    primaryHeading.         ::=  "#" line ;


    secondaryHeading.       ::=  "##" line ;


    tertiaryHeading.        ::=  "###" line ;
    
    
    quaternaryHeading.      ::=  "####" line ;


    table                   ::=  tableHead endOfLine tableDivider endOfLine tableBody ;


    footnote.               ::=  reference paragraph ;


    orderedList             ::=  orderedItem ( endOfLine orderedItem )* ;


    unorderedList           ::=  unorderedItem ( endOfLine unorderedItem )* ;


    blockListing            ::=  blockStart blockLine* blockEnd ;


    paragraph               ::=  line ( endOfLine line )* ;
    

    indexDirective          ::=  "@index" ;


    ignoreDirective         ::=  "@ignore" ;


    embedDirective.         ::=  "@embed" ( path | nonsense ) ;


    includeDirective.       ::=  "@include" ( path | nonsense ) ;


    contentsDirective       ::=  "@contents" ;


    footnotesDirective      ::=  "@footnotes" ;


    pageNumberDirective     ::=  "@pageNumber" ;


    nonsense                ::=  ( [escaped] | [number] | [identifier] | [word] | [special] | [unassigned] )+ ;


    tableHead               ::=  tableHeadRow ;
    
    
    tableBody               ::=  tableBodyRow ( endOfLine tableBodyRow )* ;

    
    orderedItem             ::=  [marker] line ( endOfLine line )* ;
    
    
    unorderedItem           ::=  [bullet] line ( endOfLine line )* ;


    blockStart              ::=  [backticks] className? <END_OF_LINE> ;


    blockEnd                ::=  [backticks] ;


    blockLine.              ::=  blockText* endOfLine ;
    

    tableHeadRow            ::=  tableCellDivider tableHeadCell+ ;

    
    tableBodyRow            ::=  tableCellDivider tableBodyCell+ ;


    tableHeadCell.          ::=  emptyTableCell 
    
                              |  tableCell 
                              
                              ;


    tableBodyCell.          ::=  emptyTableCell 
    
                              |  tableCell 
                              
                              ; 


    emptyTableCell          ::=  "." tableCellDivider ;
    

    tableCell               ::=  line tableCellDivider ;
    
    
    tableDivider            ::=  [dashes] ;
    
    
    tableCellDivider        ::=  [vertical-bar] ;
    
    
    line.                   ::=  ( inlineListing 
    
                                 | footnoteLink 
                                 
                                 | emailLink 
                                 
                                 | hyperlink 
                                 
                                 | image 
                                 
                                 | plainText 
                                 
                                 | strongText 
                                 
                                 | emphasisedText 
                                 
                                 | stronglyEmphasisedText )+ ;
    
    
    inlineText              ::=  plainText+ ;
    
    
    footnoteLink.           ::=  [link] ;
    

    emailLink.              ::=  "[" inlineText... "]"<NO_WHITESPACE>"(" [email-address] ")" 
    
                              |  [email-address] 
                              
                              ;


    hyperlink.              ::=  "[" inlineText... "]"<NO_WHITESPACE>"(" [url] ")" 
    
                              |  [url]
                              
                              ;


    image.                  ::=  "![" inlineText... "]"<NO_WHITESPACE>"(" path ")" ;


    path                    ::=  [path] ;


    inlineListing           ::=  [backticked-literal] ;
    

    stronglyEmphasisedText  ::=  "****" inlineText "****" ;
    

    emphasisedText          ::=  "**" inlineText "**" ;


    strongText              ::=  "***" inlineText "***" ;


    plainText               ::=  [escaped] 
                              
                              |  [number] 
                              
                              |  [identifier] 
                              
                              |  [email-address]
                              
                              |  [url] 
                              
                              |  [path] 
                              
                              |  [word] 
                              
                              |  [special] 
                              
                              |  [unassigned] 
                              
                              ;
    

    blockText               ::=  [escaped] 
                              
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
    

    reference.              ::=  [reference] ;
    

    className               ::=  <NO_WHITESPACE>[identifier] ;
    

    contentsList            ::=  contentsItem+ ;


    contentsItem            ::=  contentsLink 
    
                              |  contentsLink? contentsList
                              
                              ;


    contentsLink            ::=  line ;


    footnotesList           ::=  footnotesItem+ ;


    footnotesItem           ::=  anchor paragraph ;


    indexHeading            ::=  line ;
    
    
    indexList               ::=  indexItem+ ;


    indexItem               ::=  line... comma indexLink ( comma indexLink )* ;


    indexLink               ::=  [number] ;    


    comma.                  ::=  "," ;    
      

    anchor.                 ::=  ε ;
    
`;

export default bnf;
