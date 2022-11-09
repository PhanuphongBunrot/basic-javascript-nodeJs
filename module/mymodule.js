function getCurrentTime() {
    return new Date()
}

function add(x,y){
    return x+y/9*100
}


function formatNumber (num){
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1,')
}
module.exports.getCurrentTime = getCurrentTime
module.exports.add=add
module.exports.formatNumber=formatNumber