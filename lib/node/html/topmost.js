"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return TopmostHTMLNode;
    },
    removeContentsDirectiveHTMLNode: function() {
        return removeContentsDirectiveHTMLNode;
    },
    removeIndexDirectiveHTMLNode: function() {
        return removeIndexDirectiveHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
var _index = /*#__PURE__*/ _interop_require_default(require("../../transform/html/index"));
var _division = /*#__PURE__*/ _interop_require_default(require("../../transform/html/division"));
var _contents = /*#__PURE__*/ _interop_require_default(require("../../transform/html/list/contents"));
var _index1 = /*#__PURE__*/ _interop_require_default(require("../../transform/html/directive/index"));
var _contents1 = /*#__PURE__*/ _interop_require_default(require("../../transform/html/directive/contents"));
var _ruleNames = require("../../ruleNames");
var _html1 = require("../../utilities/html");
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
var TopmostHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(TopmostHTMLNode, HTMLNode);
    function TopmostHTMLNode() {
        _class_call_check(this, TopmostHTMLNode);
        return _call_super(this, TopmostHTMLNode, arguments);
    }
    _create_class(TopmostHTMLNode, [
        {
            key: "resolve",
            value: function resolve(context) {
                this.paginate(context);
                this.addContents(context);
                this.addIndex(context);
            }
        },
        {
            key: "paginate",
            value: function paginate(context) {
                var divisionHTMLNodes, divisionHTMLTransforms;
                divisionHTMLNodes = this.getDivisionHTMLNodes();
                divisionHTMLTransforms = divisionHTMLTransformsFromDivisionHTMLNodes(divisionHTMLNodes);
                divisionHTMLNodes = [];
                var pageNumber;
                pageNumber = 1;
                Object.assign(context, {
                    pageNumber: pageNumber
                });
                divisionHTMLTransforms.forEach(function(divisionHTMLTransform) {
                    divisionHTMLTransform.remove();
                    divisionHTMLTransform.resolve(divisionHTMLNodes, context);
                });
                delete context.pageNumber;
                divisionHTMLTransforms = divisionHTMLTransformsFromDivisionHTMLNodes(divisionHTMLNodes);
                var topmostHTMLNode = this; ///
                divisionHTMLTransforms.forEach(function(divisionHTMLTransform) {
                    divisionHTMLTransform.appendToTopmostHTMLNode(topmostHTMLNode);
                });
            }
        },
        {
            key: "addIndex",
            value: function addIndex(context) {
                var node = this, indexDirectiveHTMLTransform = removeIndexDirectiveHTMLNode(node);
                if (indexDirectiveHTMLTransform === null) {
                    return;
                }
                var divisionHTMLNodes = this.getDivisionHTMLNodes(), indexHTMLTransform = _index.default.fromDivisionHTMLNodes(divisionHTMLNodes, context);
                indexHTMLTransform.replaceIndexDirectiveHTMLTransform(indexDirectiveHTMLTransform);
            }
        },
        {
            key: "addContents",
            value: function addContents(context) {
                var node = this, contentsDirectiveHTMLTransform = removeContentsDirectiveHTMLNode(node);
                if (contentsDirectiveHTMLTransform === null) {
                    return;
                }
                var topmostHTMLNode = this, contentsListHTMLTransform = _contents.default.fromContentsDirectiveHTMLTransformAndTopmostHTMLNode(contentsDirectiveHTMLTransform, topmostHTMLNode, context);
                contentsListHTMLTransform.replaceContentsDirectiveHTMLTransform(contentsDirectiveHTMLTransform);
            }
        },
        {
            key: "adjustIndent",
            value: function adjustIndent(indent) {
                return indent;
            }
        },
        {
            key: "getRuleName",
            value: function getRuleName() {
                var ruleName = _ruleNames.HTML_RULE_NAME;
                return ruleName;
            }
        },
        {
            key: "getDivisionHTMLNodes",
            value: function getDivisionHTMLNodes() {
                var node = this, divisionHTMLNodes = (0, _html1.divisionHTMLNodesFromNode)(node);
                return divisionHTMLNodes;
            }
        },
        {
            key: "getDivisionHTMLNodeAt",
            value: function getDivisionHTMLNodeAt(index) {
                var divisionHTMLNodes = this.getDivisionHTMLNodes(), divisionHTMLNode = divisionHTMLNodes[index] || null;
                return divisionHTMLNode;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _html.default.fromNothing(TopmostHTMLNode);
            }
        }
    ]);
    return TopmostHTMLNode;
}(_html.default);
_define_property(TopmostHTMLNode, "tagName", "html");
_define_property(TopmostHTMLNode, "className", null);
function divisionHTMLTransformsFromDivisionHTMLNodes(divisionHTMLNodes) {
    var divisionHTMLTransforms = divisionHTMLNodes.map(function(divisionHTMLNode) {
        var divisionHTMLTransform = _division.default.fromDivisionHTMLNode(divisionHTMLNode);
        return divisionHTMLTransform;
    });
    return divisionHTMLTransforms;
}
function removeIndexDirectiveHTMLNode(node) {
    var indexDirectiveHTMLTransform = null;
    var indexDirectiveHTMLNode = (0, _html1.indexDirectiveHTMLNodeFromNode)(node);
    if (indexDirectiveHTMLNode !== null) {
        indexDirectiveHTMLTransform = _index1.default.fromIndexDirectiveHTMLNode(indexDirectiveHTMLNode);
    }
    return indexDirectiveHTMLTransform;
}
function removeContentsDirectiveHTMLNode(node) {
    var contentsDirectiveHTMLTransform = null;
    var contentsDirectiveHTMLNode = (0, _html1.contentsDirectiveHTMLNodeFromNode)(node);
    if (contentsDirectiveHTMLNode !== null) {
        contentsDirectiveHTMLTransform = _contents1.default.fromContentsDirectiveHTMLNode(contentsDirectiveHTMLNode);
    }
    return contentsDirectiveHTMLTransform;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvdG9wbW9zdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBJbmRleEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2luZGV4XCI7XG5pbXBvcnQgRGl2aXNpb25IVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9kaXZpc2lvblwiO1xuaW1wb3J0IENvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2xpc3QvY29udGVudHNcIjtcbmltcG9ydCBJbmRleERpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2RpcmVjdGl2ZS9pbmRleFwiO1xuaW1wb3J0IENvbnRlbnRzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWwvZGlyZWN0aXZlL2NvbnRlbnRzXCI7XG5cbmltcG9ydCB7IEhUTUxfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgZGl2aXNpb25IVE1MTm9kZXNGcm9tTm9kZSwgaW5kZXhEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlLCBjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2h0bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wbW9zdEhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICByZXNvbHZlKGNvbnRleHQpIHtcbiAgICB0aGlzLnBhZ2luYXRlKGNvbnRleHQpO1xuXG4gICAgdGhpcy5hZGRDb250ZW50cyhjb250ZXh0KTtcblxuICAgIHRoaXMuYWRkSW5kZXgoY29udGV4dCk7XG4gIH1cblxuICBwYWdpbmF0ZShjb250ZXh0KSB7XG4gICAgbGV0IGRpdmlzaW9uSFRNTE5vZGVzLFxuICAgICAgICBkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zO1xuXG4gICAgZGl2aXNpb25IVE1MTm9kZXMgPSB0aGlzLmdldERpdmlzaW9uSFRNTE5vZGVzKCk7XG5cbiAgICBkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zID0gZGl2aXNpb25IVE1MVHJhbnNmb3Jtc0Zyb21EaXZpc2lvbkhUTUxOb2RlcyhkaXZpc2lvbkhUTUxOb2Rlcyk7XG5cbiAgICBkaXZpc2lvbkhUTUxOb2RlcyA9IFtdO1xuXG4gICAgbGV0IHBhZ2VOdW1iZXI7XG5cbiAgICBwYWdlTnVtYmVyID0gMTtcblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgcGFnZU51bWJlclxuICAgIH0pO1xuXG4gICAgZGl2aXNpb25IVE1MVHJhbnNmb3Jtcy5mb3JFYWNoKChkaXZpc2lvbkhUTUxUcmFuc2Zvcm0pID0+IHtcbiAgICAgIGRpdmlzaW9uSFRNTFRyYW5zZm9ybS5yZW1vdmUoKTtcblxuICAgICAgZGl2aXNpb25IVE1MVHJhbnNmb3JtLnJlc29sdmUoZGl2aXNpb25IVE1MTm9kZXMsIGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgZGVsZXRlIGNvbnRleHQucGFnZU51bWJlcjtcblxuICAgIGRpdmlzaW9uSFRNTFRyYW5zZm9ybXMgPSBkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zRnJvbURpdmlzaW9uSFRNTE5vZGVzKGRpdmlzaW9uSFRNTE5vZGVzKTtcblxuICAgIGNvbnN0IHRvcG1vc3RIVE1MTm9kZSA9IHRoaXM7IC8vL1xuXG4gICAgZGl2aXNpb25IVE1MVHJhbnNmb3Jtcy5mb3JFYWNoKChkaXZpc2lvbkhUTUxUcmFuc2Zvcm0pID0+IHtcbiAgICAgIGRpdmlzaW9uSFRNTFRyYW5zZm9ybS5hcHBlbmRUb1RvcG1vc3RIVE1MTm9kZSh0b3Btb3N0SFRNTE5vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkSW5kZXgoY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgaW5kZXhEaXJlY3RpdmVIVE1MVHJhbnNmb3JtID0gcmVtb3ZlSW5kZXhEaXJlY3RpdmVIVE1MTm9kZShub2RlKTtcblxuICAgIGlmIChpbmRleERpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0gPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkaXZpc2lvbkhUTUxOb2RlcyA9IHRoaXMuZ2V0RGl2aXNpb25IVE1MTm9kZXMoKSxcbiAgICAgICAgICBpbmRleEhUTUxUcmFuc2Zvcm0gPSBJbmRleEhUTUxUcmFuc2Zvcm0uZnJvbURpdmlzaW9uSFRNTE5vZGVzKGRpdmlzaW9uSFRNTE5vZGVzLCBjb250ZXh0KTtcblxuICAgIGluZGV4SFRNTFRyYW5zZm9ybS5yZXBsYWNlSW5kZXhEaXJlY3RpdmVIVE1MVHJhbnNmb3JtKGluZGV4RGlyZWN0aXZlSFRNTFRyYW5zZm9ybSk7XG4gIH1cblxuICBhZGRDb250ZW50cyhjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBjb250ZW50c0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0gPSByZW1vdmVDb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlKG5vZGUpO1xuXG4gICAgaWYgKGNvbnRlbnRzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRvcG1vc3RIVE1MTm9kZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIGNvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0gPSBDb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtLmZyb21Db250ZW50c0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm1BbmRUb3Btb3N0SFRNTE5vZGUoY29udGVudHNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtLCB0b3Btb3N0SFRNTE5vZGUsIGNvbnRleHQpO1xuXG4gICAgY29udGVudHNMaXN0SFRNTFRyYW5zZm9ybS5yZXBsYWNlQ29udGVudHNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtKGNvbnRlbnRzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybSk7XG4gIH1cblxuICBhZGp1c3RJbmRlbnQoaW5kZW50KSB7XG4gICAgcmV0dXJuIGluZGVudDtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gSFRNTF9SVUxFX05BTUU7XG5cbiAgICByZXR1cm4gcnVsZU5hbWU7XG4gIH1cblxuICBnZXREaXZpc2lvbkhUTUxOb2RlcygpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGRpdmlzaW9uSFRNTE5vZGVzID0gZGl2aXNpb25IVE1MTm9kZXNGcm9tTm9kZShub2RlKTtcblxuICAgIHJldHVybiBkaXZpc2lvbkhUTUxOb2RlcztcbiAgfVxuXG4gIGdldERpdmlzaW9uSFRNTE5vZGVBdChpbmRleCkge1xuICAgIGNvbnN0IGRpdmlzaW9uSFRNTE5vZGVzID0gdGhpcy5nZXREaXZpc2lvbkhUTUxOb2RlcygpLFxuICAgICAgICAgIGRpdmlzaW9uSFRNTE5vZGUgPSBkaXZpc2lvbkhUTUxOb2Rlc1tpbmRleF0gfHwgbnVsbDtcblxuICAgIHJldHVybiBkaXZpc2lvbkhUTUxOb2RlO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImh0bWxcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gbnVsbDtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tTm90aGluZyhUb3Btb3N0SFRNTE5vZGUpOyB9XG59XG5cbmZ1bmN0aW9uIGRpdmlzaW9uSFRNTFRyYW5zZm9ybXNGcm9tRGl2aXNpb25IVE1MTm9kZXMoZGl2aXNpb25IVE1MTm9kZXMpIHtcbiAgY29uc3QgZGl2aXNpb25IVE1MVHJhbnNmb3JtcyA9IGRpdmlzaW9uSFRNTE5vZGVzLm1hcCgoZGl2aXNpb25IVE1MTm9kZSkgPT4ge1xuICAgIGNvbnN0IGRpdmlzaW9uSFRNTFRyYW5zZm9ybSA9IERpdmlzaW9uSFRNTFRyYW5zZm9ybS5mcm9tRGl2aXNpb25IVE1MTm9kZShkaXZpc2lvbkhUTUxOb2RlKTtcblxuICAgIHJldHVybiBkaXZpc2lvbkhUTUxUcmFuc2Zvcm07XG4gIH0pO1xuXG4gIHJldHVybiBkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSW5kZXhEaXJlY3RpdmVIVE1MTm9kZShub2RlKSB7XG4gIGxldCBpbmRleERpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0gPSBudWxsO1xuXG4gIGNvbnN0IGluZGV4RGlyZWN0aXZlSFRNTE5vZGUgPSBpbmRleERpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUobm9kZSk7XG5cbiAgaWYgKGluZGV4RGlyZWN0aXZlSFRNTE5vZGUgIT09IG51bGwpIHtcbiAgICBpbmRleERpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0gPSBJbmRleERpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0uZnJvbUluZGV4RGlyZWN0aXZlSFRNTE5vZGUoaW5kZXhEaXJlY3RpdmVIVE1MTm9kZSk7XG4gIH1cblxuICByZXR1cm4gaW5kZXhEaXJlY3RpdmVIVE1MVHJhbnNmb3JtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ29udGVudHNEaXJlY3RpdmVIVE1MTm9kZShub2RlKSB7XG4gIGxldCBjb250ZW50c0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0gPSBudWxsO1xuXG4gIGNvbnN0IGNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUgPSBjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUobm9kZSk7XG5cbiAgaWYgKGNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUgIT09IG51bGwpIHtcbiAgICBjb250ZW50c0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0gPSBDb250ZW50c0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0uZnJvbUNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUoY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZSk7XG4gIH1cblxuICByZXR1cm4gY29udGVudHNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtO1xufVxuIl0sIm5hbWVzIjpbIlRvcG1vc3RIVE1MTm9kZSIsInJlbW92ZUNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUiLCJyZW1vdmVJbmRleERpcmVjdGl2ZUhUTUxOb2RlIiwicmVzb2x2ZSIsImNvbnRleHQiLCJwYWdpbmF0ZSIsImFkZENvbnRlbnRzIiwiYWRkSW5kZXgiLCJkaXZpc2lvbkhUTUxOb2RlcyIsImRpdmlzaW9uSFRNTFRyYW5zZm9ybXMiLCJnZXREaXZpc2lvbkhUTUxOb2RlcyIsImRpdmlzaW9uSFRNTFRyYW5zZm9ybXNGcm9tRGl2aXNpb25IVE1MTm9kZXMiLCJwYWdlTnVtYmVyIiwiT2JqZWN0IiwiYXNzaWduIiwiZm9yRWFjaCIsImRpdmlzaW9uSFRNTFRyYW5zZm9ybSIsInJlbW92ZSIsInRvcG1vc3RIVE1MTm9kZSIsImFwcGVuZFRvVG9wbW9zdEhUTUxOb2RlIiwibm9kZSIsImluZGV4RGlyZWN0aXZlSFRNTFRyYW5zZm9ybSIsImluZGV4SFRNTFRyYW5zZm9ybSIsIkluZGV4SFRNTFRyYW5zZm9ybSIsImZyb21EaXZpc2lvbkhUTUxOb2RlcyIsInJlcGxhY2VJbmRleERpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0iLCJjb250ZW50c0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0iLCJjb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtIiwiQ29udGVudHNMaXN0SFRNTFRyYW5zZm9ybSIsImZyb21Db250ZW50c0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm1BbmRUb3Btb3N0SFRNTE5vZGUiLCJyZXBsYWNlQ29udGVudHNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtIiwiYWRqdXN0SW5kZW50IiwiaW5kZW50IiwiZ2V0UnVsZU5hbWUiLCJydWxlTmFtZSIsIkhUTUxfUlVMRV9OQU1FIiwiZGl2aXNpb25IVE1MTm9kZXNGcm9tTm9kZSIsImdldERpdmlzaW9uSFRNTE5vZGVBdCIsImluZGV4IiwiZGl2aXNpb25IVE1MTm9kZSIsImZyb21Ob3RoaW5nIiwiSFRNTE5vZGUiLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIiwibWFwIiwiRGl2aXNpb25IVE1MVHJhbnNmb3JtIiwiZnJvbURpdmlzaW9uSFRNTE5vZGUiLCJpbmRleERpcmVjdGl2ZUhUTUxOb2RlIiwiaW5kZXhEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlIiwiSW5kZXhEaXJlY3RpdmVIVE1MVHJhbnNmb3JtIiwiZnJvbUluZGV4RGlyZWN0aXZlSFRNTE5vZGUiLCJjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlIiwiY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlIiwiQ29udGVudHNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtIiwiZnJvbUNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7ZUFZcUJBOztJQTZITEMsK0JBQStCO2VBQS9CQTs7SUFaQUMsNEJBQTRCO2VBQTVCQTs7OzJEQTNISzs0REFDVTsrREFDRzsrREFDSTs2REFDRTtnRUFDRzt5QkFFWjtxQkFDOEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlGLElBQUEsQUFBTUYsZ0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CRyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsT0FBTztnQkFDYixJQUFJLENBQUNDLFFBQVEsQ0FBQ0Q7Z0JBRWQsSUFBSSxDQUFDRSxXQUFXLENBQUNGO2dCQUVqQixJQUFJLENBQUNHLFFBQVEsQ0FBQ0g7WUFDaEI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0QsT0FBTztnQkFDZCxJQUFJSSxtQkFDQUM7Z0JBRUpELG9CQUFvQixJQUFJLENBQUNFLG9CQUFvQjtnQkFFN0NELHlCQUF5QkUsNENBQTRDSDtnQkFFckVBLG9CQUFvQixFQUFFO2dC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