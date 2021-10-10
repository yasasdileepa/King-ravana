{
    "name": "King ravana",
    "description": "Dileepa💢 project - Makes it easy and fun to use Whatsapp. World’s first UserBot made for WhatsApp.",
    "logo": "https://telegra.ph/file/7de56858209649d760d99.jpg",
    "keywords": ["whatsapp", "userbot", "Asena", "WhatsAsena", "bot", "api", "ai"],
    "repository": "https://github.com/SLBADBOY/🐱‍👤Dileepa",
    "website":   "https://t.me/farhan-dqz",
    "success_url": "https://t.me/farhan-dqz",
    "stack": "container",
    "env": {
        "Ravana_SESSION": {
            "description": "ඔබ ඔබගෙ whatsappහි Sacn කෙරූ තැන ආපු Code eka දන්න",
            "required": true
        },
        "SUDO": {
            "description": "මෙය වෙනස් වැලකෙන්න!",
            "required": false,
            "value": "94703179493,0"
        },
        "LANGUAGE": {
            "description": "",
            "required": true,
            "value": "EN"
        },
        "HANDLERS": {
            "description": "මෙය පිරවීමෙන් වැලකෙන්න!",
            "required": true,
            "value": "^[.!;]"
        },
        "SEND_READ": {
            "description": "මෙය පිරවීමෙන් වැලකෙන්න!",
            "required": true,
            "value": "true"
        },
        "HEROKU": {
            "description": "මෙය පිරවීමෙන් වැලකෙන්න!.",
            "required": true,
            "value": "true"
        },
        "HEROKU_API_KEY": {
            "description": "Heroku API Key එක ටයිප් කරන්න. එය ඔබගේ හෙරෝකු Dashboard එකෙන් ගත් හැකිය",
            "required": true
        },
        "MUTE_MESSAGE": {
            "description": "මෙය පිරවීමෙන් වැලකෙන්න!.",
            "required": false,
            "value": "default"
        },
        "BLOCK_CHAT": {
            "description": "මෙය පිරවීමෙන් වැලකෙන්න!",
            "required": false,
            "value": "false"
        },
        "UNMUTE_MESSAGE": {
            "description": "මෙය පිරවීමෙන් වැලකෙන්න!",
            "required": false,
            "value": "default"
        },
        "BLOCK_MESSAGE": {
            "description": " මෙය පිරවීමෙන් වැලකෙන්න!",
            "required": false,
            "value": "default"
        },
        "UNBLOCK_MESSAGE": {
            "description": "මෙය පිරවීමෙන් වැලකෙන්න!.",
            "required": false,
            "value": "default"
        },
        "WORK_TYPE": {
            "description": "Maraya_BoT Working Type. ඔබ “public” භාවිතා කරන්නේ නම්, සෑම කෙනෙකුටම බොට් භාවිතා කළ හැකිය. වෙනත් ආකාරයකින් ඔබ “private” භාවිතා කරන්නේ නම්, ඔබේ බෝට්ව භාවිතා කළ හැක්කේ ඔබට පමණි.",
            "required": true,
            "value": "public"
        },
        "HEROKU_APP_NAME": {
            "description": " ඔබ ඉහත මුලින්ම දුන් නාමය සදහන් කරන්න.",
            "required": true
        },
        "DEBUG": {
            "description": "මෙය පිරවීමෙන් වැලකෙන්න!",
            "required": true,
            "value": "false"
        },
        "REMOVE_BG_API_KEY": {
            "description": "ඡායාරූප වල පසුබිම ඉවත් කරයි.මෙහි API KEY එක ගැනීමට මෙම Site එක තුලට පිවිසෙන්න https://remove.bg",
            "required": false
        },
        "ALIVE_MESSAGE": {
            "description": ".alive අණකිරීම කිරීමෙන් පසු එන දේ (මෙය ඔබට වෙනස් කල හැක..!)",
            "required": false,
            "value": "```I am Alive```\n\n```Coded By Maraya_BoT```"
        },
        "BAN_MESSAGE": {
            "description": "මෙය පිරවීමෙන් වැලකෙන්න!",
            "required": false,
            "value": "default"
        },
        "ADD_MESSAGE": {
            "description": "මෙය පිරවීමෙන් වැලකෙන්න!",
            "required": false,
            "value": "default"
        },
        "KICKME_MESSAGE": {
            "description": "මෙය පිරවීමෙන් වැලකෙන්න!",
            "required": false,
            "value": "default"
        },
        "PROMOTE_MESSAGE": {
            "description": "මෙය පිරවීමෙන් වැලකෙන්න!",
            "required": false,
            "value": "default"
        },
        "DEMOTE_MESSAGE": {
            "description": "මෙය පිරවීමෙන් වැලකෙන්න!",
            "required": false,
            "value": "default"
        },
        "AFK_MESSAGE": {
            "description": "මෙය පිරවීමෙන් වැලකෙන්න!",
            "required": false,
            "value": "default"
        },
        "GAN_IMAGE": {
            "description": "මෙය පිරවීමෙන් වැලකෙන්න!(මෙය වෙනස් කරන්න එපා).",
            "required": true,
            "value": "https://i.hizliresim.com/loUtAb.jpg"
        },
        "NO_ONLINE": {
            "description": "මෙය පිරවීමෙන් වැලකෙන්න!",
            "required": false,
            "value": "true"
        },
        "COFFEEHOUSE_API_KEY": {
            "description": "මෙය පිරවීමෙන් වැලකෙන්න!",
            "required": false,
            "value": "true"
        }
    },
    "addons": [{
      "plan": "heroku-postgresql"
    }],
    "buildpacks": [{
      "url": "heroku-community/apt"
      }]
  }
