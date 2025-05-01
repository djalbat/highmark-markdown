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
var _subDivision = /*#__PURE__*/ _interop_require_default(require("../../transform/markdown/subDivision"));
var _ignore = /*#__PURE__*/ _interop_require_default(require("../../transform/markdown/directive/ignore"));
var _markdown1 = require("../../utilities/markdown");
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
                var node = this, ignoreDirectiveMarkdownNode = (0, _markdown1.ignoreDirectiveMarkdownNodeFromNode)(node), ignored = ignoreDirectiveMarkdownNode !== null;
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
                ignoreDirectiveMarkdownTransform.remove(context);
            }
        },
        {
            key: "resolveIncludes",
            value: function resolveIncludes(topmostMarkdownNode, context) {
                var node = this, includeDirectiveMarkdownNodes = (0, _markdown1.includeDirectiveMarkdownNodesFromNode)(node), includeDirectiveMarkdownTransforms = includeDirectiveMarkdownNodes.reduce(function(includeDirectiveMarkdownTransforms, includeDirectiveMarkdownNode) {
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
                        var subDivisionTransform = _subDivision.default.fromSubDivisionMarkdownNode(subDivisionMarkdownNode);
                        subDivisionTransform.remove(context);
                    }
                });
            }
        },
        {
            key: "getSubDivisionMarkdownNodes",
            value: function getSubDivisionMarkdownNodes() {
                var node = this, subDivisionMarkdownNodes = (0, _markdown1.subDivisionMarkdownNodesFromNode)(node);
                return subDivisionMarkdownNodes;
            }
        },
        {
            key: "removeSubDivisionMarkdownNode",
            value: function removeSubDivisionMarkdownNode(subDivisionMarkdownNode) {
                var node = this, childNode = subDivisionMarkdownNode; ///
                node.removeChildNode(childNode);
            }
        },
        {
            key: "forEachSubDivisionMarkdownNode",
            value: function forEachSubDivisionMarkdownNode(callback) {
                var subDivisionMarkdownNodes = this.getSubDivisionMarkdownNodes();
                subDivisionMarkdownNodes.forEach(callback);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5pbXBvcnQgU3ViRGl2aXNpb25NYXJrZG93blRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL21hcmtkb3duL3N1YkRpdmlzaW9uXCI7XG5pbXBvcnQgSWdub3JlRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9tYXJrZG93bi9kaXJlY3RpdmUvaWdub3JlXCI7XG5cbmltcG9ydCB7IGlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlLCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZSwgaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXNGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbWFya2Rvd25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2aXNpb25NYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICAvLyBnZXRQYWdlTnVtYmVyKCkge1xuICAvLyAgIGxldCBwYWdlTnVtYmVyID0gbnVsbDtcbiAgLy9cbiAgLy8gICBjb25zdCBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlID0gdGhpcy5maW5kUGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZSgpO1xuICAvL1xuICAvLyAgIGlmIChwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gIC8vICAgICBwYWdlTnVtYmVyID0gcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZS5nZXRQYWdlTnVtYmVyKCk7XG4gIC8vICAgfVxuICAvL1xuICAvLyAgIHJldHVybiBwYWdlTnVtYmVyO1xuICAvLyB9XG4gIC8vXG4gIC8vIHNldFBhZ2VOdW1iZXIocGFnZU51bWJlcikge1xuICAvLyAgIGNvbnN0IHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUgPSB0aGlzLmZpbmRQYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlKCk7XG4gIC8vXG4gIC8vICAgaWYgKHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgLy8gICAgIHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUuc2V0UGFnZU51bWJlcihwYWdlTnVtYmVyKTtcbiAgLy8gICB9XG4gIC8vIH1cbiAgLy9cbiAgLy8gcGFnaW5hdGUobWFya2Rvd25Ob2RlcywgY29udGV4dCkge1xuICAvLyAgIGNvbnN0IGZvb3Rub3Rlc0RpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtID0gdGhpcy5yZW1vdmVEaXZpc2lvbk1hcmtkb3duTm9kZShGb290bm90ZXNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSwgY29udGV4dCksXG4gIC8vICAgICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtID0gdGhpcy5yZW1vdmVEaXZpc2lvbk1hcmtkb3duTm9kZShQYWdlTnVtYmVyRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0sIGNvbnRleHQpLFxuICAvLyAgICAgICAgIHN1YkRpdmlzaW9uVHJhbnNmb3JtcyA9IFtcbiAgLy8gICAgICAgICAgIGZvb3Rub3Rlc0RpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtLFxuICAvLyAgICAgICAgICAgcGFnZU51bWJlckRpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtXG4gIC8vICAgICAgICAgXTtcbiAgLy9cbiAgLy8gICBmaWx0ZXIoc3ViRGl2aXNpb25UcmFuc2Zvcm1zLCAoc3ViRGl2aXNpb25UcmFuc2Zvcm0pID0+IHtcbiAgLy8gICAgIGlmIChzdWJEaXZpc2lvblRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAvLyAgICAgICByZXR1cm4gdHJ1ZTtcbiAgLy8gICAgIH1cbiAgLy8gICB9KTtcbiAgLy9cbiAgLy8gICBjb25zdCB7IGxpbmVzUGVyUGFnZSB9ID0gY29udGV4dCxcbiAgLy8gICAgICAgICBwYWdpbmF0ZWRDaGlsZE5vZGVzID0gW107XG4gIC8vXG4gIC8vICAgbGV0IHsgcGFnZU51bWJlciB9ID0gY29udGV4dCxcbiAgLy8gICAgICAgdG90YWxMaW5lcyA9IDA7XG4gIC8vXG4gIC8vICAgdGhpcy5mb3JFYWNoQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgLy8gICAgIGNvbnN0IGxpbmVzID0gY2hpbGROb2RlLmxpbmVzKGNvbnRleHQpO1xuICAvL1xuICAvLyAgICAgaWYgKCh0b3RhbExpbmVzICsgbGluZXMpID4gbGluZXNQZXJQYWdlKSB7XG4gIC8vICAgICAgIHBhZ2luYXRlRGl2aXNpb25NYXJrZG93bk5vZGUocGFnaW5hdGVkQ2hpbGROb2Rlcywgc3ViRGl2aXNpb25UcmFuc2Zvcm1zLCB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lLCBtYXJrZG93bk5vZGVzLCBwYWdlTnVtYmVyLCBjb250ZXh0KTtcbiAgLy9cbiAgLy8gICAgICAgcGFnZU51bWJlcisrO1xuICAvL1xuICAvLyAgICAgICB0b3RhbExpbmVzID0gMDtcbiAgLy9cbiAgLy8gICAgICAgY2xlYXIocGFnaW5hdGVkQ2hpbGROb2Rlcyk7XG4gIC8vICAgICB9XG4gIC8vXG4gIC8vICAgICBjb25zdCBwYWdpbmF0ZWRDaGlsZE5vZGUgPSBjaGlsZE5vZGU7ICAvLy9cbiAgLy9cbiAgLy8gICAgIHBhZ2luYXRlZENoaWxkTm9kZXMucHVzaChwYWdpbmF0ZWRDaGlsZE5vZGUpO1xuICAvL1xuICAvLyAgICAgdG90YWxMaW5lcyArPSBsaW5lcztcbiAgLy8gICB9KTtcbiAgLy9cbiAgLy8gICBpZiAodG90YWxMaW5lcyA+IDApIHtcbiAgLy8gICAgIHBhZ2luYXRlRGl2aXNpb25NYXJrZG93bk5vZGUocGFnaW5hdGVkQ2hpbGROb2Rlcywgc3ViRGl2aXNpb25UcmFuc2Zvcm1zLCB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lLCBtYXJrZG93bk5vZGVzLCBwYWdlTnVtYmVyLCBjb250ZXh0KTtcbiAgLy9cbiAgLy8gICAgIHBhZ2VOdW1iZXIrKztcbiAgLy8gICB9XG4gIC8vXG4gIC8vICAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gIC8vICAgICBwYWdlTnVtYmVyXG4gIC8vICAgfSk7XG4gIC8vIH1cbiAgLy9cbiAgLy8gY3JlYXRlSW5kZXgoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBjb250ZXh0KSB7XG4gIC8vICAgbGV0IGluZGV4Q3JlYXRlZCA9IGZhbHNlO1xuICAvL1xuICAvLyAgIGNvbnN0IGluZGV4RGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0gPSB0aGlzLmZpbmREaXZpc2lvblRyYW5zZm9ybShJbmRleERpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KTtcbiAgLy9cbiAgLy8gICBpZiAoaW5kZXhEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAvLyAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gIC8vICAgICAgICAgICBpbmRleFRyYW5zZm9ybSA9IEluZGV4VHJhbnNmb3JtLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZXNBbmREaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgLy9cbiAgLy8gICAgIGlmIChpbmRleFRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAvLyAgICAgICBpbmRleFRyYW5zZm9ybS5yZXBsYWNlSW5kZXhEaXJlY3RpdmVTdWJkaXZpc2lvblRyYW5zZm9ybShpbmRleERpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgICAgIGluZGV4Q3JlYXRlZCA9IHRydWU7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvL1xuICAvLyAgIHJldHVybiBpbmRleENyZWF0ZWQ7XG4gIC8vIH1cbiAgLy9cbiAgLy8gY3JlYXRlQ29udGVudHMoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBjb250ZXh0KSB7XG4gIC8vICAgbGV0IGNvbnRlbnRzQ3JlYXRlZCA9IGZhbHNlO1xuICAvL1xuICAvLyAgIGNvbnN0IGNvbnRlbnRzRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0gPSB0aGlzLmZpbmREaXZpc2lvblRyYW5zZm9ybShDb250ZW50c0RpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KTtcbiAgLy9cbiAgLy8gICBpZiAoY29udGVudHNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAvLyAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gIC8vICAgICAgICAgICBjb250ZW50c0xpc3RUcmFuc2Zvcm0gPSBDb250ZW50c0xpc3RUcmFuc2Zvcm0uZnJvbURpdmlzaW9uTWFya2Rvd25Ob2Rlc0FuZERpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlcywgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAvL1xuICAvLyAgICAgaWYgKGNvbnRlbnRzTGlzdFRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAvLyAgICAgICBjb250ZW50c0xpc3RUcmFuc2Zvcm0ucmVwbGFjZUNvbnRlbnRzRGlyZWN0aXZlU3ViZGl2aXNpb25UcmFuc2Zvcm0oY29udGVudHNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSwgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAvL1xuICAvLyAgICAgICBjb250ZW50c0NyZWF0ZWQgPSB0cnVlO1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy9cbiAgLy8gICByZXR1cm4gY29udGVudHNDcmVhdGVkO1xuICAvLyB9XG4gIC8vXG4gIC8vIGNyZWF0ZUZvb3Rub3Rlcyhmb290bm90ZVRyYW5zZm9ybU1hcCwgY29udGV4dCkge1xuICAvLyAgIGNvbnN0IGZvb3Rub3Rlc0RpcmVjdGl2ZURpdmlzaW9uVHJhbnNmb3JtID0gdGhpcy5maW5kRGl2aXNpb25UcmFuc2Zvcm0oRm9vdG5vdGVzRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0sIGNvbnRleHQpO1xuICAvL1xuICAvLyAgIGlmIChmb290bm90ZXNEaXJlY3RpdmVEaXZpc2lvblRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAvLyAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gIC8vICAgICAgICAgICBmb290bm90ZXNMaXN0RGl2aXNpb25UcmFuc2Zvcm0gPSBGb290bm90ZXNMaXN0VHJhbnNmb3JtLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZEZvb3Rub3RlVHJhbnNmb3JtTWFwKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBmb290bm90ZVRyYW5zZm9ybU1hcCwgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgICBpZiAoZm9vdG5vdGVzTGlzdERpdmlzaW9uVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gIC8vICAgICAgIGZvb3Rub3Rlc0xpc3REaXZpc2lvblRyYW5zZm9ybS5yZXBsYWNlRm9vdG5vdGVzRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0oZm9vdG5vdGVzRGlyZWN0aXZlRGl2aXNpb25UcmFuc2Zvcm0sIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgLy8gICAgIH1cbiAgLy9cbiAgLy8gICAgIHJlbnVtYmVyRm9vdG5vdGVMaW5rTWFya2Rvd25Ob2RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgZm9vdG5vdGVUcmFuc2Zvcm1NYXAsIGNvbnRleHQpO1xuICAvLyAgIH1cbiAgLy8gfVxuICAvL1xuICAvLyBwcmVwYXJlRm9vdG5vdGVzKGZvb3Rub3RlVHJhbnNmb3JtTWFwLCBjb250ZXh0KSB7XG4gIC8vICAgY29uc3QgZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybXMgPSB0aGlzLnJlbW92ZURpdmlzaW9uTWFya2Rvd25Ob2RlcyhGb290bm90ZURpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KTtcbiAgLy9cbiAgLy8gICBmb290bm90ZURpdmlzaW9uVHJhbnNmb3Jtcy5mb3JFYWNoKChmb290bm90ZURpdmlzaW9uVHJhbnNmb3JtKSA9PiB7XG4gIC8vICAgICBjb25zdCBmb290bm90ZVRyYW5zZm9ybSA9IEZvb3Rub3RlVHJhbnNmb3JtLmZyb21Gb290bm90ZURpdmlzaW9uVHJhbnNmb3JtKGZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0pLFxuICAvLyAgICAgICAgICAgaWRlbnRpZmllciA9IGZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0uaWRlbnRpZmllcihjb250ZXh0KTtcbiAgLy9cbiAgLy8gICAgIGZvb3Rub3RlVHJhbnNmb3JtTWFwW2lkZW50aWZpZXJdID0gZm9vdG5vdGVUcmFuc2Zvcm07XG4gIC8vICAgfSk7XG4gIC8vIH1cbiAgLy9cbiAgLy8gZmluZERpdmlzaW9uVHJhbnNmb3JtKERpdmlzaW9uVHJhbnNmb3JtLCBjb250ZXh0KSB7XG4gIC8vICAgbGV0IHN1YkRpdmlzaW9uVHJhbnNmb3JtID0gbnVsbDtcbiAgLy9cbiAgLy8gICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmZpbmREaXZpc2lvbk1hcmtkb3duTm9kZXMoKTtcbiAgLy9cbiAgLy8gICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMuc29tZSgoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgLy8gICAgIHN1YkRpdmlzaW9uVHJhbnNmb3JtID0gRGl2aXNpb25UcmFuc2Zvcm0uZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgLy9cbiAgLy8gICAgIGlmIChzdWJEaXZpc2lvblRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAvLyAgICAgICByZXR1cm4gdHJ1ZTtcbiAgLy8gICAgIH1cbiAgLy8gICB9KTtcbiAgLy9cbiAgLy8gICByZXR1cm4gc3ViRGl2aXNpb25UcmFuc2Zvcm07XG4gIC8vIH1cbiAgLy9cbiAgLy8gZmluZERpdmlzaW9uVHJhbnNmb3JtcyhEaXZpc2lvblRyYW5zZm9ybSwgY29udGV4dCkge1xuICAvLyAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHRoaXMuZmluZERpdmlzaW9uTWFya2Rvd25Ob2RlcygpLFxuICAvLyAgICAgICAgIHN1YkRpdmlzaW9uVHJhbnNmb3JtcyA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5yZWR1Y2UoKHN1YkRpdmlzaW9uVHJhbnNmb3Jtcywgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgLy8gICAgICAgICAgIGNvbnN0IHN1YkRpdmlzaW9uVHJhbnNmb3JtID0gRGl2aXNpb25UcmFuc2Zvcm0uZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgLy9cbiAgLy8gICAgICAgICAgIGlmIChzdWJEaXZpc2lvblRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAvLyAgICAgICAgICAgICBzdWJEaXZpc2lvblRyYW5zZm9ybXMucHVzaChzdWJEaXZpc2lvblRyYW5zZm9ybSk7XG4gIC8vICAgICAgICAgICB9XG4gIC8vXG4gIC8vICAgICAgICAgICByZXR1cm4gc3ViRGl2aXNpb25UcmFuc2Zvcm1zO1xuICAvLyAgICAgICAgIH0sIFtdKTtcbiAgLy9cbiAgLy8gICByZXR1cm4gc3ViRGl2aXNpb25UcmFuc2Zvcm1zO1xuICAvLyB9XG4gIC8vXG4gIC8vIGZpbmRQYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlKCkge1xuICAvLyAgIGxldCBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlID0gbnVsbDtcbiAgLy9cbiAgLy8gICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmZpbmREaXZpc2lvbk1hcmtkb3duTm9kZXMoKTtcbiAgLy9cbiAgLy8gICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMuc29tZSgoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgLy8gICAgIGNvbnN0IG5vZGUgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZTsgLy8vXG4gIC8vXG4gIC8vICAgICBwYWdlTnVtYmVyRGlyZWN0aXZlTWFya2Rvd25Ob2RlID0gcGFnZU51bWJlckRpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlKG5vZGUpO1xuICAvL1xuICAvLyAgICAgaWYgKHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgLy8gICAgICAgcmV0dXJuIHRydWU7XG4gIC8vICAgICB9XG4gIC8vICAgfSk7XG4gIC8vXG4gIC8vICAgcmV0dXJuIHBhZ2VOdW1iZXJEaXJlY3RpdmVNYXJrZG93bk5vZGU7XG4gIC8vIH1cbiAgLy9cbiAgLy8gcmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpIHtcbiAgLy8gICBjb25zdCBjaGlsZE5vZGUgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZTsgIC8vL1xuICAvL1xuICAvLyAgIHRoaXMucmVtb3ZlQ2hpbGROb2RlKGNoaWxkTm9kZSk7XG4gIC8vIH1cbiAgLy9cbiAgLy8gY3JlYXRlRm9vdG5vdGVzTGlzdFRyYW5zZm9ybShmb290bm90ZVRyYW5zZm9ybU1hcCwgY29udGV4dCkge1xuICAvLyAgIGNvbnN0IGZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm1zID0gdGhpcy5maW5kRGl2aXNpb25UcmFuc2Zvcm1zKEZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0sIGNvbnRleHQpO1xuICAvL1xuICAvLyAgIGZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm1zLmZvckVhY2goKGZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0pID0+IHtcbiAgLy8gICAgIGNvbnN0IGZvb3Rub3RlVHJhbnNmb3JtID0gRm9vdG5vdGVUcmFuc2Zvcm0uZnJvbUZvb3Rub3RlRGl2aXNpb25UcmFuc2Zvcm0oZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybSksXG4gIC8vICAgICAgICAgICBpZGVudGlmaWVyID0gZm9vdG5vdGVEaXZpc2lvblRyYW5zZm9ybS5pZGVudGlmaWVyKGNvbnRleHQpO1xuICAvL1xuICAvLyAgICAgZm9vdG5vdGVUcmFuc2Zvcm1NYXBbaWRlbnRpZmllcl0gPSBmb290bm90ZVRyYW5zZm9ybTtcbiAgLy8gICB9KTtcbiAgLy9cbiAgLy8gICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgLy8gICAgICAgICBmb290bm90ZXNMaXN0RGl2aXNpb25UcmFuc2Zvcm0gPSBGb290bm90ZXNMaXN0VHJhbnNmb3JtLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZEZvb3Rub3RlVHJhbnNmb3JtTWFwKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBmb290bm90ZVRyYW5zZm9ybU1hcCwgY29udGV4dCk7XG4gIC8vXG4gIC8vICAgcmV0dXJuIGZvb3Rub3Rlc0xpc3REaXZpc2lvblRyYW5zZm9ybTtcbiAgLy8gfVxuXG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlLCBkaXZpc2lvbkNsYXNzTmFtZSkge1xuICAgIHN1cGVyKHJ1bGVOYW1lLCBwYXJlbnROb2RlLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTtcblxuICAgIHRoaXMuZGl2aXNpb25DbGFzc05hbWUgPSBkaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIGdldERpdmlzaW9uQ2xhc3NOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgc2V0RGl2aXNpb25DbGFzc05hbWUoZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBpc0lnbm9yZWQoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGUgPSBpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBpZ25vcmVkID0gKGlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gaWdub3JlZDtcbiAgfVxuXG4gIGNsYXNzTmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5kaXZpc2lvbkNsYXNzTmFtZTsgLy8vXG5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgcmVzb2x2ZUlnbm9yZWQodG9wbW9zdE1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGlnbm9yZWQgPSB0aGlzLmlzSWdub3JlZCgpO1xuXG4gICAgaWYgKCFpZ25vcmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgaWdub3JlRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm0gPSBJZ25vcmVEaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybS5mcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUpO1xuXG4gICAgaWdub3JlRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm0ucmVtb3ZlKGNvbnRleHQpO1xuICB9XG5cbiAgcmVzb2x2ZUluY2x1ZGVzKHRvcG1vc3RNYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzID0gaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm1zID0gaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXMucmVkdWNlKChpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm1zLCBpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm0gPSBpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2RlLnJlc29sdmVJbmNsdWRlKGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAoaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGluY2x1ZGVEaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybXMucHVzaChpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtcztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICBpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm1zLmZvckVhY2goKGluY2x1ZGVEaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybSkgPT4ge1xuICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm0uYXBwZW5kVG9Ub3Btb3N0TWFya2Rvd25Ob2RlKHRvcG1vc3RNYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZS5yZXNvbHZlSW5jbHVkZXModG9wbW9zdE1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gICAgfSk7XG4gIH1cblxuICByZXNvbHZlRW1iZWRkaW5ncyhjb250ZXh0KSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzOyAgLy8vXG5cbiAgICB0aGlzLmZvckVhY2hTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSgoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGVtYmVkZGluZ3NSZXNvbHZlZCA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLnJlc29sdmVFbWJlZGRpbmdzKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGVtYmVkZGluZ3NSZXNvbHZlZCkge1xuICAgICAgICBjb25zdCBzdWJEaXZpc2lvblRyYW5zZm9ybSA9IFN1YkRpdmlzaW9uTWFya2Rvd25UcmFuc2Zvcm0uZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKVxuXG4gICAgICAgIHN1YkRpdmlzaW9uVHJhbnNmb3JtLnJlbW92ZShjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcygpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcyxcbiAgICAgICAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICAgIHJldHVybiBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXM7XG4gIH1cblxuICByZW1vdmVTdWJEaXZpc2lvbk1hcmtkb3duTm9kZShzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgY2hpbGROb2RlID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGU7ICAvLy9cblxuICAgIG5vZGUucmVtb3ZlQ2hpbGROb2RlKGNoaWxkTm9kZSk7XG4gIH1cblxuICBmb3JFYWNoU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoY2FsbGJhY2spIHtcbiAgICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMgPSB0aGlzLmdldFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcygpO1xuXG4gICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzLmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBzdXBlci5jbG9uZSh0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lKTsgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkge1xuICAgIGNvbnN0IGRpdmlzaW9uQ2xhc3NOYW1lID0gbnVsbCxcbiAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IE1hcmtkb3duTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShEaXZpc2lvbk1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIGRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZTtcbiAgfVxufVxuXG4vLyBmdW5jdGlvbiBwYWdpbmF0ZURpdmlzaW9uTWFya2Rvd25Ob2RlKHBhZ2luYXRlZENoaWxkTm9kZXMsIHN1YkRpdmlzaW9uVHJhbnNmb3JtcywgZGl2aXNpb25DbGFzc05hbWUsIG1hcmtkb3duTm9kZXMsIHBhZ2VOdW1iZXIsIGNvbnRleHQpIHtcbi8vICAgbGV0IG1hcmtkb3duTm9kZTtcbi8vXG4vLyAgIGNvbnN0IGluZGV4QW5jaG9yVHJhbnNmb3JtID0gSW5kZXhBbmNob3JUcmFuc2Zvcm0uZnJvbVBhZ2VOdW1iZXIocGFnZU51bWJlciwgY29udGV4dCksXG4vLyAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gRGl2aXNpb25NYXJrZG93bk5vZGUuZnJvbVBhZ2luYXRlZENoaWxkTm9kZXNEaXZpc2lvblRyYW5zZm9ybXNBbmREaXZpc2lvbkNsYXNzTmFtZShwYWdpbmF0ZWRDaGlsZE5vZGVzLCBzdWJEaXZpc2lvblRyYW5zZm9ybXMsIGRpdmlzaW9uQ2xhc3NOYW1lLCBjb250ZXh0KSxcbi8vICAgICAgICAgYW5jaG9yTWFya2Rvd25Ob2RlID0gaW5kZXhBbmNob3JUcmFuc2Zvcm0uZ2V0QW5jaG9yTWFya2Rvd25Ob2RlKCk7XG4vL1xuLy8gICBkaXZpc2lvbk1hcmtkb3duTm9kZS5zZXRQYWdlTnVtYmVyKHBhZ2VOdW1iZXIpO1xuLy9cbi8vICAgbWFya2Rvd25Ob2RlID0gYW5jaG9yTWFya2Rvd25Ob2RlOyAgLy8vXG4vL1xuLy8gICBtYXJrZG93bk5vZGVzLnB1c2gobWFya2Rvd25Ob2RlKTtcbi8vXG4vLyAgIG1hcmtkb3duTm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlOyAvLy9cbi8vXG4vLyAgIG1hcmtkb3duTm9kZXMucHVzaChtYXJrZG93bk5vZGUpO1xuLy8gfSJdLCJuYW1lcyI6WyJEaXZpc2lvbk1hcmtkb3duTm9kZSIsInJ1bGVOYW1lIiwicGFyZW50Tm9kZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsImRpdmlzaW9uQ2xhc3NOYW1lIiwiZ2V0RGl2aXNpb25DbGFzc05hbWUiLCJzZXREaXZpc2lvbkNsYXNzTmFtZSIsImlzSWdub3JlZCIsIm5vZGUiLCJpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGVGcm9tTm9kZSIsImlnbm9yZWQiLCJjbGFzc05hbWUiLCJjb250ZXh0IiwicmVzb2x2ZUlnbm9yZWQiLCJ0b3Btb3N0TWFya2Rvd25Ob2RlIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJpZ25vcmVEaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybSIsIklnbm9yZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtIiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlIiwicmVtb3ZlIiwicmVzb2x2ZUluY2x1ZGVzIiwiaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXMiLCJpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwiaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtcyIsInJlZHVjZSIsImluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm0iLCJyZXNvbHZlSW5jbHVkZSIsInB1c2giLCJmb3JFYWNoIiwiYXBwZW5kVG9Ub3Btb3N0TWFya2Rvd25Ob2RlIiwicmVzb2x2ZUVtYmVkZGluZ3MiLCJmb3JFYWNoU3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImVtYmVkZGluZ3NSZXNvbHZlZCIsInN1YkRpdmlzaW9uVHJhbnNmb3JtIiwiU3ViRGl2aXNpb25NYXJrZG93blRyYW5zZm9ybSIsImZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImdldFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwicmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJjaGlsZE5vZGUiLCJyZW1vdmVDaGlsZE5vZGUiLCJjYWxsYmFjayIsImNsb25lIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJNYXJrZG93bk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OytEQU5JO2tFQUNnQjs2REFDSTt5QkFFZ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5RyxJQUFBLEFBQU1BLHFDQUFOO2NBQU1BO2FBQUFBLHFCQStNUEMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUVDLGlCQUFpQjtnQ0EvTWpFTjs7Z0JBZ05qQixrQkFoTmlCQTtZQWdOWEM7WUFBVUM7WUFBWUM7WUFBWUM7WUFBU0M7O1FBRWpELE1BQUtDLGlCQUFpQixHQUFHQTs7O2tCQWxOUk47O1lBcU5uQk8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8s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