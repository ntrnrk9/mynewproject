function showProducts()
{
	alert("showproducts");
	var cdiv=document.createElement("div");cdiv.className=cdiv.className+"col-sm-4"+" col-lg-4"+" col-md-4";
	var tdiv=document.createElement("div");tdiv.classList.add("thumbnail");
	var img=document.createElement("img");img.src="http://placehold.it/320x150";
	var cpdiv=document.createElement("div");cpdiv.classList.add("caption");

	cdiv.appendChild(tdiv);
	tdiv.appendChild(img);
	tdiv.appendChild(cpdiv);
	var ph4=document.createElement("h4");ph4.classList.add("pull-right");ph4.textContent="12";
	cpdiv.appendChild(ph4);
	var ih4=document.createElement("h4");ih4.textContent="product";
	cpdiv.appendChild(ih4);
	var para=document.createElement("p");
	var node = document.createTextNode("This is new.");
	para.appendChild(node);
	cpdiv.appendChild(para);
	var rdiv=document.createElement("div");rdiv.classList.add("ratings");
	var rpara=document.createElement("p");rpara.classList.add("pull-right");rpara.textContent="10 reviews";	 
	
	rdiv.appendChild(rpara);
	tdiv.appendChild(rdiv);
	var rapara=document.createElement("p");
	var span1=document.createElement("span");span1.className=span1.className+"glyphicon"+" glyphicon-star";
	rapara.appendChild(span1);
	rdiv.appendChild(rapara);

	var element = document.getElementById("items").appendChild(cdiv);

}
