"use strict";

const bnf = `

    markdownStyle  ::=  ( ruleSet | declaration | nonsense | error )+ ;

    
    ruleSet..      ::=  selectorsList "{" ( ruleSet | declaration | nonsense )* "}" ;
    
    
    declaration    ::=  name ":" values ";" ;

    
    nonsense.      ::=  [string-literal] | [escaped] | [rule-name] | [number] | [colour] | [unit] | [name] | [special] | [unassigned] ;


    error.         ::=  . ;


    values         ::=  value+ ;

    
    selectorsList  ::=  selectors ( "," selectors )* ;


    selectors      ::=  selector+ ;


    selector       ::=  ruleName class* pseudoClass* 
    
                     |  class+ pseudoClass*

                     |  pseudoClass+

                     ;

    
    ruleName.      ::=  [rule-name] ;

    
    class.         ::=  <NO_WHITESPACE>"."<NO_WHITESPACE>identifier ;

    
    pseudoClass.   ::=  <NO_WHITESPACE>":"<NO_WHITESPACE>identifier ;
    
    
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


`;

export default bnf;
