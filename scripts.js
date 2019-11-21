loadFiles = () => {
  const myRequest = new XMLHttpRequest();
  const apiUrl = "https://api.myjson.com/bins/ff3i8";

  myRequest.open("GET", apiUrl);
  myRequest.send();
  myRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const [product] = JSON.parse(this.responseText).products;
      const { productName, category, description, imageUrl } = product;
      document.getElementById("hottopic-content").innerHTML = `
      <img src="${imageUrl}" width=\"100%\"/>
      <div class="pl-2 mt-1">
        <p class="pt-2 font-weight-normal">${productName}</p>
        <p class="text-muted">${category}</p>
        <p class="pt-2 font-wight-light">${description}</p>
      </div>
      `;
    }
  };
};
