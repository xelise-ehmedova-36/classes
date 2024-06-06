// Person adlı bir sinif yaradın. Bu sinif ad (name) və yaş (age) xüsusiyyətlərinə sahib olsun.
// Person sinifindən bir obyekt yaradın və bu obyektin adını və yaşını konsola yazdırın.
// Person sinifinə bir greet metodu əlavə edin. Bu metod "Salam, mənim adım [name] və mən [age] yaşındayam" şəklində bir mesaj döndərsin.
// Bu metodu istifadə edərək Person sinifindən yaratdığınız obyektin salamlamasını konsola yazdırın.
//  class Person{
  
//         name='Aydan';
//         age=22

//        getName=()=>{
//          return this.name
//        }
//        getAge=()=>{
//         return this.age
//        }
//     }

// const person=new Person
// console.log(person.getName());
// const age=new Person
// console.log(age.getAge());
// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;  
//     }
//     greet(task){
// console.log(`msj:${task}`);
//     }
// }
// const Greet=new Person();
// // Greet.greet('Salam,menim adim Aydandir ve men 22 yasindayam')
// Employee adlı bir sinif yaradın və bu sinif Person sinifindən törəsin.
// Employee sinifinə əlavə olaraq jobTitle (vəzifə adı) xüsusiyyəti əlavə edin.
// Employee sinifindən bir obyekt yaradın və bu obyektin bütün xüsusiyyətlərini və metodlarını istifadə edərək bir mesaj konsola yazdırın.
// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     describe(){
//         console.log(`Ad:${this.name},Yas:${this.age}`);
//     }
// }
// class Employee extends Person{
//     constructor(jobtitle,name,age){
//         super(name,age)
//         this.jobtitle=jobtitle
//     }
//    describe(){
//     super.describe();
//     console.log((`vezife:${this.jobtitle}`));
//    }
// }
// const employee=new Employee("Developer","Ali",30);
// employee.describe();
// BankAccount adlı bir sinif yaradın. Bu sinifin bir balance (balans) xüsusiyyəti və deposit və withdraw metodlarına sahib olsun.
// balance xüsusiyyətini özəl (private) edin və yalnız deposit və withdraw metodları vasitəsilə əlçatan edin.
// Bir BankAccount obyekti yaradın, balans əlavə edin və çıxarın, ardından balansı konsola yazdırın.
// class BankAccount{
//   #balance
//   constructor(balance){
//   this.#balance=balance
// }

//   getBalance=()=>{
//     return this.#balance
//   }
//     deposit(amount){
// const depo=this.#balance+=amount
// console.log(`${amount} depozit`);
//     }
//     withdraw(amount){
// const withd=this.#balance-=amount
// console.log(`${amount} cixarilan pul.`);
// console.log(`son balans:${this.#balance}`);
//     }
// }
// const bankAccount= new BankAccount()
// bankAccount.deposit(200)
// bankAccount.withdraw(400)

