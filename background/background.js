chrome.webRequest.onBeforeSendHeaders.addListener(function(){
  console.log('beforeSendHeaders', arguments);
}/*, filter, opt_extraInfoSpec*/);