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


    primaryHeading.         ::=  "#" markedText ;


    secondaryHeading.       ::=  "##" markedText ;


    tertiaryHeading.        ::=  "###" markedText ;
    
    
    quaternaryHeading.      ::=  "####" markedText ;


    table                   ::=  tableHead endOfLine [dashes] endOfLine tableBody ;


    footnote                ::=  [reference] paragraph ;


    orderedList             ::=  orderedListItem ( endOfLine orderedListItem )* ;


    unorderedList           ::=  unorderedListItem ( endOfLine unorderedListItem )* ;


    blockListing            ::=  blockListingStart endOfLine blockText endOfLine blockListingEnd ;


    paragraph               ::=  markedText ( endOfLine markedText )* ;
    

    embedDirective          ::=  "@embed" [path] ;


    ignoreDirective         ::=  "@ignore" ;


    includeDirective        ::=  "@include" [path] ;


    contentsDirective       ::=  "@contents" [number]? ;


    footnotesDirective      ::=  "@footnotes" ;


    footnotesList           ::=  footnoteItem+ ;


    footnoteItem            ::=  anchor paragraph ;


    tableHead               ::=  tableHeadRow ;

    
    tableBody               ::=  tableBodyRow ( endOfLine tableBodyRow )* ;

    
    orderedListItem.        ::=  [marker] markedText ( endOfLine markedText )* ;
    
    
    unorderedListItem.      ::=  [bullet] markedText ( endOfLine markedText )* ;


    blockListingStart       ::=  [backticks] className? ;


    blockListingEnd         ::=  [backticks] ;


    tableHeadRow            ::=  [vertical-bar] tableHeadCell+ ;

    
    tableBodyRow            ::=  [vertical-bar] tableBodyCell+ ;


    tableHeadCell.          ::=  emptyTableCell | tableCell ;


    tableBodyCell.          ::=  emptyTableCell | tableCell ; 


    emptyTableCell          ::=  "." [vertical-bar];
    

    tableCell.              ::=  markedText... [vertical-bar] ;
    
    
    markedText              ::=  ( link 
    
                                 | emailLink 
                                 
                                 | hyperlink 
                                 
                                 | image 
                                 
                                 | inlineListing 
                                 
                                 | stronglyEmphasisedText 
                                 
                                 | emphasisedText 
                                 
                                 | strongText 
                                 
                                 | plainText )+ ;


    link.                   ::=  "[^" [identifier] "]" ;
    

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


    blockText.              ::=  ( plainText 
                                
                                 | [dashes] 
    
                                 | [vertical-bar] )+ ( <END_OF_LINE>+ ( plainText 
                                                                    
                                                                      | [dashes] 
  
                                                                      | [vertical-bar] )+ )* ;
    

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
    

    anchor.                 ::=  [identifier] ;
    

    className               ::=  <NO_WHITESPACE>[identifier] ;
      
`;

export default bnf;
