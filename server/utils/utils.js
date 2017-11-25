var utils = {};

utils.query = function(type, nat){
    if(type && nat){
        return "https://maps.googleapis.com/maps/api/place/textsearch/json?query="+type+"%20"+nat+"%20torrevieja"+"&key=AIzaSyDVfVzVRs7sRO9QpzX2bCSdWG3ODwplQFw"
    } else{
        next("Err");
    }
};



module.exports = utils;