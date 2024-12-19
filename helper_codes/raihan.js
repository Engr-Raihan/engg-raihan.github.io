const ob = ``
ob.split(',').map(c => {
    console.log(`"${c.trim()}",`)
})




// // Example original object (provided by you)
// const originalObject = {
//     "ItemId": "1d2906af-a4a6-4899-876d-b012abe48c31",
//     "CreateDate": "2024-11-13T07:44:09.196Z",
//     "Name": "Test Certirficate 1",
//     "OrganizationId": "0df95044-9083-450f-ae2b-771614c1f7a2",
//     "IssueDate": "2024-11-13T00:00:00Z",
//     "ExpiryDate": "2024-11-30T00:00:00Z",
//     "PublishDate": null,
//     "Comment": null,
//     "ReferenceNumber": null,
//     "IssuingPlace": "dhaka",
//     "TransactionHash": null,
//     "Status": {
//         "Status": "draft",
//         "UpdatedDate": null,
//         "PersonInfo": {
//             "Salutaion": "",
//             "FirstName": "Tenant 1",
//             "LastName": "Admin",
//             "DisplayName": "Tenant 001 Admin",
//             "Address": "",
//             "StreetAddress": "",
//             "StreetNo": "",
//             "PostCode": "",
//             "City": "",
//             "Country": "",
//             "CountryCode": "",
//             "Latitude": null,
//             "Longitude": null,
//             "Canton": "",
//             "Email": "magtadmin@yopmail.com",
//             "PhoneNumber": "+8801676657517",
//             "PersonId": "de51974c-b819-4339-a140-ff5ed858e06d",
//             "UserId": "3c739377-54c4-437e-841e-0d8f6afd65d6"
//         }
//     },
//     "CertificateInfo": {
//         "ItenId": null,
//         "Name": "Welcome to magnet.hub.pdf",
//         "Type": "pdf",
//         "Size": null,
//         "FileId": "3bbd5999-8aff-4951-bb69-266cb1434c1c",
//         "DownloadLink": "https://smartcityfalcon.blob.core.windows.net/public-dev/A0068B42-BE66-409B-BD63-83D576308F9A/3bbd5999-8aff-4951-bb69-266cb1434c1c/a7414301-edf2-460b-a449-c25ee0eee741/Welcome%20to%20magnet.hub.pdf"
//     }
// };

// // Dynamic list of field objects
// const fieldList = [
//     { FieldName: 'Cert_Name', FieldCaption: 'Certificate_Name', ValueType: 'text', Value: 'Name' },
//     { FieldName: 'Cert_Status', FieldCaption: 'Certificate_Status', ValueType: 'text', Value: 'Status.Status' },
//     { FieldName: 'Cert_IssueDate', FieldCaption: 'Certificate_IssueDate', ValueType: 'date', Value: 'IssueDate' },
//     { FieldName: 'Cert_ExpiryDate', FieldCaption: 'Certificate_ExpiryDate', ValueType: 'date', Value: 'ExpiryDate' },
//     { FieldName: 'Cert_PublishDate', FieldCaption: 'Certificate_PublishDate', ValueType: 'date', Value: 'PublishDate' },
//     { FieldName: 'Cert_Comment', FieldCaption: 'Certificate_Comment', ValueType: 'text', Value: 'Comment' },
//     { FieldName: 'Cert_ReferenceNumber', FieldCaption: 'Certificate_ReferenceNumber', ValueType: 'number', Value: 'ReferenceNumber' },
//     { FieldName: 'Cert_File_Name', FieldCaption: 'Certificate_File_Name', ValueType: 'text', Value: 'CertificateInfo.Name' },
//     { FieldName: 'Cert_File_Url', FieldCaption: 'Certificate_File_Url', ValueType: 'text', Value: 'CertificateInfo.DownloadLink' }
// ];

// // Function to get a value from a nested object using a path (string)
// function getValueFromPath(obj, path) {
//     return path.split('.').reduce((acc, part) => acc && acc[part], obj);
// }

// // Update the 'Value' property of each object in the field list
// fieldList.forEach(field => {
//     field.Value = getValueFromPath(originalObject, field.Value);
// });

// // Output the updated field list
// console.log(fieldList);





// let date = new Date();
// console.log(date.getFullYear());
// console.log(date.toDateString());
// console.log(new Date(date.setDate(date.getDate() + 1)));
// console.log(new Date().toISOString().split('.')[0]?.replace(/-/g, '')?.replace(/:/g, ''));
// console.log(date.getFullYear());
// console.log(date.getMonth() + 1);
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());

// let name = '10-12-2013'
// let newname = name.replace(/-/g, '_');
// console.log(newname);


// function extractKey(str) {
//     // Use a regex to match '/verify/' followed by any sequence of characters at the end of the string
//     const match = str.match(/\/verify\/([^\/]+)$/);

//     // If a match is found, return the key; otherwise return null
//     return match ? match[1] : null;
// }

// // Example
// const url = "http://magnethub.seliselocal.com:4200/verify/XYZ@123 ABC";
// const key = extractKey(url);

// if (key) {
//     console.log(`The key is: ${key}`);  // Outputs: The key is: XYZ123
// } else {
//     console.log('No key found in the given string.');
// }

// import OpenAI from 'openai';

// const openai = new OpenAI({
//     apiKey: "anything",
//     baseURL: "http://localhost:3040/v1",
// });

// const chatCompletion = await openai.chat.completions.create({
//     messages: [{ role: 'user', content: 'Tell me a Jok' }],
//     model: 'gpt-3.5-turbo',
// });

// console.log(chatCompletion.choices[0].message.content);

// let languages = {
//     en: "English",
//     fr: "French",
//     de: "German",
//     it: "Italian",
//     ms: "Malay",
//     pl: "Polish",
//     es: "Spanish",
//     tr: "Turkish"
// };

// console.log('languages = [')
// Object.keys(languages).forEach(m => {
//     console.log(`{
//             language_name: ${languages[m]},
//             full_key = '${m}-'
//             short_key = ${m},
//         },`)
// })
// console.log(']')

// let db_prop = {
//     "CreatedBy": null,
//     "Language": "en-US",
//     "LastUpdatedBy": null,
//     "Tags": [],
//     "IsMarkedToDelete": false,
//     "Name": "Test Group 101",
//     "QueryString": "{'RegisteredUserPhoneNumber': /8801771614053/i}",
//     "AssignedTag": "TG101",
//     "GroupCurrentStatusInfo": {
//         "CurrentStatus": "Active",
//         "StatusPersonInfo": "Engr. Raihan Mahamud",
//     },
//     "LastSyncDate": null,
//     "SyncStatus": 0,
//     "MemberCount": null,
//     "QueryObject": "[{\"ItemId\":\"5c1f8f03-2901-4a9b-bb41-e0ee652078ab\",\"SegmentName\":\"Segment 1\",\"CriteriaList\":[{\"FieldKey\":\"RegisteredUserPhoneNumber\",\"FieldName\":\"RegisteredUserPhoneNumber\",\"FieldType\":\"text\",\"FieldOperator\":\"Contains\",\"FieldValue\":\"8801771614053\"}]}]"
// }


// Object.keys(db_prop).forEach(o => {
// console.log(`"${o}",`)
// console.log(`{
//         "ColumnName" : "${o}",
//         "Permissions" : [
//             "tenant_admin",
//             "admin"
//         ]
//     },`)
// })


// async function processText(inputText) {
//     const apiKey = 'YOUR_HUGGINGFACE_API_KEY';
//     const model = 'gpt-3.5-turbo';

//     const response = await fetch(`https://api-inference.huggingface.co/models/${model}`, {
//         method: 'POST',
//         headers: {
//             'Authorization': `Bearer ${apiKey}`,
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             inputs: inputText,
//             parameters: { max_length: 50, num_return_sequences: 1 }
//         })
//     });

//     const result = await response.json();
//     return result[0]['generated_text'];
// }

// const userInput = prompt("Enter your question or sentence:");

// processText(userInput).then(result => console.log(result)).catch(err => console.error(err));



// import { AutoTokenizer } from '@xenova/transformers';

// const tokenizer = await AutoTokenizer.from_pretrained('Xenova/gpt-3.5-turbo-16k');
// const tokens = tokenizer.encode('hello world'); // [15339, 1917]


// const { AutoTokenizer } = require('@xenova/transformers')
// const {fetch} = require('node-fetch')

// const main = async () => {
//     const tokenizer = await AutoTokenizer.from_pretrained('Xenova/gpt-3.5-turbo-16k');
//     console.log(tokenizer.encode('hello world'));
// }

// main()