 export  type SeasonType = Array<BookType>
type BookType ={
    title:string
    author:string
    annotation:string
    img?:any
    button:string
}
type DataType = {
    winter:SeasonType,
    spring:SeasonType,
    summer:SeasonType,
    autumn:SeasonType
}
const data: DataType = {
    winter:[
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

    ],
    spring:[
        {
            title: 'The Body',
            author: 'Stephen King',
            annotation: 'Powerful Novel That Takes You Back To A Nostalgic Time, Exploring Both The Beauty And Danger And Loss Of Innocence That Is Youth.',
            img:'book1',
            button:'Buy'
        },
        {
            title: 'CARRY: A MEMOIR OF SURVIVAL ON STOLEN LAND',
            author: 'Toni Jenson',
            annotation: 'This Memoir About The Author\'s Relationship With Gun Violence Feels Both Expansive And Intimate, Resulting In A Lyrical Indictment Of The Way Things Are.',
            img:'book2',
            button:'Buy'
        },
        {
            title: 'DAYS OF DISTRACTION',
            author: 'Alexandra Chang',
            annotation: 'A Sardonic View Of Silicon Valley Culture, A Meditation On Race, And A Journal Of Displacement And Belonging, All In One Form-Defying Package Of Spare Prose.',
            img:'book3',
            button:'Buy'
        },
        {
            title: 'DOMINICANA',
            author: 'Angie Cruz',
            annotation: 'A Fascinating Story Of A Teenage Girl Who Marries A Man Twice Her Age With The Promise To Bring Her To America. Her Marriage Is An Opportunity For Her Family To Eventually Immigrate. For Fans Of Isabel Allende And Julia Alvarez.',
            img:'book4',
            button:'Own'
        }

    ],
    summer:[
        {
            title: 'CRUDE: A MEMOIR',
            author: 'Pablo Fajardo & ​​Sophie Tardy-Jouber',
            annotation: 'Drawing And Color By Damien Roudeau | This Book Illustrates The Struggles Of A Group Of Indigenous Ecuadoreans As They Try To Sue The ChevronTexaco Company For Damage Their Oil Fields Did To The Amazon And Her People.',
            img:'book1',
            button:'Buy'
        },
        {
            title: 'LET MY PEOPLE GO SURFING',
            author: 'Yvon Chouinard',
            annotation: 'Chouinard—Climber, Businessman, Environmentalist—Shares Tales Of Courage And Persistence From His Experience Of Founding And Leading Patagonia, Inc. Full Title: Let My People Go Surfing: The Education Of A Reluctant Businessman, Including 10 More Years Of Business Unusual.',
            img:'book2',
            button:'Buy'
        },
        {
            title: 'THE OCTOPUS MUSEUM: POEMS',
            author: 'Brenda Shaughnessy',
            annotation: 'This Collection Of Bold And Scathingly Beautiful Feminist Poems Imagines What Comes After Our Current Age Of Environmental Destruction, Racism, Sexism, And Divisive Politics',
            img:'book3',
            button:'Buy'
        },
        {
            title: 'SHARK DIALOGUES: A NOVEL',
            author: 'Kiana Davenport',
            annotation: 'An Epic Saga Of Seven Generations Of One Family Encompasses The Tumultuous History Of Hawaii As A Hawaiian Woman Gathers Her Four Granddaughters Together In An Erotic Tale Of Villains And Dreamers, Queens And Revolutionaries, Lepers And Healers.',
            img:'book4',
            button:'Own'
        }
    ],
    autumn: [
        {
            title: 'CASUAL CONVERSATION',
            author: 'Renia White',
            annotation: 'White\'s Impressive Debut Collection Takes Readers Through And Beyond The Concepts Of Conversation And The Casual - Both What We Say To Each Other And What We Don\'t, Examining The Possibilities Around How We Construct And Communicate Identity.',
            img:'book1',
            button:'Buy'
        },
        {
            title: 'THE GREAT FIRE',
            author: 'Lou Ureneck',
            annotation: 'The Harrowing Story Of An Ordinary American And A Principled Naval Officer Who, Horrified By The Burning Of Smyrna, Led An Extraordinary Rescue Effort That Saved A Quarter Of A Million Refugees From The Armenian Genocide',
            img:'book2',
            button:'Buy'
        },
        {
            title: 'RICKEY: THE LIFE AND LEGEND',
            author: 'Howard Bryant',
            annotation: 'With The Fall Rolling Around, One Can\'t Help But Think Of Baseball\'s Postseason Coming Up! And What Better Way To Prepare For It Than Reading The Biography Of One Of The Game\'s All-Time Greatest Performers, The Man Of Steal, Rickey Henderson?',
            img:'book3',
            button:'Buy'
        },
        {
            title: 'SLUG: AND OTHER STORIES',
            author: 'Megan Milks',
            annotation: 'Exes Tegan And Sara Find Themselves Chained Together By Hairballs Of Codependency. A Father And Child Experience The Shared Trauma Of Giving Birth To Gods From Their Wounds.',
            img:'book4',
            button:'Own'
        }
    ]

}
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
