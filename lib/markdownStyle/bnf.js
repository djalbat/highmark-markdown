"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const bnf = `

    document       ::=  ( ruleSet | declaration | verbatim | error )+ ;


    
    ruleSet..      ::=  selectorsList "{" ( ruleSet | declaration | verbatim | nonsense )* "}" ;
    

    
    declaration    ::=  name ":" values ";" ;
    

    
    verbatim.      ::=  [backticks] content... [backticks] ;



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

    nonsense.      ::=  [string-literal] | [escaped] | [rule-name] | [number] | [colour] | [unit] | [name] | [special] | [unassigned] ;

    
    error.         ::=  . ;

`;
const _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93blN0eWxlL2JuZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgYm5mID0gYFxuXG4gICAgZG9jdW1lbnQgICAgICAgOjo9ICAoIHJ1bGVTZXQgfCBkZWNsYXJhdGlvbiB8IHZlcmJhdGltIHwgZXJyb3IgKSsgO1xuXG5cbiAgICBcbiAgICBydWxlU2V0Li4gICAgICA6Oj0gIHNlbGVjdG9yc0xpc3QgXCJ7XCIgKCBydWxlU2V0IHwgZGVjbGFyYXRpb24gfCB2ZXJiYXRpbSB8IG5vbnNlbnNlICkqIFwifVwiIDtcbiAgICBcblxuICAgIFxuICAgIGRlY2xhcmF0aW9uICAgIDo6PSAgbmFtZSBcIjpcIiB2YWx1ZXMgXCI7XCIgO1xuICAgIFxuXG4gICAgXG4gICAgdmVyYmF0aW0uICAgICAgOjo9ICBbYmFja3RpY2tzXSBjb250ZW50Li4uIFtiYWNrdGlja3NdIDtcblxuXG5cbiAgICBzZWxlY3RvcnNMaXN0ICA6Oj0gIHNlbGVjdG9ycyAoIFwiLFwiIHNlbGVjdG9ycyApKiA7XG5cbiAgICBzZWxlY3RvcnMgICAgICA6Oj0gIHNlbGVjdG9yKyA7XG5cbiAgICBzZWxlY3RvciAgICAgICA6Oj0gIHJ1bGVOYW1lIGNsYXNzKiBwc2V1ZG9DbGFzcyogXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICB8ICBjbGFzcysgcHNldWRvQ2xhc3MqXG5cbiAgICAgICAgICAgICAgICAgICAgIHwgIHBzZXVkb0NsYXNzK1xuXG4gICAgICAgICAgICAgICAgICAgICA7XG5cblxuICAgIFxuICAgIHJ1bGVOYW1lLiAgICAgIDo6PSAgW3J1bGUtbmFtZV0gO1xuICAgIFxuICAgIGNsYXNzLiAgICAgICAgIDo6PSAgPE5PX1dISVRFU1BBQ0U+XCIuXCI8Tk9fV0hJVEVTUEFDRT5pZGVudGlmaWVyIDtcbiAgICBcbiAgICBwc2V1ZG9DbGFzcy4gICA6Oj0gIDxOT19XSElURVNQQUNFPlwiOlwiPE5PX1dISVRFU1BBQ0U+aWRlbnRpZmllciA7XG4gICAgXG4gICAgdmFsdWVzICAgICAgICAgOjo9ICB2YWx1ZSsgO1xuICAgIFxuICAgIG5hbWUuICAgICAgICAgIDo6PSAgaWRlbnRpZmllciA7XG4gICAgXG4gICAgdmFsdWUuICAgICAgICAgOjo9ICBpZGVudGlmaWVyICggPE5PX1dISVRFU1BBQ0U+XCIoXCIgYXJndW1lbnRzIFwiKVwiICk/XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICB8ICBhbW91bnRcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgIHwgIHN0cmluZyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgfCAgY29sb3VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgYXJndW1lbnRzICAgICAgOjo9ICBhcmd1bWVudCAoIFwiLFwiIGFyZ3VtZW50ICkqIDtcblxuICAgIGFyZ3VtZW50ICAgICAgIDo6PSAgaWRlbnRpZmllciB8IGFtb3VudCB8IHN0cmluZyB8IGNvbG91ciA7XG5cbiAgICBpZGVudGlmaWVyICAgICA6Oj0gICggW3J1bGUtbmFtZV0gfCBbbmFtZV0gKSAoIDxOT19XSElURVNQQUNFPlwiLVwiPE5PX1dISVRFU1BBQ0U+KCBbcnVsZS1uYW1lXSB8IFtuYW1lXSApICkqIDtcbiAgICBcbiAgICBhbW91bnQgICAgICAgICA6Oj0gIFtudW1iZXJdICggPE5PX1dISVRFU1BBQ0U+W3VuaXRdICk/IDtcblxuICAgIHN0cmluZyAgICAgICAgIDo6PSAgW3N0cmluZy1saXRlcmFsXSA7IFxuXG4gICAgY29sb3VyICAgICAgICAgOjo9ICBbY29sb3VyXSA7XG5cbiAgICBjb250ZW50ICAgICAgICA6Oj0gIHN0dWZmKyA7XG5cblxuICAgIHN0dWZmLiAgICAgICAgIDo6PSAgW3N0cmluZy1saXRlcmFsXSB8IFtlc2NhcGVkXSB8IFtydWxlLW5hbWVdIHwgW251bWJlcl0gfCBbY29sb3VyXSB8IFt1bml0XSB8IFtuYW1lXSB8IFtzcGVjaWFsXSB8IFt1bmFzc2lnbmVkXSB8IFticmFja2V0XSA7XG5cbiAgICBub25zZW5zZS4gICAgICA6Oj0gIFtzdHJpbmctbGl0ZXJhbF0gfCBbZXNjYXBlZF0gfCBbcnVsZS1uYW1lXSB8IFtudW1iZXJdIHwgW2NvbG91cl0gfCBbdW5pdF0gfCBbbmFtZV0gfCBbc3BlY2lhbF0gfCBbdW5hc3NpZ25lZF0gO1xuXG4gICAgXG4gICAgZXJyb3IuICAgICAgICAgOjo9ICAuIDtcblxuYDtcblxuZXhwb3J0IGRlZmF1bHQgYm5mO1xuIl0sIm5hbWVzIjpbImJuZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBK0VBOzs7ZUFBQTs7O0FBN0VBLE1BQU1BLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkViLENBQUM7TUFFRCxXQUFlQSJ9