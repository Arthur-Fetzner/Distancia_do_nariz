function dist(de,x,y){
    let dist_eyes = de
    let z = 180-x-y
    let a = dist_eyes/Math.sin(z*Math.PI/180)*Math.sin(y*Math.PI/180)
    let b = dist_eyes/Math.sin(z*Math.PI/180)*Math.sin(x*Math.PI/180)
    let m = (Math.pow(b,2)-Math.pow(a,2)-Math.pow(dist_eyes,2))/(-2*dist_eyes)
    let h = Math.sqrt(Math.pow(a,2)-Math.pow(m,2))
    let o = (dist_eyes)/2-m
    let d = 0

    if (o<0){
        d = Math.sqrt(Math.pow(h,2)+Math.pow((o*(-1)),2))
    }else if(o>0){
        d =  Math.sqrt(Math.pow(h,2)+Math.pow(o,2))
    }else{
        d = h
    }

    let result = document.getElementById('result')
    result.innerHTML = `A distância do objeto até o nariz é de: ${Math.floor(d*100)/100}cm`
    result.style.margin = "15px 0"
    result.style.textAlign = "center"
    result.style.color = "rgb(175, 121, 22)"
}

function verify(){
    let de = document.getElementById('de').value
    let x = document.getElementById('x').value
    let y = document.getElementById('y').value
    if(de !== '' || x !== '' || y !== ''){
        dist(de,x,y)
    }else{
        alert("insira valores válidos nos campos!")
    }
}

document.addEventListener("keydown", e=>{
    if(e.keyCode == 13){
        verify(0)
    }
})