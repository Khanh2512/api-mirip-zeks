// Jika ada bug / eror mohon maklumi om , ini cuma latihan buat sy untuk belajar dikit" soal programing
// Gada reupload" 😏
// Klo mau colong fitur, jgn asal colong bodoh ntr api eror

// Thanks to ( jgn di hapus jamet)
/*
<p> Eka Danuarta</p>
<p> Ojan</p>
<p> Farhan</p>
<p> ZeeoneOfc </p>
<p> ALL HUMAN</p>
*/
__path = process.cwd()

//var aexm = require('@lolikillers/aexm-api');
var express = require('express');
var db = require(__path + '/database/db');
try {
var kuhong = db.get('ojan'); // jan diubah
} catch (e) {
	console.log('WELCOME TO MY API!') // boleh diubah
}


var axios = require('axios');
var qs = require('qs');
var ytdl = require('ytdl-core');
var ytpl = require('ytpl');
var secure = require('ssl-express-www');
var cors = require('cors');
var scrapeYt = require("scrape-yt");
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var fs = require('fs');
var router  = express.Router();
var creator = 'Việt Khánh' // ubah jadi nama lu
const listkey = ["HVVK","APIHVVK","FreeKey"]; // ubah apikey nya, tambah aja klo mau

var { otakudesu, covid, ongoing, komiku, tebakgambar, surah, sholat, lirik, chara,wattpad, playstore, linkwa, pinterest ,igdl,igstory, igstalk,twitter,fbdown,youtube,ttdownloader} = require(__path + '/lib/scrape.js');
var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson } = require(__path + '/lib/fetcher.js')
var options = require(__path + '/lib/options.js');
var { getBuffer } = require(__path + '/lib/functions.js');

var {
	Vokal,
	Base,
	Searchnabi,
    Gempa
} = require('./../lib');
var cookie = "HSID=A7EDzLn3kae2B1Njb;SSID=AheuwUjMojTWvA5GN;APISID=cgfXh13rQbb4zbLP/AlvlPJ2xBJBsykmS_;SAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;__Secure-3PAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;VISITOR_INFO1_LIVE=RgZLnZtCoPU;LOGIN_INFO=AFmmF2swRQIhAOXIXsKVou2azuz-kTsCKpbM9szRExAMUD-OwHYiuB6eAiAyPm4Ag3O9rbma7umBK-AG1zoGqyJinh4ia03csp5Nkw:QUQ3MjNmeXJ0UHFRS3dzaTNGRmlWR2FfMDRxa2NRYTFiN3lfTEdOVTc4QUlwbUI4S2dlVngxSG10N3ZqcHZwTHBKano5SkN2dDlPSkhRMUtReE42TkhYeUVWS3kyUE1jY2I1QzA1MDZBaktwd1llWU9lOWE4NWhoZV92aDkxeE9vMTNlcG1uMU9rYjhOaDZWdno2ZzN3TXl5TVNhSjNBRnJaMExrQXpoa2xzRVUteFNWZDI5S0Fn;PREF=app=desktop&f4=4000000&al=id;SID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1njBpLTOpxSfN-EaYCRSiDg.;YSC=HCowA1fmvzo;__Secure-3PSID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1dajgWzlBh9TgKapGOwuXfA.;SIDCC=AJi4QfFK0ri9fSfMjMQ4tOJNp6vOb9emETXB_nf2S05mvr2jBlmeEvlSsQSzPMuJl_V0wcbL1r8;__Secure-3PSIDCC=AJi4QfGeWHx-c4uTpU1rXCciO1p0s2fJWU07KrkZhWyD1Tqi8LyR-kHuBwHY9mViVYu1fRh2PA";

_ = require('lodash')
__path = process.cwd();

loghandler = {
    error: {
        status: false,
        code: 503,
        message: 'Service Unavaible, Sedang dalam perbaikan',
        maintanied_by: `${creator}`
    },
    apikey: {
    	status: false,
    	code: 403,
    	message: 'Forbiden, Invalid apikey, hubungi saya di whatsapp untuk mendapatkan apikey anda',
    	maintanied_by: `${creator}`
    },
    noturl: {
    	status: false,
    	code: 403,
    	message: 'Forbiden, Invlid url, masukkan parameter url',
    	maintanied_by: `${creator}`,
    }
}

var len = 15
        var arr = '123456789abcdefghijklmnopqrstuvwxyz'
        var random = '';

        for (var i = len; i > 0; i--) {
            random += arr[Math.floor(Math.random() * arr.length)];
        }

        var lenn = 5
        var randomlagi = '';

        for (var i = lenn; i > 0; i--) {
            randomlagi += arr[Math.floor(Math.random() * arr.length)];
        }

        var randomTextNumber = random+randomlagi+'---------Apriliya-Putri-Fatmawati'+'LOLI--KILLERS';
        
 
 async function cekApiKey(api) {
 	ap = await lolkill.findOne({apikey:api})
 return ap;
 }
 
 router.get('/addapikey', (req, res, next) => {
    var apikey = req.query.apikey,
        apikeyInput  = req.query.apikeyInput,
        email = req.query.email;

    if (!apikey) return res.json(loghandler.apikey)
    if (!(apikeyInput && email)) return res.json(loghandler.notAddApiKey)
    if (apikey != `${keyapi}`) return res.json(loghandler.invalidKey)

    try {
        lolkill.insert({
            apikey: apikeyInput,
            email: email
        })
        .then(() => {
              res.json({
                  status: true,
                  creator: `${creator}`,
                  result: 'berhasil menambah data, status : ' + status + ', apikey : ' + apikeyInput + ', email : ' + email + ', nomor_hp : ' + nomorhp + ', name :  ' + name + ', age : ' + age + ', country : ' + country + ', exp : ' + exp
              })
        })
    } catch (e) {
        console.log(e)
        res.json(loghandler.error)
    }
})

router.get('/cekapikey', async (req, res, next) => {
	var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.apikey)
	a = await cekApiKey(apikeyInput)
	if (a) {
	json = JSON.stringify({
		status: true,
		creator: creator,
		result: {
            status:a.status,
			id: a._id,
			apikey: a.apikey,
			more_info: {
				email: a.email,
				nomor_hp: a.nomor_hp,
				name: a.name,
				age: a.age,
				country: a.country,
				exp:a.exp,
			},
		},
		message: `jangan lupa follow ${creator}`
	})
} else {
	json = JSON.stringify({
		status: false
	})
}
res.send(JSON.parse(json))
})
// cecan
router.get('/cecan/china', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/china.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/cecan/vietnam', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/vietnam.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/cecan/thailand', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/thailand.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/cecan/indonesia', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/indonesia.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/cecan/korea', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/korea.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/cecan/japan', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/japan.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.jpg', data)
        res.sendFile(__path+'/tmp/chika.jpg')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/cecan/malaysia', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeoneofc/Asupan/main/cecan/malaysia.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
        var buff = result.url
             res.json({
             	author: 'Việt Khánh',
                 buff
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/canvas/welcome', async (req, res) => {
            pp = req.query.pp,
            nama = req.query.nama,
            bg = req.query.bg,    
	    namagc = req.query.namagc,
            member = req.query.member
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    if (!namagc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter namagc"})
    if (!member) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter member"})
    
    
let Welcome = await new ch.Welcome2()
.setAvatar(pp)
.setUsername(nama)
.setBg(bg)
.setGroupname(namagc)
.setMember(member)
.toAttachment()
    
 data = Welcome.toBuffer();
  await fs.writeFileSync(__path +'/database/welcome.png', data)
  res.sendFile(__path+'/database/welcome.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/canvas/goodbye', async (req, res) => {
            pp = req.query.pp,
            nama = req.query.nama,
            bg = req.query.bg,    
            member = req.query.member
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    if (!member) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter member"})
    
let Goodbye = await new ch.Goodbye2()
.setAvatar(pp)
.setUsername(nama)
.setBg(bg)
.setMember(member)
.toAttachment()
    
 data = Goodbye.toBuffer();
  await fs.writeFileSync(__path +'/database/goodbye.png', data)
  res.sendFile(__path+'/database/goodbye.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/canvas/promote', async (req, res) => {
            pp = req.query.pp,
            nama = req.query.nama,
	    namagc = req.query.namagc,
	    ppgc = req.query.ppgc,
            bg = req.query.bg,
            member = req.query.member
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    if (!namagc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter namagc"})
    if (!ppgc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter ppgc"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    if (!member) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter member"})
const Promote = await new kc.Promote()
    .setAvatar(pp)
    .setUsername(nama)
    .setGuildName(namagc)
    .setGuildIcon(ppgc)
    .setBackground(bg)
    .setMemberCount(member)
    .toAttachment();
    
 data = Promote.toBuffer();
  await fs.writeFileSync(__path +'/database/promote.png', data)
  res.sendFile(__path+'/database/promote.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/canvas/demote', async (req, res) => {
            pp = req.query.pp,
            nama = req.query.nama,
	    namagc = req.query.namagc,
	    ppgc = req.query.ppgc,
            bg = req.query.bg,
            member = req.query.member
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    if (!namagc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter namagc"})
    if (!ppgc) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter ppgc"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    if (!member) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter member"})
const Demote = await new kc.Demote()
    .setAvatar(pp)
    .setUsername(nama)
    .setGuildName(namagc)
    .setGuildIcon(ppgc)
    .setBackground(bg)
    .setMemberCount(member)
    .toAttachment();
    
 data = Demote.toBuffer();
  await fs.writeFileSync(__path +'/database/demote.png', data)
  res.sendFile(__path+'/database/demote.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/canvas/level', async (req, res) => {
            pp = req.query.pp,
            nama = req.query.nama,
            bg = req.query.bg,
            needxp = req.query.needxp,
            currxp = req.query.currxp,
            level = req.query.level,
            logorank = req.query.logorank   
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nama"})
    if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
    if (!needxp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter needxp"})
    if (!currxp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter currxp"})
    if (!level) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter level"})
    if (!logorank) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter logorank"})
    
var level = await new ch.Rank()
    .setAvatar(`${pp}`) 
    .setUsername(`${nama}`) 
    .setBg(`${bg}`)
    .setNeedxp(`${needxp}`) 
    .setCurrxp(`${currxp}`) 
    .setLevel(`${level}`) 
    .setRank(`${logorank}`) 
    .toAttachment();
  data = level.toBuffer();
  await fs.writeFileSync(__path +'/database/rank.png', data)
  res.sendFile(__path +'/database/rank.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/canvas/levelup', async (req, res, next) => {
            pp = req.query.pp
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})       
var levelup = await new ch.Up()
    .setAvatar(`${pp}`)
    .toAttachment();
  data = levelup.toBuffer();
  await fs.writeFileSync(__path +'/database/sup.png', data)
  res.sendFile(__path +'/database/sup.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/canvas/gfx1', async (req, res) => {
            nama = req.query.teks
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks"})
   
var gfx1 = await new ch.Gfx1()
    .setName(`${nama}`) 
    .toAttachment();
    
  data = gfx1.toBuffer();
  await fs.writeFileSync(__path +'/database/gfx1.png', data)
  res.sendFile(__path +'/database/gfx1.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/canvas/gfx2', async (req, res) => {
        nama = req.query.teks
    if (!nama) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks"})
   
var image = await new ch.Gfx2()
    .setName(`${nama}`) 
    .toAttachment();
    
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/database/gfx2.png', data)
  res.sendFile(__path +'/database/gfx2.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/canvas/gfx3', async (req, res) => {
            text1 = req.query.teks1,
            text2 = req.query.teks2

    if (!text1) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks1"})
    if (!text2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks2"})
   
var image = await new ch.Gfx3()
    .setText1(`${text1}`) 
    .setText2(`${text2}`)
    .toAttachment();
    
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/database/gfx3.png', data)
  res.sendFile(__path +'/database/gfx3.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/canvas/gfx4', async (req, res) => {
            text1 = req.query.teks1,
            text2 = req.query.teks2

    if (!text1) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks1"})
    if (!text2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks2"})
   
var image = await new ch.Gfx4()
    .setText1(`${text1}`) 
    .setText2(`${text2}`)
    .toAttachment();
    
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/database/gfx4.png', data)
  res.sendFile(__path +'/database/gfx4.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/canvas/gfx5', async (req, res) => {
            text = req.query.teks

    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks"})
   
var image = await new ch.Gfx5()
    .setText(`${text}`) 
    .toAttachment();
    
  data = image.toBuffer();
  await fs.writeFileSync(__path +'/database/gfx4.png', data)
  res.sendFile(__path +'/database/gfx4.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/canvas/customgfx1', async (req, res) => {
            text = req.query.teks,
            bg = req.query.bg
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks"})
     if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
   
var cgfx = await new ch.customGfx()
    .setText(text)
    .setBg(bg)
    .toAttachment();
    
  data = cgfx.toBuffer();
  await fs.writeFileSync(__path +'/database/cgfx.png', data)
  res.sendFile(__path +'/database/cgfx.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/canvas/customgfx2', async (req, res) => {
            text1 = req.query.teks1,
            text2 = req.query.teks2,
            bg = req.query.bg
    if (!text1) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks1"})
    if (!text2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks2"})
   if (!bg) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter bg"})
   
var cgfx = await new ch.customGfx2()
    .setText1(text1)
    .setText2(text2)
    .setBg(bg)
    .toAttachment();
    
  data = cgfx.toBuffer();
  await fs.writeFileSync(__path +'/database/cgfx2.png', data)
  res.sendFile(__path +'/database/cgfx2.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/canvas/gura', async (req, res) => {
            teks = req.query.teks
    if (!teks) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter teks"})
var gura = await new ch.Gura()
    .setName(teks) 
    .toAttachment();
  data = gura.toBuffer();
  await fs.writeFileSync(__path +'/database/Gura.png', data)
  res.sendFile(__path +'/database/Gura.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/canvas/spongebob', async (req, res) => {
        image = req.query.image
    if (!image) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter image"})
    
var burn = await new ch.Burn()
    .setAvatar(image)
    .toAttachment();
  
  data = burn.toBuffer();
  await fs.writeFileSync(__path +'/database/spongebob.png', data)
  res.sendFile(__path +'/database/spongebob.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/canvas/patrick', async (req, res) => {
           image = req.query.image
    if (!image) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter image"})
    
var patrick = await new ch.Patrick()
    .setAvatar(image)
    .toAttachment();
  
  data = patrick.toBuffer();
  await fs.writeFileSync(__path +'/database/patrick.png', data)
  res.sendFile(__path +'/database/patrick.png')
  .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/canvas/instagram', async (req, res) => {
    pp = req.query.pp,
    username = req.query.username,
        post = req.query.post,
        followers = req.query.followers,
        following = req.query.following
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!username) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter username"})
    if (!post) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter post"})
    if (!followers) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter followers"})
    if (!following) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter following"})
var Ig = await new ch.Ig()
    .setAvatar(pp)
    .setUsername(username)
    .setPost(post)
    .setFollowers(followers)
    .setFollowing(following)
    .toAttachment();
  data = Ig.toBuffer();
  await fs.writeFileSync(__path +'/database/instagram.png', data)
  res.sendFile(__path +'/database/instagram.png')
  .catch(e => {
            res.json(loghandler.error)
})
})
router.get('/canvas/xnxx', async (req, res) => {
    pp = req.query.pp,
    username = req.query.username
    if (!pp) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter pp"})
    if (!username) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter username"})
    var Xnxx = await new ch.Xnxx()
    .setImage(pp)
    .setTitle(username)
    .toAttachment();
  data = Xnxx.toBuffer();
  await fs.writeFileSync(__path +'/database/xnxx.png', data)
  res.sendFile(__path +'/database/xnxx.png')
  .catch(e => {
            res.json(loghandler.error)
})
})

// asupan
router.get('/asupan/cecan', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/cecan.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/asupan/hijaber', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/hijaber.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/asupan/asupan', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/asupan.js`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/asupan/rikagusriani', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/asupan/rikagusriani.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/asupan/santuy', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/santuy.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/asupan/ukhty', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/ukhty.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/asupan/bocil', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/bocil.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/asupan/gheayubi', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/binjaicity/warga62/master/geayubi.json`))
        .then(response => response.json())
        .then(async data => {
        var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
          data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/chika.mp4', data)
        res.sendFile(__path+'/tmp/chika.mp4')
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

//downloader
router.get('/download/facebook', async (req, res, next) => {
          var apikey = req.query.apikey
          var url = req.query.url
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://fb-api-zhirrr.vercel.app/?url=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/download/instagram', async (req, res, next) => {
          var apikey = req.query.apikey
          var url = req.query.url
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter username"})
        if(listkey.includes(apikey)){
       igstory(url)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/download/igstory', async (req, res, next) => {
          var apikey = req.query.apikey
          var url = req.query.username
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})
        if(listkey.includes(apikey)){
       igstory
       (url)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/download/pinterest', async (req, res, next) => {
          var apikey = req.query.apikey
          var url = req.query.q
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter q"})
        if(listkey.includes(apikey)){
       pinterest(url)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/download/tiktok', async (req, res, next) => {
          var apikey = req.query.apikey
          var url = req.query.url
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})
        if(listkey.includes(apikey)){
       ttdownloader(url)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/download/ytmp3', async (req, res, next) => {
          var apikey = req.query.apikey
          var url = req.query.url
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})
        if(listkey.includes(apikey)){
       youtube(url)
			.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/download/ytsearch', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.query
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://yutub-api-zaahirr.herokuapp.com/search?q=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Việt Khánh',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/download/ytmp4', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.url
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter url"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/ytv?url=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Việt Khánh',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
//lk21
router.get('/lk21/search', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.film
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter film"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/search?query=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Việt Khánh',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/lk21/terbaru', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.film
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/newupload`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Việt Khánh',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/lk21/comingsoon', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.film
       	if(!apikey) return res.json(loghandler.apikey)
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/comingsoon`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Việt Khánh',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/lk21/tvseries', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.film
       	if(!apikey) return res.json(loghandler.apikey)
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/tv`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Việt Khánh',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/lk21/year', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.tahun
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter tahun"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/year?year=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Việt Khánh',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/lk21/country', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.country
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter country"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/country?country=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Việt Khánh',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/lk21/genre', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.tipe
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter tipe"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://lk21-api-zahirr.herokuapp.com/genre?genre=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Việt Khánh',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

// film apik
router.get('/filmapik/search', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.film
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter film"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/search?q=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Việt Khánh',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/filmapik/kategori', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.film
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter film"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/category?search=${film}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Việt Khánh',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/filmapik/play', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.id
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter id"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/play?id=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Việt Khánh',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/filmapik/terbaru', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.id
       	if(!apikey) return res.json(loghandler.apikey)
         if(listkey.includes(apikey)){
       fetch(encodeURI(`https://filmapik-api-zahirr.herokuapp.com/latest`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Việt Khánh',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

// news
router.get('/news/cnn', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.type
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter type"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/cnn-news/${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Việt Khánh',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/news/cnbc', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.type
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter type"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/cnbc-news/${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Việt Khánh',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/news/republika', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.type
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter type"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/republika-news/${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Việt Khánh',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/news/tempo', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.type
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter type"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/tempo-news/${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Việt Khánh',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/news/antara', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.type
       	if(!apikey) return res.json(loghandler.apikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter type"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/antara-news/${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Việt Khánh',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/news/kumparan', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.type
       	if(!apikey) return res.json(loghandler.apikey)
         if(listkey.includes(apikey)){
       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/kumparan-news`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Việt Khánh',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

//photooxy
router.get('/photooxy/naruto', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            request.post({
                url: "https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_2=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
         } catch (e) {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/grafity_text', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            request.post({
                url: "https://photooxy.com/banner-cover/graffiti-text-cover-222.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
         } catch (e) {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/petterns', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/bevel-text-between-royal-patterns-166.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
         } catch (e) {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/text_on_cup', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
         } catch (e) {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/3d_summer', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
         } catch (e) {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/3d_nature', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
         } catch (e) {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/wolf_metal', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
         } catch (e) {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/wood_heart', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
         } catch (e) {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/flower_heart', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/text-inside-the-flower-heart-369.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
         } catch (e) {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/wooden_board', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/writing-on-wooden-boards-368.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
         } catch (e) {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/tiktok_effect', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       var text2 = req.query.text2
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
       if (!text2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text2"})      
         if(listkey.includes(apikey)){
       try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
         } catch (e) {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/double_heart', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/love-text-effect-372.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
         } catch (e) {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/coffee_cup', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
         } catch (e) {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/under_grass', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
         } catch (e) {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/text_on_cup2', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
         } catch (e) {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/romantic_text', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
         } catch (e) {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/burn_paper', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
         } catch (e) {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/shadow_text', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})      
         if(listkey.includes(apikey)){
       try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            result:{
                                                url:urlnya,
                                            },
                                        	message: `Ok`,
											status: `Success`,
											maintanied_by: `${creator}`
                                        })
                                })
                        })
                    }
                })
         } catch (e) {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})

// search api
router.get('/search/joox', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})      
         if(listkey.includes(apikey)){
       fetch(encodeURI(`https://arnz-api-production.up.railway.app/api/joox/search?q=${text}`))
        .then(response => response.json())
        .then(data => {
        var data = data;
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	data,
             	maintanied_by: `${creator}`
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/search/wallpaper', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})      
         if(listkey.includes(apikey)){
       chara(text)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/search/wattpad', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})      
         if(listkey.includes(apikey)){
       wattpad(text)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/search/komiku', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})      
         if(listkey.includes(apikey)){
       komiku(text)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/search/otaku', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})      
         if(listkey.includes(apikey)){
       otakudesu(text)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/search/anime', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})      
         if(listkey.includes(apikey)){
       fetch(encodeURI(`https://arnz-api-production.up.railway.app/api/anime/search?q=${q}`))
        .then(response => response.json())
        .then(data => {
        var data = data;
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	maintanied_by: `${creator}`,
             	data
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

// anime
router.get('/anime/searchanime', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})      
         if(listkey.includes(apikey)){
       fetch(encodeURI(`https://arnz-api-production.up.railway.app/api/anime/search?q=${q}`))
        .then(response => response.json())
        .then(data => {
        var data = data;
             res.json({
             	message: `Ok`,
             	status: `Success`,
             	maintanied_by: `${creator}`,
             	data
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/anime/samehadaku_genre', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.apikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})      
         if(listkey.includes(apikey)){
       fetch(encodeURI(`https://arnz-samehadaku.herokuapp.com/genre/${text}`))
        .then(response => response.json())
        .then(data => {
        var data = data;
             res.json({
             	data,
             	message: `Ok`,
             	status: `Success`,
             	maintanied_by: `${creator}`
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/anime/samehadaku_page', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://arnz-samehadaku.herokuapp.com/season`))
        .then(response => response.json())
        .then(data => {
        var data = data;
             res.json({
             	data,
             	message: `Ok`,
             	status: `Success`,
             	maintanied_by: `${creator}`
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

//nsfw
router.get('/nsfw/ass', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/ass.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/ahegao', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/ahegao.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/bdsm', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/bdsm.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/blowjob', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/blowjob.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/cuckold', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/cuckold.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/cum', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/cum.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/ero', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/ero.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/femdom', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/femdom.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/foot', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/foot.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/gangbang', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/gangbang.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/glasses', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/glasses.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/hentai', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/hentai.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/hentaigif', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/hnt_gifs.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/jahy', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/jahy.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/masturbation', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/masturbation.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/neko', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/nsfwNeko.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/orgy', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/orgy.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/panties', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/panties.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/pussy', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/pussy.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/thighs', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/thighs.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/nsfw/yuri', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/yuri.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

// islamic
router.get('/islam/tahlil', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataTahlil.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/wirid', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataWirid.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/ayatkursi', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataAyatKursi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/doaharian', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataDoaHarian.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/bacaanshalat', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataBacaanShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/niatshalat', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataNiatShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/kisahnabi', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataKisahNabi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/asmaulhusna', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataAsmaulHusna.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/niatsubuh', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatShubuh.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/niatzuhur', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatDzuhur.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/niatmagrib', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatMaghrib.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/niatisya', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatIsya.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/niatashar', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatAshar.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

//game
router.get('/game/tebakgambar', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       tebakgambar()
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

// other
router.get('/other/ghstalk', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.username
       	if(!apikey) return res.json(loghandler.apikey)
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter username"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://github-api-zhirrr.vercel.app/api/detailuser?q=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Việt Khánh',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/other/repostalk', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.username
       	if(!apikey) return res.json(loghandler.apikey)
       if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter username"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://github-api-zhirrr.vercel.app/api/searchrepo?q=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Việt Khánh',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/other/hilih', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.kata
       	if(!apikey) return res.json(loghandler.apikey)
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://hilih-api-zhirrr.vercel.app/api/hilih?kata=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/other/fakedata', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.country
       	if(!apikey) return res.json(loghandler.apikey)
       if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter country"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://fakename-api-zhirrr.vercel.app/api/fakename?country=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/other/drakorasi', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.search
       	if(!apikey) return res.json(loghandler.apikey)
       if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`http://docs-api-zahirrr.herokuapp.com/api/drakorasia?search=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/other/translate', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.kata
       	if(!apikey) return res.json(loghandler.apikey)
       if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/translate?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/other/infotsunami', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.kata
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/tsunami`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/other/infocuacadunia', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.kata
       	if(!apikey) return res.json(loghandler.apikey)
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/cuaca/dunia`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/other/cuacabandara', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.kata
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://bmkg-api-zahirr.herokuapp.com/api/cuaca/bandara`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/other/kodepos', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.kota
       	if(!apikey) return res.json(loghandler.apikey)
       if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kota"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://kodepos-api-zhirrr.vercel.app/?q=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/other/coviddunia', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.kata
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/world`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/other/covidindo', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.kata
       	if(!apikey) return res.json(loghandler.apikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/covid-indonesia`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/other/kbbi', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.kata
       	if(!apikey) return res.json(loghandler.apikey)
       if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://kbbi-api-zhirrr.vercel.app/api/kbbi?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

module.exports = router
