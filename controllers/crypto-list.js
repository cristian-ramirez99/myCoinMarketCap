const { response } = require('express');
const axios = require('axios');

const getCryptoList = async (req, res = response) => {
  try {
    const config = {
      headers: {
        'X-CMC_PRO_API_KEY': process.env.API_KEY_COINMARKETCAP,
      },
    };
    await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', config)
      .then((respList) => {
        const list = respList.data.data;
        res.json({
          ok: true,
          cryptoList: list,
        });
      }).catch((error) => {
        res.status(500).send({ ok: false, msg: 'Coinmarketcap API failed', error });
      });
  } catch (error) {
    res.status(500).send({ ok: false, msg: 'Internal server Error' });
  }
};

const getCryptoTrending = async (req, res = response) => {
  try {
    const config = {
      headers: {
        'X-CMC_PRO_API_KEY': process.env.API_KEY_COINMARKETCAP,
      },
    };
    await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', config)
      .then((respList) => {
        const list = respList.data.data;
        res.json({
          ok: true,
          cryptoList: list,
        });
      }).catch((error) => {
        res.status(500).send({ ok: false, msg: 'Coinmarketcap API failed', error });
      });
  } catch (error) {
    res.status(500).send({ ok: false, msg: 'Internal server Error' });
  }
};

module.exports = {
  getCryptoList,
  getCryptoTrending,
};
