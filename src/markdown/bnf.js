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


    completeXMLTag           ::=  "<"<NO_WHITESPACE>xmlTagName xmlAttribute* "/>" endOfLine* ;


    startXMLTag              ::=  "<"<NO_WHITESPACE>xmlTagName xmlAttribute* ">" endOfLine* ;


    endXMLTag                ::=  "</"<NO_WHITESPACE>xmlTagName ">" endOfLine* ;
  

    xmlText                  ::=  ( [escaped] | [number] | [special] | [string-literal] | [primary-identifier] | [secondary-identifier] | [unassigned] )+ endOfLine* ;
  
    
    xmlAttribute             ::=  xmlAttributeName<NO_WHITESPACE>"="<NO_WHITESPACE>xmlAttributeValue ;


    xmlTagName               ::=  ( [primary-identifier] | [secondary-identifier] ) ;
    
    
    xmlAttributeName         ::=  [primary-identifier] ( <NO_WHITESPACE>[secondary-identifier] )* ;


    xmlAttributeValue        ::=  [string-literal] ;


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


    className                ::=  <NO_WHITESPACE>[primary-identifier] ;
    

    languageName             ::=  <NO_WHITESPACE>[primary-identifier] ;
    

    releaseName              ::=  <NO_WHITESPACE>[primary-identifier] ;
    

    blockText                ::=  [escaped] 
                              
                               |  [number] 
                              
                               |  [email-address]
                              
                               |  [url] 
                              
                               |  [path] 
                              
                               |  [special] 
                              
                               |  [string-literal]  
                                
                               |  [primary-identifier] 
                              
                               |  [secondary-identifier] 
                              
                               |  [unassigned]  
                                
                               |  [dashes] 
 
                               |  [vertical-bar]
                              
                               ;
    

    plainText                ::=  [escaped] 
                              
                               |  [number] 
                              
                               |  [email-address]
                              
                               |  [url] 
                              
                               |  [path] 
                              
                               |  [special] 
                              
                               |  [string-literal] 
                              
                               |  [primary-identifier] 
                              
                               |  [secondary-identifier] 
                              
                               |  [unassigned] 
                              
                               ;
    

    tableCellDivider.        ::=  [vertical-bar] ;
    
    
    tableDivider.            ::=  [dashes] ;
    
    
    inlineListing.           ::=  [backticked-literal] ;
    

    footnoteLink             ::=  [link] ;
    

    reference                ::=  [reference] ;
    

    path                     ::=  [path] ;

    
    nonsense.                ::=  ( [escaped] | [number] | [special] | [string-literal] | [primary-identifier] | [secondary-identifier] | [unassigned] )+ ;


    endOfLine                ::=  <END_OF_LINE> ;


    error.                   ::=  . ;

`;

export default bnf;
