type DataType = Array<BookType>
type BookType ={
    title:string
    author:string
    annotation:string
    img?:any
    button:string
}

const data: DataType = [
    {
        title: 'The Book Eaters',
        author: 'Sunyi Dean',
        annotation: 'An unusual sci-fi story about a book eater woman who tries desperately to save her dangerous mind-eater son from tradition and certain death. Complete with dysfunctional family values, light Sapphic romance, and a strong, complex protagonist. Not for the faint of heart.',
        img:'book1',
        button:'Buy'
    },
    {
        title: 'Cackle',
        author: 'Rachel Harrison',
        annotation: 'Are your Halloween movies of choice The Witches of Eastwick and Practical Magic? Look no further than here - where a woman recovering from a breakup moves to a quaint town in upstate New York and befriends a beautiful witch.',
        img:'book2',
        button:'Buy'
    },
    {
        title: 'Dante: Poet of the secular world',
        author: 'Erich Auerbach',
        annotation: 'Auerbach\'s engaging book places the \'Comedy\' within the tradition of epic, tragedy, and philosophy in general, arguing for Dante\'s uniqueness as one who raised the individual and his drama of soul into something of divine significance—an inspired introduction to Dante\'s main themes.',
        img:'book3',
        button:'Buy'
    },
    {
        title: 'The Last Queen',
        author: 'Clive Irving',
        annotation: 'A timely and revelatory new biography of Queen Elizabeth (and her family) exploring how the Windsors have evolved and thrived as the modern world has changed around them.',
        img:'book4',
        button:'Own'
    }
]
export const coffeeTea =[
    {
        title: 'Cold Brew Coffee',
        price:3,
    },
    {
        title: 'French Press Pot',
        price:5,
    },
    {
        title: 'Espresso',
        price:2,
    },
    {
        title: 'Cappuccino',
        price:4,
    },
    {
        title: 'Hot Tea',
        price:2,
    },
    {
        title: 'Cold Tea',
        price:2,
    },
]
export const dessertsCakes =[
    {
        title: 'Forest Gateau',
        price:16,
    },
    {
        title: 'Blue Moon',
        price:16,
    },
    {
        title: 'Truffle Cake',
        price:15,
    },
    {
        title: 'Chocolate Cake',
        price:18,
    },
    {
        title: 'Poet’s Dream Cake',
        price:16,
    },
    {
        title: 'Pineapple Cake',
        price:14,
    },
]
export default data
