 <h1 align="center"> Products Parser </h1>
Rest API created using NodeJs and MongoDB (Atlas). The API uses data of the [Open Food Facts](https://br.openfoodfacts.org/data) repository and stores it in a NoSQL database to make access more straightforward and faster, considering the size of the database and of the original data.


## Used Techonologies

- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [NodeJS](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
- [mongoose](https://mongoosejs.com/)
- [Express](https://expressjs.com/pt-br/)
- [axios](https://axios-http.com/ptbr/docs/intro)
- [node-cron](https://www.npmjs.com/package/node-cron)


## Installation
1. Clone the repo

    ```sh
    git clone https://github.com/dagonderik/Products-Parser.git
    ```

2. Install the dependencies

    ```sh
    npm install
    ```

## Usage

    node index

## Development History
- Created the repository on github and initialized the atlas DB. 
- Started reading the atlas documentation to create the first steps.
- Used old CRUD project to test Atlas and API connection.
- Created basic index file to support Atlas connection using mongoose.
- Created the routes and their controllers.
- Used https://reqbin.com/ to test the routes and their functionality.
- Updated some deppendencies and added the node-cron to implement the DB update.
- Tried to use pako to unpack the data retrieved from the Food Facts API.
- Realized that the data was too big to use normal data structures.
- Tried to slice the ArrayBuffer retrieved from the API but ended up with corrupted data.
- Created a Readable to read the file in chunks.
- Implemented a counter to abort the reading when enough data was obtained.
- Used a function to subdivide the string into individual objects to add to the DB.
- Tested the Update and created the cron function and setted it to a weekly run on sundays at 2am.

Presentation [Link](https://www.loom.com/share/7100a8e444db4f7cbea24366dfa0f0bd)

_This is a challenge by [Coodesh](https://coodesh.com/)_