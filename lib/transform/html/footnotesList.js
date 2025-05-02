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
var _footnotes = /*#__PURE__*/ _interop_require_default(require("../../node/html/list/footnotes"));
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
    _create_class(FootnotesListHTMLTransform, [
        {
            key: "appendToDivisionHTMLNode",
            value: function appendToDivisionHTMLNode(divisionHTMLNode) {
                var parentHTMLNode = divisionHTMLNode;
                this.appendTo(parentHTMLNode);
            }
        }
    ], [
        {
            key: "fromFootnoteItemHTMLTransforms",
            value: function fromFootnoteItemHTMLTransforms(footnoteItemHTMLTransforms) {
                var footnotesListHTMLNode = _footnotes.default.fromFootnoteItemHTMLTransforms(footnoteItemHTMLTransforms), htmlNode = footnotesListHTMLNode, footnotesListHTMLTransform = _html.default.fromHTNLNOde(FootnotesListHTMLTransform, htmlNode);
                return footnotesListHTMLTransform;
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
 //   footnoteItemHTMLTransforms = [];
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
 //       const footnoteItemHTMLTransform = FootnoteItemHTMLTransform.fromFootnoteHTMLTransformAndIdentifier(footnoteHTMLTransform, identifier, context);
 //
 //       footnoteItemHTMLTransforms.push(footnoteItemHTMLTransform);
 //
 //       footnoteHTMLTransform.setNumber(number);
 //
 //       number++;
 //     }
 //   }
 // });
 //
 // const footnotesListHTMLNode = FootnotesListHTMLNode.fromFootnoteItemHTMLTransformsAndStart(footnoteItemHTMLTransforms, start),
 //   node = footnotesListHTMLNode, ///
 //   tokens = [];
(_html.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC9mb290bm90ZXNMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWxcIjtcbmltcG9ydCBGb290bm90ZXNMaXN0SFRNTE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvaHRtbC9saXN0L2Zvb3Rub3Rlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSBleHRlbmRzIEhUTUxUcmFuc2Zvcm0ge1xuICBhcHBlbmRUb0RpdmlzaW9uSFRNTE5vZGUoZGl2aXNpb25IVE1MTm9kZSkge1xuICAgIGNvbnN0IHBhcmVudEhUTUxOb2RlID0gZGl2aXNpb25IVE1MTm9kZTtcblxuICAgIHRoaXMuYXBwZW5kVG8ocGFyZW50SFRNTE5vZGUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Gb290bm90ZUl0ZW1IVE1MVHJhbnNmb3Jtcyhmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3Jtcykge1xuICAgIGNvbnN0IGZvb3Rub3Rlc0xpc3RIVE1MTm9kZSA9IEZvb3Rub3Rlc0xpc3RIVE1MTm9kZS5mcm9tRm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMoZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMpLFxuICAgICAgICAgIGh0bWxOb2RlID0gZm9vdG5vdGVzTGlzdEhUTUxOb2RlLCAvLy9cbiAgICAgICAgICBmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSA9IEhUTUxUcmFuc2Zvcm0uZnJvbUhUTkxOT2RlKEZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtLCBodG1sTm9kZSk7XG5cbiAgICByZXR1cm4gZm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm07XG4gIH1cbn1cblxuLy8gZnVuY3Rpb24gc3RhcnRGcm9tRm9vdG5vdGVIVE1MVHJhbnNmb3JtTWFwKGZvb3Rub3RlSFRNTFRyYW5zZm9ybU1hcCkge1xuLy8gICBjb25zdCBmb290bm90ZUhUTUxUcmFuc2Zvcm1zID0gT2JqZWN0LnZhbHVlcyhmb290bm90ZUhUTUxUcmFuc2Zvcm1NYXApLCAgLy8vXG4vLyAgICAgICAgIG51bWJlcmVkRm9vdG5vdGVIVE1MVHJhbnNmb3JtcyA9IGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMuZmlsdGVyKChmb290bm90ZUhUTUxUcmFuc2Zvcm0pID0+IHtcbi8vICAgICAgICAgICBjb25zdCBmb290bm90ZUhUTUxUcmFuc2Zvcm1OdW1iZXJlZCA9IGZvb3Rub3RlSFRNTFRyYW5zZm9ybS5pc051bWJlcmVkKCk7XG4vL1xuLy8gICAgICAgICAgIGlmIChmb290bm90ZUhUTUxUcmFuc2Zvcm1OdW1iZXJlZCkge1xuLy8gICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICB9KSxcbi8vICAgICAgICAgbnVtYmVyZWRGb290bm90ZUhUTUxUcmFuc2Zvcm1zTGVuZ3RoID0gbnVtYmVyZWRGb290bm90ZUhUTUxUcmFuc2Zvcm1zLmxlbmd0aCxcbi8vICAgICAgICAgc3RhcnQgPSBudW1iZXJlZEZvb3Rub3RlSFRNTFRyYW5zZm9ybXNMZW5ndGggKyAxO1xuLy9cbi8vICAgcmV0dXJuIHN0YXJ0O1xuLy8gfVxuXG4vLyBjb25zdCBub2RlID0gZGl2aXNpb25IVE1MTm9kZSwgIC8vL1xuLy8gICBzdGFydCA9IDAsXG4vLyAgIGZvb3Rub3RlTGlua0hUTUxOb2RlcyA9IGZvb3Rub3RlTGlua0hUTUxOb2Rlc0Zyb21Ob2RlKG5vZGUpLFxuLy8gICBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyA9IFtdO1xuLy9cbi8vIGxldCBudW1iZXIgPSBzdGFydDtcbi8vXG4vLyBmb290bm90ZUxpbmtIVE1MTm9kZXMuZm9yRWFjaCgoZm9vdG5vdGVMaW5rSFRNTE5vZGUpID0+IHtcbi8vICAgY29uc3QgaWRlbnRpZmllciA9IGZvb3Rub3RlTGlua0hUTUxOb2RlLmlkZW50aWZpZXIoY29udGV4dCksXG4vLyAgICAgZm9vdG5vdGVIVE1MVHJhbnNmb3JtID0gZm9vdG5vdGVIVE1MVHJhbnNmb3JtTWFwW2lkZW50aWZpZXJdIHx8IG51bGw7XG4vL1xuLy8gICBpZiAoZm9vdG5vdGVIVE1MVHJhbnNmb3JtICE9PSBudWxsKSB7XG4vLyAgICAgY29uc3QgZm9vdG5vdGVIVE1MVHJhbnNmb3JtVW5udW1iZXJlZCA9IGZvb3Rub3RlSFRNTFRyYW5zZm9ybS5pc1VubnVtYmVyZWQoKTtcbi8vXG4vLyAgICAgaWYgKGZvb3Rub3RlSFRNTFRyYW5zZm9ybVVubnVtYmVyZWQpIHtcbi8vICAgICAgIGNvbnN0IGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm0gPSBGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtLmZyb21Gb290bm90ZUhUTUxUcmFuc2Zvcm1BbmRJZGVudGlmaWVyKGZvb3Rub3RlSFRNTFRyYW5zZm9ybSwgaWRlbnRpZmllciwgY29udGV4dCk7XG4vL1xuLy8gICAgICAgZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMucHVzaChmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtKTtcbi8vXG4vLyAgICAgICBmb290bm90ZUhUTUxUcmFuc2Zvcm0uc2V0TnVtYmVyKG51bWJlcik7XG4vL1xuLy8gICAgICAgbnVtYmVyKys7XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9KTtcbi8vXG4vLyBjb25zdCBmb290bm90ZXNMaXN0SFRNTE5vZGUgPSBGb290bm90ZXNMaXN0SFRNTE5vZGUuZnJvbUZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zQW5kU3RhcnQoZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMsIHN0YXJ0KSxcbi8vICAgbm9kZSA9IGZvb3Rub3Rlc0xpc3RIVE1MTm9kZSwgLy8vXG4vLyAgIHRva2VucyA9IFtdO1xuIl0sIm5hbWVzIjpbIkZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtIiwiYXBwZW5kVG9EaXZpc2lvbkhUTUxOb2RlIiwiZGl2aXNpb25IVE1MTm9kZSIsInBhcmVudEhUTUxOb2RlIiwiYXBwZW5kVG8iLCJmcm9tRm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMiLCJmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyIsImZvb3Rub3Rlc0xpc3RIVE1MTm9kZSIsIkZvb3Rub3Rlc0xpc3RIVE1MTm9kZSIsImh0bWxOb2RlIiwiZm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0iLCJIVE1MVHJhbnNmb3JtIiwiZnJvbUhUTkxOT2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUtxQkE7OzsyREFISztnRUFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQixJQUFBLEFBQU1BLDJDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLHlCQUF5QkMsZ0JBQWdCO2dCQUN2QyxJQUFNQyxpQkFBaUJEO2dCQUV2QixJQUFJLENBQUNFLFFBQVEsQ0FBQ0Q7WUFDaEI7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsK0JBQStCQywwQkFBMEI7Z0JBQzlELElBQU1DLHdCQUF3QkMsa0JBQXFCLENBQUNILDhCQUE4QixDQUFDQyw2QkFDN0VHLFdBQVdGLHVCQUNYRyw2QkFBNkJDLGFBQWEsQ0FBQ0MsWUFBWSxDQVY1Q1osNEJBVXlFUztnQkFFMUYsT0FBT0M7WUFDVDs7O1dBYm1CVjtFQWdCckIseUVBQXlFO0NBQ3pFLGlGQUFpRjtDQUNqRixzR0FBc0c7Q0FDdEcsc0ZBQXNGO0NBQ3RGLEVBQUU7Q0FDRixpREFBaUQ7Q0FDakQsMkJBQTJCO0NBQzNCLGNBQWM7Q0FDZCxjQUFjO0NBQ2Qsd0ZBQXdGO0NBQ3hGLDREQUE0RDtDQUM1RCxFQUFFO0NBQ0Ysa0JBQWtCO0NBQ2xCLElBQUk7Q0FFSixzQ0FBc0M7Q0FDdEMsZUFBZTtDQUNmLGlFQUFpRTtDQUNqRSxxQ0FBcUM7Q0FDckMsRUFBRTtDQUNGLHNCQUFzQjtDQUN0QixFQUFFO0NBQ0YsNERBQTREO0NBQzVELGlFQUFpRTtDQUNqRSw0RUFBNEU7Q0FDNUUsRUFBRTtDQUNGLDBDQUEwQztDQUMxQyxvRkFBb0Y7Q0FDcEYsRUFBRTtDQUNGLDZDQUE2QztDQUM3Qyx3SkFBd0o7Q0FDeEosRUFBRTtDQUNGLG9FQUFvRTtDQUNwRSxFQUFFO0NBQ0YsaURBQWlEO0NBQ2pELEVBQUU7Q0FDRixrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLE1BQU07Q0FDTixNQUFNO0NBQ04sRUFBRTtDQUNGLGlJQUFpSTtDQUNqSSxzQ0FBc0M7Q0FDdEMsaUJBQWlCO0NBM0R1Q1csYUFBYSJ9