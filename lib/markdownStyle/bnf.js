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
    

    
    verbatim.      ::=  [backticks] target content... [backticks] ;



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

    target         ::=  <NO_WHITESPACE>[target] ;

    content        ::=  stuff+ ;


    stuff.         ::=  [string-literal] | [escaped] | [rule-name] | [number] | [colour] | [unit] | [name] | [special] | [unassigned] | [bracket] ;

    nonsense.      ::=  [string-literal] | [escaped] | [rule-name] | [number] | [colour] | [unit] | [name] | [special] | [unassigned] | [target] ;

    
    error.         ::=  . ;

`;
const _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXJrZG93blN0eWxlL2JuZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgYm5mID0gYFxuXG4gICAgZG9jdW1lbnQgICAgICAgOjo9ICAoIHJ1bGVTZXQgfCBkZWNsYXJhdGlvbiB8IHZlcmJhdGltIHwgZXJyb3IgKSsgO1xuXG5cbiAgICBcbiAgICBydWxlU2V0Li4gICAgICA6Oj0gIHNlbGVjdG9yc0xpc3QgXCJ7XCIgKCBydWxlU2V0IHwgZGVjbGFyYXRpb24gfCB2ZXJiYXRpbSB8IG5vbnNlbnNlICkqIFwifVwiIDtcbiAgICBcblxuICAgIFxuICAgIGRlY2xhcmF0aW9uICAgIDo6PSAgbmFtZSBcIjpcIiB2YWx1ZXMgXCI7XCIgO1xuICAgIFxuXG4gICAgXG4gICAgdmVyYmF0aW0uICAgICAgOjo9ICBbYmFja3RpY2tzXSB0YXJnZXQgY29udGVudC4uLiBbYmFja3RpY2tzXSA7XG5cblxuXG4gICAgc2VsZWN0b3JzTGlzdCAgOjo9ICBzZWxlY3RvcnMgKCBcIixcIiBzZWxlY3RvcnMgKSogO1xuXG4gICAgc2VsZWN0b3JzICAgICAgOjo9ICBzZWxlY3RvcisgO1xuXG4gICAgc2VsZWN0b3IgICAgICAgOjo9ICBydWxlTmFtZSBjbGFzcyogcHNldWRvQ2xhc3MqIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgfCAgY2xhc3MrIHBzZXVkb0NsYXNzKlxuXG4gICAgICAgICAgICAgICAgICAgICB8ICBwc2V1ZG9DbGFzcytcblxuICAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgICBcbiAgICBydWxlTmFtZS4gICAgICA6Oj0gIFtydWxlLW5hbWVdIDtcbiAgICBcbiAgICBjbGFzcy4gICAgICAgICA6Oj0gIDxOT19XSElURVNQQUNFPlwiLlwiPE5PX1dISVRFU1BBQ0U+aWRlbnRpZmllciA7XG4gICAgXG4gICAgcHNldWRvQ2xhc3MuICAgOjo9ICA8Tk9fV0hJVEVTUEFDRT5cIjpcIjxOT19XSElURVNQQUNFPmlkZW50aWZpZXIgO1xuICAgIFxuICAgIHZhbHVlcyAgICAgICAgIDo6PSAgdmFsdWUrIDtcbiAgICBcbiAgICBuYW1lLiAgICAgICAgICA6Oj0gIGlkZW50aWZpZXIgO1xuICAgIFxuICAgIHZhbHVlLiAgICAgICAgIDo6PSAgaWRlbnRpZmllciAoIDxOT19XSElURVNQQUNFPlwiKFwiIGFyZ3VtZW50cyBcIilcIiApP1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgfCAgYW1vdW50XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICB8ICBzdHJpbmcgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIHwgIGNvbG91clxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgICAgICBcblxuICAgIGFyZ3VtZW50cyAgICAgIDo6PSAgYXJndW1lbnQgKCBcIixcIiBhcmd1bWVudCApKiA7XG5cbiAgICBhcmd1bWVudCAgICAgICA6Oj0gIGlkZW50aWZpZXIgfCBhbW91bnQgfCBzdHJpbmcgfCBjb2xvdXIgO1xuXG4gICAgaWRlbnRpZmllciAgICAgOjo9ICAoIFtydWxlLW5hbWVdIHwgW25hbWVdICkgKCA8Tk9fV0hJVEVTUEFDRT5cIi1cIjxOT19XSElURVNQQUNFPiggW3J1bGUtbmFtZV0gfCBbbmFtZV0gKSApKiA7XG4gICAgXG4gICAgYW1vdW50ICAgICAgICAgOjo9ICBbbnVtYmVyXSAoIDxOT19XSElURVNQQUNFPlt1bml0XSApPyA7XG5cbiAgICBzdHJpbmcgICAgICAgICA6Oj0gIFtzdHJpbmctbGl0ZXJhbF0gOyBcblxuICAgIGNvbG91ciAgICAgICAgIDo6PSAgW2NvbG91cl0gO1xuXG4gICAgdGFyZ2V0ICAgICAgICAgOjo9ICA8Tk9fV0hJVEVTUEFDRT5bdGFyZ2V0XSA7XG5cbiAgICBjb250ZW50ICAgICAgICA6Oj0gIHN0dWZmKyA7XG5cblxuICAgIHN0dWZmLiAgICAgICAgIDo6PSAgW3N0cmluZy1saXRlcmFsXSB8IFtlc2NhcGVkXSB8IFtydWxlLW5hbWVdIHwgW251bWJlcl0gfCBbY29sb3VyXSB8IFt1bml0XSB8IFtuYW1lXSB8IFtzcGVjaWFsXSB8IFt1bmFzc2lnbmVkXSB8IFticmFja2V0XSA7XG5cbiAgICBub25zZW5zZS4gICAgICA6Oj0gIFtzdHJpbmctbGl0ZXJhbF0gfCBbZXNjYXBlZF0gfCBbcnVsZS1uYW1lXSB8IFtudW1iZXJdIHwgW2NvbG91cl0gfCBbdW5pdF0gfCBbbmFtZV0gfCBbc3BlY2lhbF0gfCBbdW5hc3NpZ25lZF0gfCBbdGFyZ2V0XSA7XG5cbiAgICBcbiAgICBlcnJvci4gICAgICAgICA6Oj0gIC4gO1xuXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBibmY7XG4iXSwibmFtZXMiOlsiYm5mIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpRkE7OztlQUFBOzs7QUEvRUEsTUFBTUEsTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZFYixDQUFDO01BRUQsV0FBZUEifQ==