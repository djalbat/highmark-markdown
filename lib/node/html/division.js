"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DivisionHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
var _pageNumber = /*#__PURE__*/ _interop_require_default(require("../../transform/html/pageNumber"));
var _footnotes = /*#__PURE__*/ _interop_require_default(require("../../transform/html/list/footnotes"));
var _ruleNames = require("../../ruleNames");
var _division = require("../../utilities/division");
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
var DivisionHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(DivisionHTMLNode, HTMLNode);
    function DivisionHTMLNode(outerNode, parentNode, childNodes, domElement, divisionClassName) {
        _class_call_check(this, DivisionHTMLNode);
        var _this;
        _this = _call_super(this, DivisionHTMLNode, [
            outerNode,
            parentNode,
            childNodes,
            domElement
        ]);
        _this.divisionClassName = divisionClassName;
        return _this;
    }
    _create_class(DivisionHTMLNode, [
        {
            key: "getDivisionClassName",
            value: function getDivisionClassName() {
                return this.divisionClassName;
            }
        },
        {
            key: "className",
            value: function className(context) {
                var className = this.divisionClassName; ///
                return className;
            }
        },
        {
            key: "getRuleName",
            value: function getRuleName() {
                var ruleNme = _ruleNames.DIVISION_RULE_NAME;
                return ruleNme;
            }
        },
        {
            key: "resolve",
            value: function resolve(divisionHTMLNodes, context) {
                var node = this;
                (0, _division.removeNestedFootnoteLinkHTMLNodes)(node);
                var pageNumberDirectiveHTNLTransform = (0, _division.removePageNumberDirectiveHTMLNode)(node), footnotesDirectiveHTMLNode = (0, _division.removeFootnotesDirectiveHTMLNode)(node), footnoteHTMLTransforms = (0, _division.removeFootnoteHTMLNodes)(node);
                if (footnotesDirectiveHTMLNode !== null) {
                    (0, _division.addFootnoteHTMLNodes)(footnoteHTMLTransforms, node, context);
                }
                this.paginate(pageNumberDirectiveHTNLTransform, divisionHTMLNodes, context);
            }
        },
        {
            key: "paginate",
            value: function paginate(pageNumberDirectiveHTNLTransform, divisionHTMLNodes, context) {
                var node = this, outerNode = this.getOuterNode(), pageNumbers = pageNumberDirectiveHTNLTransform !== null, identifierMap = {}, divisionClassName = outerNode.className(context);
                var htmlNodes = (0, _division.removeHTMLNodes)(node), groupedHTMLNodesArray = (0, _division.groupHTMLNodes)(htmlNodes), paginatedHTMLNodesArray = (0, _division.paginateGroupedHTMLNodes)(groupedHTMLNodesArray, context);
                paginatedHTMLNodesArray.forEach(function(paginatedHTMLNodes) {
                    var pageNumber;
                    pageNumber = context.pageNumber;
                    var divisionHTMLNode = DivisionHTMLNode.fromPaginatedHTMLNodesAndDivisionClassName(paginatedHTMLNodes, divisionClassName);
                    divisionHTMLNode.resolveFootnotes(identifierMap, context);
                    if (pageNumbers) {
                        var pageNumberHTMLTransform = _pageNumber.default.fromPageNumber(pageNumber);
                        pageNumberHTMLTransform.appendToDivisionHTMLNode(divisionHTMLNode);
                    }
                    divisionHTMLNodes.push(divisionHTMLNode);
                    pageNumber++;
                    Object.assign(context, {
                        pageNumber: pageNumber
                    });
                });
            }
        },
        {
            key: "resolveFootnotes",
            value: function resolveFootnotes(identifierMap, context) {
                var node = this, footnoteHTMLTransforms = (0, _division.removeFootnoteHTMLNodes)(node), footnoteHTMLTransformsLength = footnoteHTMLTransforms.length;
                if (footnoteHTMLTransformsLength === 0) {
                    return;
                }
                var divisionHTMLNode = node, start = (0, _division.numberFootnoteLinkHTMLNodes)(footnoteHTMLTransforms, identifierMap, node, context), lineHTMLTransforms = (0, _division.lineHTMLTransformsFromFootnoteHTMLTransforms)(footnoteHTMLTransforms), footnoteItemHTMLTransforms = (0, _division.footnoteItemHTMLTransformsFromLineHTMLTransforms)(lineHTMLTransforms, identifierMap, start), footnotesListHTMLTransform = _footnotes.default.fromStartAndFootnoteItemHTMLTransforms(start, footnoteItemHTMLTransforms);
                footnotesListHTMLTransform.appendToDivisionHTMLNode(divisionHTMLNode);
            }
        },
        {
            key: "asString",
            value: function asString() {
                var ruleName = this.getRuleName(), string = ruleName; ///
                return string;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var divisionClassName = null, divisionHTMLNode = _html.default.fromNothing(DivisionHTMLNode, divisionClassName);
                return divisionHTMLNode;
            }
        },
        {
            key: "fromOuterNode",
            value: function fromOuterNode(outerNode) {
                var divisionClassName = null, divisionHTMLNode = _html.default.fromOuterNode(DivisionHTMLNode, outerNode, divisionClassName);
                return divisionHTMLNode;
            }
        },
        {
            key: "fromPaginatedHTMLNodesAndDivisionClassName",
            value: function fromPaginatedHTMLNodesAndDivisionClassName(paginatedHTMLNodes, divisionClassName) {
                var childNodes = paginatedHTMLNodes, divisionHTMLNode = _html.default.fromChildNodes(DivisionHTMLNode, childNodes, divisionClassName);
                return divisionHTMLNode;
            }
        }
    ]);
    return DivisionHTMLNode;
}(_html.default);
_define_property(DivisionHTMLNode, "tagName", "div");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvZGl2aXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sXCI7XG5pbXBvcnQgUGFnZU51bWJlckhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL3BhZ2VOdW1iZXJcIjtcbmltcG9ydCBGb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWwvbGlzdC9mb290bm90ZXNcIjtcblxuaW1wb3J0IHsgRElWSVNJT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgZ3JvdXBIVE1MTm9kZXMsXG4gICAgICAgICByZW1vdmVIVE1MTm9kZXMsXG4gICAgICAgICBhZGRGb290bm90ZUhUTUxOb2RlcyxcbiAgICAgICAgIHJlbW92ZUZvb3Rub3RlSFRNTE5vZGVzLFxuICAgICAgICAgcGFnaW5hdGVHcm91cGVkSFRNTE5vZGVzLFxuICAgICAgICAgbnVtYmVyRm9vdG5vdGVMaW5rSFRNTE5vZGVzLFxuICAgICAgICAgcmVtb3ZlRm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUsXG4gICAgICAgICByZW1vdmVQYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGUsXG4gICAgICAgICByZW1vdmVOZXN0ZWRGb290bm90ZUxpbmtIVE1MTm9kZXMsXG4gICAgICAgICBsaW5lSFRNTFRyYW5zZm9ybXNGcm9tRm9vdG5vdGVIVE1MVHJhbnNmb3JtcyxcbiAgICAgICAgIGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zRnJvbUxpbmVIVE1MVHJhbnNmb3JtcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZGl2aXNpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2aXNpb25IVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgY29uc3RydWN0b3Iob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBkb21FbGVtZW50LCBkaXZpc2lvbkNsYXNzTmFtZSkge1xuICAgIHN1cGVyKG91dGVyTm9kZSwgcGFyZW50Tm9kZSwgY2hpbGROb2RlcywgZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBnZXREaXZpc2lvbkNsYXNzTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIGNsYXNzTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5kaXZpc2lvbkNsYXNzTmFtZTsgLy8vXG5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgZ2V0UnVsZU5hbWUoKSB7XG4gICAgY29uc3QgcnVsZU5tZSA9IERJVklTSU9OX1JVTEVfTkFNRTtcblxuICAgIHJldHVybiBydWxlTm1lO1xuICB9XG5cbiAgcmVzb2x2ZShkaXZpc2lvbkhUTUxOb2RlcywgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzO1xuXG4gICAgcmVtb3ZlTmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzKG5vZGUpO1xuXG4gICAgY29uc3QgcGFnZU51bWJlckRpcmVjdGl2ZUhUTkxUcmFuc2Zvcm0gPSByZW1vdmVQYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGUobm9kZSksXG4gICAgICAgICAgZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUgPSByZW1vdmVGb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZShub2RlKSxcbiAgICAgICAgICBmb290bm90ZUhUTUxUcmFuc2Zvcm1zID0gcmVtb3ZlRm9vdG5vdGVIVE1MTm9kZXMobm9kZSk7XG5cbiAgICBpZiAoZm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGFkZEZvb3Rub3RlSFRNTE5vZGVzKGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMsIG5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHRoaXMucGFnaW5hdGUocGFnZU51bWJlckRpcmVjdGl2ZUhUTkxUcmFuc2Zvcm0sIGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KTtcbiAgfVxuXG4gIHBhZ2luYXRlKHBhZ2VOdW1iZXJEaXJlY3RpdmVIVE5MVHJhbnNmb3JtLCBkaXZpc2lvbkhUTUxOb2RlcywgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgb3V0ZXJOb2RlID0gdGhpcy5nZXRPdXRlck5vZGUoKSxcbiAgICAgICAgICBwYWdlTnVtYmVycyA9IChwYWdlTnVtYmVyRGlyZWN0aXZlSFROTFRyYW5zZm9ybSAhPT0gbnVsbCksXG4gICAgICAgICAgaWRlbnRpZmllck1hcCA9IHt9LFxuICAgICAgICAgIGRpdmlzaW9uQ2xhc3NOYW1lID0gb3V0ZXJOb2RlLmNsYXNzTmFtZShjb250ZXh0KTtcblxuICAgIGNvbnN0IGh0bWxOb2RlcyA9IHJlbW92ZUhUTUxOb2Rlcyhub2RlKSxcbiAgICAgICAgICBncm91cGVkSFRNTE5vZGVzQXJyYXkgPSBncm91cEhUTUxOb2RlcyhodG1sTm9kZXMpLFxuICAgICAgICAgIHBhZ2luYXRlZEhUTUxOb2Rlc0FycmF5ID0gcGFnaW5hdGVHcm91cGVkSFRNTE5vZGVzKGdyb3VwZWRIVE1MTm9kZXNBcnJheSwgY29udGV4dCk7XG5cbiAgICBwYWdpbmF0ZWRIVE1MTm9kZXNBcnJheS5mb3JFYWNoKChwYWdpbmF0ZWRIVE1MTm9kZXMpID0+IHtcbiAgICAgIGxldCBwYWdlTnVtYmVyO1xuXG4gICAgICAoeyBwYWdlTnVtYmVyIH0gPSBjb250ZXh0KTtcblxuICAgICAgY29uc3QgZGl2aXNpb25IVE1MTm9kZSA9IERpdmlzaW9uSFRNTE5vZGUuZnJvbVBhZ2luYXRlZEhUTUxOb2Rlc0FuZERpdmlzaW9uQ2xhc3NOYW1lKHBhZ2luYXRlZEhUTUxOb2RlcywgZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgICBkaXZpc2lvbkhUTUxOb2RlLnJlc29sdmVGb290bm90ZXMoaWRlbnRpZmllck1hcCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChwYWdlTnVtYmVycykge1xuICAgICAgICBjb25zdCBwYWdlTnVtYmVySFRNTFRyYW5zZm9ybSA9IFBhZ2VOdW1iZXJIVE1MVHJhbnNmb3JtLmZyb21QYWdlTnVtYmVyKHBhZ2VOdW1iZXIpO1xuXG4gICAgICAgIHBhZ2VOdW1iZXJIVE1MVHJhbnNmb3JtLmFwcGVuZFRvRGl2aXNpb25IVE1MTm9kZShkaXZpc2lvbkhUTUxOb2RlKTtcbiAgICAgIH1cblxuICAgICAgZGl2aXNpb25IVE1MTm9kZXMucHVzaChkaXZpc2lvbkhUTUxOb2RlKTtcblxuICAgICAgcGFnZU51bWJlcisrO1xuXG4gICAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgcGFnZU51bWJlclxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZXNvbHZlRm9vdG5vdGVzKGlkZW50aWZpZXJNYXAsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMgPSByZW1vdmVGb290bm90ZUhUTUxOb2Rlcyhub2RlKSxcbiAgICAgICAgICBmb290bm90ZUhUTUxUcmFuc2Zvcm1zTGVuZ3RoID0gZm9vdG5vdGVIVE1MVHJhbnNmb3Jtcy5sZW5ndGg7XG5cbiAgICBpZiAoZm9vdG5vdGVIVE1MVHJhbnNmb3Jtc0xlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRpdmlzaW9uSFRNTE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgc3RhcnQgPSBudW1iZXJGb290bm90ZUxpbmtIVE1MTm9kZXMoZm9vdG5vdGVIVE1MVHJhbnNmb3JtcywgaWRlbnRpZmllck1hcCwgbm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbGluZUhUTUxUcmFuc2Zvcm1zID0gbGluZUhUTUxUcmFuc2Zvcm1zRnJvbUZvb3Rub3RlSFRNTFRyYW5zZm9ybXMoZm9vdG5vdGVIVE1MVHJhbnNmb3JtcyksXG4gICAgICAgICAgZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMgPSBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3Jtc0Zyb21MaW5lSFRNTFRyYW5zZm9ybXMobGluZUhUTUxUcmFuc2Zvcm1zLCBpZGVudGlmaWVyTWFwLCBzdGFydCksXG4gICAgICAgICAgZm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0gPSBGb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybS5mcm9tU3RhcnRBbmRGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyhzdGFydCwgZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMpO1xuXG4gICAgZm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0uYXBwZW5kVG9EaXZpc2lvbkhUTUxOb2RlKGRpdmlzaW9uSFRNTE5vZGUpO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgc3RyaW5nID0gcnVsZU5hbWU7ICAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGRpdmlzaW9uQ2xhc3NOYW1lID0gbnVsbCxcbiAgICAgICAgICBkaXZpc2lvbkhUTUxOb2RlID0gSFRNTE5vZGUuZnJvbU5vdGhpbmcoRGl2aXNpb25IVE1MTm9kZSwgZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uSFRNTE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU91dGVyTm9kZShvdXRlck5vZGUpIHtcbiAgICBjb25zdCBkaXZpc2lvbkNsYXNzTmFtZSA9IG51bGwsXG4gICAgICAgICAgZGl2aXNpb25IVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21PdXRlck5vZGUoRGl2aXNpb25IVE1MTm9kZSwgb3V0ZXJOb2RlLCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25IVE1MTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFnaW5hdGVkSFRNTE5vZGVzQW5kRGl2aXNpb25DbGFzc05hbWUocGFnaW5hdGVkSFRNTE5vZGVzLCBkaXZpc2lvbkNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBwYWdpbmF0ZWRIVE1MTm9kZXMsICAvLy9cbiAgICAgICAgICBkaXZpc2lvbkhUTUxOb2RlID0gSFRNTE5vZGUuZnJvbUNoaWxkTm9kZXMoRGl2aXNpb25IVE1MTm9kZSwgY2hpbGROb2RlcywgZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uSFRNTE5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEaXZpc2lvbkhUTUxOb2RlIiwib3V0ZXJOb2RlIiwicGFyZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJkb21FbGVtZW50IiwiZGl2aXNpb25DbGFzc05hbWUiLCJnZXREaXZpc2lvbkNsYXNzTmFtZSIsImNsYXNzTmFtZSIsImNvbnRleHQiLCJnZXRSdWxlTmFtZSIsInJ1bGVObWUiLCJESVZJU0lPTl9SVUxFX05BTUUiLCJyZXNvbHZlIiwiZGl2aXNpb25IVE1MTm9kZXMiLCJub2RlIiwicmVtb3ZlTmVzdGVkRm9vdG5vdGVMaW5rSFRNTE5vZGVzIiwicGFnZU51bWJlckRpcmVjdGl2ZUhUTkxUcmFuc2Zvcm0iLCJyZW1vdmVQYWdlTnVtYmVyRGlyZWN0aXZlSFRNTE5vZGUiLCJmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSIsInJlbW92ZUZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlIiwiZm9vdG5vdGVIVE1MVHJhbnNmb3JtcyIsInJlbW92ZUZvb3Rub3RlSFRNTE5vZGVzIiwiYWRkRm9vdG5vdGVIVE1MTm9kZXMiLCJwYWdpbmF0ZSIsImdldE91dGVyTm9kZSIsInBhZ2VOdW1iZXJzIiwiaWRlbnRpZmllck1hcCIsImh0bWxOb2RlcyIsInJlbW92ZUhUTUxOb2RlcyIsImdyb3VwZWRIVE1MTm9kZXNBcnJheSIsImdyb3VwSFRNTE5vZGVzIiwicGFnaW5hdGVkSFRNTE5vZGVzQXJyYXkiLCJwYWdpbmF0ZUdyb3VwZWRIVE1MTm9kZXMiLCJmb3JFYWNoIiwicGFnaW5hdGVkSFRNTE5vZGVzIiwicGFnZU51bWJlciIsImRpdmlzaW9uSFRNTE5vZGUiLCJmcm9tUGFnaW5hdGVkSFRNTE5vZGVzQW5kRGl2aXNpb25DbGFzc05hbWUiLCJyZXNvbHZlRm9vdG5vdGVzIiwicGFnZU51bWJlckhUTUxUcmFuc2Zvcm0iLCJQYWdlTnVtYmVySFRNTFRyYW5zZm9ybSIsImZyb21QYWdlTnVtYmVyIiwiYXBwZW5kVG9EaXZpc2lvbkhUTUxOb2RlIiwicHVzaCIsIk9iamVjdCIsImFzc2lnbiIsImZvb3Rub3RlSFRNTFRyYW5zZm9ybXNMZW5ndGgiLCJsZW5ndGgiLCJzdGFydCIsIm51bWJlckZvb3Rub3RlTGlua0hUTUxOb2RlcyIsImxpbmVIVE1MVHJhbnNmb3JtcyIsImxpbmVIVE1MVHJhbnNmb3Jtc0Zyb21Gb290bm90ZUhUTUxUcmFuc2Zvcm1zIiwiZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMiLCJmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3Jtc0Zyb21MaW5lSFRNTFRyYW5zZm9ybXMiLCJmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSIsIkZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtIiwiZnJvbVN0YXJ0QW5kRm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXMiLCJhc1N0cmluZyIsInJ1bGVOYW1lIiwic3RyaW5nIiwiZnJvbU5vdGhpbmciLCJIVE1MTm9kZSIsImZyb21PdXRlck5vZGUiLCJmcm9tQ2hpbGROb2RlcyIsInRhZ05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBbUJxQkE7OzsyREFqQkE7aUVBQ2U7Z0VBQ0c7eUJBRUo7d0JBVzhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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