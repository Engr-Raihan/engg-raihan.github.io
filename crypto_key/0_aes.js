const CryptoJS = require("crypto-js");

const key = CryptoJS.enc.Utf8.parse('88c4d5784ce64e4face49121fb678166');
const _iv = CryptoJS.enc.Utf8.parse('1234567890123456'); // 128-bit IV
const text = "58bbb13c7e9876744da526266c258a4420c3a962d71464e79492cf15fa7d096f";

function encryptData(data) {
    const encrypted = CryptoJS.AES.encrypt(data, key, { iv: _iv });
    return encrypted.toString();
}

function decryptData(encryptedData) {
    const decrypted = CryptoJS.AES.decrypt(encryptedData, key, { iv: _iv });
    return decrypted.toString(CryptoJS.enc.Utf8);
}


const encrypted = encryptData(text);
console.log('Encrypted:', encrypted);
const decrypted = decryptData(encrypted);
console.log('Decrypted:', decrypted);
