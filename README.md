# TO DO TIMESHEET
## สวัสดีตารางเวลา

### List
`GET` /list

#### Response body
```json
{
    "status": 200,
    "message": "success",
    "data": [
        {
            "date": "2019-01-01",
            "timeIn": "08:30",
            "timeOut": "17:30",
            "description": "New Year's Day",
            "siteName": "ESV-22",
            "ot": "1 Hr"
        },
        {
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
            "date": "date",
            "timeIn": "string",
            "timeOut": "string",
            "description": "string",
            "siteName": "string",
            "ot": "string"
        
}
```