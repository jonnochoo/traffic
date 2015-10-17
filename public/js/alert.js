function Alert(item) {
  this.description = item.description;
  this.location = item.location;
  this.timestamp = moment(item.timestamp).fromNow();
  this.diff = moment().diff(moment(item.timestamp), 'minute');
}
