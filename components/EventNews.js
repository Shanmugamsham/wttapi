const events=[
    {
      "eventID": "E001",
      "eventName": "saudi smash 2024",
      "location": "China",
      "dates": {
        "startDate": "May 1, 2024",
        "endDate": "May 11, 2024"
      },
      "image": "https://example.com/images/saudi smash.jpg",
      "link":"https://www.saudismash.com/home",
      "prizeMoney": "2,000,0000"
      
    },{
        "eventName": "WTT Feeder series",
        "location": "China",
        "image": "https://example.com/images/wtt_feeder_series.jpg",
        "dates": {
          "startDate": "May 11, 2024",
          "endDate": "May 12, 2024",
        },
        "prizeMoney": "22,500"
      
    },{
        "eventName": "WTT Feeder series",
        "location": "China",
        "image": "https://example.com/images/wtt_feeder_series.jpg",
        "dates": {
          "startDate": "May 11, 2024",
          "endDate": "May 17, 2024",
        },
        "prizeMoney": "22,500"
      
    },{
        "eventName": "WTT Feeder series",
        "location": "Turkey",
        "image": "https://example.com/images/wtt_feeder_series.jpg",
        "dates": {
          "startDate": "May 11, 2024",
          "endDate": "May 17, 2024",
        },
        "prizeMoney": "22,500"
      
    }]

    exports.EventDetails=async (req, res) => {
    
        try {
          res.status(201).json({success:true,message:"event and news datas get successfully",events});
        } catch (err) {
          res.status(500).json({success:false,message:"server error"}); 
          
        }
      };
    