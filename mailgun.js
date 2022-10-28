require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.NODE_PORT || 7000;

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const api_key = 'f40648711c3b18428e6be43ccce339ee-8845d1b1-b5f6f7c5'
const domain = 'sandbox49092c154871499a8df0175d2419c685.mailgun.org';
// var domain = 'www.mydomain.com';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
var data = {
  from: 'Abdullah Mailgun Test <mdalibd511@gmail.com>',
  to: 'maabdullah511@gmail.com',
  subject: 'Islami Flow Account Create Successfully',
  text: 'Testing some Mailgun awesomenesThe Tide and Flow of Islam” (Madd-o-Jazr-i Islām), Alt̤āf Ḥusayn Ḥālī’s main  poem, articulates the poet’s political views and expresses his aesthetic aspi-  rations. It is not an overstatement to characterize this poem as a poetical  embodiment of the thoughts and feelings of Muslim enlighteners in the last  third of the nineteenth century—those who shared the ideas of Sir Sayyid  Aḥmad K̲h̲ān (1817–98), a prominent Muslim enlightener and reformer of his  time. Sir Sayyid was the leader of the Aligarh-based bourgeois national refor- mation movement of Muslim intellectuals in India, commonly referred to as the Aligarh Enlightenment. The Aligarh movement sought to synthesize the attainments of the West and the cultural heritage of India, to reform Islam  through interpreting the Koran in the spirit of rationalism and adaptation to  the latest achievements of science, to explain the laws of Islam in the mod-ern context. Sir Sayyid attached primary importance to education and tried to radically change the Muslim community’s approach to knowledge (ʿilm). His dream was to develop a form of education among Indian Muslims that would enable them and education inherited from great Islamic thinkers and  the intellectual achievements of the European West. Advocates of orthodox views and patriotic-minded radical circles of Muslim intellectuals sharing the growing anticolonial sentiments took the most critical position with regard to Sayyid Aḥmad K̲h̲ān and his movement. They labeled Sir Sayyid a British henchman who defied the ancestors’ traditions. Clergymen and Islamic theo-logians opposed the ideas and actions of Sayyid Aḥmad K̲h̲ān with particular vigor because his religious views were inconsistent with traditional Islamic dogmas. On the one hand his views were based on Muslim education, and on the other his sober prudence and awareness of the European mode of thinking and a hope for attaining it.s!'
};
 
mailgun.messages().send(data, function (error, body) {
  console.log(body);
});

// database connection 
const db = require('./api/models');
db.mongoose.connect(db.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: false 
})
  .then(() => { console.log('connection successfull') })
  .catch(() => { console.log('connection Failed') })
 const auth = require('./api/controllers/AuthController');
// link with route
// app.post('/api/signup', auth.signin);
require('./api/routes')(app);
// listen port 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
