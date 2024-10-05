 const liveScores = [
  {
    "matchID": "M001",
    "eventName": " WTT Youth Contender Spa 2024",
    "image": "https://example.com/images/WTT_Youth_Contender.jpg",
    "dates": {
      "startDate": "APR 22, 2024",
      "endDate": "AOR 28, 2024"
    },
    "status": "Ongoing", 
    "prizeMoney": "1000", 
    "livePlatforms": ["YouTube"] 
  }, {
    "matchID": "M002",
    "eventName": "WTT Feeder series",
    "image": "https://example.com/images/WTT Feeder series.jpg",
    "dates": {
      "startDate": "APR 22, 2024",
      "endDate": "APR 30, 2024"
    },
    "status": "pending", 
    "prizeMoney": "1000", 
    "livePlatforms": ["YouTube","Twitch"] 
  }
];


exports.LiveDetails=async (req, res) => {
    
    try {
      res.status(201).json({success:true,message:"Livedata get successfully",liveScores});
    } catch (err) {
      res.status(500).json({success:false,message:"server error"}); 
      
    }
  };
