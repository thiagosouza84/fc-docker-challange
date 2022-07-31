async function connect () {
  if(global.connection && global.connection.state !== 'disconnected')
      return global.connection

  const mysql = require('mysql2/promise')
  const connection = await mysql.createConnection({
    host:'db',
    user :'root',
    password : '51053455',
    database : 'nodedb'
  })
  console.log('mysql connected')
  global.connection = connection
  return connection
}

async function createPeoplesAndInsert() {
  const connection = await connect();
   await connection.query("CREATE TABLE IF NOT EXISTS peoples (name VARCHAR(255))") 

 return  await connection.query("INSERT INTO peoples (name) VALUES ('Thiago Souza')")

}
async function selectAllPeoples() {
  await createPeoplesAndInsert()
  const [rows]  = await connection.query("SELECT * FROM peoples")
  return rows
}

module.exports = {selectAllPeoples}



