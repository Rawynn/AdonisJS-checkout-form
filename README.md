# AdonisJS test project
* The test is based on [AdonisJS](https://adonisjs.com/) a full stack Node.js framework

## Launching
* After installing the dependencies and running `npm run dev`, you should see a start page on http://localhost:3333. If something is wrong, you probably use a wrong version of Node.js.

---

### 1
On [/bacon](http://localhost:3333/bacon) there is a page with picture of beautiful slices of fried bacon, that comes from external source.

I've created cloning logic, which is attached to **Yeah, I want more bacon!** button.

### 2
I have created fully responsive order form [/checkout](http://localhost:3333/checkout) which uses JS simple validation + helpers
When data is sent to the `POST /order` endpoint there is another validation provided by AdonisJS schema Validator and then on [/order](http://localhost:3333/order) there is shown success / error message based on API response.

Accepted data formats:
* Postal code: 00000
* Phone number: 000000000
* Credit card: 0000000000000000
* CVV: 000
* Exp. date: 00/00
