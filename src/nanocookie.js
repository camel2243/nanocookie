module.exports = {
  set: function(name, value, exdays) {
    var date = new Date();
    var expires;

    // default expire 1 day
    exdays |= 1;
    date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
    expires = "expires="+ date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  },
  get: function(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));

    if (match)  {
      return match[2];
    }
  },
  delete: function(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';
  }
};