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
var _easylayout = require("easy-layout");
var _index = require("../index");
var _pageButtons = /*#__PURE__*/ _interop_require_default(require("./view/div/pageButtons"));
var _left = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/left"));
var _css = /*#__PURE__*/ _interop_require_default(require("./view/div/container/css"));
var _html = /*#__PURE__*/ _interop_require_default(require("./view/div/container/html"));
var _left1 = /*#__PURE__*/ _interop_require_default(require("./view/div/tabButtons/left"));
var _right = /*#__PURE__*/ _interop_require_default(require("./view/div/tabButtons/right"));
var _preview = /*#__PURE__*/ _interop_require_default(require("./view/div/container/preview"));
var _markdown = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdown"));
var _plainText = /*#__PURE__*/ _interop_require_default(require("./view/div/container/plainText"));
var _html1 = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree/html"));
var _markdownStyle = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdownStyle"));
var _dom = require("../utilities/dom");
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
var markdownLexer = _index.MarkdownLexer.fromNothing(), markdownParser = _index.MarkdownParser.fromNothing(), markdownStyleLexer = _index.MarkdownStyleLexer.fromNothing(), markdownStyleParser = _index.MarkdownStyleParser.fromNothing();
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _call_super(this, View, arguments), _define_property(_this, "markdownStyleCustomHandler", function(event, element) {
            _this.markdownStyle();
        }), _define_property(_this, "pageUpdateCustomHandler", function(event, element, index) {
            _this.clearPage();
            _this.updatePage(index);
        }), _define_property(_this, "plainTextCustomHandler", function(event, element) {
            _this.plainText();
        }), _define_property(_this, "markdownCustomHandler", function(event, element) {
            _this.markdown();
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
                this.updatePage();
            }
        },
        {
            key: "clearPage",
            value: function clearPage() {
                this.clearXMP();
                this.clearPreviewDiv();
                this.clearHTMLParseTreeTextarea();
            }
        },
        {
            key: "updatePage",
            value: function updatePage() {
                var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
                var tokens = this.getTokens(), topmostMarkdownNode = this.getTopmostMarkdownNode(), topmostHTMLNode = (0, _dom.htmlNodeFromMarkdownNode)(topmostMarkdownNode), divisionHTMLNOde = topmostHTMLNode.getDivisionHTMLNodeAt(index), context = {
                    tokens: tokens,
                    pathToURL: pathToURL
                };
                this.updateXMP(divisionHTMLNOde, context);
                this.updatePreviewDiv(divisionHTMLNOde, context);
                this.updatePlainTextTextarea(divisionHTMLNOde, context);
                var multiplicity = topmostHTMLNode.getMultiplicity(), length = multiplicity, parseTree = divisionHTMLNOde.asParseTree(), htmlParseTree = parseTree; ///
                this.updatePageButtonsDiv(length, index);
                this.updateHTMLParseTreeTextarea(htmlParseTree);
            }
        },
        {
            key: "updateMarkdown",
            value: function updateMarkdown() {
                var markdown = this.getMarkdown(), lexer = markdownLexer, parser = markdownParser, content = markdown, tokens = lexer.tokenise(content), node = parser.parse(tokens);
                if (node === null) {
                    this.resetTokens();
                    this.resetTopmostMarkdownNode();
                    this.clearMarkdownParseTreeTextarea();
                    this.clearPageButtonsDiv();
                    this.clearPage();
                    return;
                }
                var topmostMarkdownNode = node, context = {
                    tokens: tokens,
                    importer: _importer.importer,
                    nodeFromTokens: nodeFromTokens,
                    tokensFromContent: tokensFromContent
                };
                topmostMarkdownNode.resolve(context);
                var parseTree = topmostMarkdownNode.asParseTree(tokens), markdownParseTree = parseTree; ///
                this.setTokens(tokens);
                this.setTopmostMarkdownNode(topmostMarkdownNode);
                this.updateMarkdownParseTreeTextarea(markdownParseTree);
            }
        },
        {
            key: "updateMarkdownStyle",
            value: function updateMarkdownStyle() {
                var markdownStyleElement = this.properties.markdownStyleElement, markdownStyle = this.getMarkdownStyle(), css = markdownStyleElement.update(markdownStyle);
                this.setCSS(css);
                var lexer = markdownStyleLexer, parser = markdownStyleParser, content = markdownStyle, tokens = lexer.tokenise(content), startRule = parser.getStartRule(), node = parser.parse(tokens, startRule);
                if (node !== null) {
                    var parseTree = node.asParseTree(tokens);
                    this.updateMarkdownStyleParseTreeTextarea(parseTree);
                } else {
                    this.clearMarkdownStyleParseTreeTextarea();
                }
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
            key: "plainText",
            value: function plainText() {
                this.hideCSSContainerDiv();
                this.hideHTMLContainerDiv();
                this.hidePreviewContainerDiv();
                this.showPlainTextContainerDiv();
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
            key: "preview",
            value: function preview() {
                this.hideCSSContainerDiv();
                this.hideHTMLContainerDiv();
                this.showPreviewContainerDiv();
                this.hidePlainTextContainerDiv();
            }
        },
        {
            key: "html",
            value: function html() {
                this.hideCSSContainerDiv();
                this.showHTMLContainerDiv();
                this.hidePreviewContainerDiv();
                this.hidePlainTextContainerDiv();
            }
        },
        {
            key: "css",
            value: function css() {
                this.showCSSContainerDiv();
                this.hideHTMLContainerDiv();
                this.hidePreviewContainerDiv();
                this.hidePlainTextContainerDiv();
            }
        },
        {
            key: "resetTokens",
            value: function resetTokens() {
                var tokens = null;
                this.setTokens(tokens);
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
            key: "getTokens",
            value: function getTokens() {
                var tokens = this.getState().tokens;
                return tokens;
            }
        },
        {
            key: "getTopmostMarkdownNode",
            value: function getTopmostMarkdownNode() {
                var topmostMarkdownNode = this.getState().topmostMarkdownNode;
                return topmostMarkdownNode;
            }
        },
        {
            key: "setTokens",
            value: function setTokens(tokens) {
                this.updateState({
                    tokens: tokens
                });
            }
        },
        {
            key: "setTopmostMarkdownNode",
            value: function setTopmostMarkdownNode(topmostMarkdownNode) {
                this.updateState({
                    topmostMarkdownNode: topmostMarkdownNode
                });
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var tokens = null, topmostMarkdownNode = null;
                this.setState({
                    tokens: tokens,
                    topmostMarkdownNode: topmostMarkdownNode
                });
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
                }), /*#__PURE__*/ React.createElement(_css.default, null), /*#__PURE__*/ React.createElement(_html.default, null), /*#__PURE__*/ React.createElement(_preview.default, null), /*#__PURE__*/ React.createElement(_plainText.default, null), /*#__PURE__*/ React.createElement(_html1.default, null))));
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                this.setInitialState();
                var _this_constructor = this.constructor, _$initialMarkdown = _this_constructor.initialMarkdown, initialMarkdownStyle = _this_constructor.initialMarkdownStyle, markdownStyle = initialMarkdownStyle, markdown = _$initialMarkdown; ///
                this.setMarkdown(markdown);
                this.setMarkdownStyle(markdownStyle);
                this.update();
                this.css();
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "initialMarkdown", _importer.initialMarkdown);
_define_property(View, "initialMarkdownStyle", "width: 100%;\nheight: 100%;\nfont-size: 2rem;  \n\nblockListing {\n  colour: white;\n  text-align: left;\n  font-family: monospace;\n  background-colour: black;\n}\n");
_define_property(View, "tagName", "div");
_define_property(View, "ignoredProperties", [
    "markdownStyleElement"
]);
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());
function tokensFromContent(content) {
    var tokens = markdownLexer.tokenise(content);
    return tokens;
}
function nodeFromTokens(tokens) {
    var startRuleName = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    var ruleMap = markdownParser.getRuleMap(), startRule = startRuleName !== null ? ruleMap[startRuleName] : markdownParser.getStartRule(), node = markdownParser.parse(tokens, startRule);
    return node;
}
function pathToURL(path) {
    var url = "https://static.djalbat.com/".concat(path);
    return url;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2LCBWZXJ0aWNhbFNwbGl0dGVyRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5pbXBvcnQgeyBNYXJrZG93bkxleGVyLCBNYXJrZG93blBhcnNlciwgTWFya2Rvd25TdHlsZUxleGVyLCBNYXJrZG93blN0eWxlUGFyc2VyIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5cbmltcG9ydCBQYWdlQnV0dG9uc0RpdiBmcm9tIFwiLi92aWV3L2Rpdi9wYWdlQnV0dG9uc1wiO1xuaW1wb3J0IExlZnRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9sZWZ0XCI7XG5pbXBvcnQgQ1NTQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9jc3NcIjtcbmltcG9ydCBIVE1MQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9odG1sXCI7XG5pbXBvcnQgTGVmdFRhYkJ1dHRvbnNEaXYgZnJvbSBcIi4vdmlldy9kaXYvdGFiQnV0dG9ucy9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRUYWJCdXR0b25zRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3RhYkJ1dHRvbnMvcmlnaHRcIjtcbmltcG9ydCBQcmV2aWV3Q29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9wcmV2aWV3XCI7XG5pbXBvcnQgTWFya2Rvd25Db250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL21hcmtkb3duXCI7XG5pbXBvcnQgUGxhaW5UZXh0Q29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9wbGFpblRleHRcIjtcbmltcG9ydCBIVE1MUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9wYXJzZVRyZWUvaHRtbFwiO1xuaW1wb3J0IE1hcmtkb3duU3R5bGVDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL21hcmtkb3duU3R5bGVcIjtcblxuaW1wb3J0IHsgaHRtbE5vZGVGcm9tTWFya2Rvd25Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9kb21cIjtcbmltcG9ydCB7IGltcG9ydGVyLCBpbml0aWFsTWFya2Rvd24gfSBmcm9tIFwiLi9pbXBvcnRlclwiO1xuXG5jb25zdCBtYXJrZG93bkxleGVyID0gTWFya2Rvd25MZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgbWFya2Rvd25QYXJzZXIgPSBNYXJrZG93blBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgbWFya2Rvd25TdHlsZUxleGVyID0gTWFya2Rvd25TdHlsZUxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBtYXJrZG93blN0eWxlUGFyc2VyID0gTWFya2Rvd25TdHlsZVBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIG1hcmtkb3duU3R5bGVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5tYXJrZG93blN0eWxlKCk7XG4gIH1cblxuICBwYWdlVXBkYXRlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICB0aGlzLmNsZWFyUGFnZSgpO1xuXG4gICAgdGhpcy51cGRhdGVQYWdlKGluZGV4KTtcbiAgfVxuXG4gIHBsYWluVGV4dEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnBsYWluVGV4dCgpO1xuICB9XG5cbiAgbWFya2Rvd25DdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5tYXJrZG93bigpO1xuICB9XG5cbiAgcHJldmlld0N1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnByZXZpZXcoKTtcbiAgfVxuXG4gIGtleVVwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBodG1sQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuaHRtbCgpO1xuICB9XG5cbiAgY3NzQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuY3NzKCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy51cGRhdGVNYXJrZG93blN0eWxlKCk7XG4gICAgdGhpcy51cGRhdGVNYXJrZG93bigpO1xuICAgIHRoaXMudXBkYXRlUGFnZSgpO1xuICB9XG5cbiAgY2xlYXJQYWdlKCkge1xuICAgIHRoaXMuY2xlYXJYTVAoKTtcbiAgICB0aGlzLmNsZWFyUHJldmlld0RpdigpO1xuICAgIHRoaXMuY2xlYXJIVE1MUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgfVxuXG4gIHVwZGF0ZVBhZ2UoaW5kZXggPSAwKSB7XG4gICAgY29uc3QgdG9rZW5zID0gdGhpcy5nZXRUb2tlbnMoKSxcbiAgICAgICAgICB0b3Btb3N0TWFya2Rvd25Ob2RlID0gdGhpcy5nZXRUb3Btb3N0TWFya2Rvd25Ob2RlKCksXG4gICAgICAgICAgdG9wbW9zdEhUTUxOb2RlID0gaHRtbE5vZGVGcm9tTWFya2Rvd25Ob2RlKHRvcG1vc3RNYXJrZG93bk5vZGUpLFxuICAgICAgICAgIGRpdmlzaW9uSFRNTE5PZGUgPSB0b3Btb3N0SFRNTE5vZGUuZ2V0RGl2aXNpb25IVE1MTm9kZUF0KGluZGV4KSxcbiAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgdG9rZW5zLFxuICAgICAgICAgICAgcGF0aFRvVVJMXG4gICAgICAgICAgfTtcblxuICAgIHRoaXMudXBkYXRlWE1QKGRpdmlzaW9uSFRNTE5PZGUsIGNvbnRleHQpO1xuXG4gICAgdGhpcy51cGRhdGVQcmV2aWV3RGl2KGRpdmlzaW9uSFRNTE5PZGUsIGNvbnRleHQpO1xuXG4gICAgdGhpcy51cGRhdGVQbGFpblRleHRUZXh0YXJlYShkaXZpc2lvbkhUTUxOT2RlLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IG11bHRpcGxpY2l0eSA9IHRvcG1vc3RIVE1MTm9kZS5nZXRNdWx0aXBsaWNpdHkoKSxcbiAgICAgICAgICBsZW5ndGggPSBtdWx0aXBsaWNpdHksICAvLy9cbiAgICAgICAgICBwYXJzZVRyZWUgPSBkaXZpc2lvbkhUTUxOT2RlLmFzUGFyc2VUcmVlKCksXG4gICAgICAgICAgaHRtbFBhcnNlVHJlZSA9IHBhcnNlVHJlZTsgLy8vXG5cbiAgICB0aGlzLnVwZGF0ZVBhZ2VCdXR0b25zRGl2KGxlbmd0aCwgaW5kZXgpO1xuXG4gICAgdGhpcy51cGRhdGVIVE1MUGFyc2VUcmVlVGV4dGFyZWEoaHRtbFBhcnNlVHJlZSk7XG4gIH1cblxuICB1cGRhdGVNYXJrZG93bigpIHtcbiAgICBjb25zdCBtYXJrZG93biA9IHRoaXMuZ2V0TWFya2Rvd24oKSxcbiAgICAgICAgICBsZXhlciA9IG1hcmtkb3duTGV4ZXIsICAvLy9cbiAgICAgICAgICBwYXJzZXIgPSAgbWFya2Rvd25QYXJzZXIsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBtYXJrZG93biwgLy8vXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMucmVzZXRUb2tlbnMoKTtcblxuICAgICAgdGhpcy5yZXNldFRvcG1vc3RNYXJrZG93bk5vZGUoKTtcblxuICAgICAgdGhpcy5jbGVhck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEoKTtcblxuICAgICAgdGhpcy5jbGVhclBhZ2VCdXR0b25zRGl2KCk7XG5cbiAgICAgIHRoaXMuY2xlYXJQYWdlKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0b3Btb3N0TWFya2Rvd25Ob2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgIHRva2VucyxcbiAgICAgICAgICAgIGltcG9ydGVyLFxuICAgICAgICAgICAgbm9kZUZyb21Ub2tlbnMsXG4gICAgICAgICAgICB0b2tlbnNGcm9tQ29udGVudFxuICAgICAgICAgIH07XG5cbiAgICB0b3Btb3N0TWFya2Rvd25Ob2RlLnJlc29sdmUoY29udGV4dCk7XG5cbiAgICBjb25zdCBwYXJzZVRyZWUgPSB0b3Btb3N0TWFya2Rvd25Ob2RlLmFzUGFyc2VUcmVlKHRva2VucyksXG4gICAgICAgICAgbWFya2Rvd25QYXJzZVRyZWUgPSBwYXJzZVRyZWU7IC8vL1xuXG4gICAgdGhpcy5zZXRUb2tlbnModG9rZW5zKTtcblxuICAgIHRoaXMuc2V0VG9wbW9zdE1hcmtkb3duTm9kZSh0b3Btb3N0TWFya2Rvd25Ob2RlKTtcblxuICAgIHRoaXMudXBkYXRlTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYShtYXJrZG93blBhcnNlVHJlZSk7XG4gIH1cblxuICB1cGRhdGVNYXJrZG93blN0eWxlKCkge1xuICAgIGNvbnN0IHsgbWFya2Rvd25TdHlsZUVsZW1lbnQgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBtYXJrZG93blN0eWxlID0gdGhpcy5nZXRNYXJrZG93blN0eWxlKCksXG4gICAgICAgICAgY3NzID0gbWFya2Rvd25TdHlsZUVsZW1lbnQudXBkYXRlKG1hcmtkb3duU3R5bGUpO1xuXG4gICAgdGhpcy5zZXRDU1MoY3NzKTtcblxuICAgIGNvbnN0IGxleGVyID0gbWFya2Rvd25TdHlsZUxleGVyLCAvLy9cbiAgICAgICAgICBwYXJzZXIgPSBtYXJrZG93blN0eWxlUGFyc2VyLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gbWFya2Rvd25TdHlsZSwgIC8vL1xuICAgICAgICAgIHRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIHN0YXJ0UnVsZSA9IHBhcnNlci5nZXRTdGFydFJ1bGUoKSxcbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucywgc3RhcnRSdWxlKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG5cbiAgICAgIHRoaXMudXBkYXRlTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhKHBhcnNlVHJlZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xlYXJNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgICB9XG4gIH1cblxuICBtYXJrZG93blN0eWxlKCkge1xuICAgIHRoaXMuaGlkZU1hcmtkb3duQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93TWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdigpO1xuICB9XG5cbiAgcGxhaW5UZXh0KCkge1xuICAgIHRoaXMuaGlkZUNTU0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZUhUTUxDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQcmV2aWV3Q29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93UGxhaW5UZXh0Q29udGFpbmVyRGl2KCk7XG4gIH1cblxuICBtYXJrZG93bigpIHtcbiAgICB0aGlzLnNob3dNYXJrZG93bkNvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZU1hcmtkb3duU3R5bGVDb250YWluZXJEaXYoKTtcbiAgfVxuXG4gIHByZXZpZXcoKSB7XG4gICAgdGhpcy5oaWRlQ1NTQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlSFRNTENvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuc2hvd1ByZXZpZXdDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQbGFpblRleHRDb250YWluZXJEaXYoKTtcbiAgfVxuXG4gIGh0bWwoKSB7XG4gICAgdGhpcy5oaWRlQ1NTQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93SFRNTENvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVByZXZpZXdDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQbGFpblRleHRDb250YWluZXJEaXYoKTtcbiAgfVxuXG4gIGNzcygpIHtcbiAgICB0aGlzLnNob3dDU1NDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVIVE1MQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlUHJldmlld0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVBsYWluVGV4dENvbnRhaW5lckRpdigpO1xuICB9XG5cbiAgcmVzZXRUb2tlbnMoKSB7XG4gICAgY29uc3QgdG9rZW5zID0gbnVsbDtcblxuICAgIHRoaXMuc2V0VG9rZW5zKHRva2Vucyk7XG4gIH1cblxuICByZXNldFRvcG1vc3RNYXJrZG93bk5vZGUoKSB7XG4gICAgY29uc3QgdG9wbW9zdE1hcmtkb3duTm9kZSA9IG51bGw7XG5cbiAgICB0aGlzLnNldFRvcG1vc3RNYXJrZG93bk5vZGUodG9wbW9zdE1hcmtkb3duTm9kZSk7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgY29uc3QgeyB0b2tlbnMgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBnZXRUb3Btb3N0TWFya2Rvd25Ob2RlKCkge1xuICAgIGNvbnN0IHsgdG9wbW9zdE1hcmtkb3duTm9kZSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHRvcG1vc3RNYXJrZG93bk5vZGU7XG4gIH1cblxuICBzZXRUb2tlbnModG9rZW5zKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICB0b2tlbnNcbiAgICB9KTtcbiAgfVxuXG4gIHNldFRvcG1vc3RNYXJrZG93bk5vZGUodG9wbW9zdE1hcmtkb3duTm9kZSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgdG9wbW9zdE1hcmtkb3duTm9kZVxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IHRva2VucyA9IG51bGwsXG4gICAgICAgICAgdG9wbW9zdE1hcmtkb3duTm9kZSA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRva2VucyxcbiAgICAgIHRvcG1vc3RNYXJrZG93bk5vZGVcbiAgICB9KTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxMZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPExlZnRUYWJCdXR0b25zRGl2IG9uQ3VzdG9tTWFya2Rvd249e3RoaXMubWFya2Rvd25DdXN0b21IYW5kbGVyfSBvbkN1c3RvbU1hcmtkb3duU3R5bGU9e3RoaXMubWFya2Rvd25TdHlsZUN1c3RvbUhhbmRsZXJ9IC8+XG4gICAgICAgICAgPE1hcmtkb3duQ29udGFpbmVyRGl2IG9uQ3VzdG9tS2V5VXA9e3RoaXMua2V5VXBDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICAgIDxNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2IG9uQ3VzdG9tS2V5VXA9e3RoaXMua2V5VXBDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICA8L0xlZnRTaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFJpZ2h0VGFiQnV0dG9uc0RpdiBvbkN1c3RvbUNTUz17dGhpcy5jc3NDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbUhUTUw9e3RoaXMuaHRtbEN1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tUHJldmlldz17dGhpcy5wcmV2aWV3Q3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DdXN0b21QbGFpblRleHQ9e3RoaXMucGxhaW5UZXh0Q3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UGFnZUJ1dHRvbnNEaXYgb25DdXN0b21QYWdlVXBkYXRlPXt0aGlzLnBhZ2VVcGRhdGVDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICAgICAgPENTU0NvbnRhaW5lckRpdi8+XG4gICAgICAgICAgICA8SFRNTENvbnRhaW5lckRpdi8+XG4gICAgICAgICAgICA8UHJldmlld0NvbnRhaW5lckRpdi8+XG4gICAgICAgICAgICA8UGxhaW5UZXh0Q29udGFpbmVyRGl2Lz5cbiAgICAgICAgICAgIDxIVE1MUGFyc2VUcmVlVGV4dGFyZWEvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG5cbiAgICApO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG5cbiAgICBjb25zdCB7IGluaXRpYWxNYXJrZG93biwgaW5pdGlhbE1hcmtkb3duU3R5bGUgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgbWFya2Rvd25TdHlsZSA9IGluaXRpYWxNYXJrZG93blN0eWxlLCAvLy9cbiAgICAgICAgICBtYXJrZG93biA9IGluaXRpYWxNYXJrZG93bjsgLy8vXG5cbiAgICB0aGlzLnNldE1hcmtkb3duKG1hcmtkb3duKTtcblxuICAgIHRoaXMuc2V0TWFya2Rvd25TdHlsZShtYXJrZG93blN0eWxlKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICB0aGlzLmNzcygpO1xuICB9XG5cbiAgc3RhdGljIGluaXRpYWxNYXJrZG93biA9IGluaXRpYWxNYXJrZG93bjtcblxuICBzdGF0aWMgaW5pdGlhbE1hcmtkb3duU3R5bGUgPSBgd2lkdGg6IDEwMCU7XG5oZWlnaHQ6IDEwMCU7XG5mb250LXNpemU6IDJyZW07ICBcblxuYmxvY2tMaXN0aW5nIHtcbiAgY29sb3VyOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgYmFja2dyb3VuZC1jb2xvdXI6IGJsYWNrO1xufVxuYDtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwibWFya2Rvd25TdHlsZUVsZW1lbnRcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxcmVtO1xuICBcbmA7XG5cbmZ1bmN0aW9uIHRva2Vuc0Zyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgY29uc3QgdG9rZW5zID0gbWFya2Rvd25MZXhlci50b2tlbmlzZShjb250ZW50KTtcblxuICByZXR1cm4gdG9rZW5zO1xufVxuXG5mdW5jdGlvbiBub2RlRnJvbVRva2Vucyh0b2tlbnMsIHN0YXJ0UnVsZU5hbWUgPSBudWxsKSB7XG4gIGNvbnN0IHJ1bGVNYXAgPSBtYXJrZG93blBhcnNlci5nZXRSdWxlTWFwKCksXG4gICAgICAgIHN0YXJ0UnVsZSA9IChzdGFydFJ1bGVOYW1lICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgcnVsZU1hcFtzdGFydFJ1bGVOYW1lXSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZG93blBhcnNlci5nZXRTdGFydFJ1bGUoKSxcbiAgICAgICAgbm9kZSA9IG1hcmtkb3duUGFyc2VyLnBhcnNlKHRva2Vucywgc3RhcnRSdWxlKTtcblxuICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gcGF0aFRvVVJMKHBhdGgpIHtcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vc3RhdGljLmRqYWxiYXQuY29tLyR7cGF0aH1gO1xuXG4gIHJldHVybiB1cmw7XG59XG4iXSwibmFtZXMiOlsibWFya2Rvd25MZXhlciIsIk1hcmtkb3duTGV4ZXIiLCJmcm9tTm90aGluZyIsIm1hcmtkb3duUGFyc2VyIiwiTWFya2Rvd25QYXJzZXIiLCJtYXJrZG93blN0eWxlTGV4ZXIiLCJNYXJrZG93blN0eWxlTGV4ZXIiLCJtYXJrZG93blN0eWxlUGFyc2VyIiwiTWFya2Rvd25TdHlsZVBhcnNlciIsIlZpZXciLCJtYXJrZG93blN0eWxlQ3VzdG9tSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsIm1hcmtkb3duU3R5bGUiLCJwYWdlVXBkYXRlQ3VzdG9tSGFuZGxlciIsImluZGV4IiwiY2xlYXJQYWdlIiwidXBkYXRlUGFnZSIsInBsYWluVGV4dEN1c3RvbUhhbmRsZXIiLCJwbGFpblRleHQiLCJtYXJrZG93bkN1c3RvbUhhbmRsZXIiLCJtYXJrZG93biIsInByZXZpZXdDdXN0b21IYW5kbGVyIiwicHJldmlldyIsImtleVVwQ3VzdG9tSGFuZGxlciIsInVwZGF0ZSIsImh0bWxDdXN0b21IYW5kbGVyIiwiaHRtbCIsImNzc0N1c3RvbUhhbmRsZXIiLCJjc3MiLCJ1cGRhdGVNYXJrZG93blN0eWxlIiwidXBkYXRlTWFya2Rvd24iLCJjbGVhclhNUCIsImNsZWFyUHJldmlld0RpdiIsImNsZWFySFRNTFBhcnNlVHJlZVRleHRhcmVhIiwidG9rZW5zIiwiZ2V0VG9rZW5zIiwidG9wbW9zdE1hcmtkb3duTm9kZSIsImdldFRvcG1vc3RNYXJrZG93bk5vZGUiLCJ0b3Btb3N0SFRNTE5vZGUiLCJodG1sTm9kZUZyb21NYXJrZG93bk5vZGUiLCJkaXZpc2lvbkhUTUxOT2RlIiwiZ2V0RGl2aXNpb25IVE1MTm9kZUF0IiwiY29udGV4dCIsInBhdGhUb1VSTCIsInVwZGF0ZVhNUCIsInVwZGF0ZVByZXZpZXdEaXYiLCJ1cGRhdGVQbGFpblRleHRUZXh0YXJlYSIsIm11bHRpcGxpY2l0eSIsImdldE11bHRpcGxpY2l0eSIsImxlbmd0aCIsInBhcnNlVHJlZSIsImFzUGFyc2VUcmVlIiwiaHRtbFBhcnNlVHJlZSIsInVwZGF0ZVBhZ2VCdXR0b25zRGl2IiwidXBkYXRlSFRNTFBhcnNlVHJlZVRleHRhcmVhIiwiZ2V0TWFya2Rvd24iLCJsZXhlciIsInBhcnNlciIsImNvbnRlbnQiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsInJlc2V0VG9rZW5zIiwicmVzZXRUb3Btb3N0TWFya2Rvd25Ob2RlIiwiY2xlYXJNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhIiwiY2xlYXJQYWdlQnV0dG9uc0RpdiIsImltcG9ydGVyIiwibm9kZUZyb21Ub2tlbnMiLCJ0b2tlbnNGcm9tQ29udGVudCIsInJlc29sdmUiLCJtYXJrZG93blBhcnNlVHJlZSIsInNldFRva2VucyIsInNldFRvcG1vc3RNYXJrZG93bk5vZGUiLCJ1cGRhdGVNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhIiwibWFya2Rvd25TdHlsZUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwiZ2V0TWFya2Rvd25TdHlsZSIsInNldENTUyIsInN0YXJ0UnVsZSIsImdldFN0YXJ0UnVsZSIsInVwZGF0ZU1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSIsImNsZWFyTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhIiwiaGlkZU1hcmtkb3duQ29udGFpbmVyRGl2Iiwic2hvd01hcmtkb3duU3R5bGVDb250YWluZXJEaXYiLCJoaWRlQ1NTQ29udGFpbmVyRGl2IiwiaGlkZUhUTUxDb250YWluZXJEaXYiLCJoaWRlUHJldmlld0NvbnRhaW5lckRpdiIsInNob3dQbGFpblRleHRDb250YWluZXJEaXYiLCJzaG93TWFya2Rvd25Db250YWluZXJEaXYiLCJoaWRlTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiIsInNob3dQcmV2aWV3Q29udGFpbmVyRGl2IiwiaGlkZVBsYWluVGV4dENvbnRhaW5lckRpdiIsInNob3dIVE1MQ29udGFpbmVyRGl2Iiwic2hvd0NTU0NvbnRhaW5lckRpdiIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImNoaWxkRWxlbWVudHMiLCJDb2x1bW5zRGl2IiwiTGVmdFNpemVhYmxlRGl2IiwiTGVmdFRhYkJ1dHRvbnNEaXYiLCJvbkN1c3RvbU1hcmtkb3duIiwib25DdXN0b21NYXJrZG93blN0eWxlIiwiTWFya2Rvd25Db250YWluZXJEaXYiLCJvbkN1c3RvbUtleVVwIiwiTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJSb3dzRGl2IiwiUmlnaHRUYWJCdXR0b25zRGl2Iiwib25DdXN0b21DU1MiLCJvbkN1c3RvbUhUTUwiLCJvbkN1c3RvbVByZXZpZXciLCJvbkN1c3RvbVBsYWluVGV4dCIsIlBhZ2VCdXR0b25zRGl2Iiwib25DdXN0b21QYWdlVXBkYXRlIiwiQ1NTQ29udGFpbmVyRGl2IiwiSFRNTENvbnRhaW5lckRpdiIsIlByZXZpZXdDb250YWluZXJEaXYiLCJQbGFpblRleHRDb250YWluZXJEaXYiLCJIVE1MUGFyc2VUcmVlVGV4dGFyZWEiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImNvbnN0cnVjdG9yIiwiaW5pdGlhbE1hcmtkb3duIiwiaW5pdGlhbE1hcmtkb3duU3R5bGUiLCJzZXRNYXJrZG93biIsInNldE1hcmtkb3duU3R5bGUiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJzdGFydFJ1bGVOYW1lIiwicnVsZU1hcCIsImdldFJ1bGVNYXAiLCJwYXRoIiwidXJsIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFtVUE7OztlQUFBOzs7b0VBalVzQjtvQkFFRTswQkFDNEM7cUJBQ21CO2tF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