"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EmbedDirectivesSubDivisionReplacement;
    }
});
var _necessary = require("necessary");
var _subDivision = /*#__PURE__*/ _interop_require_default(require("../subDivision"));
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
var backwardsForEach = _necessary.arrayUtilities.backwardsForEach;
var EmbedDirectivesSubDivisionReplacement = /*#__PURE__*/ function(SubDivisionReplacement) {
    _inherits(EmbedDirectivesSubDivisionReplacement, SubDivisionReplacement);
    function EmbedDirectivesSubDivisionReplacement(node, tokens, subDivisionMarkdownNode, embedDirectiveMarkdownNodes) {
        _class_call_check(this, EmbedDirectivesSubDivisionReplacement);
        var _this;
        _this = _call_super(this, EmbedDirectivesSubDivisionReplacement, [
            node,
            tokens,
            subDivisionMarkdownNode
        ]);
        _this.embedDirectiveMarkdownNodes = embedDirectiveMarkdownNodes;
        return _this;
    }
    _create_class(EmbedDirectivesSubDivisionReplacement, [
        {
            key: "getEmbedDirectiveMarkdownNodes",
            value: function getEmbedDirectiveMarkdownNodes() {
                return this.embedDirectiveMarkdownNodes;
            }
        },
        {
            key: "replaceSubDivisionMarkdownNode",
            value: function replaceSubDivisionMarkdownNode(divisionMarkdownNode, context) {
                var subDivisionMarkdownNodes = [], subDivisionMarkdownNode = this.getSubDivisionMarkdownNode();
                backwardsForEach(this.embedDirectiveMarkdownNodes, function(embedDirectiveMarkdownNode) {
                    var embedDirectiveReplacement = embedDirectiveMarkdownNode.resolve(context);
                    if (embedDirectiveReplacement !== null) {
                        embedDirectiveReplacement.addAfterSubDivisionMarkdownNode(subDivisionMarkdownNode, divisionMarkdownNode, subDivisionMarkdownNodes, context);
                    }
                });
                this.removeFromDivisionMarkdownNode(divisionMarkdownNode, context);
                return subDivisionMarkdownNodes;
            }
        }
    ], [
        {
            key: "fromSubDivisionMarkdownNode",
            value: function fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context) {
                var embedDirectivesSubDivisionReplacement = null;
                var node = subDivisionMarkdownNode, embedDirectiveMarkdownNodes = (0, _query.embedDirectiveMarkdownNodesFromNode)(node), embedDirectiveMarkdownNodesLength = embedDirectiveMarkdownNodes.length;
                if (embedDirectiveMarkdownNodesLength > 0) {
                    embedDirectivesSubDivisionReplacement = _subDivision.default.fromSubDivisionMarkdownNode(EmbedDirectivesSubDivisionReplacement, subDivisionMarkdownNode, embedDirectiveMarkdownNodes, context);
                }
                return embedDirectivesSubDivisionReplacement;
            }
        }
    ]);
    return EmbedDirectivesSubDivisionReplacement;
}(_subDivision.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vc3ViRGl2aXNpb24vZW1iZWREaXJlY3RpdmVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgZnJvbSBcIi4uL3N1YkRpdmlzaW9uXCI7XG5cbmltcG9ydCB7IGVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB7IGJhY2t3YXJkc0ZvckVhY2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWJlZERpcmVjdGl2ZXNTdWJEaXZpc2lvblJlcGxhY2VtZW50IGV4dGVuZHMgU3ViRGl2aXNpb25SZXBsYWNlbWVudCB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIHRva2Vucywgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIGVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2Rlcykge1xuICAgIHN1cGVyKG5vZGUsIHRva2Vucywgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpO1xuXG4gICAgdGhpcy5lbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXMgPSBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXM7XG4gIH1cblxuICBnZXRFbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzO1xuICB9XG5cbiAgcmVwbGFjZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3ViRGl2aXNpb25NYXJrZG93bk5vZGVzID0gW10sXG4gICAgICAgICAgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLmdldFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKCk7XG5cbiAgICBiYWNrd2FyZHNGb3JFYWNoKHRoaXMuZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzLCAoZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGVtYmVkRGlyZWN0aXZlUmVwbGFjZW1lbnQgPSBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZS5yZXNvbHZlKGNvbnRleHQpO1xuXG4gICAgICBpZiAoZW1iZWREaXJlY3RpdmVSZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBlbWJlZERpcmVjdGl2ZVJlcGxhY2VtZW50LmFkZEFmdGVyU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIGRpdmlzaW9uTWFya2Rvd25Ob2RlLCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5yZW1vdmVGcm9tRGl2aXNpb25NYXJrZG93bk5vZGUoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgZW1iZWREaXJlY3RpdmVzU3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBub2RlID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgIGVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlcyA9IGVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUpLFxuICAgICAgICAgIGVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2Rlc0xlbmd0aCA9IGVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAoZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzTGVuZ3RoID4gMCkge1xuICAgICAgZW1iZWREaXJlY3RpdmVzU3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQuZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKEVtYmVkRGlyZWN0aXZlc1N1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCBlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbWJlZERpcmVjdGl2ZXNTdWJEaXZpc2lvblJlcGxhY2VtZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRW1iZWREaXJlY3RpdmVzU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsImJhY2t3YXJkc0ZvckVhY2giLCJhcnJheVV0aWxpdGllcyIsIm5vZGUiLCJ0b2tlbnMiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlcyIsImdldEVtYmVkRGlyZWN0aXZlTWFya2Rvd25Ob2RlcyIsInJlcGxhY2VTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY29udGV4dCIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImdldFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGUiLCJlbWJlZERpcmVjdGl2ZVJlcGxhY2VtZW50IiwicmVzb2x2ZSIsImFkZEFmdGVyU3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJyZW1vdmVGcm9tRGl2aXNpb25NYXJrZG93bk5vZGUiLCJmcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJlbWJlZERpcmVjdGl2ZXNTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiZW1iZWREaXJlY3RpdmVNYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJlbWJlZERpcmVjdGl2ZU1hcmtkb3duTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJTdWJEaXZpc2lvblJlcGxhY2VtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7Ozt5QkFSVTtrRUFFSTtxQkFFaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEQsSUFBTSxBQUFFQyxtQkFBcUJDLHlCQUFjLENBQW5DRDtBQUVPLElBQUEsQUFBTUQsc0RBQU47Y0FBTUE7YUFBQUEsc0NBQ1BHLElBQUksRUFBRUMsTUFBTSxFQUFFQyx1QkFBdUIsRUFBRUMsMkJBQTJCO2dDQUQzRE47O2dCQUVqQixrQkFGaUJBO1lBRVhHO1lBQU1DO1lBQVFDOztRQUVwQixNQUFLQywyQkFBMkIsR0FBR0E7OztrQkFKbEJOOztZQU9uQk8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCwyQkFBMkI7WUFDekM7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsK0JBQStCQyxvQkFBb0IsRUFBRUMsT0FBTztnQkFDMUQsSUFBTUMsMkJBQTJCLEVBQUUsRUFDN0JOLDBCQUEwQixJQUFJLENBQUNPLDBCQUEwQjtnQkFFL0RYLGlCQUFpQixJQUFJLENBQUNLLDJCQUEyQixFQUFFLFNBQUNPO29CQUNsRCxJQUFNQyw0QkFBNEJELDJCQUEyQkUsT0FBTyxDQUFDTDtvQkFFckUsSUFBSUksOEJBQThCLE1BQU07d0JBQ3RDQSwwQkFBMEJFLCtCQUErQixDQUFDWCx5QkFBeUJJLHNCQUFzQkUsMEJBQTBCRDtvQkFDckk7Z0JBQ0Y7Z0JBRUEsSUFBSSxDQUFDTyw4QkFBOEIsQ0FBQ1Isc0JBQXNCQztnQkFFMUQsT0FBT0M7WUFDVDs7OztZQUVPTyxLQUFBQTttQkFBUCxTQUFPQSw0QkFBNEJiLHVCQUF1QixFQUFFSyxPQUFPO2dCQUNqRSxJQUFJUyx3Q0FBd0M7Z0JBRTVDLElBQU1oQixPQUFPRSx5QkFDUEMsOEJBQThCYyxJQUFBQSwwQ0FBbUMsRUFBQ2pCLE9BQ2xFa0Isb0NBQW9DZiw0QkFBNEJnQixNQUFNO2dCQUU1RSxJQUFJRCxvQ0FBb0MsR0FBRztvQkFDekNGLHdDQUF3Q0ksb0JBQXNCLENBQUNMLDJCQUEyQixDQXBDM0VsQix1Q0FvQ21ISyx5QkFBeUJDLDZCQUE2Qkk7Z0JBQzFMO2dCQUVBLE9BQU9TO1lBQ1Q7OztXQXhDbUJuQjtFQUE4Q3VCLG9CQUFzQiJ9