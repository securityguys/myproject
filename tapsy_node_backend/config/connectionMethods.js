const bcrypt = require('bcryptjs');
const randomstring = require('randomstring');
const fs = require("fs");
var jwt = require('jsonwebtoken');
const UserModel = require('../db/models').user;
const static = require('./staticValues');
const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
const ConnModel = require('../db/models').connection;
const vendorDetailMethods = require('../config/vendorDetailsMethod');
// const fetch = require('node-fetch');
// const redis = require('redis');
// const REDIS_PORT = process.env.PORT || 6379;
// const client = redis.createClient(REDIS_PORT);
const CryptoJS = require("crypto-js");
const helpers = {};




//-------------------------------------------------------------
//  new connection row create
//-------------------------------------------------------------
helpers.createNewConnRow = async(payload) => {
    console.log('customer create body data :.....................', payload);

    return ConnModel.create(payload).then(newRowData => {
        console.log('customer create data :.....................', newRowData.dataValues);
        // let payload1 = {
        //     vendor_id: payload.user_id
        // }
        // let createdVendorDetails = await vendorDetailMethods.createNewRow(payload1);

        // if (createdVendorDetails.status) {
        return { newData: newRowData.dataValues, status: true, err: null };
        // }
    }).catch(err => {
        console.log('customer create error :.....................', err);
        return { newData: null, status: false, err: err };
    });
}





//-------------------------------------------------------------
//  update connection row
//-------------------------------------------------------------
helpers.updateConnRow = async(payload) => {
    let updateData;

    if (payload.fcm_token) {
        updateData = {
            fcm_token: payload.fcm_token
        };
    } else if (payload.latitude && payload.longitude) {
        updateData = {
            latitude: payload.latitude,
            longitude: payload.longitude
        };
    }

    return ConnModel.update(updateData, {
        where: {
            user_id: payload.user_id,
            active: 1
        }
    }).then(updated => {
        return { newData: null, status: true, err: null };
    }).catch(err => {
        if (err && err.errors && err.errors.length > 0) {
            return { newData: null, status: false, err: err.errors[0].message };
        } else {
            return { newData: null, status: false, err: 'Something went wrong' };
        }
    });
}










module.exports = helpers;