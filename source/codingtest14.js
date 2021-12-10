
    function cloneObject(obj) {
        const std = {};

       const keyList = Object.keys(obj);
       for (let i = 0; i <= keyList.length; ++i) {
            const key = keyList[i];
             std[key] = obj[key];
       }
        return std;
    }
    console.log(cloneObject({name: 'Alice', math: 9}));

    function cloneObject(obj) {
        return newKey = obj[keyList];
    }
    console.log(cloneObject({name: 'Alice', math: 9}));

