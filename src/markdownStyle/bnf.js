"use strict";

const bnf = `

    markdownStyle  ::=  ( ruleSet | declaration | verbatim | error )+ ;

    
    ruleSet..      ::=  selectorsList "{" ( ruleSet | declaration | nonsense )* "}" ;
    
    
    declaration    ::=  name ":" values ";" ;
    
    
    verbatim.      ::=  [backticks] [target] content [backticks] ;


    selectorsList  ::=  selectors ( "," selectors )* ;


    selectors      ::=  selector+ ;


    selector       ::=  ruleName class* pseudoClass* 
    
                     |  class+ pseudoClass*

                     |  pseudoClass+

                     ;

    
    ruleName.      ::=  [rule-name] ;

    
    class.         ::=  <NO_WHITESPACE>"."<NO_WHITESPACE>identifier ;

    
    pseudoClass.   ::=  <NO_WHITESPACE>":"<NO_WHITESPACE>identifier ;
    
    
    values         ::=  value+ ;

    
    name.          ::=  identifier ;

    
    value.         ::=  identifier ( <NO_WHITESPACE>"(" arguments ")" )?
    
                     |  amount
    
                     |  string 
                              
                     |  colour
                              
                     ;
                     

    arguments      ::=  argument ( "," argument )* ;
    

    argument       ::=  identifier | amount | string | colour ;


    identifier     ::=  ( [rule-name] | [name] ) ( <NO_WHITESPACE>"-"<NO_WHITESPACE>( [rule-name] | [name] ) )* ;

    
    amount         ::=  [number] ( <NO_WHITESPACE>[unit] )? ;


    string         ::=  [string-literal] ; 


    colour         ::=  [colour] ;


    content        ::=  stuff+ ;


    stuff.         ::=  [string-literal] | [escaped] | [rule-name] | [number] | [colour] | [unit] | [name] | [special] | [unassigned] | [bracket] ;


    nonsense.      ::=  [string-literal] | [escaped] | [rule-name] | [number] | [colour] | [unit] | [name] | [special] | [unassigned] | [target] ;

    
    error.         ::=  . ;

`;

export default bnf;
