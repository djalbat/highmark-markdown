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
            value: function resolveIgnored(documentMarkdownNode, context) {
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
            value: function resolveIncludes(documentMarkdownNode, context) {
                var node = this, includeDirectiveMarkdownNodes = (0, _markdown1.includeDirectiveMarkdownNodesFromNode)(node), includeDirectiveMarkdownTransforms = includeDirectiveMarkdownNodes.reduce(function(includeDirectiveMarkdownTransforms, includeDirectiveMarkdownNode) {
                    var includeDirectiveMarkdownTransform = includeDirectiveMarkdownNode.resolveInclude(context);
                    if (includeDirectiveMarkdownTransform !== null) {
                        includeDirectiveMarkdownTransforms.push(includeDirectiveMarkdownTransform);
                    }
                    return includeDirectiveMarkdownTransforms;
                }, []);
                includeDirectiveMarkdownTransforms.forEach(function(includeDirectiveMarkdownTransform) {
                    var divisionMarkdownNode = includeDirectiveMarkdownTransform.appendToDocumentMarkdownNode(documentMarkdownNode, context);
                    divisionMarkdownNode.resolveIncludes(documentMarkdownNode, context);
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
                        var subDivisionMarkdownTransform = _subDivision.default.fromSubDivisionMarkdownNode(subDivisionMarkdownNode);
                        subDivisionMarkdownTransform.remove(context);
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
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                var divisionClassName = null, divisionMarkdownNode = _markdown.default.fromRuleNameChildNodesOpacityAndPrecedence(DivisionMarkdownNode, ruleName, childNodes, opacity, precedence, divisionClassName);
                return divisionMarkdownNode;
            }
        }
    ]);
    return DivisionMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5pbXBvcnQgU3ViRGl2aXNpb25NYXJrZG93blRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL21hcmtkb3duL3N1YkRpdmlzaW9uXCI7XG5pbXBvcnQgSWdub3JlRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9tYXJrZG93bi9kaXJlY3RpdmUvaWdub3JlXCI7XG5cbmltcG9ydCB7IGlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlLCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZSwgaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXNGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbWFya2Rvd25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2aXNpb25NYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgcGFyZW50Tm9kZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSwgZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICBzdXBlcihydWxlTmFtZSwgcGFyZW50Tm9kZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7XG5cbiAgICB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBnZXREaXZpc2lvbkNsYXNzTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIHNldERpdmlzaW9uQ2xhc3NOYW1lKGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSA9IGRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgaXNJZ25vcmVkKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlID0gaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgaWdub3JlZCA9IChpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGlnbm9yZWQ7XG4gIH1cblxuICBjbGFzc05hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuZGl2aXNpb25DbGFzc05hbWU7IC8vL1xuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIHJlc29sdmVJZ25vcmVkKGRvY3VtZW50TWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgaWdub3JlZCA9IHRoaXMuaXNJZ25vcmVkKCk7XG5cbiAgICBpZiAoIWlnbm9yZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBpZ25vcmVEaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybSA9IElnbm9yZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSk7XG5cbiAgICBpZ25vcmVEaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybS5yZW1vdmUoY29udGV4dCk7XG4gIH1cblxuICByZXNvbHZlSW5jbHVkZXMoZG9jdW1lbnRNYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzID0gaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm1zID0gaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXMucmVkdWNlKChpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm1zLCBpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm0gPSBpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2RlLnJlc29sdmVJbmNsdWRlKGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAoaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGluY2x1ZGVEaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybXMucHVzaChpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtcztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICBpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm1zLmZvckVhY2goKGluY2x1ZGVEaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybSkgPT4ge1xuICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm0uYXBwZW5kVG9Eb2N1bWVudE1hcmtkb3duTm9kZShkb2N1bWVudE1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlLnJlc29sdmVJbmNsdWRlcyhkb2N1bWVudE1hcmtkb3duTm9kZSwgY29udGV4dCk7XG4gICAgfSk7XG4gIH1cblxuICByZXNvbHZlRW1iZWRkaW5ncyhjb250ZXh0KSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzOyAgLy8vXG5cbiAgICB0aGlzLmZvckVhY2hTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSgoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGVtYmVkZGluZ3NSZXNvbHZlZCA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLnJlc29sdmVFbWJlZGRpbmdzKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGVtYmVkZGluZ3NSZXNvbHZlZCkge1xuICAgICAgICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duVHJhbnNmb3JtID0gU3ViRGl2aXNpb25NYXJrZG93blRyYW5zZm9ybS5mcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpXG5cbiAgICAgICAgc3ViRGl2aXNpb25NYXJrZG93blRyYW5zZm9ybS5yZW1vdmUoY29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsXG4gICAgICAgICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgICByZXR1cm4gc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzO1xuICB9XG5cbiAgcmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZSA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICBub2RlLnJlbW92ZUNoaWxkTm9kZShjaGlsZE5vZGUpO1xuICB9XG5cbiAgZm9yRWFjaFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKGNhbGxiYWNrKSB7XG4gICAgY29uc3Qgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzID0gdGhpcy5nZXRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMoKTtcblxuICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gc3VwZXIuY2xvbmUodGhpcy5kaXZpc2lvbkNsYXNzTmFtZSk7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7XG4gICAgY29uc3QgZGl2aXNpb25DbGFzc05hbWUgPSBudWxsLFxuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShEaXZpc2lvbk1hcmtkb3duTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UsIGRpdmlzaW9uQ2xhc3NOYW1lKTtcblxuICAgIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwicnVsZU5hbWUiLCJwYXJlbnROb2RlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiZGl2aXNpb25DbGFzc05hbWUiLCJnZXREaXZpc2lvbkNsYXNzTmFtZSIsInNldERpdmlzaW9uQ2xhc3NOYW1lIiwiaXNJZ25vcmVkIiwibm9kZSIsImlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZSIsImlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlIiwiaWdub3JlZCIsImNsYXNzTmFtZSIsImNvbnRleHQiLCJyZXNvbHZlSWdub3JlZCIsImRvY3VtZW50TWFya2Rvd25Ob2RlIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJpZ25vcmVEaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybSIsIklnbm9yZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtIiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlIiwicmVtb3ZlIiwicmVzb2x2ZUluY2x1ZGVzIiwiaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXMiLCJpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwiaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtcyIsInJlZHVjZSIsImluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm0iLCJyZXNvbHZlSW5jbHVkZSIsInB1c2giLCJmb3JFYWNoIiwiYXBwZW5kVG9Eb2N1bWVudE1hcmtkb3duTm9kZSIsInJlc29sdmVFbWJlZGRpbmdzIiwiZm9yRWFjaFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJlbWJlZGRpbmdzUmVzb2x2ZWQiLCJzdWJEaXZpc2lvbk1hcmtkb3duVHJhbnNmb3JtIiwiU3ViRGl2aXNpb25NYXJrZG93blRyYW5zZm9ybSIsImZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImdldFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwicmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJjaGlsZE5vZGUiLCJyZW1vdmVDaGlsZE5vZGUiLCJjYWxsYmFjayIsImNsb25lIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiTWFya2Rvd25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OzsrREFOSTtrRUFDZ0I7NkRBQ0k7eUJBRWdGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUcsSUFBQSxBQUFNQSxxQ0FBTjtjQUFNQTthQUFBQSxxQkFDUEMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUVDLGlCQUFpQjtnQ0FEakVOOztnQkFFakIsa0JBRmlCQTtZQUVYQztZQUFVQztZQUFZQztZQUFZQztZQUFTQzs7UUFFakQsTUFBS0MsaUJBQWlCLEdBQUdBOzs7a0JBSlJOOztZQU9uQk8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxpQkFBaUI7WUFDL0I7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEscUJBQXFCRixpQkFBaUI7Z0JBQ3BDLElBQUksQ0FBQ0EsaUJBQWlCLEdBQUdBO1lBQzNCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLE9BQU8sSUFBSSxFQUNYQyw4QkFBOEJDLElBQUFBLDhDQUFtQyxFQUFDRixPQUNsRUcsVUFBV0YsZ0NBQWdDO2dCQUVqRCxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLE9BQU87Z0JBQ2YsSUFBTUQsWUFBWSxJQUFJLENBQUNSLGlCQUFpQixFQUFFLEdBQUc7Z0JBRTdDLE9BQU9RO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUMsb0JBQW9CLEVBQUVGLE9BQU87Z0JBQzFDLElBQU1GLFVBQVUsSUFBSSxDQUFDSixTQUFTO2dCQUU5QixJQUFJLENBQUNJLFNBQVM7b0JBQ1o7Z0JBQ0Y7Z0JBRUEsSUFBTUssdUJBQXVCLElBQUksRUFDM0JDLG1DQUFtQ0MsZUFBZ0MsQ0FBQ0Msd0JBQXdCLENBQUNIO2dCQUVuR0MsaUNBQWlDRyxNQUFNLENBQUNQO1lBQzFDOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQk4sb0JBQW9CLEVBQUVGLE9BQU87Z0JBQzNDLElBQU1MLE9BQU8sSUFBSSxFQUNYYyxnQ0FBZ0NDLElBQUFBLGdEQUFxQyxFQUFDZixPQUN0RWdCLHFDQUFxQ0YsOEJBQThCRyxNQUFNLENBQUMsU0FBQ0Qsb0NBQW9DRTtvQkFDN0csSUFBTUMsb0NBQW9DRCw2QkFBNkJFLGNBQWMsQ0FBQ2Y7b0JBRXRGLElBQUljLHNDQUFzQyxNQUFNO3dCQUM5Q0gsbUNBQW1DSyxJQUFJLENBQUNGO29CQUMxQztvQkFFQSxPQUFPSDtnQkFDVCxHQUFHLEVBQUU7Z0JBRVhBLG1DQUFtQ00sT0FBTyxDQUFDLFNBQUNIO29CQUMxQyxJQUFNWCx1QkFBdUJXLGtDQUFrQ0ksNEJBQTRCLENBQUNoQixzQkFBc0JGO29CQUVsSEcscUJBQXFCSyxlQUFlLENBQUNOLHNCQUFzQkY7Z0JBQzdEO1lBQ0Y7OztZQUVBbUIsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQm5CLE9BQU87Z0JBQ3ZCLElBQU1HLHVCQUF1QixJQUFJLEVBQUcsR0FBRztnQkFFdkMsSUFBSSxDQUFDaUIsOEJBQThCLENBQUMsU0FBQ0M7b0JBQ25DLElBQU1DLHFCQUFxQkQsd0JBQXdCRixpQkFBaUIsQ0FBQ2hCLHNCQUFzQkg7b0JBRTNGLElBQUlzQixvQkFBb0I7d0JBQ3RCLElBQU1DLCtCQUErQkMsb0JBQTRCLENBQUNDLDJCQUEyQixDQUFDSjt3QkFFOUZFLDZCQUE2QmhCLE1BQU0sQ0FBQ1A7b0JBQ3RDO2dCQUNGO1lBQ0Y7OztZQUVBMEIsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0vQixPQUFPLElBQUksRUFDWGdDLDJCQUEyQkMsSUFBQUEsMkNBQWdDLEVBQUNqQztnQkFFbEUsT0FBT2dDO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsOEJBQThCUix1QkFBdUI7Z0JBQ25ELElBQU0xQixPQUFPLElBQUksRUFDWG1DLFlBQVlULHlCQUEwQixHQUFHO2dCQUUvQzFCLEtBQUtvQyxlQUFlLENBQUNEO1lBQ3ZCOzs7WUFFQVYsS0FBQUE7bUJBQUFBLFNBQUFBLCtCQUErQlksUUFBUTtnQkFDckMsSUFBTUwsMkJBQTJCLElBQUksQ0FBQ0QsMkJBQTJCO2dCQUVqRUMseUJBQXlCVixPQUFPLENBQUNlO1lBQ25DOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFVLE9BQU8sdUJBaEdFaEQsaUNBZ0dJZ0QsU0FBTixJQUFLLGFBQU8sSUFBSSxDQUFDMUMsaUJBQWlCO1lBQUc7Ozs7WUFFL0MyQyxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNoRCxRQUFRLEVBQUVFLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUN6RixJQUFNQyxvQkFBb0IsTUFDcEJZLHVCQUF1QmdDLGlCQUFZLENBQUNELDBDQUEwQyxDQXBHbkVqRCxzQkFvRzBGQyxVQUFVRSxZQUFZQyxTQUFTQyxZQUFZQztnQkFFdEosT0FBT1k7WUFDVDs7O1dBdkdtQmxCO0VBQTZCa0QsaUJBQVkifQ==