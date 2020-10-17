const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async db=>{
   /* await saveOrphanage(db,{
        lat: '-27.222633',
        lng: '-49.6455874',
        name: 'Lar das meninas',
        about: 'Prestar assitência a crianças de 05 a 15 anos que se encontre em situação de risco e/ou vunerabilidade social',
        whatsapp:'945567889',
        images:[

            'https://images.unsplash.com/photo-1573261524302-6f1dc1458378?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',

            'https://images.unsplash.com/photo-1597730945481-f35a5cf39021?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9'
        ].toString(),
        instructions: 'Venha como se sentir a vontade e traga muito amor e paciência para dar',
        opening_hours: 'Horário das visitas Das 18h até as 8h',
        open_on_weekends: '1'
    })*/

    //const selectedOrphanages = await db.all("SELECT * FROM orphanages")
   // console.log(selectedOrphanages)

   //const orphanages = await db.all('SELECT * FROM orphanages WHERE id = "5"')
   //.log(orphanages)

   //console.log(await db.run("DELETE FROM orphanages"))
  // console.log(await db.run("DELETE * FROM orphanages WHERE id='11'"))
})
