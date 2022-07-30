const btn= document.querySelector("button")
const p= document.querySelector("p")

const func= async()=>{
	const res= await fetch("https://popcornlovee.herokuapp.com/api")
	const data= await res.json()
	const rand=Math.floor(Math.random()*data.length)
	p.innerHTML=`"${data[rand]}"`
	console.log(data[rand])
}
func()
btn.addEventListener("click",func)

//look for a way to generate elemnts randomly
// use random method and length of the array
//click event