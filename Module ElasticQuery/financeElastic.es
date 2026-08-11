PUT /finance-national-dashboard
{
  "mappings": {
    "properties": {
      "accountHead": {
        "type": "keyword"
      },
      "amount": {
        "type": "long"
      },
      "approvedBy": {
        "type": "keyword"
      },
      "balance": {
        "type": "long"
      },
      "bankAccount": {
        "type": "keyword"
      },
      "createdBy": {
        "type": "keyword"
      },
      "createdTime": {
        "type": "long"
      },
      "credit": {
        "type": "long"
      },
      "date": {
        "type": "date",
        "format": "dd-MM-yyyy||epoch_millis"
      },
      "debit": {
        "type": "long"
      },
      "department": {
        "type": "keyword"
      },
      "description": {
        "type": "text"
      },
      "fund": {
        "type": "keyword"
      },
      "fundSource": {
        "type": "keyword"
      },
      "instrumentNumber": {
        "type": "keyword"
      },
      "lastModifiedBy": {
        "type": "keyword"
      },
      "lastModifiedTime": {
        "type": "long"
      },
      "module": {
        "type": "keyword"
      },
      "payeePayer": {
        "type": "keyword"
      },
      "paymentMode": {
        "type": "keyword"
      },
      "pendingBills": {
        "type": "integer"
      },
      "postingDate": {
        "type": "date",
        "format": "dd-MM-yyyy||epoch_millis"
      },
      "receiptNumber": {
        "type": "keyword"
      },
      "referenceNumber": {
        "type": "keyword"
      },
      "region": {
        "type": "keyword"
      },
      "schemeProject": {
        "type": "keyword"
      },
      "state": {
        "type": "keyword"
      },
      "status": {
        "type": "keyword"
      },
      "subScheme": {
        "type": "keyword"
      },
      "timestamp": {
        "type": "date"
      },
      "totalAudits": {
        "type": "integer"
      },
      "totalAuditsCompleted": {
        "type": "integer"
      },
      "totalBills": {
        "type": "integer"
      },
      "totalCurrentExpenditure": {
        "type": "long"
      },
      "totalFundBalance": {
        "type": "long"
      },
      "totalFundRequirement": {
        "type": "long"
      },
      "totalInterestExpenses": {
        "type": "long"
      },
      "totalOutstandingDebt": {
        "type": "long"
      },
      "totalRevenueCollected": {
        "type": "long"
      },
      "transactionDate": {
        "type": "date",
        "format": "dd-MM-yyyy||epoch_millis"
      },
      "transactionTime": {
        "type": "keyword"
      },
      "ulb": {
        "type": "keyword"
      },
      "voucherId": {
        "type": "keyword"
      },
      "voucherType": {
        "type": "keyword"
      },
      "ward": {
        "type": "keyword"
      }
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