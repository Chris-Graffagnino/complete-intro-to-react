/* global React ReactDOM */

// import React from 'react'
// import { render } from 'react-dom'
// import { BrowserRouter } from 'react-router'
// import App from './App'

var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render: function () {
    return (
      div(null,
        h1({ style: { color: this.props.color } }, this.props.title)
      )
    )
  }
})

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
        MyTitleFactory({title: 'props are the best', color: 'darkvioletred'}),
        MyTitleFactory({title: 'semicolons are the worst', color: 'mediumaquamarine'}),
        MyTitleFactory({title: 'factories are alright', color: 'rebeccapurple'}),
        MyTitleFactory({title: 'parents are just okay', color: 'tomato'})
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
// render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'))
