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


    blockListing            ::=  blockListingStart endOfLine blockText endOfLine blockListingEnd ;


    paragraph               ::=  markedText ( <END_OF_LINE> markedText )* ;
    

    embedDirective          ::=  "@embed" [path] ;


    ignoreDirective         ::=  "@ignore" ;


    includeDirective        ::=  "@include" [path] ;


    contentsDirective       ::=  "@contents" [number]? ;


    footnotesDirective      ::=  "@footnotes" ;


    footnotesList           ::=  footnoteItem+ ;


    footnoteItem            ::=  anchor paragraph ;


    tableHead               ::=  tableHeadRow ;

    
    tableBody               ::=  tableBodyRow ( <END_OF_LINE> tableBodyRow )* ;

    
    orderedListItem         ::=  [marker] markedText ( <END_OF_LINE> markedText )* ;
    
    
    unorderedListItem       ::=  [bullet] markedText ( <END_OF_LINE> markedText )* ;


    blockListingStart       ::=  [backticks] className? ;


    blockListingEnd         ::=  [backticks] ;


    tableHeadRow            ::=  [vertical-bar] tableHeadCell+ ;

    
    tableBodyRow            ::=  [vertical-bar] tableBodyCell+ ;


    tableHeadCell           ::=  emptyTableCell | tableCell ;


    tableBodyCell           ::=  emptyTableCell | tableCell ; 


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
                                
                                 | [url] 

                                 | [dashes] 
    
                                 | [vertical-bar] 
    
                                 | [email-address] )+ ( <END_OF_LINE>+ ( plainText 
                                                                    
                                                                       | [url] 
  
                                                                       | [dashes] 
  
                                                                       | [vertical-bar] 
  
                                                                       | [email-address] )+ )* ;
    

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
