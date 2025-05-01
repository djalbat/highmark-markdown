"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnotesListHTMLTransform;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../transform/html"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var FootnotesListHTMLTransform = /*#__PURE__*/ function(HTMLTransform) {
    _inherits(FootnotesListHTMLTransform, HTMLTransform);
    function FootnotesListHTMLTransform() {
        _class_call_check(this, FootnotesListHTMLTransform);
        return _call_super(this, FootnotesListHTMLTransform, arguments);
    }
    _create_class(FootnotesListHTMLTransform, null, [
        {
            key: "fromFootnoteHTMLTransforms",
            value: function fromFootnoteHTMLTransforms(footnotesItemHTMLTransforms, context) {
                debugger;
            // footnotesItemHTMLTransforms.forEach((footnotesItemHTMLTransform) => {
            //   footnotesItemHTMLTransform.getTokens(tokens);
            // });
            //
            // const footnotesListHTMLTransform = HTMLTransform.fromNodeAndTokens(FootnotesListHTMLTransform, node, tokens);
            //
            // return footnotesListHTMLTransform;
            }
        }
    ]);
    return FootnotesListHTMLTransform;
} // function startFromFootnoteHTMLTransformMap(footnoteHTMLTransformMap) {
 //   const footnoteHTMLTransforms = Object.values(footnoteHTMLTransformMap),  ///
 //         numberedFootnoteHTMLTransforms = footnoteHTMLTransforms.filter((footnoteHTMLTransform) => {
 //           const footnoteHTMLTransformNumbered = footnoteHTMLTransform.isNumbered();
 //
 //           if (footnoteHTMLTransformNumbered) {
 //             return true;
 //           }
 //         }),
 //         numberedFootnoteHTMLTransformsLength = numberedFootnoteHTMLTransforms.length,
 //         start = numberedFootnoteHTMLTransformsLength + 1;
 //
 //   return start;
 // }
 // const node = divisionHTMLNode,  ///
 //   start = 0,
 //   footnoteLinkHTMLNodes = footnoteLinkHTMLNodesFromNode(node),
 //   footnotesItemHTMLTransforms = [];
 //
 // let number = start;
 //
 // footnoteLinkHTMLNodes.forEach((footnoteLinkHTMLNode) => {
 //   const identifier = footnoteLinkHTMLNode.identifier(context),
 //     footnoteHTMLTransform = footnoteHTMLTransformMap[identifier] || null;
 //
 //   if (footnoteHTMLTransform !== null) {
 //     const footnoteHTMLTransformUnnumbered = footnoteHTMLTransform.isUnnumbered();
 //
 //     if (footnoteHTMLTransformUnnumbered) {
 //       const footnotesItemHTMLTransform = FootnotesItemHTMLTransform.fromFootnoteHTMLTransformAndIdentifier(footnoteHTMLTransform, identifier, context);
 //
 //       footnotesItemHTMLTransforms.push(footnotesItemHTMLTransform);
 //
 //       footnoteHTMLTransform.setNumber(number);
 //
 //       number++;
 //     }
 //   }
 // });
 //
 // const footnotesListHTMLNode = FootnotesListHTMLNode.fromFootnotesItemHTMLTransformsAndStart(footnotesItemHTMLTransforms, start),
 //   node = footnotesListHTMLNode, ///
 //   tokens = [];
(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9mb290bm90ZXNMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWxcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSBleHRlbmRzIEhUTUxUcmFuc2Zvcm0ge1xuICBzdGF0aWMgZnJvbUZvb3Rub3RlSFRNTFRyYW5zZm9ybXMoZm9vdG5vdGVzSXRlbUhUTUxUcmFuc2Zvcm1zLCBjb250ZXh0KSB7XG5cbiAgICBkZWJ1Z2dlclxuXG4gICAgLy8gZm9vdG5vdGVzSXRlbUhUTUxUcmFuc2Zvcm1zLmZvckVhY2goKGZvb3Rub3Rlc0l0ZW1IVE1MVHJhbnNmb3JtKSA9PiB7XG4gICAgLy8gICBmb290bm90ZXNJdGVtSFRNTFRyYW5zZm9ybS5nZXRUb2tlbnModG9rZW5zKTtcbiAgICAvLyB9KTtcbiAgICAvL1xuICAgIC8vIGNvbnN0IGZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtID0gSFRNTFRyYW5zZm9ybS5mcm9tTm9kZUFuZFRva2VucyhGb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSwgbm9kZSwgdG9rZW5zKTtcbiAgICAvL1xuICAgIC8vIHJldHVybiBmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybTtcbiAgfVxufVxuXG4vLyBmdW5jdGlvbiBzdGFydEZyb21Gb290bm90ZUhUTUxUcmFuc2Zvcm1NYXAoZm9vdG5vdGVIVE1MVHJhbnNmb3JtTWFwKSB7XG4vLyAgIGNvbnN0IGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMgPSBPYmplY3QudmFsdWVzKGZvb3Rub3RlSFRNTFRyYW5zZm9ybU1hcCksICAvLy9cbi8vICAgICAgICAgbnVtYmVyZWRGb290bm90ZUhUTUxUcmFuc2Zvcm1zID0gZm9vdG5vdGVIVE1MVHJhbnNmb3Jtcy5maWx0ZXIoKGZvb3Rub3RlSFRNTFRyYW5zZm9ybSkgPT4ge1xuLy8gICAgICAgICAgIGNvbnN0IGZvb3Rub3RlSFRNTFRyYW5zZm9ybU51bWJlcmVkID0gZm9vdG5vdGVIVE1MVHJhbnNmb3JtLmlzTnVtYmVyZWQoKTtcbi8vXG4vLyAgICAgICAgICAgaWYgKGZvb3Rub3RlSFRNTFRyYW5zZm9ybU51bWJlcmVkKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgIH0pLFxuLy8gICAgICAgICBudW1iZXJlZEZvb3Rub3RlSFRNTFRyYW5zZm9ybXNMZW5ndGggPSBudW1iZXJlZEZvb3Rub3RlSFRNTFRyYW5zZm9ybXMubGVuZ3RoLFxuLy8gICAgICAgICBzdGFydCA9IG51bWJlcmVkRm9vdG5vdGVIVE1MVHJhbnNmb3Jtc0xlbmd0aCArIDE7XG4vL1xuLy8gICByZXR1cm4gc3RhcnQ7XG4vLyB9XG5cbi8vIGNvbnN0IG5vZGUgPSBkaXZpc2lvbkhUTUxOb2RlLCAgLy8vXG4vLyAgIHN0YXJ0ID0gMCxcbi8vICAgZm9vdG5vdGVMaW5rSFRNTE5vZGVzID0gZm9vdG5vdGVMaW5rSFRNTE5vZGVzRnJvbU5vZGUobm9kZSksXG4vLyAgIGZvb3Rub3Rlc0l0ZW1IVE1MVHJhbnNmb3JtcyA9IFtdO1xuLy9cbi8vIGxldCBudW1iZXIgPSBzdGFydDtcbi8vXG4vLyBmb290bm90ZUxpbmtIVE1MTm9kZXMuZm9yRWFjaCgoZm9vdG5vdGVMaW5rSFRNTE5vZGUpID0+IHtcbi8vICAgY29uc3QgaWRlbnRpZmllciA9IGZvb3Rub3RlTGlua0hUTUxOb2RlLmlkZW50aWZpZXIoY29udGV4dCksXG4vLyAgICAgZm9vdG5vdGVIVE1MVHJhbnNmb3JtID0gZm9vdG5vdGVIVE1MVHJhbnNmb3JtTWFwW2lkZW50aWZpZXJdIHx8IG51bGw7XG4vL1xuLy8gICBpZiAoZm9vdG5vdGVIVE1MVHJhbnNmb3JtICE9PSBudWxsKSB7XG4vLyAgICAgY29uc3QgZm9vdG5vdGVIVE1MVHJhbnNmb3JtVW5udW1iZXJlZCA9IGZvb3Rub3RlSFRNTFRyYW5zZm9ybS5pc1VubnVtYmVyZWQoKTtcbi8vXG4vLyAgICAgaWYgKGZvb3Rub3RlSFRNTFRyYW5zZm9ybVVubnVtYmVyZWQpIHtcbi8vICAgICAgIGNvbnN0IGZvb3Rub3Rlc0l0ZW1IVE1MVHJhbnNmb3JtID0gRm9vdG5vdGVzSXRlbUhUTUxUcmFuc2Zvcm0uZnJvbUZvb3Rub3RlSFRNTFRyYW5zZm9ybUFuZElkZW50aWZpZXIoZm9vdG5vdGVIVE1MVHJhbnNmb3JtLCBpZGVudGlmaWVyLCBjb250ZXh0KTtcbi8vXG4vLyAgICAgICBmb290bm90ZXNJdGVtSFRNTFRyYW5zZm9ybXMucHVzaChmb290bm90ZXNJdGVtSFRNTFRyYW5zZm9ybSk7XG4vL1xuLy8gICAgICAgZm9vdG5vdGVIVE1MVHJhbnNmb3JtLnNldE51bWJlcihudW1iZXIpO1xuLy9cbi8vICAgICAgIG51bWJlcisrO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfSk7XG4vL1xuLy8gY29uc3QgZm9vdG5vdGVzTGlzdEhUTUxOb2RlID0gRm9vdG5vdGVzTGlzdEhUTUxOb2RlLmZyb21Gb290bm90ZXNJdGVtSFRNTFRyYW5zZm9ybXNBbmRTdGFydChmb290bm90ZXNJdGVtSFRNTFRyYW5zZm9ybXMsIHN0YXJ0KSxcbi8vICAgbm9kZSA9IGZvb3Rub3Rlc0xpc3RIVE1MTm9kZSwgLy8vXG4vLyAgIHRva2VucyA9IFtdO1xuIl0sIm5hbWVzIjpbIkZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtIiwiZnJvbUZvb3Rub3RlSFRNTFRyYW5zZm9ybXMiLCJmb290bm90ZXNJdGVtSFRNTFRyYW5zZm9ybXMiLCJjb250ZXh0IiwiSFRNTFRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7MkRBRks7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFWCxJQUFBLEFBQU1BLDJDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQSwyQkFBMkJDLDJCQUEyQixFQUFFQyxPQUFPO2dCQUVwRSxRQUFRO1lBRVIsd0VBQXdFO1lBQ3hFLGtEQUFrRDtZQUNsRCxNQUFNO1lBQ04sRUFBRTtZQUNGLGdIQUFnSDtZQUNoSCxFQUFFO1lBQ0YscUNBQXFDO1lBQ3ZDOzs7V0FabUJIO0VBZXJCLHlFQUF5RTtDQUN6RSxpRkFBaUY7Q0FDakYsc0dBQXNHO0NBQ3RHLHNGQUFzRjtDQUN0RixFQUFFO0NBQ0YsaURBQWlEO0NBQ2pELDJCQUEyQjtDQUMzQixjQUFjO0NBQ2QsY0FBYztDQUNkLHdGQUF3RjtDQUN4Riw0REFBNEQ7Q0FDNUQsRUFBRTtDQUNGLGtCQUFrQjtDQUNsQixJQUFJO0NBRUosc0NBQXNDO0NBQ3RDLGVBQWU7Q0FDZixpRUFBaUU7Q0FDakUsc0NBQXNDO0NBQ3RDLEVBQUU7Q0FDRixzQkFBc0I7Q0FDdEIsRUFBRTtDQUNGLDREQUE0RDtDQUM1RCxpRUFBaUU7Q0FDakUsNEVBQTRFO0NBQzVFLEVBQUU7Q0FDRiwwQ0FBMEM7Q0FDMUMsb0ZBQW9GO0NBQ3BGLEVBQUU7Q0FDRiw2Q0FBNkM7Q0FDN0MsMEpBQTBKO0NBQzFKLEVBQUU7Q0FDRixzRUFBc0U7Q0FDdEUsRUFBRTtDQUNGLGlEQUFpRDtDQUNqRCxFQUFFO0NBQ0Ysa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUixNQUFNO0NBQ04sTUFBTTtDQUNOLEVBQUU7Q0FDRixtSUFBbUk7Q0FDbkksc0NBQXNDO0NBQ3RDLGlCQUFpQjtDQTFEdUNJLGFBQWEifQ==