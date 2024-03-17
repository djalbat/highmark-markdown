"use strict";

const bnf = `

    document                ::=  ( blockListing 
    
                                 | orderedList 
                                 
                                 | unorderedList 
                                 
                                 | table 
                                 
                                 | footnote 
                                 
                                 | primaryHeading 
                                 
                                 | secondaryHeading 
                                 
                                 | tertiaryHeading 
                                 
                                 | quaternaryHeading 
                                 
                                 | lineBreak 
                                 
                                 | paragraph 
                                 
                                 | verticalSpace 
                                 
                                 | error )+ 
                                 
                              ;

    
    blockListing            ::=  blockListingStart blockText blockListingEnd ;


    orderedList             ::=  orderedListItem+ ;


    unorderedList           ::=  unorderedListItem+ ;


    footnotesList           ::=  footnoteItem+ ;


    table                   ::=  tableHead tableSeparator tableBody ;


    footnote                ::=  reference paragraph ;


    primaryHeading          ::=  [single-hash] line ;


    secondaryHeading        ::=  [double-hash] line ;


    tertiaryHeading         ::=  [triple-hash] line ;
    
    
    quaternaryHeading       ::=  [quadruple-hash] line ;


    lineBreak.              ::=  [dashes] endOfLine ;


    paragraph               ::=  line+ ;
    

    verticalSpace.          ::=  endOfLine+ ;


    error.                  ::=  . ;


    blockListingStart       ::=  [backticks] className? endOfLine ;


    blockListingEnd         ::=  [backticks] endOfLine ;


    footnoteItem            ::=  anchor paragraph ;
    
    
    orderedListItem         ::=  [number]<NO_WHITESPACE>"." line ;
    
    
    unorderedListItem       ::=  [single-asterisk] line ;


    tableHead               ::=  tableHeadRow ;

    
    tableBody               ::=  tableBodyRow+ ;

    
    tableSeparator.         ::=  [many-dashes] endOfLine ;

    
    tableHeadRow            ::=  [vertical-bar] tableHeadCell+ endOfLine ;

    
    tableBodyRow            ::=  [vertical-bar] tableBodyCell+ endOfLine ;


    tableHeadCell.          ::=  emptyTableCell | tableCell ;


    tableBodyCell.          ::=  emptyTableCell | tableCell ; 


    emptyTableCell          ::=  "." [vertical-bar];
    

    tableCell               ::=  ( link | hyperlink | inlineListing | stronglyEmphasisedText | emphasisedText | strongText | text )+ [vertical-bar] ;


    line.                   ::=  ( link | image | hyperlink | inlineListing | stronglyEmphasisedText | emphasisedText | strongText | text )+ endOfLine ;


    link.                   ::=  "[^" [identifier] "]" ;
    

    image                   ::=  "![" inlineText... "]"<NO_WHITESPACE>"(" url ")" ;


    hyperlink               ::=  "[" inlineText... "]"<NO_WHITESPACE>"(" url ")" ;


    reference.              ::=  "[^" [identifier] "]:" ;
    

    inlineListing           ::=  [backtick] inlineText... [backtick] ;
    

    stronglyEmphasisedText  ::=  [triple-asterisk] inlineText... [triple-asterisk] ;
    

    emphasisedText          ::=  [single-asterisk] inlineText... [single-asterisk] ;


    strongText              ::=  [double-asterisk] inlineText... [double-asterisk] ;


    blockText.              ::=  ( text | endOfLine )+ ;
    

    inlineText              ::=  text+ ;
    
    
    anchor                  ::=  [number] ;
    

    text                    ::=  [escaped] | [number] | [path] | [domain] | [protocol] | [identifier] | [word] | [special] | [unassigned] ;
    

    url                     ::=  ( [protocol] [domain] )? [path] 
    
                              |  [protocol] [domain]
                              
                              ;
    

    className               ::=  <NO_WHITESPACE>[identifier] ;


    endOfLine               ::=  <END_OF_LINE> ;

`;

export default bnf;

