using System.Security.Cryptography;
using System.Text;

string EncryptStringAES(string plainText, string key, string iv)
{
    byte[] keyBytes = Encoding.UTF8.GetBytes(key);
    byte[] ivBytes = Encoding.UTF8.GetBytes(iv);

    using (Aes aesAlg = Aes.Create())
    {
        aesAlg.Key = keyBytes;
        aesAlg.IV = ivBytes;
        ICryptoTransform encryptor = aesAlg.CreateEncryptor(aesAlg.Key, aesAlg.IV);

        using (MemoryStream msEncrypt = new MemoryStream())
        {
            using (CryptoStream csEncrypt = new CryptoStream(msEncrypt, encryptor, CryptoStreamMode.Write))
            {
                using (StreamWriter swEncrypt = new StreamWriter(csEncrypt))
                {
                    swEncrypt.Write(plainText);
                }
            }
            return Convert.ToBase64String(msEncrypt.ToArray());
        }
    }
}


string DecryptStringAES(string cipherText, string key, string iv)
{
    byte[] keyBytes = Encoding.UTF8.GetBytes(key);
    byte[] ivBytes = Encoding.UTF8.GetBytes(iv);
    byte[] cipherTextBytes = Convert.FromBase64String(cipherText);

    using (Aes aesAlg = Aes.Create())
    {
        aesAlg.Key = keyBytes;
        aesAlg.IV = ivBytes;
        ICryptoTransform decryptor = aesAlg.CreateDecryptor(aesAlg.Key, aesAlg.IV);

        using (MemoryStream msDecrypt = new MemoryStream(cipherTextBytes))
        {
            using (CryptoStream csDecrypt = new CryptoStream(msDecrypt, decryptor, CryptoStreamMode.Read))
            {
                using (StreamReader srDecrypt = new StreamReader(csDecrypt))
                {
                    return srDecrypt.ReadToEnd();
                }
            }
        }
    }
}

string key = "88c4d5784ce64e4face49121fb678166"; // 128-bit key
//string key = "1234567890123456"; // 128-bit key
string iv = "1234567890123456"; // 128-bit IV

string encrypted = EncryptStringAES("0x01a7e4cf5966d341daa11cb0dfc1a2a879a881b9b1a59eb18fe4be61a341465a", key, iv);
Console.WriteLine("Encrypted: " + encrypted);

//string encrypted1 = "EkTcxuA91LYjgxtAzAlIoLH7MkWaHCobRzHFixRK8UBqwf0nCcZypr+U5/xevU5MAxZeC5fycXocu1ZRc3S2m4D2JpdJcIffGh1+tB5msl8=";
string decrypted = DecryptStringAES(encrypted, key, iv);
Console.WriteLine("Decrypted: " + decrypted);
