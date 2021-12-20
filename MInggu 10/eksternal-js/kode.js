alert("Hello, ini adalah program JS eksternal!");
var ulangi = confirm("Apakah anda mau mengulang?");
var counter = 0;
while(ulangi){
 counter++;
 ulangi = confirm("Apakah anda mau mengulang?");
}
document.write("Perulangan sudah dilakuakn sebanyak "+ counter +" kali");
for(let i = 0; i < 10; i++){
    document.write("<p>Perulangan ke-" + i + "</p>")
   }