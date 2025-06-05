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
                var _this_constructor = this.constructor, _$initialMarkdown = _this_constructor.initialMarkdown, initialMarkdownStyle = _this_constructor.initialMarkdownStyle, markdownStyle = initialMarkdownStyle, markdown = _$initialMarkdown; ///
                this.setMarkdownStyle(markdownStyle);
                this.setMarkdown(markdown);
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "_initialMarkdown", _importer.initialMarkdown);
_define_property(View, "initialMarkdown", '# Heading[^foo]\n  \n```json\n{\n  "foo": "bah"\n}  \n```\n\n[^foo]: Foo.\n\n@footnotes');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgZ3JhbW1hclV0aWxpdGllcyB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5pbXBvcnQgeyBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IGluZGV4T3B0aW9ucyBmcm9tIFwiLi9pbmRleE9wdGlvbnNcIjtcbmltcG9ydCBQYWdlQnV0dG9uc0RpdiBmcm9tIFwiLi92aWV3L2Rpdi9wYWdlQnV0dG9uc1wiO1xuaW1wb3J0IExlZnRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9sZWZ0XCI7XG5pbXBvcnQgQ1NTQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9jc3NcIjtcbmltcG9ydCBIVE1MQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9odG1sXCI7XG5pbXBvcnQgTGVmdFRhYkJ1dHRvbnNEaXYgZnJvbSBcIi4vdmlldy9kaXYvdGFiQnV0dG9ucy9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRUYWJCdXR0b25zRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3RhYkJ1dHRvbnMvcmlnaHRcIjtcbmltcG9ydCBQcmV2aWV3Q29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9wcmV2aWV3XCI7XG5pbXBvcnQgTWFya2Rvd25Db250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL21hcmtkb3duXCI7XG5pbXBvcnQgQ1NTUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9wYXJzZVRyZWUvY3NzXCI7XG5pbXBvcnQgSFRNTFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlL2h0bWxcIjtcbmltcG9ydCBQbGFpblRleHRDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL3BsYWluVGV4dFwiO1xuaW1wb3J0IE1hcmtkb3duU3R5bGVDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL21hcmtkb3duU3R5bGVcIjtcblxuaW1wb3J0IHsgaW1wb3J0ZXIsIGluaXRpYWxNYXJrZG93biB9IGZyb20gXCIuL2ltcG9ydGVyXCI7XG5jb25zdCB7IHRva2Vuc0Zyb21NYXJrZG93bixcbiAgICAgICAgbWFya2Rvd25Ob2RlRnJvbVRva2VucyxcbiAgICAgICAgdG9rZW5zRnJvbU1hcmtkb3duU3R5bGUsXG4gICAgICAgIG1hcmtkb3duU3R5bGVOb2RlRnJvbVRva2VucyxcbiAgICAgICAgdG9wbW9zdEhUTUxOb2RlRnJvbU1hcmtkb3duTm9kZSxcbiAgICAgICAgdG9wbW9zdENTU05vZGVGcm9tTWFya2Rvd25TdHlsZU5vZGUgfSA9IGdyYW1tYXJVdGlsaXRpZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgcGFnZVVwZGF0ZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgdGhpcy51cGRhdGVIVE1MKGluZGV4KTtcbiAgfVxuXG4gIG1hcmtkb3duU3R5bGVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5tYXJrZG93blN0eWxlKCk7XG4gIH1cblxuICBtYXJrZG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLm1hcmtkb3duKCk7XG4gIH1cblxuICBwbGFpblRleHRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5wbGFpblRleHQoKTtcbiAgfVxuXG4gIHByZXZpZXdDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5wcmV2aWV3KCk7XG4gIH1cblxuICBrZXlVcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgaHRtbEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmh0bWwoKTtcbiAgfVxuXG4gIGNzc0N1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmNzcygpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMudXBkYXRlTWFya2Rvd25TdHlsZSgpO1xuXG4gICAgdGhpcy51cGRhdGVNYXJrZG93bigpO1xuXG4gICAgdGhpcy51cGRhdGVIVE1MKCk7XG5cbiAgICB0aGlzLnVwZGF0ZUNTUygpO1xuICB9XG5cbiAgdXBkYXRlTWFya2Rvd25TdHlsZSgpIHtcbiAgICBsZXQgbWFya2Rvd25TdHlsZTtcblxuICAgIG1hcmtkb3duU3R5bGUgPSB0aGlzLmdldE1hcmtkb3duU3R5bGUoKTtcblxuICAgIGNvbnN0IHNlbGVjdG9yc1N0cmluZyA9IHRoaXMuZ2V0U2VsZWN0b3JzU3RyaW5nKCk7XG5cbiAgICBtYXJrZG93blN0eWxlID0gYCR7c2VsZWN0b3JzU3RyaW5nfSB7XG4gICR7bWFya2Rvd25TdHlsZX1cbn1gO1xuXG4gICAgY29uc3QgdG9rZW5zID0gdG9rZW5zRnJvbU1hcmtkb3duU3R5bGUobWFya2Rvd25TdHlsZSksXG4gICAgICAgICAgbWFya2Rvd25TdHlsZU5vZGUgPSBtYXJrZG93blN0eWxlTm9kZUZyb21Ub2tlbnModG9rZW5zKTtcblxuICAgIGlmIChtYXJrZG93blN0eWxlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5yZXNldE1hcmtkb3duU3R5bGVUb2tlbnMoKTtcblxuICAgICAgdGhpcy5yZXNldFRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSgpO1xuXG4gICAgICB0aGlzLmNsZWFyTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gbWFya2Rvd25TdHlsZU5vZGUsIC8vL1xuICAgICAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKSxcbiAgICAgICAgICBtYXJrZG93blN0eWxlVG9rZW5zID0gdG9rZW5zLCAvLy9cbiAgICAgICAgICB0b3Btb3N0TWFya2Rvd25TdHlsZU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHRoaXMuc2V0TWFya2Rvd25TdHlsZVRva2VucyhtYXJrZG93blN0eWxlVG9rZW5zKTtcblxuICAgIHRoaXMuc2V0VG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlKHRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSk7XG5cbiAgICB0aGlzLnVwZGF0ZU1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYShwYXJzZVRyZWUpO1xuXG4gICAgY29uc3QgbWFya2Rvd25TdHlsZUVsZW1lbnQgPSB0aGlzLmdldE1hcmtkb3duU3R5bGVFbGVtZW50KCksXG4gICAgICAgICAgdG9wbW9zdENTU05vZGUgPSB0b3Btb3N0Q1NTTm9kZUZyb21NYXJrZG93blN0eWxlTm9kZShtYXJrZG93blN0eWxlTm9kZSksXG4gICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgIHRva2Vuc1xuICAgICAgICAgIH07XG5cbiAgICB0b3Btb3N0Q1NTTm9kZS5yZXNvbHZlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgY3NzID0gdG9wbW9zdENTU05vZGUuYXNDU1MoY29udGV4dCk7XG5cbiAgICBtYXJrZG93blN0eWxlRWxlbWVudC5zZXRDU1MoY3NzKTtcbiAgfVxuXG4gIHVwZGF0ZU1hcmtkb3duKCkge1xuICAgIGNvbnN0IG1hcmtkb3duID0gdGhpcy5nZXRNYXJrZG93bigpLFxuICAgICAgICAgIHRva2VucyA9IHRva2Vuc0Zyb21NYXJrZG93bihtYXJrZG93biksXG4gICAgICAgICAgbWFya2Rvd25Ob2RlID0gbWFya2Rvd25Ob2RlRnJvbVRva2Vucyh0b2tlbnMpO1xuXG4gICAgaWYgKG1hcmtkb3duTm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5yZXNldE1hcmtkb3duVG9rZW5zKCk7XG5cbiAgICAgIHRoaXMucmVzZXRUb3Btb3N0TWFya2Rvd25Ob2RlKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgY29udGV4dDtcblxuICAgIGNvbnN0IHRvcG1vc3RNYXJrZG93bk5vZGUgPSBtYXJrZG93bk5vZGU7IC8vL1xuXG4gICAgY29udGV4dCA9IHtcbiAgICAgIHRva2VucyxcbiAgICAgIGltcG9ydGVyXG4gICAgfTtcblxuICAgIHRvcG1vc3RNYXJrZG93bk5vZGUucmVzb2x2ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IHRvcG1vc3RNYXJrZG93bk5vZGVQYXJzZVRyZWUgPSB0b3Btb3N0TWFya2Rvd25Ob2RlLmFzUGFyc2VUcmVlKHRva2VucyksXG4gICAgICAgICAgbWFya2Rvd25QYXJzZVRyZWUgPSB0b3Btb3N0TWFya2Rvd25Ob2RlUGFyc2VUcmVlLCAvLy9cbiAgICAgICAgICBtYXJrZG93blRva2VucyA9IHRva2VuczsgIC8vL1xuXG4gICAgdGhpcy5zZXRNYXJrZG93blRva2VucyhtYXJrZG93blRva2Vucyk7XG5cbiAgICB0aGlzLnNldFRvcG1vc3RNYXJrZG93bk5vZGUodG9wbW9zdE1hcmtkb3duTm9kZSk7XG5cbiAgICB0aGlzLnVwZGF0ZU1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEobWFya2Rvd25QYXJzZVRyZWUpO1xuICB9XG5cbiAgdXBkYXRlSFRNTChpbmRleCA9IDApIHtcbiAgICB0aGlzLmNsZWFyWE1QKCk7XG5cbiAgICB0aGlzLmNsZWFyUHJldmlld0RpdigpO1xuXG4gICAgdGhpcy5jbGVhclBsYWluVGV4dFRleHRhcmVhKCk7XG5cbiAgICB0aGlzLmNsZWFySFRNTFBhcnNlVHJlZVRleHRhcmVhKCk7XG5cbiAgICB0aGlzLmNsZWFyUGFnZUJ1dHRvbnNEaXYoKTtcblxuICAgIGNvbnN0IHRvcG1vc3RNYXJrZG93bk5vZGUgPSB0aGlzLmdldFRvcG1vc3RNYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICBtYXJrZG93bk5vZGUgPSB0b3Btb3N0TWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICB0b3Btb3N0SFRNTE5vZGUgPSB0b3Btb3N0SFRNTE5vZGVGcm9tTWFya2Rvd25Ob2RlKG1hcmtkb3duTm9kZSk7XG5cbiAgICBpZiAodG9wbW9zdEhUTUxOb2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGNvbnRleHQ7XG5cbiAgICBjb25zdCBtYXJrZG93blRva2VucyA9IHRoaXMuZ2V0TWFya2Rvd25Ub2tlbnMoKSxcbiAgICAgICAgICB0b2tlbnMgPSBtYXJrZG93blRva2VuczsgIC8vL1xuXG4gICAgY29udGV4dCA9IHtcbiAgICAgIGluZGV4T3B0aW9ucyxcbiAgICAgIHRva2Vuc1xuICAgIH07XG5cbiAgICB0b3Btb3N0SFRNTE5vZGUucmVzb2x2ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IGRpdmlzaW9uSFRNTE5PZGUgPSB0b3Btb3N0SFRNTE5vZGUuZ2V0RGl2aXNpb25IVE1MTm9kZUF0KGluZGV4KTtcblxuICAgIGlmIChkaXZpc2lvbkhUTUxOT2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGl2aXNpb25IVE1MTk9kZVBhcnNlVHJlZSA9IGRpdmlzaW9uSFRNTE5PZGUuYXNQYXJzZVRyZWUoKSxcbiAgICAgICAgICBodG1sUGFyc2VUcmVlID0gZGl2aXNpb25IVE1MTk9kZVBhcnNlVHJlZSwgIC8vL1xuICAgICAgICAgIG11bHRpcGxpY2l0eSA9IHRvcG1vc3RIVE1MTm9kZS5nZXRNdWx0aXBsaWNpdHkoKSxcbiAgICAgICAgICBsZW5ndGggPSBtdWx0aXBsaWNpdHk7XG5cbiAgICBjb250ZXh0ID0ge1xuICAgICAgdG9rZW5zLFxuICAgICAgcGF0aFRvVVJMXG4gICAgfTtcblxuICAgIHRoaXMudXBkYXRlWE1QKGRpdmlzaW9uSFRNTE5PZGUsIGNvbnRleHQpO1xuXG4gICAgdGhpcy51cGRhdGVQcmV2aWV3RGl2KGRpdmlzaW9uSFRNTE5PZGUsIGNvbnRleHQpO1xuXG4gICAgdGhpcy51cGRhdGVQbGFpblRleHRUZXh0YXJlYShkaXZpc2lvbkhUTUxOT2RlLCBjb250ZXh0KTtcblxuICAgIHRoaXMudXBkYXRlSFRNTFBhcnNlVHJlZVRleHRhcmVhKGh0bWxQYXJzZVRyZWUpO1xuXG4gICAgdGhpcy51cGRhdGVQYWdlQnV0dG9uc0RpdihsZW5ndGgsIGluZGV4KTtcbiAgfVxuXG4gIHVwZGF0ZUNTUygpIHtcbiAgICBjb25zdCB0b3Btb3N0TWFya2Rvd25TdHlsZU5vZGUgPSB0aGlzLmdldFRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSgpLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGVUb2tlbnMgPSB0aGlzLmdldE1hcmtkb3duU3R5bGVUb2tlbnMoKSxcbiAgICAgICAgICBtYXJrZG93blN0eWxlTm9kZSA9IHRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSwgLy8vXG4gICAgICAgICAgdG9wbW9zdENTU05vZGUgPSB0b3Btb3N0Q1NTTm9kZUZyb21NYXJrZG93blN0eWxlTm9kZShtYXJrZG93blN0eWxlTm9kZSksXG4gICAgICAgICAgdG9rZW5zID0gbWFya2Rvd25TdHlsZVRva2VucywgLy8vXG4gICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgIHRva2Vuc1xuICAgICAgICAgIH07XG5cbiAgICB0b3Btb3N0Q1NTTm9kZS5yZXNvbHZlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdG9wbW9zdENTU05vZGVQYXJzZVRyZWUgPSB0b3Btb3N0Q1NTTm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpLFxuICAgICAgICAgIGNzc1BhcnNlVHJlZSA9IHRvcG1vc3RDU1NOb2RlUGFyc2VUcmVlLCAvLy9cbiAgICAgICAgICBjc3MgPSB0b3Btb3N0Q1NTTm9kZS5hc0NTUyhjb250ZXh0KTtcblxuICAgIHRoaXMudXBkYXRlQ1NTUGFyc2VUcmVlVGV4dGFyZWEoY3NzUGFyc2VUcmVlKTtcblxuICAgIHRoaXMuc2V0Q1NTKGNzcyk7XG4gIH1cblxuICBtYXJrZG93blN0eWxlKCkge1xuICAgIHRoaXMuaGlkZU1hcmtkb3duQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93TWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdigpO1xuICB9XG5cbiAgbWFya2Rvd24oKSB7XG4gICAgdGhpcy5zaG93TWFya2Rvd25Db250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2KCk7XG4gIH1cblxuICBwbGFpblRleHQoKSB7XG4gICAgdGhpcy5oaWRlQ1NTQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlSFRNTENvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVByZXZpZXdDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLnNob3dQbGFpblRleHRDb250YWluZXJEaXYoKTtcblxuICAgIHRoaXMuaGlkZUNTU1BhcnNlVHJlZVRleHRhcmVhKCk7XG4gICAgdGhpcy5zaG93SFRNTFBhcnNlVHJlZVRleHRhcmVhKCk7XG4gIH1cblxuICBwcmV2aWV3KCkge1xuICAgIHRoaXMuaGlkZUNTU0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZUhUTUxDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLnNob3dQcmV2aWV3Q29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlUGxhaW5UZXh0Q29udGFpbmVyRGl2KCk7XG5cbiAgICB0aGlzLmhpZGVDU1NQYXJzZVRyZWVUZXh0YXJlYSgpO1xuICAgIHRoaXMuc2hvd0hUTUxQYXJzZVRyZWVUZXh0YXJlYSgpO1xuICB9XG5cbiAgaHRtbCgpIHtcbiAgICB0aGlzLmhpZGVDU1NDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLnNob3dIVE1MQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlUHJldmlld0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVBsYWluVGV4dENvbnRhaW5lckRpdigpO1xuXG4gICAgdGhpcy5oaWRlQ1NTUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgICB0aGlzLnNob3dIVE1MUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgfVxuXG4gIGNzcygpIHtcbiAgICB0aGlzLnNob3dDU1NDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVIVE1MQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlUHJldmlld0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVBsYWluVGV4dENvbnRhaW5lckRpdigpO1xuXG4gICAgdGhpcy5zaG93Q1NTUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgICB0aGlzLmhpZGVIVE1MUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgfVxuXG4gIHJlc2V0TWFya2Rvd25Ub2tlbnMoKSB7XG4gICAgY29uc3QgbWFya2Rvd25Ub2tlbnMgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRNYXJrZG93blRva2VucyhtYXJrZG93blRva2Vucyk7XG4gIH1cblxuICByZXNldE1hcmtkb3duU3R5bGVUb2tlbnMoKSB7XG4gICAgY29uc3QgbWFya2Rvd25TdHlsZVRva2VucyA9IG51bGw7XG5cbiAgICB0aGlzLnNldE1hcmtkb3duU3R5bGVUb2tlbnMobWFya2Rvd25TdHlsZVRva2Vucyk7XG4gIH1cblxuICByZXNldFRvcG1vc3RNYXJrZG93bk5vZGUoKSB7XG4gICAgY29uc3QgdG9wbW9zdE1hcmtkb3duTm9kZSA9IG51bGw7XG5cbiAgICB0aGlzLnNldFRvcG1vc3RNYXJrZG93bk5vZGUodG9wbW9zdE1hcmtkb3duTm9kZSk7XG4gIH1cblxuICByZXNldFRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSgpIHtcbiAgICBjb25zdCB0b3Btb3N0TWFya2Rvd25TdHlsZU5vZGUgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRUb3Btb3N0TWFya2Rvd25TdHlsZU5vZGUodG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlKTtcbiAgfVxuXG4gIGdldE1hcmtkb3duU3R5bGVFbGVtZW50KCkge1xuICAgIGNvbnN0IHsgbWFya2Rvd25TdHlsZUVsZW1lbnQgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIHJldHVybiBtYXJrZG93blN0eWxlRWxlbWVudDtcbiAgfVxuXG4gIGdldFNlbGVjdG9yc1N0cmluZygpIHtcbiAgICBjb25zdCB7IHNlbGVjdG9yc1N0cmluZyB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIHNlbGVjdG9yc1N0cmluZztcbiAgfVxuXG4gIGdldE1hcmtkb3duVG9rZW5zKCkge1xuICAgIGNvbnN0IHsgbWFya2Rvd25Ub2tlbnMgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBtYXJrZG93blRva2VucztcbiAgfVxuXG4gIGdldE1hcmtkb3duU3R5bGVUb2tlbnMoKSB7XG4gICAgY29uc3QgeyBtYXJrZG93blN0eWxlVG9rZW5zIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gbWFya2Rvd25TdHlsZVRva2VucztcbiAgfVxuXG4gIGdldFRvcG1vc3RNYXJrZG93bk5vZGUoKSB7XG4gICAgY29uc3QgeyB0b3Btb3N0TU1hcmtkb3duTm9kZSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHRvcG1vc3RNTWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgZ2V0VG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlKCkge1xuICAgIGNvbnN0IHsgdG9wbW9zdE1NYXJrZG93blN0eWxlTm9kZSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHRvcG1vc3RNTWFya2Rvd25TdHlsZU5vZGU7XG4gIH1cblxuICBzZXRNYXJrZG93blRva2VucyhtYXJrZG93blRva2Vucykge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgbWFya2Rvd25Ub2tlbnNcbiAgICB9KTtcbiAgfVxuXG4gIHNldE1hcmtkb3duU3R5bGVUb2tlbnMobWFya2Rvd25TdHlsZVRva2Vucykge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgbWFya2Rvd25TdHlsZVRva2Vuc1xuICAgIH0pO1xuICB9XG5cbiAgc2V0VG9wbW9zdE1hcmtkb3duTm9kZSh0b3Btb3N0TU1hcmtkb3duTm9kZSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgdG9wbW9zdE1NYXJrZG93bk5vZGVcbiAgICB9KTtcbiAgfVxuXG4gIHNldFRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSh0b3Btb3N0TU1hcmtkb3duU3R5bGVOb2RlKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICB0b3Btb3N0TU1hcmtkb3duU3R5bGVOb2RlXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgbWFya2Rvd25Ub2tlbnMgPSBudWxsLFxuICAgICAgICAgIG1hcmtkb3duU3R5bGVUb2tlbnMgPSBudWxsLFxuICAgICAgICAgIHRvcG1vc3RNYXJrZG93bk5vZGUgPSBudWxsLFxuICAgICAgICAgIHRvcG1vc3RNYXJrZG93blN0eWxlTm9kZSA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1hcmtkb3duVG9rZW5zLFxuICAgICAgbWFya2Rvd25TdHlsZVRva2VucyxcbiAgICAgIHRvcG1vc3RNYXJrZG93bk5vZGUsXG4gICAgICB0b3Btb3N0TWFya2Rvd25TdHlsZU5vZGVcbiAgICB9KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMubWFya2Rvd24oKTtcblxuICAgIHRoaXMucHJldmlldygpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPExlZnRTaXplYWJsZURpdj5cbiAgICAgICAgICA8TGVmdFRhYkJ1dHRvbnNEaXYgb25DdXN0b21NYXJrZG93bj17dGhpcy5tYXJrZG93bkN1c3RvbUhhbmRsZXJ9IG9uQ3VzdG9tTWFya2Rvd25TdHlsZT17dGhpcy5tYXJrZG93blN0eWxlQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgICA8TWFya2Rvd25Db250YWluZXJEaXYgb25DdXN0b21LZXlVcD17dGhpcy5rZXlVcEN1c3RvbUhhbmRsZXJ9IC8+XG4gICAgICAgICAgPE1hcmtkb3duU3R5bGVDb250YWluZXJEaXYgb25DdXN0b21LZXlVcD17dGhpcy5rZXlVcEN1c3RvbUhhbmRsZXJ9IC8+XG4gICAgICAgIDwvTGVmdFNpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdi8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8UmlnaHRUYWJCdXR0b25zRGl2IG9uQ3VzdG9tQ1NTPXt0aGlzLmNzc0N1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tSFRNTD17dGhpcy5odG1sQ3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DdXN0b21QcmV2aWV3PXt0aGlzLnByZXZpZXdDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbVBsYWluVGV4dD17dGhpcy5wbGFpblRleHRDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxQYWdlQnV0dG9uc0RpdiBvbkN1c3RvbVBhZ2VVcGRhdGU9e3RoaXMucGFnZVVwZGF0ZUN1c3RvbUhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8Q1NTQ29udGFpbmVyRGl2Lz5cbiAgICAgICAgICAgIDxIVE1MQ29udGFpbmVyRGl2Lz5cbiAgICAgICAgICAgIDxQcmV2aWV3Q29udGFpbmVyRGl2Lz5cbiAgICAgICAgICAgIDxQbGFpblRleHRDb250YWluZXJEaXYvPlxuICAgICAgICAgICAgPEhUTUxQYXJzZVRyZWVUZXh0YXJlYS8+XG4gICAgICAgICAgICA8Q1NTUGFyc2VUcmVlVGV4dGFyZWEvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG5cbiAgICApO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG5cbiAgICBjb25zdCB7IGluaXRpYWxNYXJrZG93biwgaW5pdGlhbE1hcmtkb3duU3R5bGUgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgbWFya2Rvd25TdHlsZSA9IGluaXRpYWxNYXJrZG93blN0eWxlLCAvLy9cbiAgICAgICAgICBtYXJrZG93biA9IGluaXRpYWxNYXJrZG93bjsgLy8vXG5cbiAgICB0aGlzLnNldE1hcmtkb3duU3R5bGUobWFya2Rvd25TdHlsZSk7XG5cbiAgICB0aGlzLnNldE1hcmtkb3duKG1hcmtkb3duKTtcbiAgfVxuXG4gIHN0YXRpYyBfaW5pdGlhbE1hcmtkb3duID0gaW5pdGlhbE1hcmtkb3duO1xuXG4gIHN0YXRpYyBpbml0aWFsTWFya2Rvd24gPSBgIyBIZWFkaW5nW15mb29dXG4gIFxuXFxgXFxgXFxganNvblxue1xuICBcImZvb1wiOiBcImJhaFwiXG59ICBcblxcYFxcYFxcYFxuXG5bXmZvb106IEZvby5cblxuQGZvb3Rub3Rlc2A7XG5cbiAgc3RhdGljIGluaXRpYWxNYXJrZG93blN0eWxlID0gYHByaW1hcnlIZWFkaW5nIHtcbiAgOmZpcnN0LWNoaWxkIHtcbiAgICBjb2xvdXI6IHJlZDtcbiAgfVxufVxuYDtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwibWFya2Rvd25TdHlsZUVsZW1lbnRcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxcmVtO1xuICBcbmA7XG5cbmZ1bmN0aW9uIHBhdGhUb1VSTChwYXRoKSB7XG4gIGNvbnN0IHVybCA9IGBodHRwczovL3N0YXRpYy5kamFsYmF0LmNvbS8ke3BhdGh9YDtcblxuICByZXR1cm4gdXJsO1xufVxuIl0sIm5hbWVzIjpbInRva2Vuc0Zyb21NYXJrZG93biIsImdyYW1tYXJVdGlsaXRpZXMiLCJtYXJrZG93bk5vZGVGcm9tVG9rZW5zIiwidG9rZW5zRnJvbU1hcmtkb3duU3R5bGUiLCJtYXJrZG93blN0eWxlTm9kZUZyb21Ub2tlbnMiLCJ0b3Btb3N0SFRNTE5vZGVGcm9tTWFya2Rvd25Ob2RlIiwidG9wbW9zdENTU05vZGVGcm9tTWFya2Rvd25TdHlsZU5vZGUiLCJWaWV3IiwicGFnZVVwZGF0ZUN1c3RvbUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJpbmRleCIsInVwZGF0ZUhUTUwiLCJtYXJrZG93blN0eWxlQ3VzdG9tSGFuZGxlciIsIm1hcmtkb3duU3R5bGUiLCJtYXJrZG93bkN1c3RvbUhhbmRsZXIiLCJtYXJrZG93biIsInBsYWluVGV4dEN1c3RvbUhhbmRsZXIiLCJwbGFpblRleHQiLCJwcmV2aWV3Q3VzdG9tSGFuZGxlciIsInByZXZpZXciLCJrZXlVcEN1c3RvbUhhbmRsZXIiLCJ1cGRhdGUiLCJodG1sQ3VzdG9tSGFuZGxlciIsImh0bWwiLCJjc3NDdXN0b21IYW5kbGVyIiwiY3NzIiwidXBkYXRlTWFya2Rvd25TdHlsZSIsInVwZGF0ZU1hcmtkb3duIiwidXBkYXRlQ1NTIiwiZ2V0TWFya2Rvd25TdHlsZSIsInNlbGVjdG9yc1N0cmluZyIsImdldFNlbGVjdG9yc1N0cmluZyIsInRva2VucyIsIm1hcmtkb3duU3R5bGVOb2RlIiwicmVzZXRNYXJrZG93blN0eWxlVG9rZW5zIiwicmVzZXRUb3Btb3N0TWFya2Rvd25TdHlsZU5vZGUiLCJjbGVhck1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSIsIm5vZGUiLCJwYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsIm1hcmtkb3duU3R5bGVUb2tlbnMiLCJ0b3Btb3N0TWFya2Rvd25TdHlsZU5vZGUiLCJzZXRNYXJrZG93blN0eWxlVG9rZW5zIiwic2V0VG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlIiwidXBkYXRlTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhIiwibWFya2Rvd25TdHlsZUVsZW1lbnQiLCJnZXRNYXJrZG93blN0eWxlRWxlbWVudCIsInRvcG1vc3RDU1NOb2RlIiwiY29udGV4dCIsInJlc29sdmUiLCJhc0NTUyIsInNldENTUyIsImdldE1hcmtkb3duIiwibWFya2Rvd25Ob2RlIiwicmVzZXRNYXJrZG93blRva2VucyIsInJlc2V0VG9wbW9zdE1hcmtkb3duTm9kZSIsImNsZWFyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSIsInRvcG1vc3RNYXJrZG93bk5vZGUiLCJpbXBvcnRlciIsInRvcG1vc3RNYXJrZG93bk5vZGVQYXJzZVRyZWUiLCJtYXJrZG93blBhcnNlVHJlZSIsIm1hcmtkb3duVG9rZW5zIiwic2V0TWFya2Rvd25Ub2tlbnMiLCJzZXRUb3Btb3N0TWFya2Rvd25Ob2RlIiwidXBkYXRlTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSIsImNsZWFyWE1QIiwiY2xlYXJQcmV2aWV3RGl2IiwiY2xlYXJQbGFpblRleHRUZXh0YXJlYSIsImNsZWFySFRNTFBhcnNlVHJlZVRleHRhcmVhIiwiY2xlYXJQYWdlQnV0dG9uc0RpdiIsImdldFRvcG1vc3RNYXJrZG93bk5vZGUiLCJ0b3Btb3N0SFRNTE5vZGUiLCJnZXRNYXJrZG93blRva2VucyIsImluZGV4T3B0aW9ucyIsImRpdmlzaW9uSFRNTE5PZGUiLCJnZXREaXZpc2lvbkhUTUxOb2RlQXQiLCJkaXZpc2lvbkhUTUxOT2RlUGFyc2VUcmVlIiwiaHRtbFBhcnNlVHJlZSIsIm11bHRpcGxpY2l0eSIsImdldE11bHRpcGxpY2l0eSIsImxlbmd0aCIsInBhdGhUb1VSTCIsInVwZGF0ZVhNUCIsInVwZGF0ZVByZXZpZXdEaXYiLCJ1cGRhdGVQbGFpblRleHRUZXh0YXJlYSIsInVwZGF0ZUhUTUxQYXJzZVRyZWVUZXh0YXJlYSIsInVwZGF0ZVBhZ2VCdXR0b25zRGl2IiwiZ2V0VG9wbW9zdE1hcmtkb3duU3R5bGVOb2RlIiwiZ2V0TWFya2Rvd25TdHlsZVRva2VucyIsInRvcG1vc3RDU1NOb2RlUGFyc2VUcmVlIiwiY3NzUGFyc2VUcmVlIiwidXBkYXRlQ1NTUGFyc2VUcmVlVGV4dGFyZWEiLCJoaWRlTWFya2Rvd25Db250YWluZXJEaXYiLCJzaG93TWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiIsInNob3dNYXJrZG93bkNvbnRhaW5lckRpdiIsImhpZGVNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2IiwiaGlkZUNTU0NvbnRhaW5lckRpdiIsImhpZGVIVE1MQ29udGFpbmVyRGl2IiwiaGlkZVByZXZpZXdDb250YWluZXJEaXYiLCJzaG93UGxhaW5UZXh0Q29udGFpbmVyRGl2IiwiaGlkZUNTU1BhcnNlVHJlZVRleHRhcmVhIiwic2hvd0hUTUxQYXJzZVRyZWVUZXh0YXJlYSIsInNob3dQcmV2aWV3Q29udGFpbmVyRGl2IiwiaGlkZVBsYWluVGV4dENvbnRhaW5lckRpdiIsInNob3dIVE1MQ29udGFpbmVyRGl2Iiwic2hvd0NTU0NvbnRhaW5lckRpdiIsInNob3dDU1NQYXJzZVRyZWVUZXh0YXJlYSIsImhpZGVIVE1MUGFyc2VUcmVlVGV4dGFyZWEiLCJwcm9wZXJ0aWVzIiwiZ2V0U3RhdGUiLCJ0b3Btb3N0TU1hcmtkb3duTm9kZSIsInRvcG1vc3RNTWFya2Rvd25TdHlsZU5vZGUiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiZGlkTW91bnQiLCJ3aWxsVW5tb3VudCIsImNoaWxkRWxlbWVudHMiLCJDb2x1bW5zRGl2IiwiTGVmdFNpemVhYmxlRGl2IiwiTGVmdFRhYkJ1dHRvbnNEaXYiLCJvbkN1c3RvbU1hcmtkb3duIiwib25DdXN0b21NYXJrZG93blN0eWxlIiwiTWFya2Rvd25Db250YWluZXJEaXYiLCJvbkN1c3RvbUtleVVwIiwiTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJSb3dzRGl2IiwiUmlnaHRUYWJCdXR0b25zRGl2Iiwib25DdXN0b21DU1MiLCJvbkN1c3RvbUhUTUwiLCJvbkN1c3RvbVByZXZpZXciLCJvbkN1c3RvbVBsYWluVGV4dCIsIlBhZ2VCdXR0b25zRGl2Iiwib25DdXN0b21QYWdlVXBkYXRlIiwiQ1NTQ29udGFpbmVyRGl2IiwiSFRNTENvbnRhaW5lckRpdiIsIlByZXZpZXdDb250YWluZXJEaXYiLCJQbGFpblRleHRDb250YWluZXJEaXYiLCJIVE1MUGFyc2VUcmVlVGV4dGFyZWEiLCJDU1NQYXJzZVRyZWVUZXh0YXJlYSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiaW5pdGlhbE1hcmtkb3duIiwiaW5pdGlhbE1hcmtkb3duU3R5bGUiLCJzZXRNYXJrZG93blN0eWxlIiwic2V0TWFya2Rvd24iLCJFbGVtZW50IiwiX2luaXRpYWxNYXJrZG93biIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwicGF0aCIsInVybCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMGRBOzs7ZUFBQTs7O29FQXhkc0I7b0JBRUU7cUJBQ1M7MEJBQ21DO21FQUUzQztrRUFDRTsyREFDQzswREFDQTsyREFDQzs0REFDQzs0REFDQzs4REFDQzsrREFDQzsyREFDQTs0REFD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