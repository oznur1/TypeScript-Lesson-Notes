/*
 ! Array Type
 * Typescript'de dizilerin tipini tanımlatken sadece bu değişken bir dizi olucak demek yerine bu değişkenin string değerlerden oluşan bir dizi olucak diyoruz.
 * Sonuç olarak dizi olmasını gerektiğinden dizideki elemanların veri tipini söylemeliyiz.
*/


// Örnek -1
const users:string[]=["ali","ayşe","mehmet"];
 users.push("mahmut");

 //users.push(true):! hata (diziye string dışında baelon eklenemez)

 // Örnek -2
 const ids:number[]=[12,20,45,48,684];

// Örnek -3 
const values:object[]=[{},{},{},{}];

//Soru:Bir dizi içerisinde birden fazla farklı tipte veri olabilir mi?
// Cevabı:Evet
const teaches: (string | null)[] = ["Uğur", null, "Ahmet", null, "Yasin"];