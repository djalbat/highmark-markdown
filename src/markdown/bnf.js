"use strict";

const bnf = `

    division                ::=  ( subDivision | endOfLine | error )+ ;
    
    
    subDivision..           ::=  ( endOfLine | <START_OF_CONTENT> ) ( header 
    
                                                                    | primaryHeading 
                             
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

    
    endOfLine.              ::=  <END_OF_LINE> ;


    error.                  ::=  . ;


    header                  ::=  import+ ;


    primaryHeading          ::=  [single-hash] line ;


    secondaryHeading        ::=  [double-hash] line ;


    tertiaryHeading         ::=  [triple-hash] line ;
    
    
    quaternaryHeading       ::=  [quadruple-hash] line ;


    lineBreak               ::=  [two-dashes] endOfLine ;


    footnotesList           ::=  footnoteItem+ ;


    footnoteItem            ::=  anchor paragraph ;


    footnote                ::=  reference paragraph ;


    table                   ::=  tableHead tableSeparator tableBody ;


    paragraph               ::=  line+ ;
    

    orderedList             ::=  orderedListItem+ ;


    unorderedList           ::=  unorderedListItem+ ;


    blockListing            ::=  blockListingStart blockText blockListingEnd ;


    import                  ::=  "@"<NO_WHITESPACE>"import" [path] endOfLine ;


    tableHead               ::=  tableHeadRow ;

    
    tableBody               ::=  tableBodyRow+ ;

    
    tableSeparator          ::=  [many-dashes] endOfLine ;

    
    orderedListItem         ::=  [number]<NO_WHITESPACE>"." line ;
    
    
    unorderedListItem       ::=  ( [single-dash] | [single-asterisk] ) line ;


    blockListingStart       ::=  [backticks] className? endOfLine ;


    blockListingEnd         ::=  [backticks] endOfLine ;


    tableHeadRow            ::=  [vertical-bar] tableHeadCell+ endOfLine ;

    
    tableBodyRow            ::=  [vertical-bar] tableBodyCell+ endOfLine ;


    blockText               ::=  ( plainText | endOfLine )+ ;
    

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
    

    stronglyEmphasisedText  ::=  [triple-asterisk] inlineText... [triple-asterisk] ;
    

    emphasisedText          ::=  [single-asterisk] inlineText... [single-asterisk] ;


    strongText              ::=  [double-asterisk] inlineText... [double-asterisk] ;


    inlineText              ::=  plainText+ ;
    
    
    plainText               ::=  [escaped] 
                              
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
    

    className               ::=  <NO_WHITESPACE>[identifier] ;
    
    
`;

export default bnf;

