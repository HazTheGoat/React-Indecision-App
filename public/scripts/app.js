"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this));

        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleRemoveAll = _this.handleRemoveAll.bind(_this);
        _this.handleRemoveOption = _this.handleRemoveOption.bind(_this);

        _this.state = {
            title: "Indecision App",
            subTitle: "Put your life in the hands of a computer",
            options: props.options
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "handleRemoveOption",
        value: function handleRemoveOption(e) {
            this.setState(function (prevState) {
                return { options: prevState.options.filter(function (option, i) {
                        return i != e;
                    }) };
            });
        }
    }, {
        key: "handleRemoveAll",
        value: function handleRemoveAll() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: "handlePick",
        value: function handlePick() {
            var pick = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[pick]);
        }
    }, {
        key: "handleAddOption",
        value: function handleAddOption(option) {
            if (!option) {
                return 'Enter a valid value to add';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This value already exists';
            } else {
                this.setState(function (prevState) {
                    return { options: prevState.options.concat([option]) };
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { subTitle: this.state.subTitle }),
                React.createElement(Action, { handlePick: this.handlePick, hasOptions: this.state.options.length > 0 ? true : false }),
                React.createElement(Options, { handleRemoveOption: this.handleRemoveOption, handleRemoveAll: this.handleRemoveAll, options: this.state.options }),
                React.createElement(AddOption, { handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: []
};

var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        props.subTitle && React.createElement(
            "h2",
            null,
            props.subTitle
        )
    );
};

Header.defaultProps = {
    title: "Indecision App"
};

var Action = function Action(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { disabled: !props.hasOptions, onClick: props.handlePick },
            "What should i do?"
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: props.handleRemoveAll },
            "Remove All"
        ),
        props.options.map(function (option, i) {
            return React.createElement(Option, { key: i, handleRemoveOption: props.handleRemoveOption, index: i, option: option });
        })
    );
};

var Option = function Option(props) {
    return React.createElement(
        "div",
        null,
        props.option,
        React.createElement(
            "button",
            { onClick: function onClick() {
                    props.handleRemoveOption(props.index);
                } },
            "remove"
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption() {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);

        _this2.state = {
            errorMessage: ''
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: "handleAddOption",
        value: function handleAddOption(e) {
            e.preventDefault();

            var option = e.target.elements.option.value.trim();

            var errorMessage = this.props.handleAddOption(option);
            this.setState(function () {
                return { errorMessage: errorMessage };
            });
            e.target.reset();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.state.errorMessage && React.createElement(
                    "p",
                    null,
                    this.state.errorMessage
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.handleAddOption },
                    React.createElement("input", { type: "text", name: "option" }),
                    React.createElement(
                        "button",
                        { type: "submit" },
                        "Add option"
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
