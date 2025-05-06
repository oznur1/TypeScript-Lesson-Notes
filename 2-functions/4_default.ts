/*
 ! Default Param (Varsayılan Parametre)
 * Bazen opsiyonel parametreyi göndermediğimiz zaman değerlerin undefined olmasını istemeyiz bunun yerine varsayılan bir değere sahip olması istenebilir.
 
*/

// Örnek
function selamVer(isim: string = "Dünya") {
    console.log(`Merhaba ${isim}`);
  }
  
  selamVer("Ali");
  selamVer();

