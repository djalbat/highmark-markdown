"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _index = require("../index");
var _easylayout = require("easy-layout");
var _indexOptions = /*#__PURE__*/ _interop_require_default(require("./indexOptions"));
var _pageButtons = /*#__PURE__*/ _interop_require_default(require("./view/div/pageButtons"));
var _left = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/left"));
var _css = /*#__PURE__*/ _interop_require_default(require("./view/div/container/css"));
var _html = /*#__PURE__*/ _interop_require_default(require("./view/div/container/html"));
var _left1 = /*#__PURE__*/ _interop_require_default(require("./view/div/tabButtons/left"));
var _right = /*#__PURE__*/ _interop_require_default(require("./view/div/tabButtons/right"));
var _preview = /*#__PURE__*/ _interop_require_default(require("./view/div/container/preview"));
var _markdown = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdown"));
var _css1 = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree/css"));
var _html1 = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree/html"));
var _plainText = /*#__PURE__*/ _interop_require_default(require("./view/div/container/plainText"));
var _markdownStyle = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdownStyle"));
var _importer = require("./importer");
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  padding: 1rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var tokensFromMarkdown = _index.grammarUtilities.tokensFromMarkdown, markdownNodeFromTokens = _index.grammarUtilities.markdownNodeFromTokens, tokensFromMarkdownStyle = _index.grammarUtilities.tokensFromMarkdownStyle, markdownStyleNodeFromTokens = _index.grammarUtilities.markdownStyleNodeFromTokens, topmostHTMLNodeFromMarkdownNode = _index.grammarUtilities.topmostHTMLNodeFromMarkdownNode, topmostCSSNodeFromMarkdownStyleNode = _index.grammarUtilities.topmostCSSNodeFromMarkdownStyleNode;
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _call_super(this, View, arguments), _define_property(_this, "pageUpdateCustomHandler", function(event, element, index) {
            _this.updateHTML(index);
        }), _define_property(_this, "markdownStyleCustomHandler", function(event, element) {
            _this.markdownStyle();
        }), _define_property(_this, "markdownCustomHandler", function(event, element) {
            _this.markdown();
        }), _define_property(_this, "plainTextCustomHandler", function(event, element) {
            _this.plainText();
        }), _define_property(_this, "previewCustomHandler", function(event, element) {
            _this.preview();
        }), _define_property(_this, "keyUpCustomHandler", function(event, element) {
            _this.update();
        }), _define_property(_this, "htmlCustomHandler", function(event, element) {
            _this.html();
        }), _define_property(_this, "cssCustomHandler", function(event, element) {
            _this.css();
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "update",
            value: function update() {
                this.updateMarkdownStyle();
                this.updateMarkdown();
                this.updateHTML();
                this.updateCSS();
            }
        },
        {
            key: "updateMarkdownStyle",
            value: function updateMarkdownStyle() {
                var markdownStyle;
                markdownStyle = this.getMarkdownStyle();
                var selectorsString = this.getSelectorsString();
                markdownStyle = "".concat(selectorsString, " {\n  ").concat(markdownStyle, "\n}");
                var tokens = tokensFromMarkdownStyle(markdownStyle), markdownStyleNode = markdownStyleNodeFromTokens(tokens);
                if (markdownStyleNode === null) {
                    this.resetMarkdownStyleTokens();
                    this.resetTopmostMarkdownStyleNode();
                    this.clearMarkdownStyleParseTreeTextarea();
                    return;
                }
                var node = markdownStyleNode, parseTree = node.asParseTree(tokens), markdownStyleTokens = tokens, topmostMarkdownStyleNode = node; ///
                this.setMarkdownStyleTokens(markdownStyleTokens);
                this.setTopmostMarkdownStyleNode(topmostMarkdownStyleNode);
                this.updateMarkdownStyleParseTreeTextarea(parseTree);
                var markdownStyleElement = this.getMarkdownStyleElement(), topmostCSSNode = topmostCSSNodeFromMarkdownStyleNode(markdownStyleNode), context = {
                    tokens: tokens
                };
                topmostCSSNode.resolve(context);
                var css = topmostCSSNode.asCSS(context);
                markdownStyleElement.setCSS(css);
            }
        },
        {
            key: "updateMarkdown",
            value: function updateMarkdown() {
                var markdown = this.getMarkdown(), tokens = tokensFromMarkdown(markdown), markdownNode = markdownNodeFromTokens(tokens);
                if (markdownNode === null) {
                    this.resetMarkdownTokens();
                    this.resetTopmostMarkdownNode();
                    this.clearMarkdownParseTreeTextarea();
                    return;
                }
                var context;
                var topmostMarkdownNode = markdownNode; ///
                context = {
                    tokens: tokens,
                    importer: _importer.importer
                };
                topmostMarkdownNode.resolve(context);
                var topmostMarkdownNodeParseTree = topmostMarkdownNode.asParseTree(tokens), markdownParseTree = topmostMarkdownNodeParseTree, markdownTokens = tokens; ///
                this.setMarkdownTokens(markdownTokens);
                this.setTopmostMarkdownNode(topmostMarkdownNode);
                this.updateMarkdownParseTreeTextarea(markdownParseTree);
            }
        },
        {
            key: "updateHTML",
            value: function updateHTML() {
                var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
                this.clearXMP();
                this.clearPreviewDiv();
                this.clearPlainTextTextarea();
                this.clearHTMLParseTreeTextarea();
                this.clearPageButtonsDiv();
                var topmostMarkdownNode = this.getTopmostMarkdownNode(), markdownNode = topmostMarkdownNode, topmostHTMLNode = topmostHTMLNodeFromMarkdownNode(markdownNode);
                if (topmostHTMLNode === null) {
                    return;
                }
                var context;
                var markdownTokens = this.getMarkdownTokens(), tokens = markdownTokens; ///
                context = {
                    indexOptions: _indexOptions.default,
                    tokens: tokens
                };
                topmostHTMLNode.resolve(context);
                var divisionHTMLNOde = topmostHTMLNode.getDivisionHTMLNodeAt(index);
                if (divisionHTMLNOde === null) {
                    return;
                }
                var divisionHTMLNOdeParseTree = divisionHTMLNOde.asParseTree(), htmlParseTree = divisionHTMLNOdeParseTree, multiplicity = topmostHTMLNode.getMultiplicity(), length = multiplicity;
                context = {
                    tokens: tokens,
                    pathToURL: pathToURL
                };
                this.updateXMP(divisionHTMLNOde, context);
                this.updatePreviewDiv(divisionHTMLNOde, context);
                this.updatePlainTextTextarea(divisionHTMLNOde, context);
                this.updateHTMLParseTreeTextarea(htmlParseTree);
                this.updatePageButtonsDiv(length, index);
            }
        },
        {
            key: "updateCSS",
            value: function updateCSS() {
                var topmostMarkdownStyleNode = this.getTopmostMarkdownStyleNode(), markdownStyleTokens = this.getMarkdownStyleTokens(), markdownStyleNode = topmostMarkdownStyleNode, topmostCSSNode = topmostCSSNodeFromMarkdownStyleNode(markdownStyleNode), tokens = markdownStyleTokens, context = {
                    tokens: tokens
                };
                topmostCSSNode.resolve(context);
                var topmostCSSNodeParseTree = topmostCSSNode.asParseTree(tokens), cssParseTree = topmostCSSNodeParseTree, css = topmostCSSNode.asCSS(context);
                this.updateCSSParseTreeTextarea(cssParseTree);
                this.setCSS(css);
            }
        },
        {
            key: "markdownStyle",
            value: function markdownStyle() {
                this.hideMarkdownContainerDiv();
                this.showMarkdownStyleContainerDiv();
            }
        },
        {
            key: "markdown",
            value: function markdown() {
                this.showMarkdownContainerDiv();
                this.hideMarkdownStyleContainerDiv();
            }
        },
        {
            key: "plainText",
            value: function plainText() {
                this.hideCSSContainerDiv();
                this.hideHTMLContainerDiv();
                this.hidePreviewContainerDiv();
                this.showPlainTextContainerDiv();
                this.hideCSSParseTreeTextarea();
                this.showHTMLParseTreeTextarea();
            }
        },
        {
            key: "preview",
            value: function preview() {
                this.hideCSSContainerDiv();
                this.hideHTMLContainerDiv();
                this.showPreviewContainerDiv();
                this.hidePlainTextContainerDiv();
                this.hideCSSParseTreeTextarea();
                this.showHTMLParseTreeTextarea();
            }
        },
        {
            key: "html",
            value: function html() {
                this.hideCSSContainerDiv();
                this.showHTMLContainerDiv();
                this.hidePreviewContainerDiv();
                this.hidePlainTextContainerDiv();
                this.hideCSSParseTreeTextarea();
                this.showHTMLParseTreeTextarea();
            }
        },
        {
            key: "css",
            value: function css() {
                this.showCSSContainerDiv();
                this.hideHTMLContainerDiv();
                this.hidePreviewContainerDiv();
                this.hidePlainTextContainerDiv();
                this.showCSSParseTreeTextarea();
                this.hideHTMLParseTreeTextarea();
            }
        },
        {
            key: "resetMarkdownTokens",
            value: function resetMarkdownTokens() {
                var markdownTokens = null;
                this.setMarkdownTokens(markdownTokens);
            }
        },
        {
            key: "resetMarkdownStyleTokens",
            value: function resetMarkdownStyleTokens() {
                var markdownStyleTokens = null;
                this.setMarkdownStyleTokens(markdownStyleTokens);
            }
        },
        {
            key: "resetTopmostMarkdownNode",
            value: function resetTopmostMarkdownNode() {
                var topmostMarkdownNode = null;
                this.setTopmostMarkdownNode(topmostMarkdownNode);
            }
        },
        {
            key: "resetTopmostMarkdownStyleNode",
            value: function resetTopmostMarkdownStyleNode() {
                var topmostMarkdownStyleNode = null;
                this.setTopmostMarkdownStyleNode(topmostMarkdownStyleNode);
            }
        },
        {
            key: "getMarkdownStyleElement",
            value: function getMarkdownStyleElement() {
                var markdownStyleElement = this.properties.markdownStyleElement;
                return markdownStyleElement;
            }
        },
        {
            key: "getSelectorsString",
            value: function getSelectorsString() {
                var selectorsString = this.properties.selectorsString;
                return selectorsString;
            }
        },
        {
            key: "getMarkdownTokens",
            value: function getMarkdownTokens() {
                var markdownTokens = this.getState().markdownTokens;
                return markdownTokens;
            }
        },
        {
            key: "getMarkdownStyleTokens",
            value: function getMarkdownStyleTokens() {
                var markdownStyleTokens = this.getState().markdownStyleTokens;
                return markdownStyleTokens;
            }
        },
        {
            key: "getTopmostMarkdownNode",
            value: function getTopmostMarkdownNode() {
                var topmostMMarkdownNode = this.getState().topmostMMarkdownNode;
                return topmostMMarkdownNode;
            }
        },
        {
            key: "getTopmostMarkdownStyleNode",
            value: function getTopmostMarkdownStyleNode() {
                var topmostMMarkdownStyleNode = this.getState().topmostMMarkdownStyleNode;
                return topmostMMarkdownStyleNode;
            }
        },
        {
            key: "setMarkdownTokens",
            value: function setMarkdownTokens(markdownTokens) {
                this.updateState({
                    markdownTokens: markdownTokens
                });
            }
        },
        {
            key: "setMarkdownStyleTokens",
            value: function setMarkdownStyleTokens(markdownStyleTokens) {
                this.updateState({
                    markdownStyleTokens: markdownStyleTokens
                });
            }
        },
        {
            key: "setTopmostMarkdownNode",
            value: function setTopmostMarkdownNode(topmostMMarkdownNode) {
                this.updateState({
                    topmostMMarkdownNode: topmostMMarkdownNode
                });
            }
        },
        {
            key: "setTopmostMarkdownStyleNode",
            value: function setTopmostMarkdownStyleNode(topmostMMarkdownStyleNode) {
                this.updateState({
                    topmostMMarkdownStyleNode: topmostMMarkdownStyleNode
                });
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var markdownTokens = null, markdownStyleTokens = null, topmostMarkdownNode = null, topmostMarkdownStyleNode = null;
                this.setState({
                    markdownTokens: markdownTokens,
                    markdownStyleTokens: markdownStyleTokens,
                    topmostMarkdownNode: topmostMarkdownNode,
                    topmostMarkdownStyleNode: topmostMarkdownStyleNode
                });
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                this.markdown();
                this.preview();
                this.update();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
            ///
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_left.default, null, /*#__PURE__*/ React.createElement(_left1.default, {
                    onCustomMarkdown: this.markdownCustomHandler,
                    onCustomMarkdownStyle: this.markdownStyleCustomHandler
                }), /*#__PURE__*/ React.createElement(_markdown.default, {
                    onCustomKeyUp: this.keyUpCustomHandler
                }), /*#__PURE__*/ React.createElement(_markdownStyle.default, {
                    onCustomKeyUp: this.keyUpCustomHandler
                })), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_right.default, {
                    onCustomCSS: this.cssCustomHandler,
                    onCustomHTML: this.htmlCustomHandler,
                    onCustomPreview: this.previewCustomHandler,
                    onCustomPlainText: this.plainTextCustomHandler
                }), /*#__PURE__*/ React.createElement(_pageButtons.default, {
                    onCustomPageUpdate: this.pageUpdateCustomHandler
                }), /*#__PURE__*/ React.createElement(_css.default, null), /*#__PURE__*/ React.createElement(_html.default, null), /*#__PURE__*/ React.createElement(_preview.default, null), /*#__PURE__*/ React.createElement(_plainText.default, null), /*#__PURE__*/ React.createElement(_html1.default, null), /*#__PURE__*/ React.createElement(_css1.default, null))));
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                this.setInitialState();
                var _this_constructor = this.constructor, initialMarkdown = _this_constructor.initialMarkdown, initialMarkdownStyle = _this_constructor.initialMarkdownStyle, markdownStyle = initialMarkdownStyle, markdown = initialMarkdown; ///
                this.setMarkdownStyle(markdownStyle);
                this.setMarkdown(markdown);
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "initialMarkdown", "# Foundations");
_define_property(View, "initialMarkdownStyle", "primaryHeading {\n  :first-child {\n    colour: red;\n  }\n}\n");
_define_property(View, "tagName", "div");
_define_property(View, "ignoredProperties", [
    "markdownStyleElement"
]);
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());
function pathToURL(path) {
    var url = "https://static.djalbat.com/".concat(path);
    return url;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgZ3JhbW1hclV0aWxpdGllcyB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5pbXBvcnQgeyBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IGluZGV4T3B0aW9ucyBmcm9tIFwiLi9pbmRleE9wdGlvbnNcIjtcbmltcG9ydCBQYWdlQnV0dG9uc0RpdiBmcm9tIFwiLi92aWV3L2Rpdi9wYWdlQnV0dG9uc1wiO1xuaW1wb3J0IExlZnRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9sZWZ0XCI7XG5pbXBvcnQgQ1NTQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9jc3NcIjtcbmltcG9ydCBIVE1MQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9odG1sXCI7XG5pbXBvcnQgTGVmdFRhYkJ1dHRvbnNEaXYgZnJvbSBcIi4vdmlldy9kaXYvdGFiQnV0dG9ucy9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRUYWJCdXR0b25zRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3RhYkJ1dHRvbnMvcmlnaHRcIjtcbmltcG9ydCBQcmV2aWV3Q29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9wcmV2aWV3XCI7XG5pbXBvcnQgTWFya2Rvd25Db250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL21hcmtkb3duXCI7XG5pbXBvcnQgQ1NTUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9wYXJzZVRyZWUvY3NzXCI7XG5pbXBvcnQgSFRNTFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlL2h0bWxcIjtcbmltcG9ydCBQbGFpblRleHRDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL3BsYWluVGV4dFwiO1xuaW1wb3J0IE1hcmtkb3duU3R5bGVDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL21hcmtkb3duU3R5bGVcIjtcblxuaW1wb3J0IHsgaW1wb3J0ZXIgfSBmcm9tIFwiLi9pbXBvcnRlclwiO1xuY29uc3QgeyB0b2tlbnNGcm9tTWFya2Rvd24sXG4gICAgICAgIG1hcmtkb3duTm9kZUZyb21Ub2tlbnMsXG4gICAgICAgIHRva2Vuc0Zyb21NYXJrZG93blN0eWxlLFxuICAgICAgICBtYXJrZG93blN0eWxlTm9kZUZyb21Ub2tlbnMsXG4gICAgICAgIHRvcG1vc3RIVE1MTm9kZUZyb21NYXJrZG93bk5vZGUsXG4gICAgICAgIHRvcG1vc3RDU1NOb2RlRnJvbU1hcmtkb3duU3R5bGVOb2RlIH0gPSBncmFtbWFyVXRpbGl0aWVzO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIHBhZ2VVcGRhdGVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIHRoaXMudXBkYXRlSFRNTChpbmRleCk7XG4gIH1cblxuICBtYXJrZG93blN0eWxlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMubWFya2Rvd25TdHlsZSgpO1xuICB9XG5cbiAgbWFya2Rvd25DdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5tYXJrZG93bigpO1xuICB9XG5cbiAgcGxhaW5UZXh0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMucGxhaW5UZXh0KCk7XG4gIH1cblxuICBwcmV2aWV3Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMucHJldmlldygpO1xuICB9XG5cbiAga2V5VXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIGh0bWxDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5odG1sKCk7XG4gIH1cblxuICBjc3NDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5jc3MoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnVwZGF0ZU1hcmtkb3duU3R5bGUoKTtcblxuICAgIHRoaXMudXBkYXRlTWFya2Rvd24oKTtcblxuICAgIHRoaXMudXBkYXRlSFRNTCgpO1xuXG4gICAgdGhpcy51cGRhdGVDU1MoKTtcbiAgfVxuXG4gIHVwZGF0ZU1hcmtkb3duU3R5bGUoKSB7XG4gICAgbGV0IG1hcmtkb3duU3R5bGU7XG5cbiAgICBtYXJrZG93blN0eWxlID0gdGhpcy5nZXRNYXJrZG93blN0eWxlKCk7XG5cbiAgICBjb25zdCBzZWxlY3RvcnNTdHJpbmcgPSB0aGlzLmdldFNlbGVjdG9yc1N0cmluZygpO1xuXG4gICAgbWFya2Rvd25TdHlsZSA9IGAke3NlbGVjdG9yc1N0cmluZ30ge1xuICAke21hcmtkb3duU3R5bGV9XG59YDtcblxuICAgIGNvbnN0IHRva2VucyA9IHRva2Vuc0Zyb21NYXJrZG93blN0eWxlKG1hcmtkb3duU3R5bGUpLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGVOb2RlID0gbWFya2Rvd25TdHlsZU5vZGVGcm9tVG9rZW5zKHRva2Vucyk7XG5cbiAgICBpZiAobWFya2Rvd25TdHlsZU5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMucmVzZXRNYXJrZG93blN0eWxlVG9rZW5zKCk7XG5cbiAgICAgIHRoaXMucmVzZXRUb3Btb3N0TWFya2Rvd25TdHlsZU5vZGUoKTtcblxuICAgICAgdGhpcy5jbGVhck1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IG1hcmtkb3duU3R5bGVOb2RlLCAvLy9cbiAgICAgICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2VucyksXG4gICAgICAgICAgbWFya2Rvd25TdHlsZVRva2VucyA9IHRva2VucywgLy8vXG4gICAgICAgICAgdG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlID0gbm9kZTsgLy8vXG5cbiAgICB0aGlzLnNldE1hcmtkb3duU3R5bGVUb2tlbnMobWFya2Rvd25TdHlsZVRva2Vucyk7XG5cbiAgICB0aGlzLnNldFRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSh0b3Btb3N0TWFya2Rvd25TdHlsZU5vZGUpO1xuXG4gICAgdGhpcy51cGRhdGVNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEocGFyc2VUcmVlKTtcblxuICAgIGNvbnN0IG1hcmtkb3duU3R5bGVFbGVtZW50ID0gdGhpcy5nZXRNYXJrZG93blN0eWxlRWxlbWVudCgpLFxuICAgICAgICAgIHRvcG1vc3RDU1NOb2RlID0gdG9wbW9zdENTU05vZGVGcm9tTWFya2Rvd25TdHlsZU5vZGUobWFya2Rvd25TdHlsZU5vZGUpLFxuICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICB0b2tlbnNcbiAgICAgICAgICB9O1xuXG4gICAgdG9wbW9zdENTU05vZGUucmVzb2x2ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IGNzcyA9IHRvcG1vc3RDU1NOb2RlLmFzQ1NTKGNvbnRleHQpO1xuXG4gICAgbWFya2Rvd25TdHlsZUVsZW1lbnQuc2V0Q1NTKGNzcyk7XG4gIH1cblxuICB1cGRhdGVNYXJrZG93bigpIHtcbiAgICBjb25zdCBtYXJrZG93biA9IHRoaXMuZ2V0TWFya2Rvd24oKSxcbiAgICAgICAgICB0b2tlbnMgPSB0b2tlbnNGcm9tTWFya2Rvd24obWFya2Rvd24pLFxuICAgICAgICAgIG1hcmtkb3duTm9kZSA9IG1hcmtkb3duTm9kZUZyb21Ub2tlbnModG9rZW5zKTtcblxuICAgIGlmIChtYXJrZG93bk5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMucmVzZXRNYXJrZG93blRva2VucygpO1xuXG4gICAgICB0aGlzLnJlc2V0VG9wbW9zdE1hcmtkb3duTm9kZSgpO1xuXG4gICAgICB0aGlzLmNsZWFyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGNvbnRleHQ7XG5cbiAgICBjb25zdCB0b3Btb3N0TWFya2Rvd25Ob2RlID0gbWFya2Rvd25Ob2RlOyAvLy9cblxuICAgIGNvbnRleHQgPSB7XG4gICAgICB0b2tlbnMsXG4gICAgICBpbXBvcnRlclxuICAgIH07XG5cbiAgICB0b3Btb3N0TWFya2Rvd25Ob2RlLnJlc29sdmUoY29udGV4dCk7XG5cbiAgICBjb25zdCB0b3Btb3N0TWFya2Rvd25Ob2RlUGFyc2VUcmVlID0gdG9wbW9zdE1hcmtkb3duTm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpLFxuICAgICAgICAgIG1hcmtkb3duUGFyc2VUcmVlID0gdG9wbW9zdE1hcmtkb3duTm9kZVBhcnNlVHJlZSwgLy8vXG4gICAgICAgICAgbWFya2Rvd25Ub2tlbnMgPSB0b2tlbnM7ICAvLy9cblxuICAgIHRoaXMuc2V0TWFya2Rvd25Ub2tlbnMobWFya2Rvd25Ub2tlbnMpO1xuXG4gICAgdGhpcy5zZXRUb3Btb3N0TWFya2Rvd25Ob2RlKHRvcG1vc3RNYXJrZG93bk5vZGUpO1xuXG4gICAgdGhpcy51cGRhdGVNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhKG1hcmtkb3duUGFyc2VUcmVlKTtcbiAgfVxuXG4gIHVwZGF0ZUhUTUwoaW5kZXggPSAwKSB7XG4gICAgdGhpcy5jbGVhclhNUCgpO1xuXG4gICAgdGhpcy5jbGVhclByZXZpZXdEaXYoKTtcblxuICAgIHRoaXMuY2xlYXJQbGFpblRleHRUZXh0YXJlYSgpO1xuXG4gICAgdGhpcy5jbGVhckhUTUxQYXJzZVRyZWVUZXh0YXJlYSgpO1xuXG4gICAgdGhpcy5jbGVhclBhZ2VCdXR0b25zRGl2KCk7XG5cbiAgICBjb25zdCB0b3Btb3N0TWFya2Rvd25Ob2RlID0gdGhpcy5nZXRUb3Btb3N0TWFya2Rvd25Ob2RlKCksXG4gICAgICAgICAgbWFya2Rvd25Ob2RlID0gdG9wbW9zdE1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgdG9wbW9zdEhUTUxOb2RlID0gdG9wbW9zdEhUTUxOb2RlRnJvbU1hcmtkb3duTm9kZShtYXJrZG93bk5vZGUpO1xuXG4gICAgaWYgKHRvcG1vc3RIVE1MTm9kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBjb250ZXh0O1xuXG4gICAgY29uc3QgbWFya2Rvd25Ub2tlbnMgPSB0aGlzLmdldE1hcmtkb3duVG9rZW5zKCksXG4gICAgICAgICAgdG9rZW5zID0gbWFya2Rvd25Ub2tlbnM7ICAvLy9cblxuICAgIGNvbnRleHQgPSB7XG4gICAgICBpbmRleE9wdGlvbnMsXG4gICAgICB0b2tlbnNcbiAgICB9O1xuXG4gICAgdG9wbW9zdEhUTUxOb2RlLnJlc29sdmUoY29udGV4dCk7XG5cbiAgICBjb25zdCBkaXZpc2lvbkhUTUxOT2RlID0gdG9wbW9zdEhUTUxOb2RlLmdldERpdmlzaW9uSFRNTE5vZGVBdChpbmRleCk7XG5cbiAgICBpZiAoZGl2aXNpb25IVE1MTk9kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRpdmlzaW9uSFRNTE5PZGVQYXJzZVRyZWUgPSBkaXZpc2lvbkhUTUxOT2RlLmFzUGFyc2VUcmVlKCksXG4gICAgICAgICAgaHRtbFBhcnNlVHJlZSA9IGRpdmlzaW9uSFRNTE5PZGVQYXJzZVRyZWUsICAvLy9cbiAgICAgICAgICBtdWx0aXBsaWNpdHkgPSB0b3Btb3N0SFRNTE5vZGUuZ2V0TXVsdGlwbGljaXR5KCksXG4gICAgICAgICAgbGVuZ3RoID0gbXVsdGlwbGljaXR5O1xuXG4gICAgY29udGV4dCA9IHtcbiAgICAgIHRva2VucyxcbiAgICAgIHBhdGhUb1VSTFxuICAgIH07XG5cbiAgICB0aGlzLnVwZGF0ZVhNUChkaXZpc2lvbkhUTUxOT2RlLCBjb250ZXh0KTtcblxuICAgIHRoaXMudXBkYXRlUHJldmlld0RpdihkaXZpc2lvbkhUTUxOT2RlLCBjb250ZXh0KTtcblxuICAgIHRoaXMudXBkYXRlUGxhaW5UZXh0VGV4dGFyZWEoZGl2aXNpb25IVE1MTk9kZSwgY29udGV4dCk7XG5cbiAgICB0aGlzLnVwZGF0ZUhUTUxQYXJzZVRyZWVUZXh0YXJlYShodG1sUGFyc2VUcmVlKTtcblxuICAgIHRoaXMudXBkYXRlUGFnZUJ1dHRvbnNEaXYobGVuZ3RoLCBpbmRleCk7XG4gIH1cblxuICB1cGRhdGVDU1MoKSB7XG4gICAgY29uc3QgdG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlID0gdGhpcy5nZXRUb3Btb3N0TWFya2Rvd25TdHlsZU5vZGUoKSxcbiAgICAgICAgICBtYXJrZG93blN0eWxlVG9rZW5zID0gdGhpcy5nZXRNYXJrZG93blN0eWxlVG9rZW5zKCksXG4gICAgICAgICAgbWFya2Rvd25TdHlsZU5vZGUgPSB0b3Btb3N0TWFya2Rvd25TdHlsZU5vZGUsIC8vL1xuICAgICAgICAgIHRvcG1vc3RDU1NOb2RlID0gdG9wbW9zdENTU05vZGVGcm9tTWFya2Rvd25TdHlsZU5vZGUobWFya2Rvd25TdHlsZU5vZGUpLFxuICAgICAgICAgIHRva2VucyA9IG1hcmtkb3duU3R5bGVUb2tlbnMsIC8vL1xuICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICB0b2tlbnNcbiAgICAgICAgICB9O1xuXG4gICAgdG9wbW9zdENTU05vZGUucmVzb2x2ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IHRvcG1vc3RDU1NOb2RlUGFyc2VUcmVlID0gdG9wbW9zdENTU05vZGUuYXNQYXJzZVRyZWUodG9rZW5zKSxcbiAgICAgICAgICBjc3NQYXJzZVRyZWUgPSB0b3Btb3N0Q1NTTm9kZVBhcnNlVHJlZSwgLy8vXG4gICAgICAgICAgY3NzID0gdG9wbW9zdENTU05vZGUuYXNDU1MoY29udGV4dCk7XG5cbiAgICB0aGlzLnVwZGF0ZUNTU1BhcnNlVHJlZVRleHRhcmVhKGNzc1BhcnNlVHJlZSk7XG5cbiAgICB0aGlzLnNldENTUyhjc3MpO1xuICB9XG5cbiAgbWFya2Rvd25TdHlsZSgpIHtcbiAgICB0aGlzLmhpZGVNYXJrZG93bkNvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuc2hvd01hcmtkb3duU3R5bGVDb250YWluZXJEaXYoKTtcbiAgfVxuXG4gIG1hcmtkb3duKCkge1xuICAgIHRoaXMuc2hvd01hcmtkb3duQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdigpO1xuICB9XG5cbiAgcGxhaW5UZXh0KCkge1xuICAgIHRoaXMuaGlkZUNTU0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZUhUTUxDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQcmV2aWV3Q29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93UGxhaW5UZXh0Q29udGFpbmVyRGl2KCk7XG5cbiAgICB0aGlzLmhpZGVDU1NQYXJzZVRyZWVUZXh0YXJlYSgpO1xuICAgIHRoaXMuc2hvd0hUTUxQYXJzZVRyZWVUZXh0YXJlYSgpO1xuICB9XG5cbiAgcHJldmlldygpIHtcbiAgICB0aGlzLmhpZGVDU1NDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVIVE1MQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93UHJldmlld0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVBsYWluVGV4dENvbnRhaW5lckRpdigpO1xuXG4gICAgdGhpcy5oaWRlQ1NTUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgICB0aGlzLnNob3dIVE1MUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgfVxuXG4gIGh0bWwoKSB7XG4gICAgdGhpcy5oaWRlQ1NTQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93SFRNTENvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVByZXZpZXdDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQbGFpblRleHRDb250YWluZXJEaXYoKTtcblxuICAgIHRoaXMuaGlkZUNTU1BhcnNlVHJlZVRleHRhcmVhKCk7XG4gICAgdGhpcy5zaG93SFRNTFBhcnNlVHJlZVRleHRhcmVhKCk7XG4gIH1cblxuICBjc3MoKSB7XG4gICAgdGhpcy5zaG93Q1NTQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlSFRNTENvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVByZXZpZXdDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQbGFpblRleHRDb250YWluZXJEaXYoKTtcblxuICAgIHRoaXMuc2hvd0NTU1BhcnNlVHJlZVRleHRhcmVhKCk7XG4gICAgdGhpcy5oaWRlSFRNTFBhcnNlVHJlZVRleHRhcmVhKCk7XG4gIH1cblxuICByZXNldE1hcmtkb3duVG9rZW5zKCkge1xuICAgIGNvbnN0IG1hcmtkb3duVG9rZW5zID0gbnVsbDtcblxuICAgIHRoaXMuc2V0TWFya2Rvd25Ub2tlbnMobWFya2Rvd25Ub2tlbnMpO1xuICB9XG5cbiAgcmVzZXRNYXJrZG93blN0eWxlVG9rZW5zKCkge1xuICAgIGNvbnN0IG1hcmtkb3duU3R5bGVUb2tlbnMgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRNYXJrZG93blN0eWxlVG9rZW5zKG1hcmtkb3duU3R5bGVUb2tlbnMpO1xuICB9XG5cbiAgcmVzZXRUb3Btb3N0TWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IHRvcG1vc3RNYXJrZG93bk5vZGUgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRUb3Btb3N0TWFya2Rvd25Ob2RlKHRvcG1vc3RNYXJrZG93bk5vZGUpO1xuICB9XG5cbiAgcmVzZXRUb3Btb3N0TWFya2Rvd25TdHlsZU5vZGUoKSB7XG4gICAgY29uc3QgdG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlID0gbnVsbDtcblxuICAgIHRoaXMuc2V0VG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlKHRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSk7XG4gIH1cblxuICBnZXRNYXJrZG93blN0eWxlRWxlbWVudCgpIHtcbiAgICBjb25zdCB7IG1hcmtkb3duU3R5bGVFbGVtZW50IH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gbWFya2Rvd25TdHlsZUVsZW1lbnQ7XG4gIH1cblxuICBnZXRTZWxlY3RvcnNTdHJpbmcoKSB7XG4gICAgY29uc3QgeyBzZWxlY3RvcnNTdHJpbmcgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiBzZWxlY3RvcnNTdHJpbmc7XG4gIH1cblxuICBnZXRNYXJrZG93blRva2VucygpIHtcbiAgICBjb25zdCB7IG1hcmtkb3duVG9rZW5zIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gbWFya2Rvd25Ub2tlbnM7XG4gIH1cblxuICBnZXRNYXJrZG93blN0eWxlVG9rZW5zKCkge1xuICAgIGNvbnN0IHsgbWFya2Rvd25TdHlsZVRva2VucyB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIG1hcmtkb3duU3R5bGVUb2tlbnM7XG4gIH1cblxuICBnZXRUb3Btb3N0TWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IHsgdG9wbW9zdE1NYXJrZG93bk5vZGUgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiB0b3Btb3N0TU1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIGdldFRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSgpIHtcbiAgICBjb25zdCB7IHRvcG1vc3RNTWFya2Rvd25TdHlsZU5vZGUgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiB0b3Btb3N0TU1hcmtkb3duU3R5bGVOb2RlO1xuICB9XG5cbiAgc2V0TWFya2Rvd25Ub2tlbnMobWFya2Rvd25Ub2tlbnMpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIG1hcmtkb3duVG9rZW5zXG4gICAgfSk7XG4gIH1cblxuICBzZXRNYXJrZG93blN0eWxlVG9rZW5zKG1hcmtkb3duU3R5bGVUb2tlbnMpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIG1hcmtkb3duU3R5bGVUb2tlbnNcbiAgICB9KTtcbiAgfVxuXG4gIHNldFRvcG1vc3RNYXJrZG93bk5vZGUodG9wbW9zdE1NYXJrZG93bk5vZGUpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHRvcG1vc3RNTWFya2Rvd25Ob2RlXG4gICAgfSk7XG4gIH1cblxuICBzZXRUb3Btb3N0TWFya2Rvd25TdHlsZU5vZGUodG9wbW9zdE1NYXJrZG93blN0eWxlTm9kZSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgdG9wbW9zdE1NYXJrZG93blN0eWxlTm9kZVxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IG1hcmtkb3duVG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBtYXJrZG93blN0eWxlVG9rZW5zID0gbnVsbCxcbiAgICAgICAgICB0b3Btb3N0TWFya2Rvd25Ob2RlID0gbnVsbCxcbiAgICAgICAgICB0b3Btb3N0TWFya2Rvd25TdHlsZU5vZGUgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtYXJrZG93blRva2VucyxcbiAgICAgIG1hcmtkb3duU3R5bGVUb2tlbnMsXG4gICAgICB0b3Btb3N0TWFya2Rvd25Ob2RlLFxuICAgICAgdG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlXG4gICAgfSk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLm1hcmtkb3duKCk7XG5cbiAgICB0aGlzLnByZXZpZXcoKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxMZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPExlZnRUYWJCdXR0b25zRGl2IG9uQ3VzdG9tTWFya2Rvd249e3RoaXMubWFya2Rvd25DdXN0b21IYW5kbGVyfSBvbkN1c3RvbU1hcmtkb3duU3R5bGU9e3RoaXMubWFya2Rvd25TdHlsZUN1c3RvbUhhbmRsZXJ9IC8+XG4gICAgICAgICAgPE1hcmtkb3duQ29udGFpbmVyRGl2IG9uQ3VzdG9tS2V5VXA9e3RoaXMua2V5VXBDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICAgIDxNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2IG9uQ3VzdG9tS2V5VXA9e3RoaXMua2V5VXBDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICA8L0xlZnRTaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFJpZ2h0VGFiQnV0dG9uc0RpdiBvbkN1c3RvbUNTUz17dGhpcy5jc3NDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbUhUTUw9e3RoaXMuaHRtbEN1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tUHJldmlldz17dGhpcy5wcmV2aWV3Q3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DdXN0b21QbGFpblRleHQ9e3RoaXMucGxhaW5UZXh0Q3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UGFnZUJ1dHRvbnNEaXYgb25DdXN0b21QYWdlVXBkYXRlPXt0aGlzLnBhZ2VVcGRhdGVDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICAgICAgPENTU0NvbnRhaW5lckRpdi8+XG4gICAgICAgICAgICA8SFRNTENvbnRhaW5lckRpdi8+XG4gICAgICAgICAgICA8UHJldmlld0NvbnRhaW5lckRpdi8+XG4gICAgICAgICAgICA8UGxhaW5UZXh0Q29udGFpbmVyRGl2Lz5cbiAgICAgICAgICAgIDxIVE1MUGFyc2VUcmVlVGV4dGFyZWEvPlxuICAgICAgICAgICAgPENTU1BhcnNlVHJlZVRleHRhcmVhLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsTWFya2Rvd24sIGluaXRpYWxNYXJrZG93blN0eWxlIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGUgPSBpbml0aWFsTWFya2Rvd25TdHlsZSwgLy8vXG4gICAgICAgICAgbWFya2Rvd24gPSBpbml0aWFsTWFya2Rvd247IC8vL1xuXG4gICAgdGhpcy5zZXRNYXJrZG93blN0eWxlKG1hcmtkb3duU3R5bGUpO1xuXG4gICAgdGhpcy5zZXRNYXJrZG93bihtYXJrZG93bik7XG4gIH1cblxuICBzdGF0aWMgaW5pdGlhbE1hcmtkb3duID0gYCMgRm91bmRhdGlvbnNgO1xuXG4gIHN0YXRpYyBpbml0aWFsTWFya2Rvd25TdHlsZSA9IGBwcmltYXJ5SGVhZGluZyB7XG4gIDpmaXJzdC1jaGlsZCB7XG4gICAgY29sb3VyOiByZWQ7XG4gIH1cbn1cbmA7XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm1hcmtkb3duU3R5bGVFbGVtZW50XCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgcGFkZGluZzogMXJlbTtcbiAgXG5gO1xuXG5mdW5jdGlvbiBwYXRoVG9VUkwocGF0aCkge1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9zdGF0aWMuZGphbGJhdC5jb20vJHtwYXRofWA7XG5cbiAgcmV0dXJuIHVybDtcbn1cbiJdLCJuYW1lcyI6WyJ0b2tlbnNGcm9tTWFya2Rvd24iLCJncmFtbWFyVXRpbGl0aWVzIiwibWFya2Rvd25Ob2RlRnJvbVRva2VucyIsInRva2Vuc0Zyb21NYXJrZG93blN0eWxlIiwibWFya2Rvd25TdHlsZU5vZGVGcm9tVG9rZW5zIiwidG9wbW9zdEhUTUxOb2RlRnJvbU1hcmtkb3duTm9kZSIsInRvcG1vc3RDU1NOb2RlRnJvbU1hcmtkb3duU3R5bGVOb2RlIiwiVmlldyIsInBhZ2VVcGRhdGVDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiaW5kZXgiLCJ1cGRhdGVIVE1MIiwibWFya2Rvd25TdHlsZUN1c3RvbUhhbmRsZXIiLCJtYXJrZG93blN0eWxlIiwibWFya2Rvd25DdXN0b21IYW5kbGVyIiwibWFya2Rvd24iLCJwbGFpblRleHRDdXN0b21IYW5kbGVyIiwicGxhaW5UZXh0IiwicHJldmlld0N1c3RvbUhhbmRsZXIiLCJwcmV2aWV3Iiwia2V5VXBDdXN0b21IYW5kbGVyIiwidXBkYXRlIiwiaHRtbEN1c3RvbUhhbmRsZXIiLCJodG1sIiwiY3NzQ3VzdG9tSGFuZGxlciIsImNzcyIsInVwZGF0ZU1hcmtkb3duU3R5bGUiLCJ1cGRhdGVNYXJrZG93biIsInVwZGF0ZUNTUyIsImdldE1hcmtkb3duU3R5bGUiLCJzZWxlY3RvcnNTdHJpbmciLCJnZXRTZWxlY3RvcnNTdHJpbmciLCJ0b2tlbnMiLCJtYXJrZG93blN0eWxlTm9kZSIsInJlc2V0TWFya2Rvd25TdHlsZVRva2VucyIsInJlc2V0VG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlIiwiY2xlYXJNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEiLCJub2RlIiwicGFyc2VUcmVlIiwiYXNQYXJzZVRyZWUiLCJtYXJrZG93blN0eWxlVG9rZW5zIiwidG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlIiwic2V0TWFya2Rvd25TdHlsZVRva2VucyIsInNldFRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSIsInVwZGF0ZU1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSIsIm1hcmtkb3duU3R5bGVFbGVtZW50IiwiZ2V0TWFya2Rvd25TdHlsZUVsZW1lbnQiLCJ0b3Btb3N0Q1NTTm9kZSIsImNvbnRleHQiLCJyZXNvbHZlIiwiYXNDU1MiLCJzZXRDU1MiLCJnZXRNYXJrZG93biIsIm1hcmtkb3duTm9kZSIsInJlc2V0TWFya2Rvd25Ub2tlbnMiLCJyZXNldFRvcG1vc3RNYXJrZG93bk5vZGUiLCJjbGVhck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEiLCJ0b3Btb3N0TWFya2Rvd25Ob2RlIiwiaW1wb3J0ZXIiLCJ0b3Btb3N0TWFya2Rvd25Ob2RlUGFyc2VUcmVlIiwibWFya2Rvd25QYXJzZVRyZWUiLCJtYXJrZG93blRva2VucyIsInNldE1hcmtkb3duVG9rZW5zIiwic2V0VG9wbW9zdE1hcmtkb3duTm9kZSIsInVwZGF0ZU1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEiLCJjbGVhclhNUCIsImNsZWFyUHJldmlld0RpdiIsImNsZWFyUGxhaW5UZXh0VGV4dGFyZWEiLCJjbGVhckhUTUxQYXJzZVRyZWVUZXh0YXJlYSIsImNsZWFyUGFnZUJ1dHRvbnNEaXYiLCJnZXRUb3Btb3N0TWFya2Rvd25Ob2RlIiwidG9wbW9zdEhUTUxOb2RlIiwiZ2V0TWFya2Rvd25Ub2tlbnMiLCJpbmRleE9wdGlvbnMiLCJkaXZpc2lvbkhUTUxOT2RlIiwiZ2V0RGl2aXNpb25IVE1MTm9kZUF0IiwiZGl2aXNpb25IVE1MTk9kZVBhcnNlVHJlZSIsImh0bWxQYXJzZVRyZWUiLCJtdWx0aXBsaWNpdHkiLCJnZXRNdWx0aXBsaWNpdHkiLCJsZW5ndGgiLCJwYXRoVG9VUkwiLCJ1cGRhdGVYTVAiLCJ1cGRhdGVQcmV2aWV3RGl2IiwidXBkYXRlUGxhaW5UZXh0VGV4dGFyZWEiLCJ1cGRhdGVIVE1MUGFyc2VUcmVlVGV4dGFyZWEiLCJ1cGRhdGVQYWdlQnV0dG9uc0RpdiIsImdldFRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSIsImdldE1hcmtkb3duU3R5bGVUb2tlbnMiLCJ0b3Btb3N0Q1NTTm9kZVBhcnNlVHJlZSIsImNzc1BhcnNlVHJlZSIsInVwZGF0ZUNTU1BhcnNlVHJlZVRleHRhcmVhIiwiaGlkZU1hcmtkb3duQ29udGFpbmVyRGl2Iiwic2hvd01hcmtkb3duU3R5bGVDb250YWluZXJEaXYiLCJzaG93TWFya2Rvd25Db250YWluZXJEaXYiLCJoaWRlTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiIsImhpZGVDU1NDb250YWluZXJEaXYiLCJoaWRlSFRNTENvbnRhaW5lckRpdiIsImhpZGVQcmV2aWV3Q29udGFpbmVyRGl2Iiwic2hvd1BsYWluVGV4dENvbnRhaW5lckRpdiIsImhpZGVDU1NQYXJzZVRyZWVUZXh0YXJlYSIsInNob3dIVE1MUGFyc2VUcmVlVGV4dGFyZWEiLCJzaG93UHJldmlld0NvbnRhaW5lckRpdiIsImhpZGVQbGFpblRleHRDb250YWluZXJEaXYiLCJzaG93SFRNTENvbnRhaW5lckRpdiIsInNob3dDU1NDb250YWluZXJEaXYiLCJzaG93Q1NTUGFyc2VUcmVlVGV4dGFyZWEiLCJoaWRlSFRNTFBhcnNlVHJlZVRleHRhcmVhIiwicHJvcGVydGllcyIsImdldFN0YXRlIiwidG9wbW9zdE1NYXJrZG93bk5vZGUiLCJ0b3Btb3N0TU1hcmtkb3duU3R5bGVOb2RlIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImRpZE1vdW50Iiwid2lsbFVubW91bnQiLCJjaGlsZEVsZW1lbnRzIiwiQ29sdW1uc0RpdiIsIkxlZnRTaXplYWJsZURpdiIsIkxlZnRUYWJCdXR0b25zRGl2Iiwib25DdXN0b21NYXJrZG93biIsIm9uQ3VzdG9tTWFya2Rvd25TdHlsZSIsIk1hcmtkb3duQ29udGFpbmVyRGl2Iiwib25DdXN0b21LZXlVcCIsIk1hcmtkb3duU3R5bGVDb250YWluZXJEaXYiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiQ29sdW1uRGl2IiwiUm93c0RpdiIsIlJpZ2h0VGFiQnV0dG9uc0RpdiIsIm9uQ3VzdG9tQ1NTIiwib25DdXN0b21IVE1MIiwib25DdXN0b21QcmV2aWV3Iiwib25DdXN0b21QbGFpblRleHQiLCJQYWdlQnV0dG9uc0RpdiIsIm9uQ3VzdG9tUGFnZVVwZGF0ZSIsIkNTU0NvbnRhaW5lckRpdiIsIkhUTUxDb250YWluZXJEaXYiLCJQcmV2aWV3Q29udGFpbmVyRGl2IiwiUGxhaW5UZXh0Q29udGFpbmVyRGl2IiwiSFRNTFBhcnNlVHJlZVRleHRhcmVhIiwiQ1NTUGFyc2VUcmVlVGV4dGFyZWEiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImluaXRpYWxNYXJrZG93biIsImluaXRpYWxNYXJrZG93blN0eWxlIiwic2V0TWFya2Rvd25TdHlsZSIsInNldE1hcmtkb3duIiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwicGF0aCIsInVybCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBOGNBOzs7ZUFBQTs7O29FQTVjc0I7b0JBRUU7cUJBQ1M7MEJBQ21DO21FQUUzQztrRUFDRTsyREFDQzswREFDQTsyREFDQzs0REFDQzs0REFDQzs4REFDQzsrREFDQzsyREFDQTs0REFDQztnRUFDQTtvRUFDSTt3QkFFYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUN6QixJQUFRQSxxQkFLd0NDLHVCQUFnQixDQUx4REQsb0JBQ0FFLHlCQUl3Q0QsdUJBQWdCLENBSnhEQyx3QkFDQUMsMEJBR3dDRix1QkFBZ0IsQ0FIeERFLHlCQUNBQyw4QkFFd0NILHVCQUFnQixDQUZ4REcsNkJBQ0FDLGtDQUN3Q0osdUJBQWdCLENBRHhESSxpQ0FDQUMsc0NBQXdDTCx1QkFBZ0IsQ0FBeERLO0FBRVIsSUFBQSxBQUFNQyxxQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7O2dCQUFOLGtCQUFNQSxrQkFDSkMsd0JBQUFBLDJCQUEwQixTQUFDQyxPQUFPQyxTQUFTQztZQUN6QyxNQUFLQyxVQUFVLENBQUNEO1FBQ2xCLElBRUFFLHdCQUFBQSw4QkFBNkIsU0FBQ0osT0FBT0M7WUFDbkMsTUFBS0ksYUFBYTtRQUNwQixJQUVBQyx3QkFBQUEseUJBQXdCLFNBQUNOLE9BQU9DO1lBQzlCLE1BQUtNLFFBQVE7UUFDZixJQUVBQyx3QkFBQUEsMEJBQXlCLFNBQUNSLE9BQU9DO1lBQy9CLE1BQUtRLFNBQVM7UUFDaEIsSUFFQUMsd0JBQUFBLHdCQUF1QixTQUFDVixPQUFPQztZQUM3QixNQUFLVSxPQUFPO1FBQ2QsSUFFQUMsd0JBQUFBLHNCQUFxQixTQUFDWixPQUFPQztZQUMzQixNQUFLWSxNQUFNO1FBQ2IsSUFFQUMsd0JBQUFBLHFCQUFvQixTQUFDZCxPQUFPQztZQUMxQixNQUFLYyxJQUFJO1FBQ1gsSUFFQUMsd0JBQUFBLG9CQUFtQixTQUFDaEIsT0FBT0M7WUFDekIsTUFBS2dCLEdBQUc7UUFDVjs7O2tCQS9CSW5COztZQWlDSmUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0ssbUJBQW1CO2dCQUV4QixJQUFJLENBQUNDLGNBQWM7Z0JBRW5CLElBQUksQ0FBQ2hCLFVBQVU7Z0JBRWYsSUFBSSxDQUFDaUIsU0FBUztZQUNoQjs7O1lBRUFGLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJYjtnQkFFSkEsZ0JBQWdCLElBQUksQ0FBQ2dCLGdCQUFnQjtnQkFFckMsSUFBTUMsa0JBQWtCLElBQUksQ0FBQ0Msa0JBQWtCO2dCQUUvQ2xCLGdCQUFnQixBQUFDLEdBQ2pCQSxPQURtQmlCLGlCQUFnQixVQUNyQixPQUFkakIsZUFBYztnQkFHZCxJQUFNbUIsU0FBUzlCLHdCQUF3QlcsZ0JBQ2pDb0Isb0JBQW9COUIsNEJBQTRCNkI7Z0JBRXRELElBQUlDLHNCQUFzQixNQUFNO29CQUM5QixJQUFJLENBQUNDLHdCQUF3QjtvQkFFN0IsSUFBSSxDQUFDQyw2QkFBNkI7b0JBRWxDLElBQUksQ0FBQ0MsbUNBQW1DO29CQUV4QztnQkFDRjtnQkFFQSxJQUFNQyxPQUFPSixtQkFDUEssWUFBWUQsS0FBS0UsV0FBVyxDQUFDUCxTQUM3QlEsc0JBQXNCUixRQUN0QlMsMkJBQTJCSixNQUFNLEdBQUc7Z0JBRTFDLElBQUksQ0FBQ0ssc0JBQXNCLENBQUNGO2dCQUU1QixJQUFJLENBQUNHLDJCQUEyQixDQUFDRjtnQkFFakMsSUFBSSxDQUFDRyxvQ0FBb0MsQ0FBQ047Z0JBRTFDLElBQU1PLHVCQUF1QixJQUFJLENBQUNDLHVCQUF1QixJQUNuREMsaUJBQWlCMUMsb0NBQW9DNEIsb0JBQ3JEZSxVQUFVO29CQUNSaEIsUUFBQUE7Z0JBQ0Y7Z0JBRU5lLGVBQWVFLE9BQU8sQ0FBQ0Q7Z0JBRXZCLElBQU12QixNQUFNc0IsZUFBZUcsS0FBSyxDQUFDRjtnQkFFakNILHFCQUFxQk0sTUFBTSxDQUFDMUI7WUFDOUI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVosV0FBVyxJQUFJLENBQUNxQyxXQUFXLElBQzNCcEIsU0FBU2pDLG1CQUFtQmdCLFdBQzVCc0MsZUFBZXBELHVCQUF1QitCO2dCQUU1QyxJQUFJcUIsaUJBQWlCLE1BQU07b0JBQ3pCLElBQUksQ0FBQ0MsbUJBQW1CO29CQUV4QixJQUFJLENBQUNDLHdCQUF3QjtvQkFFN0IsSUFBSSxDQUFDQyw4QkFBOEI7b0JBRW5DO2dCQUNGO2dCQUVBLElBQUlSO2dCQUVKLElBQU1TLHNCQUFzQkosY0FBYyxHQUFHO2dCQUU3Q0wsVUFBVTtvQkFDUmhCLFFBQUFBO29CQUNBMEIsVUFBQUEsa0JBQVE7Z0JBQ1Y7Z0JBRUFELG9CQUFvQlIsT0FBTyxDQUFDRDtnQkFFNUIsSUFBTVcsK0JBQStCRixvQkFBb0JsQixXQUFXLENBQUNQLFNBQy9ENEIsb0JBQW9CRCw4QkFDcEJFLGlCQUFpQjdCLFFBQVMsR0FBRztnQkFFbkMsSUFBSSxDQUFDOEIsaUJBQWlCLENBQUNEO2dCQUV2QixJQUFJLENBQUNFLHNCQUFzQixDQUFDTjtnQkFFNUIsSUFBSSxDQUFDTywrQkFBK0IsQ0FBQ0o7WUFDdkM7OztZQUVBakQsS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFXRCxRQUFBQSxpRUFBUTtnQkFDakIsSUFBSSxDQUFDdUQsUUFBUTtnQkFFYixJQUFJLENBQUNDLGVBQWU7Z0JBRXBCLElBQUksQ0FBQ0Msc0JBQXNCO2dCQUUzQixJQUFJLENBQUNDLDBCQUEwQjtnQkFFL0IsSUFBSSxDQUFDQyxtQkFBbUI7Z0JBRXhCLElBQU1aLHNCQUFzQixJQUFJLENBQUNhLHNCQUFzQixJQUNqRGpCLGVBQWVJLHFCQUNmYyxrQkFBa0JuRSxnQ0FBZ0NpRDtnQkFFeEQsSUFBSWtCLG9CQUFvQixNQUFNO29CQUM1QjtnQkFDRjtnQkFFQSxJQUFJdkI7Z0JBRUosSUFBTWEsaUJBQWlCLElBQUksQ0FBQ1csaUJBQWlCLElBQ3ZDeEMsU0FBUzZCLGdCQUFpQixHQUFHO2dCQUVuQ2IsVUFBVTtvQkFDUnlCLGNBQUFBLHFCQUFZO29CQUNaekMsUUFBQUE7Z0JBQ0Y7Z0JBRUF1QyxnQkFBZ0J0QixPQUFPLENBQUNEO2dCQUV4QixJQUFNMEIsbUJBQW1CSCxnQkFBZ0JJLHFCQUFxQixDQUFDakU7Z0JBRS9ELElBQUlnRSxxQkFBcUIsTUFBTTtvQkFDN0I7Z0JBQ0Y7Z0JBRUEsSUFBTUUsNEJBQTRCRixpQkFBaUJuQyxXQUFXLElBQ3hEc0MsZ0JBQWdCRCwyQkFDaEJFLGVBQWVQLGdCQUFnQlEsZUFBZSxJQUM5Q0MsU0FBU0Y7Z0JBRWY5QixVQUFVO29CQUNSaEIsUUFBQUE7b0JBQ0FpRCxXQUFBQTtnQkFDRjtnQkFFQSxJQUFJLENBQUNDLFNBQVMsQ0FBQ1Isa0JBQWtCMUI7Z0JBRWpDLElBQUksQ0FBQ21DLGdCQUFnQixDQUFDVCxrQkFBa0IxQjtnQkFFeEMsSUFBSSxDQUFDb0MsdUJBQXVCLENBQUNWLGtCQUFrQjFCO2dCQUUvQyxJQUFJLENBQUNxQywyQkFBMkIsQ0FBQ1I7Z0JBRWpDLElBQUksQ0FBQ1Msb0JBQW9CLENBQUNOLFFBQVF0RTtZQUNwQzs7O1lBRUFrQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTWEsMkJBQTJCLElBQUksQ0FBQzhDLDJCQUEyQixJQUMzRC9DLHNCQUFzQixJQUFJLENBQUNnRCxzQkFBc0IsSUFDakR2RCxvQkFBb0JRLDBCQUNwQk0saUJBQWlCMUMsb0NBQW9DNEIsb0JBQ3JERCxTQUFTUSxxQkFDVFEsVUFBVTtvQkFDUmhCLFFBQUFBO2dCQUNGO2dCQUVOZSxlQUFlRSxPQUFPLENBQUNEO2dCQUV2QixJQUFNeUMsMEJBQTBCMUMsZUFBZVIsV0FBVyxDQUFDUCxTQUNyRDBELGVBQWVELHlCQUNmaEUsTUFBTXNCLGVBQWVHLEtBQUssQ0FBQ0Y7Z0JBRWpDLElBQUksQ0FBQzJDLDBCQUEwQixDQUFDRDtnQkFFaEMsSUFBSSxDQUFDdkMsTUFBTSxDQUFDMUI7WUFDZDs7O1lBRUFaLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUMrRSx3QkFBd0I7Z0JBQzdCLElBQUksQ0FBQ0MsNkJBQTZCO1lBQ3BDOzs7WUFFQTlFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUMrRSx3QkFBd0I7Z0JBQzdCLElBQUksQ0FBQ0MsNkJBQTZCO1lBQ3BDOzs7WUFFQTlFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUMrRSxtQkFBbUI7Z0JBQ3hCLElBQUksQ0FBQ0Msb0JBQW9CO2dCQUN6QixJQUFJLENBQUNDLHVCQUF1QjtnQkFDNUIsSUFBSSxDQUFDQyx5QkFBeUI7Z0JBRTlCLElBQUksQ0FBQ0Msd0JBQXdCO2dCQUM3QixJQUFJLENBQUNDLHlCQUF5QjtZQUNoQzs7O1lBRUFsRixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDNkUsbUJBQW1CO2dCQUN4QixJQUFJLENBQUNDLG9CQUFvQjtnQkFDekIsSUFBSSxDQUFDSyx1QkFBdUI7Z0JBQzVCLElBQUksQ0FBQ0MseUJBQXlCO2dCQUU5QixJQUFJLENBQUNILHdCQUF3QjtnQkFDN0IsSUFBSSxDQUFDQyx5QkFBeUI7WUFDaEM7OztZQUVBOUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ3lFLG1CQUFtQjtnQkFDeEIsSUFBSSxDQUFDUSxvQkFBb0I7Z0JBQ3pCLElBQUksQ0FBQ04sdUJBQXVCO2dCQUM1QixJQUFJLENBQUNLLHlCQUF5QjtnQkFFOUIsSUFBSSxDQUFDSCx3QkFBd0I7Z0JBQzdCLElBQUksQ0FBQ0MseUJBQXlCO1lBQ2hDOzs7WUFFQTVFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNnRixtQkFBbUI7Z0JBQ3hCLElBQUksQ0FBQ1Isb0JBQW9CO2dCQUN6QixJQUFJLENBQUNDLHVCQUF1QjtnQkFDNUIsSUFBSSxDQUFDSyx5QkFBeUI7Z0JBRTlCLElBQUksQ0FBQ0csd0JBQXdCO2dCQUM3QixJQUFJLENBQUNDLHlCQUF5QjtZQUNoQzs7O1lBRUFyRCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTU8saUJBQWlCO2dCQUV2QixJQUFJLENBQUNDLGlCQUFpQixDQUFDRDtZQUN6Qjs7O1lBRUEzQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTU0sc0JBQXNCO2dCQUU1QixJQUFJLENBQUNFLHNCQUFzQixDQUFDRjtZQUM5Qjs7O1lBRUFlLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNRSxzQkFBc0I7Z0JBRTVCLElBQUksQ0FBQ00sc0JBQXNCLENBQUNOO1lBQzlCOzs7WUFFQXRCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNTSwyQkFBMkI7Z0JBRWpDLElBQUksQ0FBQ0UsMkJBQTJCLENBQUNGO1lBQ25DOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRUQsdUJBQXlCLElBQUksQ0FBQytELFVBQVUsQ0FBeEMvRDtnQkFFUixPQUFPQTtZQUNUOzs7WUFFQWQsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRUQsa0JBQW9CLElBQUksQ0FBQzhFLFVBQVUsQ0FBbkM5RTtnQkFFUixPQUFPQTtZQUNUOzs7WUFFQTBDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUVYLGlCQUFtQixJQUFJLENBQUNnRCxRQUFRLEdBQWhDaEQ7Z0JBRVIsT0FBT0E7WUFDVDs7O1lBRUEyQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTSxBQUFFaEQsc0JBQXdCLElBQUksQ0FBQ3FFLFFBQVEsR0FBckNyRTtnQkFFUixPQUFPQTtZQUNUOzs7WUFFQThCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUV3Qyx1QkFBeUIsSUFBSSxDQUFDRCxRQUFRLEdBQXRDQztnQkFFUixPQUFPQTtZQUNUOzs7WUFFQXZCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUV3Qiw0QkFBOEIsSUFBSSxDQUFDRixRQUFRLEdBQTNDRTtnQkFFUixPQUFPQTtZQUNUOzs7WUFFQWpELEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JELGNBQWM7Z0JBQzlCLElBQUksQ0FBQ21ELFdBQVcsQ0FBQztvQkFDZm5ELGdCQUFBQTtnQkFDRjtZQUNGOzs7WUFFQW5CLEtBQUFBO21CQUFBQSxTQUFBQSx1QkFBdUJGLG1CQUFtQjtnQkFDeEMsSUFBSSxDQUFDd0UsV0FBVyxDQUFDO29CQUNmeEUscUJBQUFBO2dCQUNGO1lBQ0Y7OztZQUVBdUIsS0FBQUE7bUJBQUFBLFNBQUFBLHVCQUF1QitDLG9CQUFvQjtnQkFDekMsSUFBSSxDQUFDRSxXQUFXLENBQUM7b0JBQ2ZGLHNCQUFBQTtnQkFDRjtZQUNGOzs7WUFFQW5FLEtBQUFBO21CQUFBQSxTQUFBQSw0QkFBNEJvRSx5QkFBeUI7Z0JBQ25ELElBQUksQ0FBQ0MsV0FBVyxDQUFDO29CQUNmRCwyQkFBQUE7Z0JBQ0Y7WUFDRjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNcEQsaUJBQWlCLE1BQ2pCckIsc0JBQXNCLE1BQ3RCaUIsc0JBQXNCLE1BQ3RCaEIsMkJBQTJCO2dCQUVqQyxJQUFJLENBQUN5RSxRQUFRLENBQUM7b0JBQ1pyRCxnQkFBQUE7b0JBQ0FyQixxQkFBQUE7b0JBQ0FpQixxQkFBQUE7b0JBQ0FoQiwwQkFBQUE7Z0JBQ0Y7WUFDRjs7O1lBRUEwRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDcEcsUUFBUTtnQkFFYixJQUFJLENBQUNJLE9BQU87Z0JBRVosSUFBSSxDQUFDRSxNQUFNO1lBQ2I7OztZQUVBK0YsS0FBQUE7bUJBQUFBLFNBQUFBO1lBQ0UsR0FBRztZQUNMOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLHFCQUVFLG9CQUFDQyxzQkFBVSxzQkFDVCxvQkFBQ0MsYUFBZSxzQkFDZCxvQkFBQ0MsY0FBaUI7b0JBQUNDLGtCQUFrQixJQUFJLENBQUMzRyxxQkFBcUI7b0JBQUU0Ryx1QkFBdUIsSUFBSSxDQUFDOUcsMEJBQTBCO2tDQUN2SCxvQkFBQytHLGlCQUFvQjtvQkFBQ0MsZUFBZSxJQUFJLENBQUN4RyxrQkFBa0I7a0NBQzVELG9CQUFDeUcsc0JBQXlCO29CQUFDRCxlQUFlLElBQUksQ0FBQ3hHLGtCQUFrQjttQ0FFbkUsb0JBQUMwRywrQkFBbUIsdUJBQ3BCLG9CQUFDQyxxQkFBUyxzQkFDUixvQkFBQ0MsbUJBQU8sc0JBQ04sb0JBQUNDLGNBQWtCO29CQUFDQyxhQUFhLElBQUksQ0FBQzFHLGdCQUFnQjtvQkFDbEMyRyxjQUFjLElBQUksQ0FBQzdHLGlCQUFpQjtvQkFDcEM4RyxpQkFBaUIsSUFBSSxDQUFDbEgsb0JBQW9CO29CQUMxQ21ILG1CQUFtQixJQUFJLENBQUNySCxzQkFBc0I7a0NBRWxFLG9CQUFDc0gsb0JBQWM7b0JBQUNDLG9CQUFvQixJQUFJLENBQUNoSSx1QkFBdUI7a0NBQ2hFLG9CQUFDaUksWUFBZSx1QkFDaEIsb0JBQUNDLGFBQWdCLHVCQUNqQixvQkFBQ0MsZ0JBQW1CLHVCQUNwQixvQkFBQ0Msa0JBQXFCLHVCQUN0QixvQkFBQ0MsY0FBcUIsdUJBQ3RCLG9CQUFDQyxhQUFvQjtZQU0vQjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLGFBQWE7Z0JBRWxCLElBQUksQ0FBQzlCLGVBQWU7Z0JBRXBCLElBQWtELG9CQUFBLElBQUksQ0FBQyxXQUFXLEVBQTFEK0Isa0JBQTBDLGtCQUExQ0EsaUJBQWlCQyx1QkFBeUIsa0JBQXpCQSxzQkFDbkJwSSxnQkFBZ0JvSSxzQkFDaEJsSSxXQUFXaUksaUJBQWlCLEdBQUc7Z0JBRXJDLElBQUksQ0FBQ0UsZ0JBQWdCLENBQUNySTtnQkFFdEIsSUFBSSxDQUFDc0ksV0FBVyxDQUFDcEk7WUFDbkI7OztXQTFaSVQ7cUJBQWE4SSxhQUFPO0FBNFp4QixpQkE1Wkk5SSxNQTRaRzBJLG1CQUFrQjtBQUV6QixpQkE5WkkxSSxNQThaRzJJLHdCQUF1QjtBQU85QixpQkFyYUkzSSxNQXFhRytJLFdBQVU7QUFFakIsaUJBdmFJL0ksTUF1YUdnSixxQkFBb0I7SUFDekI7Q0FDRDtBQUVELGlCQTNhSWhKLE1BMmFHaUoscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDbko7QUFNekIsU0FBUzJFLFVBQVV5RSxJQUFJO0lBQ3JCLElBQU1DLE1BQU0sQUFBQyw4QkFBa0MsT0FBTEQ7SUFFMUMsT0FBT0M7QUFDVCJ9