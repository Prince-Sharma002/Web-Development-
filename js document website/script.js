// drop down
const barbutton = document.querySelector(" .barButton");
const dropMenu = document.querySelector(" .dropDown");
const crossButton = document.querySelector(" .crossbutton");

barbutton.addEventListener("click" , function(){
	dropMenu.style.display = "block";
	dropMenu.style.textAlign = "center";
});

crossButton.addEventListener("click" , function(){
	dropMenu.style.display = "none";
});


// first transition
// header div

const headerHeading = document.querySelector(" .headerHeading");
const headerPara = document.querySelector(" .headerPara");
const docButton = document.querySelector(" .docButton");

const observer = new IntersectionObserver( entries => {

	console.log(entries);
	entries.forEach( entry => {


		if( entry.isIntersecting ){

			setTimeout(() => {
				headerHeading.classList.add("appear");
			}, 500);
			setTimeout(() => {
				headerPara.classList.add("appear");
			}, 1000);
			setTimeout(() => {
				docButton.classList.add("appear");
			}, 1200);
		}
	} )

});

const headerInnnerContent = document.querySelector(" .headerInnerContent");
observer.observe(headerInnnerContent);


// second transition
// detail div 1
const navbar = document.querySelector(".navbar");

const detailObserver = new IntersectionObserver( entries =>{
	console.log(entries);

	entries.forEach(entry =>{
		if(entry.isIntersecting){
			entry.target.classList.add("leftTransition");;
		}
		else{
			entry.target.classList.remove("leftTransition");
		}
	});

} , { threshold: 0.8 } );

const detail = document.querySelector(" .detail");
detailObserver.observe(detail);


// detail div 2
const detail2Observer = new IntersectionObserver( entries =>{
	console.log(entries);

	entries.forEach(entry =>{
		if(entry.isIntersecting){
			entry.target.classList.add("rightTransition");
		}
		else{
			entry.target.classList.remove("rightTransition");
		}
	});

} , { threshold: 0.8 } );

const detail2 = document.querySelector(" .detail2");
detail2Observer.observe(detail2);


// stats

// use root margin

const dataDiv = document.querySelectorAll(" .dataDiv");
const dataHeading = document.querySelectorAll( " .dataHeading");
const barDiv= document.querySelectorAll(" .barDiv");

const statsObserve = new IntersectionObserver( entries =>{

	entries.forEach( entry =>{

		if(entry.isIntersecting){
			dataHeading.forEach( heading =>{
				heading.style.opacity = "1";
			});

			barDiv.forEach( bar =>{
				
				bar.style.left = "80%";
			});
		}

	});

} , { threshold : 1 , rootMargin : "-30px"}  );

dataDiv.forEach( (ele) => statsObserve.observe( ele ));



// js in development
// left part

const developcontent = document.querySelector(" .developcontent");
const leftContent = document.querySelectorAll(" .leftContent");
const rightContent = document.querySelectorAll(" .rightContent");

const developObserver = new IntersectionObserver( entries => {

	console.log("this is " , entries);
	entries.forEach( entry => {
		if(entry.isIntersecting){
			
			leftContent.forEach( content => {
				content.style.opacity = "1";
				content.style.transform = "translateX(10px);"
			});
			rightContent.forEach( content =>{
				content.style.opacity = "1";
				content.classList.add("rightTransition");
			});
			
		}
	});

} , {threshold : 0.7 , rootMargin : "-10px"} );


developObserver.observe( developcontent );
