var planeCost = 500;
var hotelCost = 250;
var museumCost = 120;
var USD_UZS = 9433.34;
var EURO_UZS = 10354.03;
var currentMoney = prompt("Hozirgi Pulingingizni Kiriting: ");

planeCost = Math.round(planeCost * USD_UZS);
hotelCost = Math.round(hotelCost * USD_UZS);
museumCost = Math.round(museumCost * EURO_UZS);

var totaCost = planeCost + hotelCost + museumCost;

if ((planeCost + hotelCost + museumCost) <= currentMoney) {
    console.log("Oq yo'l, Alisher!");
}else {
    console.log("Alisher, ozgina sabr qilish kerak bo'lar ekan.");
}

alert(`${"Umumiy Harajatlar: " + totaCost} 
${"Senga quyidagi mablag' yetmayapti: " + (totaCost - currentMoney)}`);