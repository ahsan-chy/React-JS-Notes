<<<<<<< HEAD
import React from 'react'
import News from './News'

export default function NewsItems() {
    const articals=[
    {
    "id": 1, 
    "title": "WhatsApp may let you keep disappearing messages even after they are dead - Telangana Today",
    "description": "WhatsApp may let you keep disappearing messages even after they are dead",
    "url": "https://telanganatoday.com/whatsapp-may-let-you-keep-disappearing-messages-even-after-they-are-dead",
    "urlToImage":"https://i.ytimg.com/vi/-eBg4x2LZD8/hqdefault.jpg",
    "publishedAt": "2022-07-24T09:00:04Z",
    "category":"business",
    "content": null
  },
  {
    "id": 1, 
    "title": "WhatsApp may let you keep disappearing messages even after they are dead - Telangana Today",
    "description": "WhatsApp may let you keep disappearing messages even after they are dead",
    "url": "https://telanganatoday.com/whatsapp-may-let-you-keep-disappearing-messages-even-after-they-are-dead",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/03/GettyImages-1232002017.jpg?w=600",
    "publishedAt": "2022-07-24T09:00:04Z",
    "category":"business",
    "content": null
  },
  {
    "id": 1, 
    "title": "WhatsApp may let you keep disappearing messages even after they are dead - Telangana Today",
    "description": "WhatsApp may let you keep disappearing messages even after they are dead",
    "url": "https://telanganatoday.com/whatsapp-may-let-you-keep-disappearing-messages-even-after-they-are-dead",
    "urlToImage":  "https://i.ytimg.com/vi/bC5ItyrOeEk/hqdefault.jpg",
    "publishedAt": "2022-07-24T09:00:04Z",
    "category":"business",
    "content": null
  },
  {
    "id": 1, 
    "title": "WhatsApp may let you keep disappearing messages even after they are dead - Telangana Today",
    "description": "WhatsApp may let you keep disappearing messages even after they are dead",
    "url": "https://telanganatoday.com/whatsapp-may-let-you-keep-disappearing-messages-even-after-they-are-dead",
    "urlToImage": "https://cdn.telanganatoday.com/wp-content/uploads/2022/07/WhatsApp-may-let-you-keep-disappearing-messages-even-after-they-are-dead.jpg",
    "publishedAt": "2022-07-24T09:00:04Z",
    "category":"health",
    "content": null
  },
  {
    "id": 1, 
    "title": "WhatsApp may let you keep disappearing messages even after they are dead - Telangana Today",
    "description": "WhatsApp may let you keep disappearing messages even after they are dead",
    "url": "https://telanganatoday.com/whatsapp-may-let-you-keep-disappearing-messages-even-after-they-are-dead",
    "urlToImage":"https://cdn.cnn.com/cnnnext/dam/assets/190724160839-national-tequila-day-trnd-super-tease.jpg",
    "publishedAt": "2022-07-24T09:00:04Z",
    "category":"health",
    "content": null
  },
  {
    "id": 1, 
    "title": "WhatsApp may let you keep disappearing messages even after they are dead - Telangana Today",
    "description": "WhatsApp may let you keep disappearing messages even after they are dead",
    "url": "https://telanganatoday.com/whatsapp-may-let-you-keep-disappearing-messages-even-after-they-are-dead",
    "urlToImage": "https://i.insider.com/62dd03b15bf4820019b5ed0a?width=1200&format=jpeg",
    "publishedAt": "2022-07-24T09:00:04Z",
    "category":"health",
    "content": null
  },

]
    return (
      
        <div className='container'>
            <div className='row'>
              {articals.map((x)=>
                <div className='col-md-4 mt-3'>
                  <News 
                    imgurl={x.urlToImage} 
                    title={x.title} 
                    discription={x.description} 
                    cetagory={x.category}/>
                  
                  </div>  
              )}
            </div>
        </div>
    )
}
=======
import React from 'react'
import News from './News'

export default function NewsItems() {
    const articals=[
    {
    "id": 1, 
    "title": "WhatsApp may let you keep disappearing messages even after they are dead - Telangana Today",
    "description": "WhatsApp may let you keep disappearing messages even after they are dead",
    "url": "https://telanganatoday.com/whatsapp-may-let-you-keep-disappearing-messages-even-after-they-are-dead",
    "urlToImage":"https://i.ytimg.com/vi/-eBg4x2LZD8/hqdefault.jpg",
    "publishedAt": "2022-07-24T09:00:04Z",
    "category":"business",
    "content": null
  },
  {
    "id": 1, 
    "title": "WhatsApp may let you keep disappearing messages even after they are dead - Telangana Today",
    "description": "WhatsApp may let you keep disappearing messages even after they are dead",
    "url": "https://telanganatoday.com/whatsapp-may-let-you-keep-disappearing-messages-even-after-they-are-dead",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/03/GettyImages-1232002017.jpg?w=600",
    "publishedAt": "2022-07-24T09:00:04Z",
    "category":"business",
    "content": null
  },
  {
    "id": 1, 
    "title": "WhatsApp may let you keep disappearing messages even after they are dead - Telangana Today",
    "description": "WhatsApp may let you keep disappearing messages even after they are dead",
    "url": "https://telanganatoday.com/whatsapp-may-let-you-keep-disappearing-messages-even-after-they-are-dead",
    "urlToImage":  "https://i.ytimg.com/vi/bC5ItyrOeEk/hqdefault.jpg",
    "publishedAt": "2022-07-24T09:00:04Z",
    "category":"business",
    "content": null
  },
  {
    "id": 1, 
    "title": "WhatsApp may let you keep disappearing messages even after they are dead - Telangana Today",
    "description": "WhatsApp may let you keep disappearing messages even after they are dead",
    "url": "https://telanganatoday.com/whatsapp-may-let-you-keep-disappearing-messages-even-after-they-are-dead",
    "urlToImage": "https://cdn.telanganatoday.com/wp-content/uploads/2022/07/WhatsApp-may-let-you-keep-disappearing-messages-even-after-they-are-dead.jpg",
    "publishedAt": "2022-07-24T09:00:04Z",
    "category":"health",
    "content": null
  },
  {
    "id": 1, 
    "title": "WhatsApp may let you keep disappearing messages even after they are dead - Telangana Today",
    "description": "WhatsApp may let you keep disappearing messages even after they are dead",
    "url": "https://telanganatoday.com/whatsapp-may-let-you-keep-disappearing-messages-even-after-they-are-dead",
    "urlToImage":"https://cdn.cnn.com/cnnnext/dam/assets/190724160839-national-tequila-day-trnd-super-tease.jpg",
    "publishedAt": "2022-07-24T09:00:04Z",
    "category":"health",
    "content": null
  },
  {
    "id": 1, 
    "title": "WhatsApp may let you keep disappearing messages even after they are dead - Telangana Today",
    "description": "WhatsApp may let you keep disappearing messages even after they are dead",
    "url": "https://telanganatoday.com/whatsapp-may-let-you-keep-disappearing-messages-even-after-they-are-dead",
    "urlToImage": "https://i.insider.com/62dd03b15bf4820019b5ed0a?width=1200&format=jpeg",
    "publishedAt": "2022-07-24T09:00:04Z",
    "category":"health",
    "content": null
  },

]
    return (
      
        <div className='container'>
            <div className='row'>
              {articals.map((x)=>
                <div className='col-md-4 mt-3'>
                  <News 
                    imgurl={x.urlToImage} 
                    title={x.title} 
                    discription={x.description} 
                    cetagory={x.category}/>
                  
                  </div>  
              )}
            </div>
        </div>
    )
}
>>>>>>> 78ef44e09afa2a867a52a71d0ba124618848776f
