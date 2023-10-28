const books = [
    {
        id: 1,
        title: 'book 1',
        description: 'description for book 1'
    },
    {
        id: 2,
        title: 'book 2',
        description: 'description for book 2'
    },
    {
        id: 3,
        title: 'book 3',
        description: 'description for book 3'
    },
]

const DELAY = 2000

const fakeAPI = {
    fetchBooks: () => {
        //simulating a Promise
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(books)
            }, DELAY)
        })
    },
    addBook:()=>{
        return 'books'
    }
}

export default fakeAPI