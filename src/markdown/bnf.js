"use strict";

const bnf = `

    division                ::=  ( primaryHeading 
                                 
                                 | secondaryHeading 
                                 
                                 | tertiaryHeading 
                                 
                                 | quaternaryHeading 
                                 
                                 | orderedList 
                                 
                                 | unorderedList 
                                 
                                 | blockListing 
    
                                 | table 
                                 
                                 | footnote 
                                 
                                 | lineBreak 
                                 
                                 | paragraph 
                                 
                                 | verticalSpace 
                                 
                                 | error )+ 
                                 
                              ;

    
    primaryHeading          ::=  [single-hash] line ;


    secondaryHeading        ::=  [double-hash] line ;


    tertiaryHeading         ::=  [triple-hash] line ;
    
    
    quaternaryHeading       ::=  [quadruple-hash] line ;


    orderedList             ::=  orderedListItem+ ;


    unorderedList           ::=  unorderedListItem+ ;


    blockListing            ::=  blockListingStart blockText blockListingEnd ;


    footnotesList           ::=  footnoteItem+ ;


    table                   ::=  tableHead tableSeparator tableBody ;


    footnote                ::=  reference paragraph ;


    lineBreak.              ::=  [few-dashes] endOfLine ;


    paragraph               ::=  line+ ;
    

    verticalSpace.          ::=  endOfLine+ ;


    error.                  ::=  . ;


    blockListingStart       ::=  [backticks] className? endOfLine ;


    blockListingEnd         ::=  [backticks] endOfLine ;


    footnoteItem            ::=  anchor paragraph ;
    
    
    orderedListItem         ::=  [number]<NO_WHITESPACE>"." line ;
    
    
    unorderedListItem       ::=  ( [single-dash] | [single-asterisk] ) line ;


    tableHead               ::=  tableHeadRow ;

    
    tableBody               ::=  tableBodyRow+ ;

    
    tableSeparator.         ::=  [many-dashes] endOfLine ;

    
    tableHeadRow            ::=  [vertical-bar] tableHeadCell+ endOfLine ;

    
    tableBodyRow            ::=  [vertical-bar] tableBodyCell+ endOfLine ;


    tableHeadCell.          ::=  emptyTableCell | tableCell ;


    tableBodyCell.          ::=  emptyTableCell | tableCell ; 


    emptyTableCell          ::=  "." [vertical-bar];
    

    tableCell               ::=  ( link | image | hyperlink | mailToLink | inlineListing | stronglyEmphasisedText | emphasisedText | strongText | text )+ [vertical-bar] ;


    line.                   ::=  ( link | image | hyperlink | mailToLink | inlineListing | stronglyEmphasisedText | emphasisedText | strongText | text )+ endOfLine ;


    link.                   ::=  "[^" [identifier] "]" ;
    

    image.                  ::=  "![" inlineText... "]"<NO_WHITESPACE>"(" [path] ")" ;


    hyperlink.              ::=  "[" inlineText... "]"<NO_WHITESPACE>"(" url ")" 
    
                              |  url
                              
                              ;


    mailToLink.             ::=  "[" inlineText... "]"<NO_WHITESPACE>"(" address ")" 
    
                              |  address 
                              
                              ;


    reference.              ::=  "[^" [identifier] "]:" ;
    

    inlineListing           ::=  [backtick] inlineText... [backtick] ;
    

    stronglyEmphasisedText  ::=  [triple-asterisk] inlineText... [triple-asterisk] ;
    

    emphasisedText          ::=  [single-asterisk] inlineText... [single-asterisk] ;


    strongText              ::=  [double-asterisk] inlineText... [double-asterisk] ;


    blockText.              ::=  ( text | endOfLine )+ ;
    

    inlineText              ::=  text+ ;
    
    
    anchor                  ::=  [number] ;
    

    text                    ::=  [regular-expression] 
    
                              |  [string-literal] 
                              
                              |  [escaped] 
                              
                              |  [triple-asterisk] 
                              
                              |  [double-asterisk] 
                              
                              |  [single-asterisk] 
                              
                              |  [single-dash] 
                              
                              |  [many-dashes] 
                              
                              |  [few-dashes] 
                              
                              |  [number] 
                              
                              |  [path] 
                              
                              |  [domain] 
                              
                              |  [scheme] 
                              
                              |  [identifier] 
                              
                              |  [word] 
                              
                              |  [special] 
                              
                              |  [unassigned] 
                              
                              ;
    

    url                     ::=  [scheme]? [domain] [path]? ;
    

    address                 ::=  [domain]<NO_WHITESPACE>"@"<NO_WHITESPACE>[domain] ;
    

    className               ::=  <NO_WHITESPACE>[identifier] ;


    endOfLine               ::=  <END_OF_LINE> ;

`;

export default bnf;

