var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/iMOD');

var db = mongoose.connection;

db.on('error', function () {
  console.log('mongoose connection error');
});

db.once('open', function () {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  id: {
    type: Number,
  },
  car: {
    type: Object,
  },
});

var Item = mongoose.model('Item', itemSchema);

var selectAll = function (callback) {
  Item.find({}, function (err, items) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

const records = [
  {
    id: 1,
    info: {
      name: 'EVO',
      pic: 'https://xxxxxxxyyy.s3-us-west-1.amazonaws.com/cars/1evo.jpeg',
      wheel: 'BBS',
      wheelPic: 'https://xxxxxxxyyy.s3-us-west-1.amazonaws.com/cars/BBS.jpeg',
      sTire: '595rs-rr',
      tTire: 're71r',
      coilover: 'KW',
      coiloverPic: 'https://xxxxxxxyyy.s3-us-west-1.amazonaws.com/cars/coilover_01.jpg',
      turbo: 'HKS',
      turboPic: 'https://xxxxxxxyyy.s3-us-west-1.amazonaws.com/cars/turbo_03.jpg',
      charger: 'Procharger',
      chargerPic: 'https://xxxxxxxyyy.s3-us-west-1.amazonaws.com/cars/charger_01.jpeg',
      spoiler: 'Votex',
      spoilerPic: 'https://xxxxxxxyyy.s3-us-west-1.amazonaws.com/cars/spoiler_02.jpg'
    }
  },
  {
    id: 2,
    info: {
      name: 'STI',
      pic: 'https://xxxxxxxyyy.s3-us-west-1.amazonaws.com/cars/2STI.jpeg',
      wheel: 'SSR',
      wheelPic: 'https://xxxxxxxyyy.s3-us-west-1.amazonaws.com/cars/SSR.jpeg',
      sTire: 'ps4s',
      tTire: 'cup2',
      coilover: 'BC',
      coiloverPic: 'https://xxxxxxxyyy.s3-us-west-1.amazonaws.com/cars/coilover_02.jpeg',
      turbo: 'HKS',
      turboPic: 'https://xxxxxxxyyy.s3-us-west-1.amazonaws.com/cars/turbo_01.jpeg',
      charger: 'Paxton',
      chargerPic: 'https://xxxxxxxyyy.s3-us-west-1.amazonaws.com/cars/charger_02.jpg',
      spoiler: 'NRG',
      spoilerPic: 'https://xxxxxxxyyy.s3-us-west-1.amazonaws.com/cars/spoiler_03.jpg'
    }
  },

  {
    id: 3,
    info: {
      name: 'TypeR FK8',
      pic: 'https://xxxxxxxyyy.s3-us-west-1.amazonaws.com/cars/3TypeRFk8.jpeg',
      wheel: 'BBS',
      wheelPic: 'https://xxxxxxxyyy.s3-us-west-1.amazonaws.com/cars/BBS.jpeg',
      sTire: 'ps4s',
      tTire: 're71r',
      coilover: 'KW',
      coiloverPic: 'https://xxxxxxxyyy.s3-us-west-1.amazonaws.com/cars/coilover_02.jpg',
      turbo: 'ATS',
      turboPic: 'https://xxxxxxxyyy.s3-us-west-1.amazonaws.com/cars/turbo_03.jpg',
      charger: 'Jackson Racing',
      chargerPic: 'https://xxxxxxxyyy.s3-us-west-1.amazonaws.com/cars/charger_01.jpeg',
      spoiler: 'Votex',
      spoilerPic: 'https://xxxxxxxyyy.s3-us-west-1.amazonaws.com/cars/spoiler_02.jpg'
    }
  },
  {
    id: 4,
    info: {
      name: 'Honda EK9',
      pic: 'https://xxxxxxxyyy.s3-us-west-1.amazonaws.com/cars/4EK9.jpeg',
      wheel: 'Enkei',
      wheelPic: 'https://xxxxxxxyyy.s3-us-west-1.amazonaws.com/cars/ENKEI.jpeg',
      sTire: 'p0',
      tTire: 're71r',
      coilover: 'KW',
      coiloverPic: 'https://xxxxxxxyyy.s3-us-west-1.amazonaws.com/cars/coilover_03.jpeg',
      turbo: 'Garrett',
      turboPic: 'https://xxxxxxxyyy.s3-us-west-1.amazonaws.com/cars/turbo_02.jpg',
      charger: 'Paxton',
      chargerPic: 'https://xxxxxxxyyy.s3-us-west-1.amazonaws.com/cars/charger_03.jpg',
      spoiler: 'Seibon',
      spoilerPic: 'https://xxxxxxxyyy.s3-us-west-1.amazonaws.com/cars/spoiler_01.jpeg'
    }
  },
  {
    id: 5,
    info: {
      name: ' Honda S2000',
      pic: 'https://xxxxxxxyyy.s3-us-west-1.amazonaws.com/cars/5S2000.png',
      wheel: 'SSR',
      wheelPic: 'https://xxxxxxxyyy.s3-us-west-1.amazonaws.com/cars/SSR.jpeg',
      sTire: 'ps4s',
      tTire: 're71r',
      coilover: 'Ohllins',
      coiloverPic: 'https://xxxxxxxyyy.s3-us-west-1.amazonaws.com/cars/coilover_03.jpeg',
      turbo: 'Garrett',
      turboPic: 'https://xxxxxxxyyy.s3-us-west-1.amazonaws.com/cars/turbo_02.jpg',
      charger: 'Procharger',
      chargerPic: 'https://xxxxxxxyyy.s3-us-west-1.amazonaws.com/cars/charger_02.jpg',
      spoiler: 'NRG',
      spoilerPic: 'https://xxxxxxxyyy.s3-us-west-1.amazonaws.com/cars/spoiler_03.jpg'
    }
  },
  {
    id: 6,
    info: {
      name: 'Mazda RX7',
      pic: 'https://xxxxxxxyyy.s3-us-west-1.amazonaws.com/cars/6RX7.jpeg',
      wheel: 'BBS',
      wheelPic: 'https://xxxxxxxyyy.s3-us-west-1.amazonaws.com/cars/BBS.jpeg',
      sTire: '595RS-RR',
      tTire: 'cup2',
      coilover: 'ATS',
      coiloverPic: 'https://xxxxxxxyyy.s3-us-west-1.amazonaws.com/cars/coilover_02.jpeg',
      turbo: 'HKS',
      turboPic: 'https://xxxxxxxyyy.s3-us-west-1.amazonaws.com/cars/turbo_01.jpeg',
      charger: 'Paxton',
      chargerPic: 'https://xxxxxxxyyy.s3-us-west-1.amazonaws.com/cars/charger_02.jpg',
      spoiler: 'APR',
      spoilerPic: 'https://xxxxxxxyyy.s3-us-west-1.amazonaws.com/cars/spoiler_01.jpeg'
    }
  }
];

// for (let i = 0; i < (records.length); i += 1) {
//   const database = new Item({
//     id: i+1,
//     car: records[i].info
//   })

//   database.save((err) => {
//     if (err) {
//       console.log('db did not save');
//     } else {
//       console.log('saved')
//     }
//   });
// }


module.exports.selectAll = selectAll;