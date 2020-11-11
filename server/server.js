const path = require('path');
let express = require('express')
let app = express();
const publicPath = path.join(__dirname , '..' , 'public' );
const port = process.env.PORT ||  3000;

app.use(express.static(publicPath));

app.get('*' , (req ,res) => {
    res.sendFile(path.join(publicPath,'index.html'));
})

const server =app.listen(port ,"127.0.0.1" , () => {

    console.log('Express server http://' + server.address().address+":" +server.address().port);


});
