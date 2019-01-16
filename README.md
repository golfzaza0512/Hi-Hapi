# TO DO Task
## สวัสดี งาน

### Add Card
`POST` /add
#### Request body
```json
{
            "size": "XL",
            "status": "TO DO",
            "device": "PC",
            "priority": "1",
            "cardName": "develop ocr",
            "ownerName" : ""
}
```
#### Response body
```json
{
    "status": 200,
    "message": "ถูกแล้วจ้า",
    "data": {
        "size": "XL",
        "status": "TO DO",
        "device": "PC",
        "cardName": "develop ocr",
        "priority": "1",
        "ownerName": "",
        "_id": "5c3f000e4050e94a606d27af"
    }
}
```


### List
`GET` /list

#### Response body
```json
[
    {
        "_id": "5c3ef45a89223349a03565b1",
        "size": "XL",
        "status": "TO DO",
        "device": "PC",
        "cardName": "develop ocr",
        "priority": "1",
        "ownerName": ""
    },
    {
        "_id": "5c3ef4f06b56f94ae8f653c7",
        "size": "XL",
        "status": "TO DO",
        "device": "PC",
        "cardName": "develop ocr",
        "priority": "1",
        "ownerName": "fast"
    },
    {
        "_id": "5c3ef4f56b56f94ae8f653c8",
        "size": "XL",
        "status": "TO DO",
        "device": "PC",
        "cardName": "develop ocr",
        "priority": "1",
        "ownerName": "golf"
    }
]
```

### update
`PUT` /update/{id}
#### Request body
```json
{
            "size": "s",
            "status": "Doing",
            "device": "PC",
            "priority": "2",
            "cardName": "develop ocr",
            "ownerName" : "hum"
}
```
#### Response body
```json
{
    "status": 200,
    "message": "เย้ !!!!!",
    "data": {
        "size": "s",
        "status": "Doing",
        "device": "PC",
        "cardName": "develop ocr",
        "priority": "2",
        "ownerName": "hum"
    }
}
```

### delete
`DELETE` /del/{id}
#### Response body
```json
{
    "status": 200,
    "message": "ไม่ทำแมร่งแล้ว เอาคืนไป๋ !!!!!!",
    "data": null
}
```
