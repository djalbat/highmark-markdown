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


    directives              ::=  ( embedDirective 
    
                                 | ignoreDirective 
    
                                 | includeDirective 
    
                                 | contentsDirective 
    
                                 | footnotesDirective )+ ;


    primaryHeading          ::=  "#" line ;


    secondaryHeading        ::=  "##" line ;


    tertiaryHeading         ::=  "###" line ;
    
    
    quaternaryHeading       ::=  "####" line ;


    table                   ::=  tableHead tableSeparator tableBody ;


    footnote                ::=  reference paragraph ;


    orderedList             ::=  orderedListItem+ ;


    unorderedList           ::=  unorderedListItem+ ;


    blockListing            ::=  blockListingStart blockText blockListingEnd ;


    paragraph               ::=  line+ ;
    

    embedDirective          ::=  "@"<NO_WHITESPACE>"embed" [path] endOfLine ;


    ignoreDirective         ::=  "@"<NO_WHITESPACE>"ignore" ;


    includeDirective        ::=  "@"<NO_WHITESPACE>"include" [path] endOfLine ;


    contentsDirective       ::=  "@"<NO_WHITESPACE>"contents" [number]? endOfLine ;


    footnotesDirective      ::=  "@"<NO_WHITESPACE>"footnotes" endOfLine ;


    footnotesList           ::=  footnoteItem+ ;


    footnoteItem            ::=  anchor paragraph ;


    tableHead               ::=  tableHeadRow ;

    
    tableBody               ::=  tableBodyRow+ ;

    
    tableSeparator          ::=  [dashes] endOfLine ;

    
    orderedListItem.        ::=  marker line ;
    
    
    unorderedListItem       ::=  [bullet] line ;


    blockListingStart       ::=  [backticks] className? endOfLine ;


    blockListingEnd         ::=  [backticks] endOfLine ;


    tableHeadRow            ::=  [vertical-bar] tableHeadCell+ endOfLine ;

    
    tableBodyRow            ::=  [vertical-bar] tableBodyCell+ endOfLine ;


    blockText.              ::=  plainText ( endOfLine | plainText )+ ;
    

    tableHeadCell           ::=  emptyTableCell | tableCell ;


    tableBodyCell           ::=  emptyTableCell | tableCell ; 


    emptyTableCell          ::=  "." [vertical-bar];
    

    tableCell.              ::=  markedText... [vertical-bar] ;
    
    
    line.                   ::=  markedText endOfLine ;


    markedText              ::=  ( link 
    
                                 | image 
                                 
                                 | emailLink 
                                 
                                 | hyperlink 
                                 
                                 | inlineListing 
                                 
                                 | stronglyEmphasisedText 
                                 
                                 | emphasisedText 
                                 
                                 | strongText 
                                 
                                 | plainText )+ ;


    link.                   ::=  "[^" [identifier] "]" ;
    

    image.                  ::=  "![" inlineText... "]"<NO_WHITESPACE>"(" [path] ")" ;


    emailLink.              ::=  "[" inlineText... "]"<NO_WHITESPACE>"(" [email-address] ")" 
    
                              |  [email-address] 
                              
                              ;


    hyperlink.              ::=  "[" inlineText... "]"<NO_WHITESPACE>"(" [url] ")" 
    
                              |  [url]
                              
                              ;


    inlineListing           ::=  [backticked-literal] ;
    

    stronglyEmphasisedText  ::=  "****" inlineText... "****" ;
    

    emphasisedText          ::=  "**" inlineText... "**" ;


    strongText              ::=  "***" inlineText... "***" ;


    inlineText              ::=  plainText+ ;
    
    
    plainText               ::=  [escaped] 
                              
                              |  [asterisks] 
                              
                              |  [hashes]
                              
                              |  [bullet] 
                              
                              |  [vertical-bar] 
                              
                              |  [dashes] 
                              
                              |  [number] 
                              
                              |  [path] 
                              
                              |  [domain] 
                              
                              |  [scheme] 
                              
                              |  [identifier] 
                              
                              |  [word] 
                              
                              |  [special] 
                              
                              |  [unassigned] 
                              
                              ;
    

    reference.              ::=  "[^" [identifier] "]:" ;
    

    anchor.                 ::=  [identifier] ;
    

    marker.                 ::=  [number]<NO_WHITESPACE>"." ;


    className               ::=  <NO_WHITESPACE>[identifier] ;
      
`;

export default bnf;
