var TimeComponent = React.createClass({
  render: function () {
    return (
      <p>The current time is: {this.props.currentTime.toTimeString()}</p>
    );
  }
});

setInterval(function () {
  React.render(<TimeComponent currentTime={new Date()} />, document.body),
  500
});
