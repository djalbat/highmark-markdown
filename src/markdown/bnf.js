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
    
                                 | footnotesDirective ) ( endOfLine ( embedDirective 
    
                                                                    | ignoreDirective 
                                        
                                                                    | includeDirective 
                                        
                                                                    | contentsDirective 
                                        
                                                                    | footnotesDirective ) )* ;


    primaryHeading          ::=  "#" markedText ;


    secondaryHeading        ::=  "##" markedText ;


    tertiaryHeading         ::=  "###" markedText ;
    
    
    quaternaryHeading       ::=  "####" markedText ;


    table                   ::=  tableHead <END_OF_LINE> [dashes] <END_OF_LINE> tableBody ;


    footnote                ::=  [reference] paragraph ;


    orderedList             ::=  orderedListItem ( <END_OF_LINE> orderedListItem )* ;


    unorderedList           ::=  unorderedListItem ( <END_OF_LINE> unorderedListItem )* ;


    blockListing            ::=  blockListingStart blockText blockListingEnd ;


    paragraph               ::=  markedText ( <END_OF_LINE> markedText )* ;
    

    embedDirective          ::=  "@"<NO_WHITESPACE>"embed" [path] ;


    ignoreDirective         ::=  "@"<NO_WHITESPACE>"ignore" ;


    includeDirective        ::=  "@"<NO_WHITESPACE>"include" [path] ;


    contentsDirective       ::=  "@"<NO_WHITESPACE>"contents" [number]? ;


    footnotesDirective      ::=  "@"<NO_WHITESPACE>"footnotes" ;


    footnotesList           ::=  footnoteItem+ ;


    footnoteItem            ::=  anchor paragraph ;


    tableHead               ::=  tableHeadRow ;

    
    tableBody               ::=  tableBodyRow ;

    
    orderedListItem         ::=  [marker] markedText ( <END_OF_LINE> markedText )* ;
    
    
    unorderedListItem       ::=  [bullet] markedText ( <END_OF_LINE> markedText )* ;


    blockListingStart       ::=  [backticks] className? endOfLine ;


    blockListingEnd         ::=  [backticks] endOfLine ;


    tableHeadRow            ::=  [vertical-bar] tableHeadCell+ ;

    
    tableBodyRow            ::=  [vertical-bar] tableBodyCell+ ;


    blockText.              ::=  plainText ( endOfLine | plainText )+ ;
    

    tableHeadCell           ::=  emptyTableCell | tableCell ;


    tableBodyCell           ::=  emptyTableCell | tableCell ; 


    emptyTableCell          ::=  "." [vertical-bar];
    

    tableCell.              ::=  markedText... [vertical-bar] ;
    
    
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
                              
                              |  [number] 
                              
                              |  [path] 
                              
                              |  [identifier] 
                              
                              |  [word] 
                              
                              |  [special] 
                              
                              |  [unassigned] 
                              
                              ;
    

    anchor.                 ::=  [identifier] ;
    

    className               ::=  <NO_WHITESPACE>[identifier] ;
      
`;

export default bnf;
