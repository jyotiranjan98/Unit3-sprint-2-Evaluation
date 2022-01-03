async function theDish(){

    try{
        var res =await fetch("www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
        var webdata =await res.json()
        console.log(webdata)
    }
    catch(error){
        console.log(error)
    }
}

function getData(food){
    var body = document.querySelector(".foods");
    body.innerHTML= null

    food.forEach(function(elem){
    var div =document.createElement("div")
    var div1 =document.createElement("div")
    var fimage =document.createElement("img")
    var fname =document.createElement("h2")
    let fprice =document.createElement("p")
    var button =document.createElement("button")
    
    fimage.src=elem.strMealThumb
    fprice.textContent="Price:" (Math.round(Math.random()*500+100))
    fname.textContent=elem.strMeal
    button.textContent="Add To Cart"
    
    div.append(fimage)
    div1.append(fname,fprice,button)
    body.append(div,div1)
    })
}