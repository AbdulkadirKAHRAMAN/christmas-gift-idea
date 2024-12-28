let giftIdeas=[];
if(localStorage.getItem("giftIdeas"))
    giftIdeas=JSON.parse(localStorage.getItem("giftIdeas"));

function isAccepted(msg, ...keys){
    const value=prompt(msg);
    if(keys.includes(value)){
        return value;
    }else{
        alert("hatalı tuşlama yaptınız");
        return isAccepted(masg , ...keys);
    }
}
function addGift(){
    const giftName=prompt("Hediye fikrinizi giriniz.");
    giftIdeas.push(giftName);
    localStorage.setItem("giftIdeas", JSON.stringify(giftIdeas));
}

function giftListing(){
    const giftList = giftIdeas.map((giftIdeas , index)=> `${index+1}. ${giftIdeas}`).join("\n");
    alert(giftList);

}


function mainMenu(){
    const value=isAccepted("Yapmak istediğiniz işlemi seciniz:\n1-Yılbası Hediye Fikri Ekleyiniz:\n2-Hediye Fikirlerini Listeleyiniz:\n3-Çıkış","1","2","3");
    if(value==1){
        return addGift();

    }else if(value==2){
        return giftListing();
    }
}

mainMenu();
