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


    table                   ::=  tableHead endOfLine tableDivider endOfLine tableBody ;


    footnote.               ::=  reference paragraph ;


    orderedList             ::=  orderedItem ( endOfLine orderedItem )* ;


    unorderedList           ::=  unorderedItem ( endOfLine unorderedItem )* ;


    blockListing            ::=  blockListingStart ( blockLine | endOfLine )+ blockListingEnd ;


    paragraph               ::=  line ( endOfLine line )* ;
    

    pageNumber              ::=  "@pageNumber" ;


    indexDirective          ::=  "@index" ;


    ignoreDirective         ::=  "@ignore" ;


    embedDirective.         ::=  "@embed" ( path | nonsense ) ;


    includeDirective.       ::=  "@include" ( path | nonsense ) ;


    contentsDirective       ::=  "@contents" ;


    footnotesDirective      ::=  "@footnotes" ;


    nonsense                ::=  ( [escaped] | [number] | [identifier] | [word] | [special] | [unassigned] )+ ;


    tableHead               ::=  tableHeadRow ;
    
    
    tableBody               ::=  tableBodyRow ( endOfLine tableBodyRow )* ;

    
    orderedItem             ::=  [marker] line ( endOfLine line )* ;
    
    
    unorderedItem           ::=  [bullet] line ( endOfLine line )* ;


    blockListingStart       ::=  [backticks] className? <END_OF_LINE> ;


    blockListingEnd         ::=  [backticks] ;


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


    image.                  ::=  "![" inlineText... "]"<NO_WHITESPACE>"(" path ")" ;


    path                    ::=  [path] ;


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
                              
                              |  [word] 
                              
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
