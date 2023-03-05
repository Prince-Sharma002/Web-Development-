
const observe = new IntersectionObserver( (entries) => {

	entries.forEach( (item) => {

		console.log(item);

		//  if oberver interacting with section item then add appear class and if not interacting then remove clss appear
		//  as you can see there is infinte loop 
		if( item.isIntersecting ){
			item.target.classList.add("appear");
		}
		// infinite amimation is by using else condition
		else{
			item.target.classList.remove("appear");
		}

	});

});



// select animsec elements
// here we are selecting all animsec class section
const animsecEle = document.querySelectorAll(" .animSec");


// passing array of elements having animsec class 
animsecEle.forEach( (ele) =>  observe.observe(ele));
