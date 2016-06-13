'use strict';
module.exports = (data) =>{
  return new Promise((resolve, reject) => {
    require('jsdom').env({
      html: data,
      features: {
        FetchExternalResources: ["script"],
        ProcessExternalResources: ["script"],
        SkipExternalResources: false
      },
      done:function(err, window){
        if(err || !window.vurl2){
          reject(false);
        }else{
          resolve({url:window.vurl2});
        }
        window.close();
      }
    });
  });
}
