function Alert(item) {
  var _item = item;
  this.refresh = function() {
    this.description = _item.description;
    this.location = _item.location;
    this.timestamp = moment(_item.timestamp).fromNow();
    this.diff = moment().diff(moment(_item.timestamp), 'minute');
  };

  this.refresh(item);
}
