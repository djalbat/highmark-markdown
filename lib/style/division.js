"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Division;
    }
});
var _medias = /*#__PURE__*/ _interop_require_default(require("./medias"));
var _ruleSets = /*#__PURE__*/ _interop_require_default(require("./ruleSets"));
var _declarations = /*#__PURE__*/ _interop_require_default(require("./declarations"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Division = /*#__PURE__*/ function() {
    function Division(medias, ruleSets, declarations, mediaType, selectorsList) {
        _class_call_check(this, Division);
        this.medias = medias;
        this.ruleSets = ruleSets;
        this.declarations = declarations;
        this.mediaType = mediaType;
        this.selectorsList = selectorsList;
    }
    _create_class(Division, [
        {
            key: "getMedias",
            value: function getMedias() {
                return this.medias;
            }
        },
        {
            key: "getRuleSets",
            value: function getRuleSets() {
                return this.ruleSets;
            }
        },
        {
            key: "getDeclarations",
            value: function getDeclarations() {
                return this.declarations;
            }
        },
        {
            key: "getMediaType",
            value: function getMediaType() {
                return this.mediaType;
            }
        },
        {
            key: "getSelectorsList",
            value: function getSelectorsList() {
                return this.selectorsList;
            }
        },
        {
            key: "asCSS",
            value: function asCSS() {
                var outermost = true, mediasCSS = this.medias.asCSS(this.mediaType, this.selectorsList, outermost), ruleSetsCSS = this.ruleSets.asCSS(this.selectorsList, outermost), declarationsCSS = this.declarations.asCSS(this.selectorsList, outermost), css = "\n\n".concat(declarationsCSS, "\n").concat(mediasCSS, "\n").concat(ruleSetsCSS, "\n\n");
                return css;
            }
        }
    ], [
        {
            key: "fromNodeTokensMediaTypeAndSelectorsList",
            value: function fromNodeTokensMediaTypeAndSelectorsList(node, tokens, mediaType, selectorsList) {
                var medias = _medias.default.fromNodeAndTokens(node, tokens), ruleSets = _ruleSets.default.fromNodeAndTokens(node, tokens), declarations = _declarations.default.fromNodeAndTokens(node, tokens), division = new Division(medias, ruleSets, declarations, mediaType, selectorsList);
                return division;
            }
        }
    ]);
    return Division;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9kaXZpc2lvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1lZGlhcyBmcm9tIFwiLi9tZWRpYXNcIjtcbmltcG9ydCBSdWxlU2V0cyBmcm9tIFwiLi9ydWxlU2V0c1wiO1xuaW1wb3J0IERlY2xhcmF0aW9ucyBmcm9tIFwiLi9kZWNsYXJhdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2aXNpb24ge1xuICBjb25zdHJ1Y3RvcihtZWRpYXMsIHJ1bGVTZXRzLCBkZWNsYXJhdGlvbnMsIG1lZGlhVHlwZSwgc2VsZWN0b3JzTGlzdCkge1xuICAgIHRoaXMubWVkaWFzID0gbWVkaWFzO1xuICAgIHRoaXMucnVsZVNldHMgPSBydWxlU2V0cztcbiAgICB0aGlzLmRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9ucztcbiAgICB0aGlzLm1lZGlhVHlwZSA9IG1lZGlhVHlwZTtcbiAgICB0aGlzLnNlbGVjdG9yc0xpc3QgPSBzZWxlY3RvcnNMaXN0O1xuICB9XG5cbiAgZ2V0TWVkaWFzKCkge1xuICAgIHJldHVybiB0aGlzLm1lZGlhcztcbiAgfVxuXG4gIGdldFJ1bGVTZXRzKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVTZXRzO1xuICB9XG5cbiAgZ2V0RGVjbGFyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGdldE1lZGlhVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZWRpYVR5cGU7XG4gIH1cblxuICBnZXRTZWxlY3RvcnNMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdG9yc0xpc3Q7XG4gIH1cblxuICBhc0NTUygpIHtcbiAgICBjb25zdCBvdXRlcm1vc3QgPSB0cnVlLFxuICAgICAgICAgIG1lZGlhc0NTUyA9IHRoaXMubWVkaWFzLmFzQ1NTKHRoaXMubWVkaWFUeXBlLCB0aGlzLnNlbGVjdG9yc0xpc3QsIG91dGVybW9zdCksXG4gICAgICAgICAgcnVsZVNldHNDU1MgPSB0aGlzLnJ1bGVTZXRzLmFzQ1NTKHRoaXMuc2VsZWN0b3JzTGlzdCwgb3V0ZXJtb3N0KSxcbiAgICAgICAgICBkZWNsYXJhdGlvbnNDU1MgPSB0aGlzLmRlY2xhcmF0aW9ucy5hc0NTUyh0aGlzLnNlbGVjdG9yc0xpc3QsIG91dGVybW9zdCksXG4gICAgICAgICAgY3NzID0gYFxuXG4ke2RlY2xhcmF0aW9uc0NTU31cbiR7bWVkaWFzQ1NTfVxuJHtydWxlU2V0c0NTU31cblxuYDtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVUb2tlbnNNZWRpYVR5cGVBbmRTZWxlY3RvcnNMaXN0KG5vZGUsIHRva2VucywgbWVkaWFUeXBlLCBzZWxlY3RvcnNMaXN0KSB7XG4gICAgY29uc3QgbWVkaWFzID0gTWVkaWFzLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgcnVsZVNldHMgPSBSdWxlU2V0cy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IERlY2xhcmF0aW9ucy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGRpdmlzaW9uID0gbmV3IERpdmlzaW9uKG1lZGlhcywgcnVsZVNldHMsIGRlY2xhcmF0aW9ucywgbWVkaWFUeXBlLCBzZWxlY3RvcnNMaXN0KTtcblxuICAgIHJldHVybiBkaXZpc2lvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRpdmlzaW9uIiwibWVkaWFzIiwicnVsZVNldHMiLCJkZWNsYXJhdGlvbnMiLCJtZWRpYVR5cGUiLCJzZWxlY3RvcnNMaXN0IiwiZ2V0TWVkaWFzIiwiZ2V0UnVsZVNldHMiLCJnZXREZWNsYXJhdGlvbnMiLCJnZXRNZWRpYVR5cGUiLCJnZXRTZWxlY3RvcnNMaXN0IiwiYXNDU1MiLCJvdXRlcm1vc3QiLCJtZWRpYXNDU1MiLCJydWxlU2V0c0NTUyIsImRlY2xhcmF0aW9uc0NTUyIsImNzcyIsImZyb21Ob2RlVG9rZW5zTWVkaWFUeXBlQW5kU2VsZWN0b3JzTGlzdCIsIm5vZGUiLCJ0b2tlbnMiLCJNZWRpYXMiLCJmcm9tTm9kZUFuZFRva2VucyIsIlJ1bGVTZXRzIiwiRGVjbGFyYXRpb25zIiwiZGl2aXNpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OzZEQUpGOytEQUNFO21FQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVYsSUFBQSxBQUFNQSx5QkFBRCxBQUFMO2FBQU1BLFNBQ1BDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEVBQUVDLFNBQVMsRUFBRUMsYUFBYTtnQ0FEakRMO1FBRWpCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTs7a0JBTkpMOztZQVNuQk0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxNQUFNO1lBQ3BCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxRQUFRO1lBQ3RCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxZQUFZO1lBQzFCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxTQUFTO1lBQ3ZCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxhQUFhO1lBQzNCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFlBQVksTUFDWkMsWUFBWSxJQUFJLENBQUNaLE1BQU0sQ0FBQ1UsS0FBSyxDQUFDLElBQUksQ0FBQ1AsU0FBUyxFQUFFLElBQUksQ0FBQ0MsYUFBYSxFQUFFTyxZQUNsRUUsY0FBYyxJQUFJLENBQUNaLFFBQVEsQ0FBQ1MsS0FBSyxDQUFDLElBQUksQ0FBQ04sYUFBYSxFQUFFTyxZQUN0REcsa0JBQWtCLElBQUksQ0FBQ1osWUFBWSxDQUFDUSxLQUFLLENBQUMsSUFBSSxDQUFDTixhQUFhLEVBQUVPLFlBQzlESSxNQUFNLEFBQUMsT0FHZkgsT0FEQUUsaUJBQWdCLE1BRWhCRCxPQURBRCxXQUFVLE1BQ0UsT0FBWkMsYUFBWTtnQkFJVixPQUFPRTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHdDQUF3Q0MsSUFBSSxFQUFFQyxNQUFNLEVBQUVmLFNBQVMsRUFBRUMsYUFBYTtnQkFDbkYsSUFBTUosU0FBU21CLGVBQU0sQ0FBQ0MsaUJBQWlCLENBQUNILE1BQU1DLFNBQ3hDakIsV0FBV29CLGlCQUFRLENBQUNELGlCQUFpQixDQUFDSCxNQUFNQyxTQUM1Q2hCLGVBQWVvQixxQkFBWSxDQUFDRixpQkFBaUIsQ0FBQ0gsTUFBTUMsU0FDcERLLFdBQVcsSUFqREF4QixTQWlEYUMsUUFBUUMsVUFBVUMsY0FBY0MsV0FBV0M7Z0JBRXpFLE9BQU9tQjtZQUNUOzs7V0FwRG1CeEIifQ==