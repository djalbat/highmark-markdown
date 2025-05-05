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
var _footnotesList = /*#__PURE__*/ _interop_require_default(require("../../transform/html/footnotesList"));
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
                var divisionHTMLNode = node, start = (0, _division.numberFootnoteLinkHTMLNodes)(footnoteHTMLTransforms, identifierMap, node, context), lineHTMLTransforms = (0, _division.lineHTMLTransformsFromFootnoteHTMLTransforms)(footnoteHTMLTransforms), footnoteItemHTMLTransforms = (0, _division.footnoteItemHTMLTransformsFromLineHTMLTransforms)(lineHTMLTransforms, identifierMap, start), footnotesListHTMLTransform = _footnotesList.default.fromStartAndFootnoteItemHTMLTransforms(start, footnoteItemHTMLTransforms);
                footnotesListHTMLTransform.appendToDivisionHTMLNode(divisionHTMLNode);
            }
        },
        {
            key: "asString",
            value: function asString() {
                var string = _ruleNames.DIVISION_RULE_NAME; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvZGl2aXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9odG1sXCI7XG5pbXBvcnQgUGFnZU51bWJlckhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL3BhZ2VOdW1iZXJcIjtcbmltcG9ydCBGb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWwvZm9vdG5vdGVzTGlzdFwiO1xuXG5pbXBvcnQgeyBESVZJU0lPTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBncm91cEhUTUxOb2RlcyxcbiAgICAgICAgIHJlbW92ZUhUTUxOb2RlcyxcbiAgICAgICAgIGFkZEZvb3Rub3RlSFRNTE5vZGVzLFxuICAgICAgICAgcmVtb3ZlRm9vdG5vdGVIVE1MTm9kZXMsXG4gICAgICAgICBwYWdpbmF0ZUdyb3VwZWRIVE1MTm9kZXMsXG4gICAgICAgICBudW1iZXJGb290bm90ZUxpbmtIVE1MTm9kZXMsXG4gICAgICAgICByZW1vdmVGb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSxcbiAgICAgICAgIHJlbW92ZVBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZSxcbiAgICAgICAgIHJlbW92ZU5lc3RlZEZvb3Rub3RlTGlua0hUTUxOb2RlcyxcbiAgICAgICAgIGxpbmVIVE1MVHJhbnNmb3Jtc0Zyb21Gb290bm90ZUhUTUxUcmFuc2Zvcm1zLFxuICAgICAgICAgZm9vdG5vdGVJdGVtSFRNTFRyYW5zZm9ybXNGcm9tTGluZUhUTUxUcmFuc2Zvcm1zIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9kaXZpc2lvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXZpc2lvbkhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBjb25zdHJ1Y3RvcihvdXRlck5vZGUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIGRvbUVsZW1lbnQsIGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgc3VwZXIob3V0ZXJOb2RlLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBkb21FbGVtZW50KTtcblxuICAgIHRoaXMuZGl2aXNpb25DbGFzc05hbWUgPSBkaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIGdldERpdmlzaW9uQ2xhc3NOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgY2xhc3NOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lOyAvLy9cblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBydWxlTm1lID0gRElWSVNJT05fUlVMRV9OQU1FO1xuXG4gICAgcmV0dXJuIHJ1bGVObWU7XG4gIH1cblxuICByZXNvbHZlKGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXM7XG5cbiAgICByZW1vdmVOZXN0ZWRGb290bm90ZUxpbmtIVE1MTm9kZXMobm9kZSk7XG5cbiAgICBjb25zdCBwYWdlTnVtYmVyRGlyZWN0aXZlSFROTFRyYW5zZm9ybSA9IHJlbW92ZVBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZShub2RlKSxcbiAgICAgICAgICBmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSA9IHJlbW92ZUZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlKG5vZGUpLFxuICAgICAgICAgIGZvb3Rub3RlSFRNTFRyYW5zZm9ybXMgPSByZW1vdmVGb290bm90ZUhUTUxOb2Rlcyhub2RlKTtcblxuICAgIGlmIChmb290bm90ZXNEaXJlY3RpdmVIVE1MTm9kZSAhPT0gbnVsbCkge1xuICAgICAgYWRkRm9vdG5vdGVIVE1MTm9kZXMoZm9vdG5vdGVIVE1MVHJhbnNmb3Jtcywgbm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgdGhpcy5wYWdpbmF0ZShwYWdlTnVtYmVyRGlyZWN0aXZlSFROTFRyYW5zZm9ybSwgZGl2aXNpb25IVE1MTm9kZXMsIGNvbnRleHQpO1xuICB9XG5cbiAgcGFnaW5hdGUocGFnZU51bWJlckRpcmVjdGl2ZUhUTkxUcmFuc2Zvcm0sIGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBvdXRlck5vZGUgPSB0aGlzLmdldE91dGVyTm9kZSgpLFxuICAgICAgICAgIHBhZ2VOdW1iZXJzID0gKHBhZ2VOdW1iZXJEaXJlY3RpdmVIVE5MVHJhbnNmb3JtICE9PSBudWxsKSxcbiAgICAgICAgICBpZGVudGlmaWVyTWFwID0ge30sXG4gICAgICAgICAgZGl2aXNpb25DbGFzc05hbWUgPSBvdXRlck5vZGUuY2xhc3NOYW1lKGNvbnRleHQpO1xuXG4gICAgY29uc3QgaHRtbE5vZGVzID0gcmVtb3ZlSFRNTE5vZGVzKG5vZGUpLFxuICAgICAgICAgIGdyb3VwZWRIVE1MTm9kZXNBcnJheSA9IGdyb3VwSFRNTE5vZGVzKGh0bWxOb2RlcyksXG4gICAgICAgICAgcGFnaW5hdGVkSFRNTE5vZGVzQXJyYXkgPSBwYWdpbmF0ZUdyb3VwZWRIVE1MTm9kZXMoZ3JvdXBlZEhUTUxOb2Rlc0FycmF5LCBjb250ZXh0KTtcblxuICAgIHBhZ2luYXRlZEhUTUxOb2Rlc0FycmF5LmZvckVhY2goKHBhZ2luYXRlZEhUTUxOb2RlcykgPT4ge1xuICAgICAgbGV0IHBhZ2VOdW1iZXI7XG5cbiAgICAgICh7IHBhZ2VOdW1iZXIgfSA9IGNvbnRleHQpO1xuXG4gICAgICBjb25zdCBkaXZpc2lvbkhUTUxOb2RlID0gRGl2aXNpb25IVE1MTm9kZS5mcm9tUGFnaW5hdGVkSFRNTE5vZGVzQW5kRGl2aXNpb25DbGFzc05hbWUocGFnaW5hdGVkSFRNTE5vZGVzLCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICAgIGRpdmlzaW9uSFRNTE5vZGUucmVzb2x2ZUZvb3Rub3RlcyhpZGVudGlmaWVyTWFwLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHBhZ2VOdW1iZXJzKSB7XG4gICAgICAgIGNvbnN0IHBhZ2VOdW1iZXJIVE1MVHJhbnNmb3JtID0gUGFnZU51bWJlckhUTUxUcmFuc2Zvcm0uZnJvbVBhZ2VOdW1iZXIocGFnZU51bWJlcik7XG5cbiAgICAgICAgcGFnZU51bWJlckhUTUxUcmFuc2Zvcm0uYXBwZW5kVG9EaXZpc2lvbkhUTUxOb2RlKGRpdmlzaW9uSFRNTE5vZGUpO1xuICAgICAgfVxuXG4gICAgICBkaXZpc2lvbkhUTUxOb2Rlcy5wdXNoKGRpdmlzaW9uSFRNTE5vZGUpO1xuXG4gICAgICBwYWdlTnVtYmVyKys7XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgICBwYWdlTnVtYmVyXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc29sdmVGb290bm90ZXMoaWRlbnRpZmllck1hcCwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZm9vdG5vdGVIVE1MVHJhbnNmb3JtcyA9IHJlbW92ZUZvb3Rub3RlSFRNTE5vZGVzKG5vZGUpLFxuICAgICAgICAgIGZvb3Rub3RlSFRNTFRyYW5zZm9ybXNMZW5ndGggPSBmb290bm90ZUhUTUxUcmFuc2Zvcm1zLmxlbmd0aDtcblxuICAgIGlmIChmb290bm90ZUhUTUxUcmFuc2Zvcm1zTGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGl2aXNpb25IVE1MTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICBzdGFydCA9IG51bWJlckZvb3Rub3RlTGlua0hUTUxOb2Rlcyhmb290bm90ZUhUTUxUcmFuc2Zvcm1zLCBpZGVudGlmaWVyTWFwLCBub2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBsaW5lSFRNTFRyYW5zZm9ybXMgPSBsaW5lSFRNTFRyYW5zZm9ybXNGcm9tRm9vdG5vdGVIVE1MVHJhbnNmb3Jtcyhmb290bm90ZUhUTUxUcmFuc2Zvcm1zKSxcbiAgICAgICAgICBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyA9IGZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zRnJvbUxpbmVIVE1MVHJhbnNmb3JtcyhsaW5lSFRNTFRyYW5zZm9ybXMsIGlkZW50aWZpZXJNYXAsIHN0YXJ0KSxcbiAgICAgICAgICBmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybSA9IEZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtLmZyb21TdGFydEFuZEZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zKHN0YXJ0LCBmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3Jtcyk7XG5cbiAgICBmb290bm90ZXNMaXN0SFRNTFRyYW5zZm9ybS5hcHBlbmRUb0RpdmlzaW9uSFRNTE5vZGUoZGl2aXNpb25IVE1MTm9kZSk7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBESVZJU0lPTl9SVUxFX05BTUU7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgZGl2aXNpb25DbGFzc05hbWUgPSBudWxsLFxuICAgICAgICAgIGRpdmlzaW9uSFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tTm90aGluZyhEaXZpc2lvbkhUTUxOb2RlLCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25IVE1MTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkge1xuICAgIGNvbnN0IGRpdmlzaW9uQ2xhc3NOYW1lID0gbnVsbCxcbiAgICAgICAgICBkaXZpc2lvbkhUTUxOb2RlID0gSFRNTE5vZGUuZnJvbU91dGVyTm9kZShEaXZpc2lvbkhUTUxOb2RlLCBvdXRlck5vZGUsIGRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgIHJldHVybiBkaXZpc2lvbkhUTUxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYWdpbmF0ZWRIVE1MTm9kZXNBbmREaXZpc2lvbkNsYXNzTmFtZShwYWdpbmF0ZWRIVE1MTm9kZXMsIGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHBhZ2luYXRlZEhUTUxOb2RlcywgIC8vL1xuICAgICAgICAgIGRpdmlzaW9uSFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tQ2hpbGROb2RlcyhEaXZpc2lvbkhUTUxOb2RlLCBjaGlsZE5vZGVzLCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25IVE1MTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRpdmlzaW9uSFRNTE5vZGUiLCJvdXRlck5vZGUiLCJwYXJlbnROb2RlIiwiY2hpbGROb2RlcyIsImRvbUVsZW1lbnQiLCJkaXZpc2lvbkNsYXNzTmFtZSIsImdldERpdmlzaW9uQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiY29udGV4dCIsImdldFJ1bGVOYW1lIiwicnVsZU5tZSIsIkRJVklTSU9OX1JVTEVfTkFNRSIsInJlc29sdmUiLCJkaXZpc2lvbkhUTUxOb2RlcyIsIm5vZGUiLCJyZW1vdmVOZXN0ZWRGb290bm90ZUxpbmtIVE1MTm9kZXMiLCJwYWdlTnVtYmVyRGlyZWN0aXZlSFROTFRyYW5zZm9ybSIsInJlbW92ZVBhZ2VOdW1iZXJEaXJlY3RpdmVIVE1MTm9kZSIsImZvb3Rub3Rlc0RpcmVjdGl2ZUhUTUxOb2RlIiwicmVtb3ZlRm9vdG5vdGVzRGlyZWN0aXZlSFRNTE5vZGUiLCJmb290bm90ZUhUTUxUcmFuc2Zvcm1zIiwicmVtb3ZlRm9vdG5vdGVIVE1MTm9kZXMiLCJhZGRGb290bm90ZUhUTUxOb2RlcyIsInBhZ2luYXRlIiwiZ2V0T3V0ZXJOb2RlIiwicGFnZU51bWJlcnMiLCJpZGVudGlmaWVyTWFwIiwiaHRtbE5vZGVzIiwicmVtb3ZlSFRNTE5vZGVzIiwiZ3JvdXBlZEhUTUxOb2Rlc0FycmF5IiwiZ3JvdXBIVE1MTm9kZXMiLCJwYWdpbmF0ZWRIVE1MTm9kZXNBcnJheSIsInBhZ2luYXRlR3JvdXBlZEhUTUxOb2RlcyIsImZvckVhY2giLCJwYWdpbmF0ZWRIVE1MTm9kZXMiLCJwYWdlTnVtYmVyIiwiZGl2aXNpb25IVE1MTm9kZSIsImZyb21QYWdpbmF0ZWRIVE1MTm9kZXNBbmREaXZpc2lvbkNsYXNzTmFtZSIsInJlc29sdmVGb290bm90ZXMiLCJwYWdlTnVtYmVySFRNTFRyYW5zZm9ybSIsIlBhZ2VOdW1iZXJIVE1MVHJhbnNmb3JtIiwiZnJvbVBhZ2VOdW1iZXIiLCJhcHBlbmRUb0RpdmlzaW9uSFRNTE5vZGUiLCJwdXNoIiwiT2JqZWN0IiwiYXNzaWduIiwiZm9vdG5vdGVIVE1MVHJhbnNmb3Jtc0xlbmd0aCIsImxlbmd0aCIsInN0YXJ0IiwibnVtYmVyRm9vdG5vdGVMaW5rSFRNTE5vZGVzIiwibGluZUhUTUxUcmFuc2Zvcm1zIiwibGluZUhUTUxUcmFuc2Zvcm1zRnJvbUZvb3Rub3RlSFRNTFRyYW5zZm9ybXMiLCJmb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyIsImZvb3Rub3RlSXRlbUhUTUxUcmFuc2Zvcm1zRnJvbUxpbmVIVE1MVHJhbnNmb3JtcyIsImZvb3Rub3Rlc0xpc3RIVE1MVHJhbnNmb3JtIiwiRm9vdG5vdGVzTGlzdEhUTUxUcmFuc2Zvcm0iLCJmcm9tU3RhcnRBbmRGb290bm90ZUl0ZW1IVE1MVHJhbnNmb3JtcyIsImFzU3RyaW5nIiwic3RyaW5nIiwiZnJvbU5vdGhpbmciLCJIVE1MTm9kZSIsImZyb21PdXRlck5vZGUiLCJmcm9tQ2hpbGROb2RlcyIsInRhZ05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBbUJxQkE7OzsyREFqQkE7aUVBQ2U7b0VBQ0c7eUJBRUo7d0JBVzhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRCxJQUFBLEFBQU1BLGlDQUFOO2NBQU1BO2FBQUFBLGlCQUNQQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLGlCQUFpQjtnQ0FEekRMOztnQkFFakIsa0JBRmlCQTtZQUVYQztZQUFXQztZQUFZQztZQUFZQzs7UUFFekMsTUFBS0MsaUJBQWlCLEdBQUdBOzs7a0JBSlJMOztZQU9uQk0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxpQkFBaUI7WUFDL0I7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsT0FBTztnQkFDZixJQUFNRCxZQUFZLElBQUksQ0FBQ0YsaUJBQWlCLEVBQUUsR0FBRztnQkFFN0MsT0FBT0U7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxVQUFVQyw2QkFBa0I7Z0JBRWxDLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsaUJBQWlCLEVBQUVMLE9BQU87Z0JBQ2hDLElBQU1NLE9BQU8sSUFBSTtnQkFFakJDLElBQUFBLDJDQUFpQyxFQUFDRDtnQkFFbEMsSUFBTUUsbUNBQW1DQyxJQUFBQSwyQ0FBaUMsRUFBQ0gsT0FDckVJLDZCQUE2QkMsSUFBQUEsMENBQWdDLEVBQUNMLE9BQzlETSx5QkFBeUJDLElBQUFBLGlDQUF1QixFQUFDUDtnQkFFdkQsSUFBSUksK0JBQStCLE1BQU07b0JBQ3ZDSSxJQUFBQSw4QkFBb0IsRUFBQ0Ysd0JBQXdCTixNQUFNTjtnQkFDckQ7Z0JBRUEsSUFBSSxDQUFDZSxRQUFRLENBQUNQLGtDQUFrQ0gsbUJBQW1CTDtZQUNyRTs7O1lBRUFlLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTUCxnQ0FBZ0MsRUFBRUgsaUJBQWlCLEVBQUVMLE9BQU87Z0JBQ25FLElBQU1NLE9BQU8sSUFBSSxFQUNYYixZQUFZLElBQUksQ0FBQ3VCLFlBQVksSUFDN0JDLGNBQWVULHFDQUFxQyxNQUNwRFUsZ0JBQWdCLENBQUMsR0FDakJyQixvQkFBb0JKLFVBQVVNLFNBQVMsQ0FBQ0M7Z0JBRTlDLElBQU1tQixZQUFZQyxJQUFBQSx5QkFBZSxFQUFDZCxPQUM1QmUsd0JBQXdCQyxJQUFBQSx3QkFBYyxFQUFDSCxZQUN2Q0ksMEJBQTBCQyxJQUFBQSxrQ0FBd0IsRUFBQ0gsdUJBQXVCckI7Z0JBRWhGdUIsd0JBQXdCRSxPQUFPLENBQUMsU0FBQ0M7b0JBQy9CLElBQUlDO29CQUVEQSxhQUFlM0IsUUFBZjJCO29CQUVILElBQU1DLG1CQUFtQnBDLEFBdkRWQSxpQkF1RDJCcUMsMENBQTBDLENBQUNILG9CQUFvQjdCO29CQUV6RytCLGlCQUFpQkUsZ0JBQWdCLENBQUNaLGVBQWVsQjtvQkFFakQsSUFBSWlCLGFBQWE7d0JBQ2YsSUFBTWMsMEJBQTBCQyxtQkFBdUIsQ0FBQ0MsY0FBYyxDQUFDTjt3QkFFdkVJLHdCQUF3Qkcsd0JBQXdCLENBQUNOO29CQUNuRDtvQkFFQXZCLGtCQUFrQjhCLElBQUksQ0FBQ1A7b0JBRXZCRDtvQkFFQVMsT0FBT0MsTUFBTSxDQUFDckMsU0FBUzt3QkFDckIyQixZQUFBQTtvQkFDRjtnQkFDRjtZQUNGOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQlosYUFBYSxFQUFFbEIsT0FBTztnQkFDckMsSUFBTU0sT0FBTyxJQUFJLEVBQ1hNLHlCQUF5QkMsSUFBQUEsaUNBQXVCLEVBQUNQLE9BQ2pEZ0MsK0JBQStCMUIsdUJBQXVCMkIsTUFBTTtnQkFFbEUsSUFBSUQsaUNBQWlDLEdBQUc7b0JBQ3RDO2dCQUNGO2dCQUVBLElBQU1WLG1CQUFtQnRCLE1BQ25Ca0MsUUFBUUMsSUFBQUEscUNBQTJCLEVBQUM3Qix3QkFBd0JNLGVBQWVaLE1BQU1OLFVBQ2pGMEMscUJBQXFCQyxJQUFBQSxzREFBNEMsRUFBQy9CLHlCQUNsRWdDLDZCQUE2QkMsSUFBQUEsMERBQWdELEVBQUNILG9CQUFvQnhCLGVBQWVzQixRQUNqSE0sNkJBQTZCQyxzQkFBMEIsQ0FBQ0Msc0NBQXNDLENBQUNSLE9BQU9JO2dCQUU1R0UsMkJBQTJCWix3QkFBd0IsQ0FBQ047WUFDdEQ7OztZQUVBcUIsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFNBQVMvQyw2QkFBa0IsRUFBRSxHQUFHO2dCQUV0QyxPQUFPK0M7WUFDVDs7OztZQUlPQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNdEQsb0JBQW9CLE1BQ3BCK0IsbUJBQW1Cd0IsYUFBUSxDQUFDRCxXQUFXLENBdkc1QjNELGtCQXVHK0NLO2dCQUVoRSxPQUFPK0I7WUFDVDs7O1lBRU95QixLQUFBQTttQkFBUCxTQUFPQSxjQUFjNUQsU0FBUztnQkFDNUIsSUFBTUksb0JBQW9CLE1BQ3BCK0IsbUJBQW1Cd0IsYUFBUSxDQUFDQyxhQUFhLENBOUc5QjdELGtCQThHaURDLFdBQVdJO2dCQUU3RSxPQUFPK0I7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ0gsa0JBQWtCLEVBQUU3QixpQkFBaUI7Z0JBQ3JGLElBQU1GLGFBQWErQixvQkFDYkUsbUJBQW1Cd0IsYUFBUSxDQUFDRSxjQUFjLENBckgvQjlELGtCQXFIa0RHLFlBQVlFO2dCQUUvRSxPQUFPK0I7WUFDVDs7O1dBeEhtQnBDO0VBQXlCNEQsYUFBUTtBQW1HcEQsaUJBbkdtQjVELGtCQW1HWitELFdBQVUifQ==