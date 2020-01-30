function convertValue(dollar){
    let rupiah = 15150
    dollar*=rupiah
    let temp=dollar.toString()
    let count=0
    let output=''
    for (let i = temp.length-1; i >=0 ; i--) {
       if (count==3){
           count=0
           output+=','
       }
       count++
       output+=temp[i]
    }
    return 'Rp. '+output.split('').reverse().join('')
}

// console.log(convertValue(25))


module.exports=convertValue