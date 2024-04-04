"use strict";

const bnf = `

    division                ::=  ( subDivision | verticalSpace | error )+ ;

    
    subDivision..           ::=  ( <END_OF_LINE> | <START_OF_CONTENT> ) ( primaryHeading 
                                 
                                                                        | secondaryHeading 
                                                                           
                                                                        | tertiaryHeading 
                                                                           
                                                                        | quaternaryHeading 
                                                                           
                                                                        | lineBreak 
                                                                           
                                                                        | footnote 
                                                                           
                                                                        | orderedList 
                                                                           
                                                                        | unorderedList 
                                                                           
                                                                        | blockListing 
                                              
                                                                        | table 
                                                                           
                                                                        | paragraph ) ;

    
    verticalSpace           ::=  <END_OF_LINE> ;


    error.                  ::=  . ;


    primaryHeading          ::=  [single-hash] line ;


    secondaryHeading        ::=  [double-hash] line ;


    tertiaryHeading         ::=  [triple-hash] line ;
    
    
    quaternaryHeading       ::=  [quadruple-hash] line ;


    lineBreak               ::=  [two-dashes] <END_OF_LINE> ;


    footnotesList           ::=  footnoteItem+ ;


    footnoteItem            ::=  anchor paragraph ;


    footnote                ::=  reference paragraph ;


    table                   ::=  tableHead tableSeparator tableBody ;


    paragraph               ::=  line+ ;
    

    orderedList             ::=  orderedListItem+ ;


    unorderedList           ::=  unorderedListItem+ ;


    blockListing            ::=  blockListingStart blockText blockListingEnd ;


    tableHead               ::=  tableHeadRow ;

    
    tableBody               ::=  tableBodyRow+ ;

    
    tableSeparator          ::=  [many-dashes] <END_OF_LINE> ;

    
    orderedListItem         ::=  [number]<NO_WHITESPACE>"." line ;
    
    
    unorderedListItem       ::=  ( [single-dash] | [single-asterisk] ) line ;


    blockListingStart       ::=  [backticks] className? <END_OF_LINE> ;


    blockListingEnd         ::=  [backticks] <END_OF_LINE> ;


    tableHeadRow            ::=  [vertical-bar] tableHeadCell+ <END_OF_LINE> ;

    
    tableBodyRow            ::=  [vertical-bar] tableBodyCell+ <END_OF_LINE> ;


    blockText               ::=  ( plainText | <END_OF_LINE> )+ ;
    

    tableHeadCell           ::=  emptyTableCell | tableCell ;


    tableBodyCell           ::=  emptyTableCell | tableCell ; 


    emptyTableCell          ::=  "." [vertical-bar];
    

    tableCell.              ::=  markedText... [vertical-bar] ;
    
    
    line.                   ::=  markedText <END_OF_LINE> ;


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


    emailLink.              ::=  "[" inlineText... "]"<NO_WHITESPACE>"(" address ")" 
    
                              |  address 
                              
                              ;


    hyperlink.              ::=  "[" inlineText... "]"<NO_WHITESPACE>"(" url ")" 
    
                              |  url
                              
                              ;


    inlineListing           ::=  [backticked-literal] ;
    

    stronglyEmphasisedText  ::=  [triple-asterisk] inlineText... [triple-asterisk] ;
    

    emphasisedText          ::=  [single-asterisk] inlineText... [single-asterisk] ;


    strongText              ::=  [double-asterisk] inlineText... [double-asterisk] ;


    inlineText              ::=  plainText+ ;
    
    
    plainText               ::=  [regular-expression] 
    
                              |  [string-literal] 
                              
                              |  [escaped] 
                              
                              |  [triple-asterisk] 
                              
                              |  [double-asterisk] 
                              
                              |  [single-asterisk] 
                              
                              |  [quadruple-hash]
                              
                              |  [triple-hash]
                              
                              |  [double-hash]
                              
                              |  [single-hash]

                              |  [single-dash] 
                              
                              |  [vertical-bar] 
                              
                              |  [many-dashes] 
                              
                              |  [two-dashes] 
                              
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
    

    anchor                  ::=  [number] ;
    

    url                     ::=  [scheme]? [domain] [path]? ;
    

    address                 ::=  [domain]<NO_WHITESPACE>"@"<NO_WHITESPACE>[domain] ;
    

    className               ::=  <NO_WHITESPACE>[identifier] ;
    
    
`;

export default bnf;

