"use strict";

const bnf = `

    document                 ::=  division ;
    
    
    division                 ::=  ( subDivision | verticalSpace | error )+ ;
    
    
    subDivision..            ::=  directives 
    
                               |  container 

                               |  primaryHeading 

                               |  secondaryHeading 
                                   
                               |  tertiaryHeading 
                                   
                               |  quaternaryHeading 
                                   
                               |  table 
                                   
                               |  footnote
                                   
                               |  orderedList 
                                   
                               |  unorderedList 
                                   
                               |  blockListing 
                               
                               |  xmlElement 
      
                               |  paragraph 
                               
                               ;


    verticalSpace            ::=  endOfLine+ ;


    directives               ::=  indexDirective 
  
                               |  ignoreDirective 
  
                               |  contentsDirective 
  
                               |  footnotesDirective
                               
                               |  pageNumberDirective 
    
                               |  embedDirective ( endOfLine embedDirective )* 
                               
                               |  includeDirective ( endOfLine includeDirective )* 

                               ; 
  

    container.               ::=  [colons] className? <END_OF_LINE>+ ( primaryHeading 

                                                                     | secondaryHeading 
                                   
                                                                     | tertiaryHeading 
                                   
                                                                     | quaternaryHeading 
                                   
                                                                     | table 
                                   
                                                                     | footnote
                                   
                                                                     | orderedList 
                                   
                                                                     | unorderedList 
                                   
                                                                     | blockListing 
      
                                                                     | paragraph ) <END_OF_LINE>+ [colons] ;


    primaryHeading.          ::=  "#" line ;


    secondaryHeading.        ::=  "##" line ;


    tertiaryHeading.         ::=  "###" line ;
    
    
    quaternaryHeading.       ::=  "####" line ;


    table                    ::=  tableHead endOfLine tableDivider endOfLine tableBody ;


    footnote.                ::=  reference paragraph ;


    orderedList              ::=  orderedItem ( endOfLine orderedItem )* ;


    unorderedList            ::=  unorderedItem ( endOfLine unorderedItem )* ;


    blockListing             ::=  blockStart blockLine* blockEnd ;


    xmlElement               ::=  simpleXMLElement 
  
                               |  complexXMLElement
                                 
                               ;
                            
                               
    paragraph                ::=  line ( endOfLine line )* ;
    

    indexDirective           ::=  "@index" ;


    ignoreDirective          ::=  "@ignore" ;


    embedDirective           ::=  "@embed" ( path | nonsense ) ;


    includeDirective         ::=  "@include" ( path | nonsense ) ;


    contentsDirective        ::=  "@contents" ;


    footnotesDirective       ::=  "@footnotes" ;


    pageNumberDirective      ::=  "@pageNumber" ;


    simpleXMLElement         ::=  completeXMLTag ;


    complexXMLElement        ::=  startXMLTag ( xmlElement | xmlText )* endXMLTag ;


    completeXMLTag           ::=  "<"<NO_WHITESPACE>xmlName xmlAttribute* "/>" ;


    startXMLTag              ::=  "<"<NO_WHITESPACE>xmlName xmlAttribute* ">" ;


    endXMLTag                ::=  "</"<NO_WHITESPACE>xmlName ">" ;
  

    xmlAttribute             ::=  ( [identifier] | [word] )<NO_WHITESPACE>"="<NO_WHITESPACE>[string-literal] ;


    xmlName                  ::=  ( [identifier] | [word] ) ;


    xmlText                  ::=  ( [escaped] | [number] | [identifier] | [word] | [special] | [string-literal] | [unassigned] )+ ;
  
    
    tableHead                ::=  tableHeadRow ;
    
    
    tableBody                ::=  tableBodyRow ( endOfLine tableBodyRow )* ;

    
    orderedItem              ::=  [marker] line ( endOfLine line )* ;
    
    
    unorderedItem            ::=  [bullet] line ( endOfLine line )* ;


    tableHeadRow             ::=  tableCellDivider tableHeadCell+ ;

    
    tableBodyRow             ::=  tableCellDivider tableBodyCell+ ;


    tableHeadCell            ::=  emptyTableCell 
    
                               |  tableCell 
                              
                               ;


    tableBodyCell            ::=  emptyTableCell 
    
                               |  tableCell 
                              
                               ; 


    emptyTableCell           ::=  "." tableCellDivider ;
    

    tableCell                ::=  line tableCellDivider ;
    
    
    blockLine.               ::=  blockText* endOfLine ;
    

    line.                    ::=  ( inlineListing 
    
                                  | footnoteLink 
                                 
                                  | emailLink 
                                 
                                  | hyperlink 
                                 
                                  | image 
                                 
                                  | strongText 
                                 
                                  | emphasisedText 
                                 
                                  | stronglyEmphasisedText 
                                 
                                  | plainText )+ ;
    
    
    emailLink                ::=  "[" inlineText... "]"<NO_WHITESPACE>"(" [email-address] ")" 
    
                               |  [email-address] 
                              
                               ;


    hyperlink                ::=  "[" inlineText... "]"<NO_WHITESPACE>"(" [url] ")" 
    
                               |  [url]
                              
                               ;


    image                    ::=  "![" inlineText... "]"<NO_WHITESPACE>"(" path ")" ;


    strongText               ::=  "***" inlineText "***" ;


    emphasisedText           ::=  "**" inlineText "**" ;


    stronglyEmphasisedText   ::=  "****" inlineText "****" ;
    

    inlineText               ::=  plainText+ ;
    
    
    blockStart               ::=  [backticks] ( languageName ( ":" releaseName )? )? endOfLine ;


    blockEnd                 ::=  [backticks] ;


    className                ::=  <NO_WHITESPACE>[identifier] ;
    

    languageName             ::=  <NO_WHITESPACE>[identifier] ;
    

    releaseName              ::=  <NO_WHITESPACE>[identifier] ;
    

    blockText                ::=  [escaped] 
                              
                               |  [number] 
                              
                               |  [identifier] 
                              
                               |  [email-address]
                              
                               |  [url] 
                              
                               |  [path] 
                              
                               |  [word] 
                              
                               |  [special] 
                              
                               |  [string-literal]  
                                
                               |  [xml-delimiter]  
                                
                               |  [unassigned]  
                                
                               |  [dashes] 
 
                               |  [vertical-bar]
                              
                               ;
    

    plainText                ::=  [escaped] 
                              
                               |  [number] 
                              
                               |  [identifier] 
                              
                               |  [email-address]
                              
                               |  [url] 
                              
                               |  [path] 
                              
                               |  [word] 
                              
                               |  [special] 
                              
                               |  [string-literal] 
                              
                               |  [xml-delimiter]  
                                
                               |  [unassigned] 
                              
                               ;
    

    tableCellDivider.        ::=  [vertical-bar] ;
    
    
    tableDivider.            ::=  [dashes] ;
    
    
    inlineListing.           ::=  [backticked-literal] ;
    

    footnoteLink             ::=  [link] ;
    

    reference                ::=  [reference] ;
    

    path                     ::=  [path] ;

    
    nonsense.                ::=  ( [escaped] | [number] | [identifier] | [word] | [special] | [string-literal] | [xml-delimiter] | [unassigned] )+ ;


    endOfLine                ::=  <END_OF_LINE> ;


    error.                   ::=  . ;

`;

export default bnf;
