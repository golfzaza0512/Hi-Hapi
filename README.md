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
            "description": "develop ocr",
            "name" : ""
}
```
#### Response body
```json
{
    "status": 200,
    "message": "ถูกแล้วจ้า",
    "data": 
    [
        {
            "size": "XL",
            "status": "TO DO",
            "device": "PC",
            "priority": "1",
            "description": "develop ocr",
            "name" : "",
            "_id" : "5c3ee4f17efb52dae847270d"
        }
    ]
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
        "description": "develop ocr",
        "priority": "1",
        "name": ""
    },
    {
        "_id": "5c3ef4f06b56f94ae8f653c7",
        "size": "XL",
        "status": "TO DO",
        "device": "PC",
        "description": "develop ocr",
        "priority": "1",
        "name": "fast"
    },
    {
        "_id": "5c3ef4f56b56f94ae8f653c8",
        "size": "XL",
        "status": "TO DO",
        "device": "PC",
        "description": "develop ocr",
        "priority": "1",
        "name": "golf"
    }
]
```

### update
`PUT` /update/{description}
#### Request body
```json
{
            "size": "s",
            "status": "Doing",
            "device": "PC",
            "priority": "2",
            "description": "develop ocr",
            "name" : "hum"
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
        "description": "develop ocr",
        "priority": "2",
        "name": "hum"
    }
}
```

### delete
`DELETE` /del/{description}
#### Response body
```json
{
    "status": 200,
    "message": "ไม่ทำแมร่งแล้ว เอาคืนไป๋ !!!!!!",
    "data": null
}
```
