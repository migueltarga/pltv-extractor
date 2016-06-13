'use strict';
module.exports = (data) =>{
  return new Promise((resolve, reject) => {
    require('jsdom').env({
      html: require('fs').readFileSync('./thevidnet.txt'),
      features: {
        FetchExternalResources: ['script'],
        ProcessExternalResources: ['script'],
        SkipExternalResources: false
      },
      done:function(err, window){
        if(err || !window.vurl2) return reject({});
        resolve({url:window.vurl2});
        window.close();
      }
    });
  });
}
