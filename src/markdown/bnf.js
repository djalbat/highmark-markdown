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


    indexDirective          ::=  "@index" ;


    ignoreDirective         ::=  "@ignore" ;


    embedDirective.         ::=  "@embed" ( [path] | nonsense ) ;


    includeDirective.       ::=  "@include" ( [path] | nonsense ) ;


    contentsDirective       ::=  "@contents" ;


    footnotesDirective      ::=  "@footnotes" ;


    nonsense                ::=  ( [escaped] | [number] | [identifier] | [special] | [unassigned] )+ ;


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
                              
                              |  [identifier] 
                              
                              |  [email-address]
                              
                              |  [url] 
                              
                              |  [path] 
                              
                              |  [special] 
                              
                              |  [unassigned] 
                              
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
