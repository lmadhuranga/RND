chrome.runtime.onMessageExternal.addListener((message, sender, callback) => {
  console.log('message -------> ',message);
  console.log('sender -------> ',sender);
  callback({"msg":'hello from chrome '}); 
});
