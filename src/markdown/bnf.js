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


    verticalSpace           ::=  <END_OF_LINE> <END_OF_LINE>+ 
    
                              |  <START_OF_CONTENT> <END_OF_LINE>*
                              
                              ;


    directives              ::=  pageNumber 
    
                               | indexDirective 
  
                               | ignoreDirective 
  
                               | contentsDirective 
  
                               | footnotesDirective
                               
                               | embedDirective ( endOfLine embedDirective )* 
                               
                               | includeDirective ( endOfLine includeDirective )* 

                               ; 
  

    primaryHeading.         ::=  "#" line ;


    secondaryHeading.       ::=  "##" line ;


    tertiaryHeading.        ::=  "###" line ;
    
    
    quaternaryHeading.      ::=  "####" line ;


    table                   ::=  tableHead endOfLine [dashes] endOfLine tableBody ;


    footnote.               ::=  reference paragraph ;


    orderedList             ::=  orderedListItem ( endOfLine orderedListItem )* ;


    unorderedList           ::=  unorderedListItem ( endOfLine unorderedListItem )* ;


    blockListing            ::=  blockListingStart ( blockLine | endOfLine )+ blockListingEnd ;


    paragraph               ::=  line ( endOfLine line )* ;
    

    pageNumber              ::=  "@pageNumber" ;


    embedDirective          ::=  "@embed" [path] ;


    indexDirective          ::=  "@index" ;


    ignoreDirective         ::=  "@ignore" ;


    includeDirective        ::=  "@include" [path] ;


    contentsDirective       ::=  "@contents" ;


    footnotesDirective      ::=  "@footnotes" ;


    tableHead               ::=  tableHeadRow ;

    
    tableBody               ::=  tableBodyRow ( endOfLine tableBodyRow )* ;

    
    orderedListItem         ::=  [marker] line ( endOfLine line )* ;
    
    
    unorderedListItem       ::=  [bullet] line ( endOfLine line )* ;


    blockListingStart       ::=  [backticks] className? <END_OF_LINE> ;


    blockListingEnd         ::=  [backticks] ;


    tableHeadRow            ::=  [vertical-bar] tableHeadCell+ ;

    
    tableBodyRow            ::=  [vertical-bar] tableBodyCell+ ;


    tableHeadCell.          ::=  emptyTableCell 
    
                              |  tableCell 
                              
                              ;


    tableBodyCell.          ::=  emptyTableCell 
    
                              |  tableCell 
                              
                              ; 


    emptyTableCell          ::=  "." [vertical-bar];
    

    tableCell               ::=  line [vertical-bar] ;
    
    
    line.                   ::=  ( footnoteLink 
    
                                 | emailLink 
                                 
                                 | hyperlink 
                                 
                                 | image 
                                 
                                 | inlineListing 
                                 
                                 | stronglyEmphasisedText 
                                 
                                 | emphasisedText 
                                 
                                 | strongText 
                                 
                                 | plainText )+ ;
    
    
    footnoteLink.           ::=  [link] ;
    

    emailLink.              ::=  "[" inlineText... "]"<NO_WHITESPACE>"(" [email-address] ")" 
    
                              |  [email-address] 
                              
                              ;


    hyperlink.              ::=  "[" inlineText... "]"<NO_WHITESPACE>"(" [url] ")" 
    
                              |  [url]
                              
                              ;


    image.                  ::=  "![" inlineText... "]"<NO_WHITESPACE>"(" [path] ")" ;


    inlineListing           ::=  [backticked-literal] ;
    

    stronglyEmphasisedText  ::=  "****" inlineText "****" ;
    

    emphasisedText          ::=  "**" inlineText "**" ;


    strongText              ::=  "***" inlineText "***" ;


    blockLine.              ::=  ( plainText 
                                
                                 | [dashes] 
    
                                 | [vertical-bar] )* ;
    

    inlineText              ::=  plainText+ ;
    
    
    plainText               ::=  [escaped] 
                              
                              |  [number] 
                              
                              |  [url] 
                              
                              |  [path] 
                              
                              |  [word] 
                              
                              |  [special] 
                              
                              |  [identifier] 
                              
                              |  [email-address]
                              
                              |  [unassigned] 
                              
                              ;
    

    reference.              ::=  [reference] ;
    

    className               ::=  <NO_WHITESPACE>[identifier] ;
      

    anchor.                 ::=  ε ;
    

    contentsList            ::=  contentsItem+ ;


    contentsItem            ::=  contentsLink 
    
                              |  contentsLink? contentsList
                              
                              ;


    contentsLink            ::=  line ;


    footnotesList           ::=  footnotesItem+ ;


    footnotesItem           ::=  anchor paragraph ;


    indexList               ::=  indexItem+ ;


    indexItem               ::=  line... indexLink ( "," indexLink )* ;


    indexLink               ::=  [number] ;

`;

export default bnf;
