// class user{
//     #password;
//     constructor(username, password){
//         this.username = username
//         this.#password =password
//     }

//     checkPassword(input){
//        return input === this.#password
//     }
// }

// const user1 = new user("sinan","9449616357")

// console.log(user1.checkPassword("9449616357"))


// =>>>>>  2. Library Book

//                  Create a class Book that:

//                  as private properties for title, author, and isAvailable.

//                  Has public methods to:

//                  Borrow the book (set isAvailable to false only if available).

//                  Return the book (set isAvailable to true).

//                  Check availability status.

class book{
    #title;
    #author;
    #isAvailable;
    
    constructor (title, author, isAvailable){
        this.#title =title
        this.#author= author
        this.#isAvailable= isAvailable
    }

    BookBorrow(){
        if(this.#isAvailable){
            this.#isAvailable =false
            return("yeah, the book you were looking for is available")   
        }else{
            return("sorry, the book you are for is not available right now")
        }
    }
    returnBook(){
        this.#isAvailable = true
        return "book returned"
    }

    checkAvailbility(){
       return this.#isAvailable ? "book is available" : "book in not avilabale"
    }
}

const books = new book("OOPs in JS", "hitesh", true)

console.log(books.BookBorrow())
console.log(books.checkAvailbility())
console.log(books.returnBook())
console.log(books.checkAvailbility())
console.log(books.author)
