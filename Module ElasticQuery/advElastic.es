PUT adv-national-dashboard
{
  "mappings": {
    "properties": {
      "date": { "type": "date", "format": "dd-MM-yyyy||epoch_millis" },
      "module": { "type": "keyword" },
      "ward": { "type": "keyword" },
      "ulb": { "type": "keyword" },
      "region": { "type": "keyword" },
      "state": { "type": "keyword" },
      "createdBy": { "type": "keyword" },
      "createdTime": { "type": "long" },
      "lastModifiedBy": { "type": "keyword" },
      "lastModifiedTime": { "type": "long" },
      "timestamp": { "type": "date" },
      "previousYearRevenue": { "type": "long" },
      "currentFYCollection": { "type": "long" },
      "totalApplicationsReceived": { "type": "integer" },
      "totalApplicationsRejected": { "type": "integer" },
      "totalApplicationApproved": { "type": "long" },
      "paymentChannelType": {
        "type": "text",
        "fields": {
          "keyword": { "type": "keyword", "ignore_above": 256 }
        }
      },
      "transactionsForPaymentChannelType": { "type": "long" }
    }
  }
}



GET adv-national-dashboard/_search
{
  "size": 100,
  "query": {
    "match_all": {}
  }
}
