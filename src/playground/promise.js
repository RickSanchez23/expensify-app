const promise = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve('Hello World!')

    },2000 );
} );

promise.then(res => {
    console.log("Response" , res)
}) .catch(err => {})
