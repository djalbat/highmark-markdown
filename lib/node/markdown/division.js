"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DivisionMarkdownNode;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _ignore = /*#__PURE__*/ _interop_require_default(require("../../transform/markdown/directive/ignore"));
var _query = require("../../utilities/query");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
var DivisionMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(DivisionMarkdownNode, MarkdownNode);
    function DivisionMarkdownNode(ruleName, parentNode, childNodes, opacity, precedence, divisionClassName) {
        _class_call_check(this, DivisionMarkdownNode);
        var _this;
        _this = _call_super(this, DivisionMarkdownNode, [
            ruleName,
            parentNode,
            childNodes,
            opacity,
            precedence
        ]);
        _this.divisionClassName = divisionClassName;
        return _this;
    }
    _create_class(DivisionMarkdownNode, [
        {
            key: "getDivisionClassName",
            value: function getDivisionClassName() {
                return this.divisionClassName;
            }
        },
        {
            key: "setDivisionClassName",
            value: function setDivisionClassName(divisionClassName) {
                this.divisionClassName = divisionClassName;
            }
        },
        {
            key: "isIgnored",
            value: function isIgnored() {
                var node = this, ignoreDirectiveMarkdownNode = (0, _query.ignoreDirectiveMarkdownNodeFromNode)(node), ignored = ignoreDirectiveMarkdownNode !== null;
                return ignored;
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
            key: "resolveIgnored",
            value: function resolveIgnored(topmostMarkdownNode, context) {
                var ignored = this.isIgnored();
                if (!ignored) {
                    return;
                }
                var divisionMarkdownNode = this, ignoreDirectiveMarkdownTransform = _ignore.default.fromDivisionMarkdownNode(divisionMarkdownNode);
                ignoreDirectiveMarkdownTransform.removeFromTopmostMarkdownNode(topmostMarkdownNode, context);
            }
        },
        {
            key: "resolveIncludes",
            value: function resolveIncludes(topmostMarkdownNode, context) {
                var node = this, includeDirectiveMarkdownNodes = (0, _query.includeDirectiveMarkdownNodesFromNode)(node), includeDirectiveMarkdownTransforms = includeDirectiveMarkdownNodes.reduce(function(includeDirectiveMarkdownTransforms, includeDirectiveMarkdownNode) {
                    var includeDirectiveMarkdownTransform = includeDirectiveMarkdownNode.resolveInclude(context);
                    if (includeDirectiveMarkdownTransform !== null) {
                        includeDirectiveMarkdownTransforms.push(includeDirectiveMarkdownTransform);
                    }
                    return includeDirectiveMarkdownTransforms;
                }, []);
                includeDirectiveMarkdownTransforms.forEach(function(includeDirectiveMarkdownTransform) {
                    var divisionMarkdownNode = includeDirectiveMarkdownTransform.appendToTopmostMarkdownNode(topmostMarkdownNode, context);
                    divisionMarkdownNode.resolveIncludes(topmostMarkdownNode, context);
                });
            }
        },
        {
            key: "resolveEmbeddings",
            value: function resolveEmbeddings(context) {
                var divisionMarkdownNode = this; ///
                this.forEachSubDivisionMarkdownNode(function(subDivisionMarkdownNode) {
                    var embeddingsResolved = subDivisionMarkdownNode.resolveEmbeddings(divisionMarkdownNode, context);
                    if (embeddingsResolved) {
                        var subDivisionTransform = SubDivisionTransform.fromSubDivisionMarkdownNode(subDivisionMarkdownNode);
                        subDivisionTransform.removeFromDivisionMarkdownNode(divisionMarkdownNode, context);
                    }
                });
            }
        },
        {
            key: "clone",
            value: function clone() {
                return _get(_get_prototype_of(DivisionMarkdownNode.prototype), "clone", this).call(this, this.divisionClassName);
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                var divisionClassName = null, divisionMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(DivisionMarkdownNode, ruleName, childNodes, opacity, divisionClassName);
                return divisionMarkdownNode;
            }
        }
    ]);
    return DivisionMarkdownNode;
} // function paginateDivisionMarkdownNode(paginatedChildNodes, subDivisionTransforms, divisionClassName, markdownNodes, pageNumber, context) {
 //   let markdownNode;
 //
 //   const indexAnchorTransform = IndexAnchorTransform.fromPageNumber(pageNumber, context),
 //         divisionMarkdownNode = DivisionMarkdownNode.fromPaginatedChildNodesDivisionTransformsAndDivisionClassName(paginatedChildNodes, subDivisionTransforms, divisionClassName, context),
 //         anchorMarkdownNode = indexAnchorTransform.getAnchorMarkdownNode();
 //
 //   divisionMarkdownNode.setPageNumber(pageNumber);
 //
 //   markdownNode = anchorMarkdownNode;  ///
 //
 //   markdownNodes.push(markdownNode);
 //
 //   markdownNode = divisionMarkdownNode; ///
 //
 //   markdownNodes.push(markdownNode);
 // }
(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5pbXBvcnQgSWdub3JlRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9tYXJrZG93bi9kaXJlY3RpdmUvaWdub3JlXCI7XG5cbmltcG9ydCB7IGlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlLCBpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXZpc2lvbk1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIC8vIGdldFBhZ2VOdW1iZXIoKSB7XG4gIC8vICAgbGV0IHBhZ2VOdW1iZXIgPSBudWxsO1xuICAvL1xuICAvLyAgIGNvbnN0IHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUgPSB0aGlzLmZpbmRQYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlKCk7XG4gIC8vXG4gIC8vICAgaWYgKHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgLy8gICAgIHBhZ2VOdW1iZXIgPSBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlLmdldFBhZ2VOdW1iZXIoKTtcbiAgLy8gICB9XG4gIC8vXG4gIC8vICAgcmV0dXJuIHBhZ2VOdW1iZXI7XG4gIC8vIH1cbiAgLy9cbiAgLy8gc2V0UGFnZU51bWJlcihwYWdlTnVtYmVyKSB7XG4gIC8vICAgY29uc3QgcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSA9IHRoaXMuZmluZFBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUoKTtcbiAgLy9cbiAgLy8gICBpZiAocGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAvLyAgICAgcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZS5zZXRQYWdlTnVtYmVyKHBhZ2VOdW1iZXIpO1xuICAvLyAgIH1cbiAgLy8gfVxuICAvL1xuICAvLyBwYWdpbmF0ZShtYXJrZG93bk5vZGVzLCBjb250ZXh0KSB7XG4gIC8vICAgY29uc3QgZm9vdG5vdGVzRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0gPSB0aGlzLnJlbW92ZURpdmlzaW9uTWFya2Rvd25Ob2RlKEZvb3Rub3Rlc0RpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KSxcbiAgLy8gICAgICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0gPSB0aGlzLnJlbW92ZURpdmlzaW9uTWFya2Rvd25Ob2RlKFBhZ2VOdW1iZXJEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSwgY29udGV4dCksXG4gIC8vICAgICAgICAgc3ViRGl2aXNpb25UcmFuc2Zvcm1zID0gW1xuICAvLyAgICAgICAgICAgZm9vdG5vdGVzRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0sXG4gIC8vICAgICAgICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm1cbiAgLy8gICAgICAgICBdO1xuICAvL1xuICAvLyAgIGZpbHRlcihzdWJEaXZpc2lvblRyYW5zZm9ybXMsIChzdWJEaXZpc2lvblRyYW5zZm9ybSkgPT4ge1xuICAvLyAgICAgaWYgKHN1YkRpdmlzaW9uVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gIC8vICAgICAgIHJldHVybiB0cnVlO1xuICAvLyAgICAgfVxuICAvLyAgIH0pO1xuICAvL1xuICAvLyAgIGNvbnN0IHsgbGluZXNQZXJQYWdlIH0gPSBjb250ZXh0LFxuICAvLyAgICAgICAgIHBhZ2luYXRlZENoaWxkTm9kZXMgPSBbXTtcbiAgLy9cbiAgLy8gICBsZXQgeyBwYWdlTnVtYmVyIH0gPSBjb250ZXh0LFxuICAvLyAgICAgICB0b3RhbExpbmVzID0gMDtcbiAgLy9cbiAgLy8gICB0aGlzLmZvckVhY2hDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAvLyAgICAgY29uc3QgbGluZXMgPSBjaGlsZE5vZGUubGluZXMoY29udGV4dCk7XG4gIC8vXG4gIC8vICAgICBpZiAoKHRvdGFsTGluZXMgKyBsaW5lcykgPiBsaW5lc1BlclBhZ2UpIHtcbiAgLy8gICAgICAgcGFnaW5hdGVEaXZpc2lvbk1hcmtkb3duTm9kZShwYWdpbmF0ZWRDaGlsZE5vZGVzLCBzdWJEaXZpc2lvblRyYW5zZm9ybXMsIHRoaXMuZGl2aXNpb25DbGFzc05hbWUsIG1hcmtkb3duTm9kZXMsIHBhZ2VOdW1iZXIsIGNvbnRleHQpO1xuICAvL1xuICAvLyAgICAgICBwYWdlTnVtYmVyKys7XG4gIC8vXG4gIC8vICAgICAgIHRvdGFsTGluZXMgPSAwO1xuICAvL1xuICAvLyAgICAgICBjbGVhcihwYWdpbmF0ZWRDaGlsZE5vZGVzKTtcbiAgLy8gICAgIH1cbiAgLy9cbiAgLy8gICAgIGNvbnN0IHBhZ2luYXRlZENoaWxkTm9kZSA9IGNoaWxkTm9kZTsgIC8vL1xuICAvL1xuICAvLyAgICAgcGFnaW5hdGVkQ2hpbGROb2Rlcy5wdXNoKHBhZ2luYXRlZENoaWxkTm9kZSk7XG4gIC8vXG4gIC8vICAgICB0b3RhbExpbmVzICs9IGxpbmVzO1xuICAvLyAgIH0pO1xuICAvL1xuICAvLyAgIGlmICh0b3RhbExpbmVzID4gMCkge1xuICAvLyAgICAgcGFnaW5hdGVEaXZpc2lvbk1hcmtkb3duTm9kZShwYWdpbmF0ZWRDaGlsZE5vZGVzLCBzdWJEaXZpc2lvblRyYW5zZm9ybXMsIHRoaXMuZGl2aXNpb25DbGFzc05hbWUsIG1hcmtkb3duTm9kZXMsIHBhZ2VOdW1iZXIsIGNvbnRleHQpO1xuICAvL1xuICAvLyAgICAgcGFnZU51bWJlcisrO1xuICAvLyAgIH1cbiAgLy9cbiAgLy8gICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgLy8gICAgIHBhZ2VOdW1iZXJcbiAgLy8gICB9KTtcbiAgLy8gfVxuICAvL1xuICAvLyBjcmVhdGVJbmRleChkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgLy8gICBsZXQgaW5kZXhDcmVhdGVkID0gZmFsc2U7XG4gIC8vXG4gIC8vICAgY29uc3QgaW5kZXhEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSA9IHRoaXMuZmluZERpdmlzaW9uVHJhbnNmb3JtKEluZGV4RGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0sIGNvbnRleHQpO1xuICAvL1xuICAvLyAgIGlmIChpbmRleERpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gIC8vICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgLy8gICAgICAgICAgIGluZGV4VHJhbnNmb3JtID0gSW5kZXhUcmFuc2Zvcm0uZnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAvL1xuICAvLyAgICAgaWYgKGluZGV4VHJhbnNmb3JtICE9PSBudWxsKSB7XG4gIC8vICAgICAgIGluZGV4VHJhbnNmb3JtLnJlcGxhY2VJbmRleERpcmVjdGl2ZVN1YmRpdmlzaW9uVHJhbnNmb3JtKGluZGV4RGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0sIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgLy9cbiAgLy8gICAgICAgaW5kZXhDcmVhdGVkID0gdHJ1ZTtcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vXG4gIC8vICAgcmV0dXJuIGluZGV4Q3JlYXRlZDtcbiAgLy8gfVxuICAvL1xuICAvLyBjcmVhdGVDb250ZW50cyhkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgLy8gICBsZXQgY29udGVudHNDcmVhdGVkID0gZmFsc2U7XG4gIC8vXG4gIC8vICAgY29uc3QgY29udGVudHNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSA9IHRoaXMuZmluZERpdmlzaW9uVHJhbnNmb3JtKENvbnRlbnRzRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0sIGNvbnRleHQpO1xuICAvL1xuICAvLyAgIGlmIChjb250ZW50c0RpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gIC8vICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgLy8gICAgICAgICAgIGNvbnRlbnRzTGlzdFRyYW5zZm9ybSA9IENvbnRlbnRzTGlzdFRyYW5zZm9ybS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGVzQW5kRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgICBpZiAoY29udGVudHNMaXN0VHJhbnNmb3JtICE9PSBudWxsKSB7XG4gIC8vICAgICAgIGNvbnRlbnRzTGlzdFRyYW5zZm9ybS5yZXBsYWNlQ29udGVudHNEaXJlY3RpdmVTdWJkaXZpc2lvblRyYW5zZm9ybShjb250ZW50c0RpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgICAgIGNvbnRlbnRzQ3JlYXRlZCA9IHRydWU7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvL1xuICAvLyAgIHJldHVybiBjb250ZW50c0NyZWF0ZWQ7XG4gIC8vIH1cbiAgLy9cbiAgLy8gY3JlYXRlRm9vdG5vdGVzKGZvb3Rub3RlVHJhbnNmb3JtTWFwLCBjb250ZXh0KSB7XG4gIC8vICAgY29uc3QgZm9vdG5vdGVzRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0gPSB0aGlzLmZpbmREaXZpc2lvblRyYW5zZm9ybShGb290bm90ZXNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSwgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgaWYgKGZvb3Rub3Rlc0RpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gIC8vICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgLy8gICAgICAgICAgIGZvb3Rub3Rlc0xpc3REaXZpc2lvblRyYW5zZm9ybSA9IEZvb3Rub3Rlc0xpc3RUcmFuc2Zvcm0uZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kRm9vdG5vdGVUcmFuc2Zvcm1NYXAoZGl2aXNpb25NYXJrZG93bk5vZGUsIGZvb3Rub3RlVHJhbnNmb3JtTWFwLCBjb250ZXh0KTtcbiAgLy9cbiAgLy8gICAgIGlmIChmb290bm90ZXNMaXN0RGl2aXNpb25UcmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgLy8gICAgICAgZm9vdG5vdGVzTGlzdERpdmlzaW9uVHJhbnNmb3JtLnJlcGxhY2VGb290bm90ZXNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybShmb290bm90ZXNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSwgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAvLyAgICAgfVxuICAvL1xuICAvLyAgICAgcmVudW1iZXJGb290bm90ZUxpbmtNYXJrZG93bk5vZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBmb290bm90ZVRyYW5zZm9ybU1hcCwgY29udGV4dCk7XG4gIC8vICAgfVxuICAvLyB9XG4gIC8vXG4gIC8vIHByZXBhcmVGb290bm90ZXMoZm9vdG5vdGVUcmFuc2Zvcm1NYXAsIGNvbnRleHQpIHtcbiAgLy8gICBjb25zdCBmb290bm90ZURpdmlzaW9uVHJhbnNmb3JtcyA9IHRoaXMucmVtb3ZlRGl2aXNpb25NYXJrZG93bk5vZGVzKEZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0sIGNvbnRleHQpO1xuICAvL1xuICAvLyAgIGZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm1zLmZvckVhY2goKGZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0pID0+IHtcbiAgLy8gICAgIGNvbnN0IGZvb3Rub3RlVHJhbnNmb3JtID0gRm9vdG5vdGVUcmFuc2Zvcm0uZnJvbUZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0oZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybSksXG4gIC8vICAgICAgICAgICBpZGVudGlmaWVyID0gZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybS5pZGVudGlmaWVyKGNvbnRleHQpO1xuICAvL1xuICAvLyAgICAgZm9vdG5vdGVUcmFuc2Zvcm1NYXBbaWRlbnRpZmllcl0gPSBmb290bm90ZVRyYW5zZm9ybTtcbiAgLy8gICB9KTtcbiAgLy8gfVxuICAvL1xuICAvLyBmaW5kRGl2aXNpb25UcmFuc2Zvcm0oRGl2aXNpb25UcmFuc2Zvcm0sIGNvbnRleHQpIHtcbiAgLy8gICBsZXQgc3ViRGl2aXNpb25UcmFuc2Zvcm0gPSBudWxsO1xuICAvL1xuICAvLyAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHRoaXMuZmluZERpdmlzaW9uTWFya2Rvd25Ob2RlcygpO1xuICAvL1xuICAvLyAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5zb21lKChzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAvLyAgICAgc3ViRGl2aXNpb25UcmFuc2Zvcm0gPSBEaXZpc2lvblRyYW5zZm9ybS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAvL1xuICAvLyAgICAgaWYgKHN1YkRpdmlzaW9uVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gIC8vICAgICAgIHJldHVybiB0cnVlO1xuICAvLyAgICAgfVxuICAvLyAgIH0pO1xuICAvL1xuICAvLyAgIHJldHVybiBzdWJEaXZpc2lvblRyYW5zZm9ybTtcbiAgLy8gfVxuICAvL1xuICAvLyBmaW5kRGl2aXNpb25UcmFuc2Zvcm1zKERpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KSB7XG4gIC8vICAgY29uc3Qgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzID0gdGhpcy5maW5kRGl2aXNpb25NYXJrZG93bk5vZGVzKCksXG4gIC8vICAgICAgICAgc3ViRGl2aXNpb25UcmFuc2Zvcm1zID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzLnJlZHVjZSgoc3ViRGl2aXNpb25UcmFuc2Zvcm1zLCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAvLyAgICAgICAgICAgY29uc3Qgc3ViRGl2aXNpb25UcmFuc2Zvcm0gPSBEaXZpc2lvblRyYW5zZm9ybS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAvL1xuICAvLyAgICAgICAgICAgaWYgKHN1YkRpdmlzaW9uVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gIC8vICAgICAgICAgICAgIHN1YkRpdmlzaW9uVHJhbnNmb3Jtcy5wdXNoKHN1YkRpdmlzaW9uVHJhbnNmb3JtKTtcbiAgLy8gICAgICAgICAgIH1cbiAgLy9cbiAgLy8gICAgICAgICAgIHJldHVybiBzdWJEaXZpc2lvblRyYW5zZm9ybXM7XG4gIC8vICAgICAgICAgfSwgW10pO1xuICAvL1xuICAvLyAgIHJldHVybiBzdWJEaXZpc2lvblRyYW5zZm9ybXM7XG4gIC8vIH1cbiAgLy9cbiAgLy8gZmluZFBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUoKSB7XG4gIC8vICAgbGV0IHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUgPSBudWxsO1xuICAvL1xuICAvLyAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHRoaXMuZmluZERpdmlzaW9uTWFya2Rvd25Ob2RlcygpO1xuICAvL1xuICAvLyAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5zb21lKChzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAvLyAgICAgY29uc3Qgbm9kZSA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlOyAvLy9cbiAgLy9cbiAgLy8gICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUgPSBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSk7XG4gIC8vXG4gIC8vICAgICBpZiAocGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSAhPT0gbnVsbCkge1xuICAvLyAgICAgICByZXR1cm4gdHJ1ZTtcbiAgLy8gICAgIH1cbiAgLy8gICB9KTtcbiAgLy9cbiAgLy8gICByZXR1cm4gcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZTtcbiAgLy8gfVxuICAvL1xuICAvLyBnZXRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMoKSB7XG4gIC8vICAgY29uc3Qgbm9kZSA9IHRoaXMsXG4gIC8vICAgICAgICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSk7XG4gIC8vXG4gIC8vICAgcmV0dXJuIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcztcbiAgLy8gfVxuICAvL1xuICAvLyBmb3JFYWNoU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoY2FsbGJhY2spIHtcbiAgLy8gICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmdldFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcygpO1xuICAvL1xuICAvLyAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgLy8gfVxuICAvL1xuICAvLyByZW1vdmVTdWJEaXZpc2lvbk1hcmtkb3duTm9kZShzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSkge1xuICAvLyAgIGNvbnN0IGNoaWxkTm9kZSA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlOyAgLy8vXG4gIC8vXG4gIC8vICAgdGhpcy5yZW1vdmVDaGlsZE5vZGUoY2hpbGROb2RlKTtcbiAgLy8gfVxuICAvL1xuICAvLyBjcmVhdGVGb290bm90ZXNMaXN0VHJhbnNmb3JtKGZvb3Rub3RlVHJhbnNmb3JtTWFwLCBjb250ZXh0KSB7XG4gIC8vICAgY29uc3QgZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybXMgPSB0aGlzLmZpbmREaXZpc2lvblRyYW5zZm9ybXMoRm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybSwgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybXMuZm9yRWFjaCgoZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybSkgPT4ge1xuICAvLyAgICAgY29uc3QgZm9vdG5vdGVUcmFuc2Zvcm0gPSBGb290bm90ZVRyYW5zZm9ybS5mcm9tRm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybShmb290bm90ZURpdmlzaW9uVHJhbnNmb3JtKSxcbiAgLy8gICAgICAgICAgIGlkZW50aWZpZXIgPSBmb290bm90ZURpdmlzaW9uVHJhbnNmb3JtLmlkZW50aWZpZXIoY29udGV4dCk7XG4gIC8vXG4gIC8vICAgICBmb290bm90ZVRyYW5zZm9ybU1hcFtpZGVudGlmaWVyXSA9IGZvb3Rub3RlVHJhbnNmb3JtO1xuICAvLyAgIH0pO1xuICAvL1xuICAvLyAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAvLyAgICAgICAgIGZvb3Rub3Rlc0xpc3REaXZpc2lvblRyYW5zZm9ybSA9IEZvb3Rub3Rlc0xpc3RUcmFuc2Zvcm0uZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kRm9vdG5vdGVUcmFuc2Zvcm1NYXAoZGl2aXNpb25NYXJrZG93bk5vZGUsIGZvb3Rub3RlVHJhbnNmb3JtTWFwLCBjb250ZXh0KTtcbiAgLy9cbiAgLy8gICByZXR1cm4gZm9vdG5vdGVzTGlzdERpdmlzaW9uVHJhbnNmb3JtO1xuICAvLyB9XG5cbiAgY29uc3RydWN0b3IocnVsZU5hbWUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UsIGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgc3VwZXIocnVsZU5hbWUsIHBhcmVudE5vZGUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpO1xuXG4gICAgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSA9IGRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgZ2V0RGl2aXNpb25DbGFzc05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBzZXREaXZpc2lvbkNsYXNzTmFtZShkaXZpc2lvbkNsYXNzTmFtZSkge1xuICAgIHRoaXMuZGl2aXNpb25DbGFzc05hbWUgPSBkaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIGlzSWdub3JlZCgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZSA9IGlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlKG5vZGUpLFxuICAgICAgICAgIGlnbm9yZWQgPSAoaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBpZ25vcmVkO1xuICB9XG5cbiAgY2xhc3NOYW1lKGNvbnRleHQpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lOyAvLy9cblxuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICByZXNvbHZlSWdub3JlZCh0b3Btb3N0TWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgaWdub3JlZCA9IHRoaXMuaXNJZ25vcmVkKCk7XG5cbiAgICBpZiAoIWlnbm9yZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBpZ25vcmVEaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybSA9IElnbm9yZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSk7XG5cbiAgICBpZ25vcmVEaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybS5yZW1vdmVGcm9tVG9wbW9zdE1hcmtkb3duTm9kZSh0b3Btb3N0TWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJlc29sdmVJbmNsdWRlcyh0b3Btb3N0TWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2RlcyA9IGluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtcyA9IGluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzLnJlZHVjZSgoaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtcywgaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtID0gaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZS5yZXNvbHZlSW5jbHVkZShjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKGluY2x1ZGVEaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm1zLnB1c2goaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGluY2x1ZGVEaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybXM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3Jtcy5mb3JFYWNoKChpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm0pID0+IHtcbiAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtLmFwcGVuZFRvVG9wbW9zdE1hcmtkb3duTm9kZSh0b3Btb3N0TWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUucmVzb2x2ZUluY2x1ZGVzKHRvcG1vc3RNYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVzb2x2ZUVtYmVkZGluZ3MoY29udGV4dCkge1xuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpczsgIC8vL1xuXG4gICAgdGhpcy5mb3JFYWNoU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBjb25zdCBlbWJlZGRpbmdzUmVzb2x2ZWQgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZS5yZXNvbHZlRW1iZWRkaW5ncyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChlbWJlZGRpbmdzUmVzb2x2ZWQpIHtcbiAgICAgICAgY29uc3Qgc3ViRGl2aXNpb25UcmFuc2Zvcm0gPSBTdWJEaXZpc2lvblRyYW5zZm9ybS5mcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpXG5cbiAgICAgICAgc3ViRGl2aXNpb25UcmFuc2Zvcm0ucmVtb3ZlRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUodGhpcy5kaXZpc2lvbkNsYXNzTmFtZSk7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHkpIHtcbiAgICBjb25zdCBkaXZpc2lvbkNsYXNzTmFtZSA9IG51bGwsXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBNYXJrZG93bk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkoRGl2aXNpb25NYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBkaXZpc2lvbkNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGU7XG4gIH1cbn1cblxuLy8gZnVuY3Rpb24gcGFnaW5hdGVEaXZpc2lvbk1hcmtkb3duTm9kZShwYWdpbmF0ZWRDaGlsZE5vZGVzLCBzdWJEaXZpc2lvblRyYW5zZm9ybXMsIGRpdmlzaW9uQ2xhc3NOYW1lLCBtYXJrZG93bk5vZGVzLCBwYWdlTnVtYmVyLCBjb250ZXh0KSB7XG4vLyAgIGxldCBtYXJrZG93bk5vZGU7XG4vL1xuLy8gICBjb25zdCBpbmRleEFuY2hvclRyYW5zZm9ybSA9IEluZGV4QW5jaG9yVHJhbnNmb3JtLmZyb21QYWdlTnVtYmVyKHBhZ2VOdW1iZXIsIGNvbnRleHQpLFxuLy8gICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IERpdmlzaW9uTWFya2Rvd25Ob2RlLmZyb21QYWdpbmF0ZWRDaGlsZE5vZGVzRGl2aXNpb25UcmFuc2Zvcm1zQW5kRGl2aXNpb25DbGFzc05hbWUocGFnaW5hdGVkQ2hpbGROb2Rlcywgc3ViRGl2aXNpb25UcmFuc2Zvcm1zLCBkaXZpc2lvbkNsYXNzTmFtZSwgY29udGV4dCksXG4vLyAgICAgICAgIGFuY2hvck1hcmtkb3duTm9kZSA9IGluZGV4QW5jaG9yVHJhbnNmb3JtLmdldEFuY2hvck1hcmtkb3duTm9kZSgpO1xuLy9cbi8vICAgZGl2aXNpb25NYXJrZG93bk5vZGUuc2V0UGFnZU51bWJlcihwYWdlTnVtYmVyKTtcbi8vXG4vLyAgIG1hcmtkb3duTm9kZSA9IGFuY2hvck1hcmtkb3duTm9kZTsgIC8vL1xuLy9cbi8vICAgbWFya2Rvd25Ob2Rlcy5wdXNoKG1hcmtkb3duTm9kZSk7XG4vL1xuLy8gICBtYXJrZG93bk5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZTsgLy8vXG4vL1xuLy8gICBtYXJrZG93bk5vZGVzLnB1c2gobWFya2Rvd25Ob2RlKTtcbi8vIH0iXSwibmFtZXMiOlsiRGl2aXNpb25NYXJrZG93bk5vZGUiLCJydWxlTmFtZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJkaXZpc2lvbkNsYXNzTmFtZSIsImdldERpdmlzaW9uQ2xhc3NOYW1lIiwic2V0RGl2aXNpb25DbGFzc05hbWUiLCJpc0lnbm9yZWQiLCJub2RlIiwiaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwiaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUiLCJpZ25vcmVkIiwiY2xhc3NOYW1lIiwiY29udGV4dCIsInJlc29sdmVJZ25vcmVkIiwidG9wbW9zdE1hcmtkb3duTm9kZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiaWdub3JlRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm0iLCJJZ25vcmVEaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybSIsImZyb21EaXZpc2lvbk1hcmtkb3duTm9kZSIsInJlbW92ZUZyb21Ub3Btb3N0TWFya2Rvd25Ob2RlIiwicmVzb2x2ZUluY2x1ZGVzIiwiaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXMiLCJpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwiaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtcyIsInJlZHVjZSIsImluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm0iLCJyZXNvbHZlSW5jbHVkZSIsInB1c2giLCJmb3JFYWNoIiwiYXBwZW5kVG9Ub3Btb3N0TWFya2Rvd25Ob2RlIiwicmVzb2x2ZUVtYmVkZGluZ3MiLCJmb3JFYWNoU3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImVtYmVkZGluZ3NSZXNvbHZlZCIsInN1YkRpdmlzaW9uVHJhbnNmb3JtIiwiU3ViRGl2aXNpb25UcmFuc2Zvcm0iLCJmcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJyZW1vdmVGcm9tRGl2aXNpb25NYXJrZG93bk5vZGUiLCJjbG9uZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwiTWFya2Rvd25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OzsrREFMSTs2REFDb0I7cUJBRThDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxBQUFNQSxxQ0FBTjtjQUFNQTthQUFBQSxxQkE0TlBDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFQyxpQkFBaUI7Z0NBNU5qRU47O2dCQTZOakIsa0JBN05pQkE7WUE2TlhDO1lBQVVDO1lBQVlDO1lBQVlDO1lBQVNDOztRQUVqRCxNQUFLQyxpQkFBaUIsR0FBR0E7OztrQkEvTlJOOztZQWtPbkJPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsaUJBQWlCO1lBQy9COzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLHFCQUFxQkYsaUJBQWlCO2dCQUNwQyxJQUFJLENBQUNBLGlCQUFpQixHQUFHQTtZQUMzQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxPQUFPLElBQUksRUFDWEMsOEJBQThCQyxJQUFBQSwwQ0FBbUMsRUFBQ0YsT0FDbEVHLFVBQVdGLGdDQUFnQztnQkFFakQsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxPQUFPO2dCQUNmLElBQU1ELFlBQVksSUFBSSxDQUFDUixpQkFBaUIsRUFBRSxHQUFHO2dCQUU3QyxPQUFPUTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVDLG1CQUFtQixFQUFFRixPQUFPO2dCQUN6QyxJQUFNRixVQUFVLElBQUksQ0FBQ0osU0FBUztnQkFFOUIsSUFBSSxDQUFDSSxTQUFTO29CQUNaO2dCQUNGO2dCQUVBLElBQU1LLHVCQUF1QixJQUFJLEVBQzNCQyxtQ0FBbUNDLGVBQWdDLENBQUNDLHdCQUF3QixDQUFDSDtnQkFFbkdDLGlDQUFpQ0csNkJBQTZCLENBQUNMLHFCQUFxQkY7WUFDdEY7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCTixtQkFBbUIsRUFBRUYsT0FBTztnQkFDMUMsSUFBTUwsT0FBTyxJQUFJLEVBQ1hjLGdDQUFnQ0MsSUFBQUEsNENBQXFDLEVBQUNmLE9BQ3RFZ0IscUNBQXFDRiw4QkFBOEJHLE1BQU0sQ0FBQyxTQUFDRCxvQ0FBb0NFO29CQUM3RyxJQUFNQyxvQ0FBb0NELDZCQUE2QkUsY0FBYyxDQUFDZjtvQkFFdEYsSUFBSWMsc0NBQXNDLE1BQU07d0JBQzlDSCxtQ0FBbUNLLElBQUksQ0FBQ0Y7b0JBQzFDO29CQUVBLE9BQU9IO2dCQUNULEdBQUcsRUFBRTtnQkFFWEEsbUNBQW1DTSxPQUFPLENBQUMsU0FBQ0g7b0JBQzFDLElBQU1YLHVCQUF1Qlcsa0NBQWtDSSwyQkFBMkIsQ0FBQ2hCLHFCQUFxQkY7b0JBRWhIRyxxQkFBcUJLLGVBQWUsQ0FBQ04scUJBQXFCRjtnQkFDNUQ7WUFDRjs7O1lBRUFtQixLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCbkIsT0FBTztnQkFDdkIsSUFBTUcsdUJBQXVCLElBQUksRUFBRyxHQUFHO2dCQUV2QyxJQUFJLENBQUNpQiw4QkFBOEIsQ0FBQyxTQUFDQztvQkFDbkMsSUFBTUMscUJBQXFCRCx3QkFBd0JGLGlCQUFpQixDQUFDaEIsc0JBQXNCSDtvQkFFM0YsSUFBSXNCLG9CQUFvQjt3QkFDdEIsSUFBTUMsdUJBQXVCQyxxQkFBcUJDLDJCQUEyQixDQUFDSjt3QkFFOUVFLHFCQUFxQkcsOEJBQThCLENBQUN2QixzQkFBc0JIO29CQUM1RTtnQkFDRjtZQUNGOzs7WUFFQTJCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBVSxPQUFPLHVCQXZTRTFDLGlDQXVTSTBDLFNBQU4sSUFBSyxhQUFPLElBQUksQ0FBQ3BDLGlCQUFpQjtZQUFHOzs7O1lBRS9DcUMsS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDMUMsUUFBUSxFQUFFRSxVQUFVLEVBQUVDLE9BQU87Z0JBQ25FLElBQU1FLG9CQUFvQixNQUNwQlksdUJBQXVCMEIsaUJBQVksQ0FBQ0QsZ0NBQWdDLENBM1N6RDNDLHNCQTJTZ0ZDLFVBQVVFLFlBQVlDLFNBQVNFO2dCQUVoSSxPQUFPWTtZQUNUOzs7V0E5U21CbEI7RUFpVHJCLDZJQUE2STtDQUM3SSxzQkFBc0I7Q0FDdEIsRUFBRTtDQUNGLDJGQUEyRjtDQUMzRiw2TEFBNkw7Q0FDN0wsNkVBQTZFO0NBQzdFLEVBQUU7Q0FDRixvREFBb0Q7Q0FDcEQsRUFBRTtDQUNGLDRDQUE0QztDQUM1QyxFQUFFO0NBQ0Ysc0NBQXNDO0NBQ3RDLEVBQUU7Q0FDRiw2Q0FBNkM7Q0FDN0MsRUFBRTtDQUNGLHNDQUFzQztDQUN0QyxJQUFJO0NBalU4QzRDLGlCQUFZIn0=