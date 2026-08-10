PUT chb-national-dashboard
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
      "totalActiveVenueAvailable": { "type": "integer" },
      "totalApplicationReceived": { "type": "integer" },
      "totalCollections": { "type": "long" },
      "noShowBookings": { "type": "integer" },
      "bookingStatus": {
        "type": "text",
        "fields": {
          "keyword": { "type": "keyword", "ignore_above": 256 }
        }
      },
      "bookingsForBookingStatus": { "type": "long" },
      "bookingMode": {
        "type": "text",
        "fields": {
          "keyword": { "type": "keyword", "ignore_above": 256 }
        }
      },
      "bookingTypeForBookingMode": { "type": "long" }
    }
  }
}

DELETE chb-national-dashboard


GET chb-national-dashboard/_search
{
  "size": 100,
  "query": {
    "match_all": {}
  }
}



// To get the approved applications
GET chb-national-dashboard/_search
{
  "size": 0,
  "aggs": {
    "Module": {
      "terms": {
        "field": "module"
      },
      "aggs": {
        "Approved": {
          "filter": {
            "term": {
              "bookingStatus.keyword": "Approved"
            }
          },
          "aggs": {
            "Approved Bookings": {
              "sum": {
                "field": "bookingsForBookingStatus"
              }
            }
          }
        }
      }
    }
  }
}