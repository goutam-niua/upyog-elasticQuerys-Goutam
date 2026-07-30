PUT finance-national-dashboard
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
      "totalRevenueCollected": { "type": "long" },
      "totalAuditsCompleted": { "type": "integer" },
      "totalAudits": { "type": "integer" },
      "totalOutstandingDebt": { "type": "long" },
      "totalCurrentExpenditure": { "type": "long" },
      "totalInterestExpenses": { "type": "long" },
      "totalBills": { "type": "integer" },
      "pendingBills": { "type": "integer" },
      "totalFundBalance": { "type": "long" },
      "totalFundRequirement": { "type": "long" }
    }
  }
}



POST finance-national-dashboard/_delete_by_query
{
  "query": {
    "match_all": {}
  }
}


// To get the data for the last year of exact date if exists, you can use the following query:
GET finance-national-dashboard/_search
{
  "query": {
    "range": {
      "date": {
        "gte": "now-1y/d",
        "lte": "now-1y/d"
      }
    }
  }
}

// To get the data of totalRevenueCollected for the last year of exact date if exists, you can use the following query:
GET finance-national-dashboard/_search
{
  "size": 0,
  "aggs": {
    "Previous Year Revenue": {
      "filter": {
        "range": {
          "date": {
            "gte": "now-1y/d",
            "lte": "now-1y/d"
          }
        }
      },
      "aggs": {
        "Revenue": {
          "sum": {
            "field": "totalRevenueCollected"
          }
        }
      }
    }
  }
}