"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TopmostMarkdownNode;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _division = /*#__PURE__*/ _interop_require_default(require("../../node/markdown/division"));
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
var TopmostMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(TopmostMarkdownNode, MarkdownNode);
    function TopmostMarkdownNode() {
        _class_call_check(this, TopmostMarkdownNode);
        return _call_super(this, TopmostMarkdownNode, arguments);
    }
    _create_class(TopmostMarkdownNode, [
        {
            key: "resolve",
            value: function resolve(context) {
                // this.forEachDivisionMarkdownNode((divisionMarkdownNode) => {
                //   divisionMarkdownNode.resolveIncludes(context);
                // });
                this.filterDivisionMarkdownNode(function(divisionMarkdownNode) {
                    var ignored = divisionMarkdownNode.isIgnored();
                    if (!ignored) {
                        return true;
                    }
                });
            // this.forEachDivisionMarkdownNode((divisionMarkdownNode) => {
            //   divisionMarkdownNode.resolveEmbeddings(context);
            // });
            }
        },
        {
            key: "getDivisionMarkdownNodeAt",
            value: function getDivisionMarkdownNodeAt(index) {
                var divisionNodeIndex = index, divisionMarkdownNode = this.findDivisionMarkdownNode(function(childNode, index) {
                    var childNodeIndex = index; ///
                    if (childNodeIndex === divisionNodeIndex) {
                        return true;
                    }
                });
                return divisionMarkdownNode;
            }
        },
        {
            key: "findDivisionMarkdownNode",
            value: function findDivisionMarkdownNode(callback) {
                var index = 0;
                var divisionMarkdownNode = this.findChildNode(function(childNode) {
                    var childNodeDivisionMarkdownNode = _instanceof(childNode, _division.default);
                    if (childNodeDivisionMarkdownNode) {
                        var divisionMarkNode = childNode, result = callback(divisionMarkNode, index);
                        if (result) {
                            return true;
                        }
                        index++;
                    }
                });
                return divisionMarkdownNode;
            }
        },
        {
            key: "filterDivisionMarkdownNode",
            value: function filterDivisionMarkdownNode(callback) {
                this.filterChildNode(function(childNode) {
                    var childNodeDivisionMarkdownNode = _instanceof(childNode, _division.default);
                    if (!childNodeDivisionMarkdownNode) {
                        return true;
                    }
                    if (childNodeDivisionMarkdownNode) {
                        var divisionMarkNode = childNode, result = callback(divisionMarkNode);
                        if (result) {
                            return true;
                        }
                    }
                });
            }
        },
        {
            key: "forEachDivisionMarkdownNode",
            value: function forEachDivisionMarkdownNode(callback) {
                this.forEachChildNode(function(childNode) {
                    var childNodeDivisionMarkdownNode = _instanceof(childNode, _division.default);
                    if (childNodeDivisionMarkdownNode) {
                        var divisionMarkNode = childNode; ///
                        callback(divisionMarkNode);
                    }
                });
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(TopmostMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return TopmostMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL3RvcG1vc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcbmltcG9ydCBEaXZpc2lvbk1hcmtkb3duTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9tYXJrZG93bi9kaXZpc2lvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3Btb3N0TWFya2Rvd25Ob2RlIGV4dGVuZHMgTWFya2Rvd25Ob2RlIHtcbiAgcmVzb2x2ZShjb250ZXh0KSB7XG4gICAgLy8gdGhpcy5mb3JFYWNoRGl2aXNpb25NYXJrZG93bk5vZGUoKGRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgLy8gICBkaXZpc2lvbk1hcmtkb3duTm9kZS5yZXNvbHZlSW5jbHVkZXMoY29udGV4dCk7XG4gICAgLy8gfSk7XG5cbiAgICB0aGlzLmZpbHRlckRpdmlzaW9uTWFya2Rvd25Ob2RlKChkaXZpc2lvbk1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgY29uc3QgaWdub3JlZCA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLmlzSWdub3JlZCgpO1xuXG4gICAgICBpZiAoIWlnbm9yZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyB0aGlzLmZvckVhY2hEaXZpc2lvbk1hcmtkb3duTm9kZSgoZGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICAvLyAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlLnJlc29sdmVFbWJlZGRpbmdzKGNvbnRleHQpO1xuICAgIC8vIH0pO1xuICB9XG5cbiAgZ2V0RGl2aXNpb25NYXJrZG93bk5vZGVBdChpbmRleCkge1xuICAgIGNvbnN0IGRpdmlzaW9uTm9kZUluZGV4ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMuZmluZERpdmlzaW9uTWFya2Rvd25Ob2RlKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZE5vZGVJbmRleCA9IGluZGV4OyAvLy9cblxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZUluZGV4ID09PSBkaXZpc2lvbk5vZGVJbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIGZpbmREaXZpc2lvbk1hcmtkb3duTm9kZShjYWxsYmFjaykge1xuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMuZmluZENoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVEaXZpc2lvbk1hcmtkb3duTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBEaXZpc2lvbk1hcmtkb3duTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVEaXZpc2lvbk1hcmtkb3duTm9kZSkge1xuICAgICAgICBjb25zdCBkaXZpc2lvbk1hcmtOb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZGl2aXNpb25NYXJrTm9kZSwgaW5kZXgpO1xuXG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGU7XG4gIH1cblxuICBmaWx0ZXJEaXZpc2lvbk1hcmtkb3duTm9kZShjYWxsYmFjaykge1xuICAgIHRoaXMuZmlsdGVyQ2hpbGROb2RlKChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZURpdmlzaW9uTWFya2Rvd25Ob2RlID0gKGNoaWxkTm9kZSBpbnN0YW5jZW9mIERpdmlzaW9uTWFya2Rvd25Ob2RlKTtcblxuICAgICAgaWYgKCFjaGlsZE5vZGVEaXZpc2lvbk1hcmtkb3duTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkTm9kZURpdmlzaW9uTWFya2Rvd25Ob2RlKSB7XG4gICAgICAgIGNvbnN0IGRpdmlzaW9uTWFya05vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhkaXZpc2lvbk1hcmtOb2RlKTtcblxuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZvckVhY2hEaXZpc2lvbk1hcmtkb3duTm9kZShjYWxsYmFjaykge1xuICAgIHRoaXMuZm9yRWFjaENoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVEaXZpc2lvbk1hcmtkb3duTm9kZSA9IChjaGlsZE5vZGUgaW5zdGFuY2VvZiBEaXZpc2lvbk1hcmtkb3duTm9kZSk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVEaXZpc2lvbk1hcmtkb3duTm9kZSkge1xuICAgICAgICBjb25zdCBkaXZpc2lvbk1hcmtOb2RlID0gY2hpbGROb2RlOyAvLy9cblxuICAgICAgICBjYWxsYmFjayhkaXZpc2lvbk1hcmtOb2RlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KFRvcG1vc3RNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuIl0sIm5hbWVzIjpbIlRvcG1vc3RNYXJrZG93bk5vZGUiLCJyZXNvbHZlIiwiY29udGV4dCIsImZpbHRlckRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJpZ25vcmVkIiwiaXNJZ25vcmVkIiwiZ2V0RGl2aXNpb25NYXJrZG93bk5vZGVBdCIsImluZGV4IiwiZGl2aXNpb25Ob2RlSW5kZXgiLCJmaW5kRGl2aXNpb25NYXJrZG93bk5vZGUiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVJbmRleCIsImNhbGxiYWNrIiwiZmluZENoaWxkTm9kZSIsImNoaWxkTm9kZURpdmlzaW9uTWFya2Rvd25Ob2RlIiwiRGl2aXNpb25NYXJrZG93bk5vZGUiLCJkaXZpc2lvbk1hcmtOb2RlIiwicmVzdWx0IiwiZmlsdGVyQ2hpbGROb2RlIiwiZm9yRWFjaERpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZm9yRWFjaENoaWxkTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5IiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsIk1hcmtkb3duTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFLcUJBOzs7K0RBSEk7K0RBQ1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxCLElBQUEsQUFBTUEsb0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsT0FBTztnQkFDYiwrREFBK0Q7Z0JBQy9ELG1EQUFtRDtnQkFDbkQsTUFBTTtnQkFFTixJQUFJLENBQUNDLDBCQUEwQixDQUFDLFNBQUNDO29CQUMvQixJQUFNQyxVQUFVRCxxQkFBcUJFLFNBQVM7b0JBRTlDLElBQUksQ0FBQ0QsU0FBUzt3QkFDWixPQUFPO29CQUNUO2dCQUNGO1lBRUEsK0RBQStEO1lBQy9ELHFEQUFxRDtZQUNyRCxNQUFNO1lBQ1I7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsMEJBQTBCQyxLQUFLO2dCQUM3QixJQUFNQyxvQkFBb0JELE9BQ3BCSix1QkFBdUIsSUFBSSxDQUFDTSx3QkFBd0IsQ0FBQyxTQUFDQyxXQUFXSDtvQkFDL0QsSUFBTUksaUJBQWlCSixPQUFPLEdBQUc7b0JBRWpDLElBQUlJLG1CQUFtQkgsbUJBQW1CO3dCQUN4QyxPQUFPO29CQUNUO2dCQUNGO2dCQUVOLE9BQU9MO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEseUJBQXlCRyxRQUFRO2dCQUMvQixJQUFJTCxRQUFRO2dCQUVaLElBQU1KLHVCQUF1QixJQUFJLENBQUNVLGFBQWEsQ0FBQyxTQUFDSDtvQkFDL0MsSUFBTUksZ0NBQWlDSixBQUFTLFlBQVRBLFdBQXFCSyxpQkFBb0I7b0JBRWhGLElBQUlELCtCQUErQjt3QkFDakMsSUFBTUUsbUJBQW1CTixXQUNuQk8sU0FBU0wsU0FBU0ksa0JBQWtCVDt3QkFFMUMsSUFBSVUsUUFBUTs0QkFDVixPQUFPO3dCQUNUO3dCQUVBVjtvQkFDRjtnQkFDRjtnQkFFQSxPQUFPSjtZQUNUOzs7WUFFQUQsS0FBQUE7bUJBQUFBLFNBQUFBLDJCQUEyQlUsUUFBUTtnQkFDakMsSUFBSSxDQUFDTSxlQUFlLENBQUMsU0FBQ1I7b0JBQ3BCLElBQU1JLGdDQUFpQ0osQUFBUyxZQUFUQSxXQUFxQkssaUJBQW9CO29CQUVoRixJQUFJLENBQUNELCtCQUErQjt3QkFDbEMsT0FBTztvQkFDVDtvQkFFQSxJQUFJQSwrQkFBK0I7d0JBQ2pDLElBQU1FLG1CQUFtQk4sV0FDbkJPLFNBQVNMLFNBQVNJO3dCQUV4QixJQUFJQyxRQUFROzRCQUNWLE9BQU87d0JBQ1Q7b0JBQ0Y7Z0JBQ0Y7WUFDRjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSw0QkFBNEJQLFFBQVE7Z0JBQ2xDLElBQUksQ0FBQ1EsZ0JBQWdCLENBQUMsU0FBQ1Y7b0JBQ3JCLElBQU1JLGdDQUFpQ0osQUFBUyxZQUFUQSxXQUFxQkssaUJBQW9CO29CQUVoRixJQUFJRCwrQkFBK0I7d0JBQ2pDLElBQU1FLG1CQUFtQk4sV0FBVyxHQUFHO3dCQUV2Q0UsU0FBU0k7b0JBQ1g7Z0JBQ0Y7WUFDRjs7OztZQUVPSyxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPO2dCQUFJLE9BQU9DLGlCQUFZLENBQUNKLGdDQUFnQyxDQXBGMUd0QixxQkFvRmdJdUIsVUFBVUMsWUFBWUM7WUFBVTs7O1dBcEZoS3pCO0VBQTRCMEIsaUJBQVkifQ==