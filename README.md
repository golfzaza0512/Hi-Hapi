# TO DO TIMESHEET
## สวัสดีตารางเวลา

### List
`GET` /list

#### Response body
```json
{
    "status": 200,
    "message": "success",
    "data":
    [
        {
            "_id": "5c3ee4f17efb52dae847270d",
            "date": "2019-01-01",
            "timeIn": "08:30",
            "timeOut": "17:30",
            "description": "New Year's Day",
            "siteName": "ESV-22",
            "ot": "1 Hr"
        },
        {
            "_id": "5c3ee4f17efb52dae847270d",
            "date": "2019-01-02",
            "timeIn": "08:30",
            "timeOut": "17:30",
            "description": "Support OCR",
            "siteName": "ESV-22",
            "ot": "--"
        }
    ]
}
```

### Add Timesheet 
`POST` /add
#### Request body
```json
{
            "date": "2019-01-01",
            "timeIn": "08:30",
            "timeOut": "17:30",
            "description": "New Year's Day",
            "siteName": "ESV-22",
            "ot": "1 Hr"
}
```
#### Response body
```json
{
    "status": 200,
    "message": "success",
    "data": 
    [
        {
            "date": "2019-01-01",
            "timeIn": "08:30",
            "timeOut": "17:30",
            "description": "New Year's Day",
            "siteName": "ESV-22",
            "ot": "1 Hr",
            "_id": "5c3ee4f17efb52dae847270d"
        }
    ]
}
```


### update
`PUT` /update/{date}
#### Request body
```json
{
            "date": "2019-01-01",
            "timeIn": "08:30",
            "timeOut": "17:30",
            "description": "New Year's Day",
            "siteName": "ESV-22",
            "ot": "1 Hr"
}
```
#### Response body
```json
{
            "date": "2019-01-01",
            "timeIn": "08:30",
            "timeOut": "17:30",
            "description": "New Year's Day",
            "siteName": "ESV-22",
            "ot": "1 Hr"
}
```

### delete
`DELETE` /del/{date}
#### Response body
```json
{
    "status": 200,
    "message": "ลบได้เว้ยยยยยยย",
    "data": null
}
```
