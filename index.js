import express from 'express'
import { WebcastPushConnection } from 'tiktok-live-connector'


let capres  = {

    'anies': 0,
    'prabowo': 0,
    'ganjar': 0,
}

const app   = express()
app.use(express.static('public'))

app.get('/suara', (req, res)=>{

    res.send(capres)

})

app.listen(3000, ()=>{

    const tiktok    = new WebcastPushConnection('randiekas_')

    tiktok.connect().then((state)=>{

        console.log("Berhasil terhubung ke tiktok")

    }).catch((e)=>{

        console.log(e.toString())
    })

    tiktok.on("chat", (data)=>{

        console.log(data)
        
       if( data.comment == 1){

            capres.anies    += 1

       }else if( data.comment == 2){

            capres.prabowo  += 1

       }else if( data.comment == 3){

            capres.ganjar   += 1
       }

       return
        

    })


    console.log("Aplikasi sudah siap digunakan")
})