
const config = require('./config/config.json')
var axios = require('axios').default;

var token;
axios.defaults.headers = {Authorization : 'Bearer '+ token}
axios.defaults.baseURL = config.base;

//console.log(axios);
class main{
    constructor(key){
this.key = key;
axios.defaults.headers = {Authorization : 'Bearer '+ key}
    }
 
async getUserByName(name){

    return await axios.get("/users/by/username/"+name);

    }

    async getUserById(id){
        return await axios.get("/users/"+id);
    }

    async getUserTweetsByName(name){
        const resp = await this.getUserByName(name);       
        const {id} = resp.data.data;
        console.log(id);
        return await axios.get("/users/"+id+"/tweets");
    }
    async getUserFollowersByName(name){
        const resp = await this.getUserByName(name);       
        const {id} = resp.data.data;
        console.log(id);
        return await axios.get("/users/"+id+"/followers");
    }
    async getUserBlockedByName(name){
        const resp = await this.getUserByName(name);       
        const {id} = resp.data.data;
        console.log(id);
        return await axios.get("/users/"+id+"/blocking");
    }

    async createTweet(text){
        return await axios.post("/tweets",{text : text });
    }


}

module.exports = {token : token,load : main};

// const newa = new main();
// newa.createTweet('hellow').then(res => console.log(res.data))



