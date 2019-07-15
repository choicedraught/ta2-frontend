import { action, debug, thunk } from 'easy-peasy';
export default {
    uid: "3534534653635",
    setUid: action((state,payload) => {
      console.log(debug(payload))
      state.uid = payload
    }),
    activeComp: "u1517",
    season: "1920",
    prettyDays: {
      "day_1": "Day One",
      "day_2": "Day Two"
    },
    clubs: {
      "CN" : {
        "clubName": "Claremont Nedlands",
        "clubLogoURL": "http://www.cncc.org.au/files/525/images/tiger_head.jpg",
        "clubHomeGround": ""
        },
      "SF" : {
        "clubName": "Subi Floreat",
        "clubLogoURL": "http://waca.wa.cricket.com.au/files/12/images/Club%20Logos/SFlogo.gif",
        "clubHomeGround": ""
      }, 
      "FR" : {
        "clubName": "Fremantle",
        "clubLogoURL": "https://mucc.com.au/wp-content/uploads/2017/04/logo-img-600x458.png",
        "clubHomeGround": ""
      },
      "WI" : {
        "clubName": "Wiletton",
        "clubLogoURL": "https://static.wixstatic.com/media/468312_0ceff7c9eef64987aa0f914d8ee5e199~mv2.png/v1/fill/w_510,h_518,al_c,q_80,usm_0.66_1.00_0.01/468312_0ceff7c9eef64987aa0f914d8ee5e199~mv2.webp",
        "clubHomeGround": ""
      },
      "WA" : {
        "clubName": "Wanneroo",
        "clubLogoURL": "https://pbs.twimg.com/profile_images/478071464185167872/mJeIJzXk_400x400.jpeg",
        "clubHomeGround": ""
      },
      "SP" : {
        "clubName": "South Perth",
        "clubLogoURL": "https://static.wixstatic.com/media/e741f3_377b4796ca4d44f382540222c14c118f~mv2.jpg/v1/fill/w_274,h_318,al_c,q_80,usm_0.66_1.00_0.01/SPCClogo_JPG.webp",
        "clubHomeGround": ""
      },
      "MG" : {
        "clubName": "Midland Guildford",
        "clubLogoURL": "http://waca.wa.cricket.com.au/files/12/images/Club%20Logos/MGlogo.gif",
        "clubHomeGround": ""
      },
      "ML" : {
        "clubName": "Mount Lawley",
        "clubLogoURL": "http://waca.wa.cricket.com.au/files/12/images/Club%20Logos/MLlogo.gif",
        "clubHomeGround": ""
      },
      "BM" : {
        "clubName": "Bayswater Morley",
        "clubLogoURL": "https://pbs.twimg.com/profile_images/499866543287590912/Rro8TJe6_400x400.png",
        "clubHomeGround": ""
      },
      "RM" : {
        "clubName": "Rockingham Mandurah",
        "clubLogoURL": "http://waca.wa.cricket.com.au/files/12/images/Club%20Logos/RMlogo.gif",
        "clubHomeGround": ""
      },
      "JO" : {
        "clubName": "Joondalup",
        "clubLogoURL": "http://waca.wa.cricket.com.au/files/12/images/Club%20Logos/JOlogo.gif",
        "clubHomeGround": ""
      },
      "PE" : {
        "clubName": "Perth",
        "clubLogoURL": "https://pbs.twimg.com/profile_images/929011609/Pcc_twitter_400x400.png",
        "clubHomeGround": ""
      },
      "SC" : {
        "clubName": "Scarborough",
        "clubLogoURL": "http://waca.wa.cricket.com.au/files/12/images/Club%20Logos/SClogo.gif",
        "clubHomeGround": ""
      },
      "GO" : {
        "clubName": "Gosnells",
        "clubLogoURL": "http://www.gosnellscc.org/files/527/images/logo_m.jpg",
        "clubHomeGround": ""
      },
      "UN" : {
        "clubName": "University",
        "clubLogoURL": "https://pbs.twimg.com/profile_images/378800000547432021/61cfab79654ba2652a65372fd66d64fc_400x400.jpeg",
        "clubHomeGround": ""
      },
      "ME" : {
        "clubName": "Melville",
        "clubLogoURL": "http://waca.wa.cricket.com.au/files/12/images/Club%20Logos/MElogo.gif",
        "clubHomeGround": ""
      },
      "TBA" : {
        "clubName": "To Be Announced",
        "clubLogoURL": "http://waca.wa.cricket.com.au/files/12/images/15085-wapc-website-banner-850x170px.jpg",
        "clubHomeGround": ""
      }
    },
    avset:
    {
      "3534534653635:prem:1920" : {
        "rounds": {
            "round_1" : {"day_1": "A"},
            "round_2" : {"day_1": "A"},
            "round_3" : {"day_1": "U"},
            "round_4" : {"day_1": "A"},
            "round_5" : {"day_1": "A","day_2":"U"},
            "round_6" : {"day_1": "M","day_2":"U"},
            "round_7" : {"day_1": "M","day_2":"U"},
            "round_8" : {"day_1": "A","day_2":"U"},
            "round_13" : {"day_1": "A","day_2":"U"},
            "round_14" : {"day_1": "A"}
            },
      }
    },
    setActiveComp: action((state,payload) => {
      state.activeComp = payload
    }),
    compAvailInsert: action((state,payload) => {
      // console.log(debug(payload));
      var availIndex = state.uid + ":" + state.activeComp + ":" + state.season
      state.avset[availIndex] = payload;
    }),
    availUpdate: action((state, payload) => {
      console.log(debug(payload));
      // console.log(debug(Object.keys(payload)[0]));
      // console.log(debug(Object.values(payload)[0]));
      // seems like you need to declare the state object and then add the value to it.
      var key = {} 
      key = Object.keys(payload)[0];
      var value = {} 
      value = Object.values(payload)[0];
      var avSetIndex = state.uid + ":" + state.activeComp + ":" + state.season
      state.avset[avSetIndex].rounds[key] = {};
      state.avset[avSetIndex].rounds[key] = value;
    }),
    compRounds: {
      "prem":
      {
        "name": "Premier",
        "rounds": {
          "prem:round_1:1920" : 
          {
            "roundName": "Round One",
            "days": 
              { "day_1" : "5/10/2019" },
            "type" : "fixture",
            "opposition" : "GO",
            "homeAwayInfo" : "H:A:H:A"
          },
          "prem:round_2:1920" : 
          {
            "roundName": "Round Two",
            "days": { "day_1" : "12/10/2019" },
            "type" : "fixture",
            "opposition" : "BM",
            "homeAwayInfo" : "A:H:A:H"
          },
          "prem:round_3:1920" :
          {
            "roundName": "Round Three",
    
            "days": { "day_1" : "13/10/2019" },
            "type" : "fixture",
            "opposition" : "SP",
            "homeAwayInfo" : "H:A:B:B"
          },
          "prem:round_4:1920" :
          {
            "roundName": "Round Four",
            "days": { "day_1" : "19/10/2019" },
            "type" : "fixture",
            "opposition" : "SF",
            "homeAwayInfo" : "A:H:A:H"
          },
          "prem:round_5:1920" :
          {
            "roundName": "Round Five",
            "days": { "day_1" : "26/10/2019", "day_2" : "2/11/2019" },
            "type" : "fixture",
            "opposition" : "ME",
            "homeAwayInfo" : "H:A:H:A"
          },
          "prem:round_6:1920" :
          {
            "roundName": "Round Six",
            "days": { "day_1" : "9/11/2019", "day_2" : "16/11/2019" },
            "type" : "fixture",
            "opposition" : "PE",
            "homeAwayInfo" : "H:A:H:A"
          },
          "prem:round_7:1920" :
          {
            "roundName": "Round Seven",
            "days": { "day_1" : "23/11/2019", "day_2" : "30/11/2019" },
            "type" : "fixture",
            "opposition" : "JO",
            "homeAwayInfo" : "A:H:A:H"
          },
          "prem:round_8:1920" :
          {
            "roundName": "Round Eight",
            "days": { "day_1" : "7/12/2019", "day_2" : "14/12/2019" },
            "type" : "fixture",
            "opposition" : "FR",
            "homeAwayInfo" : "H:A:H:A"
          },
          "prem:round_9:1920" :
          {
            "roundName": "Round Nine",
            "days": { "day_1" : "4/1/2020" },
            "type" : "fixture",
            "opposition" : "UN",
            "homeAwayInfo" : "A:H:A:H"
          },
          "prem:round_10:1920" :
          {
            "roundName": "Round Ten",
            "days": { "day_1" : "11/1/2020"},
            "type" : "fixture",
            "opposition" : "WI",
            "homeAwayInfo" : "H:A:H:A"
          },
          "prem:round_11:1920" :
          {
            "roundName": "Round Eleven",
            "days": { "day_1" : "18/1/2020" },
            "type" : "fixture",
            "opposition" : "SC",
            "homeAwayInfo" : "A:H:A:H"
          },
          "prem:round_12:1920" :
          {
            "roundName": "Round Twelve",
            "days": { "day_1" : "25/1/2020", "day_2" : "1/2/2020" },
            "type" : "fixture",
            "opposition" : "WA",
            "homeAwayInfo" : "H:A:H:A"
          },
          "prem:round_13:1920" :
          {
            "roundName": "Round Thirteen",
            "days": { "day_1" : "8/2/2020", "day_2" : "15/2/2020" },
            "type" : "fixture",
            "opposition" : "ML",
            "homeAwayInfo" : "A:H:A:H"
          },
          "prem:round_14:1920" :
          {
            "roundName": "Round Fourteen",
            "days": { "day_1" : "22/2/2020", "day_2" : "29/2/2020" },
            "type" : "fixture",
            "opposition" : "RM",
            "homeAwayInfo" : "A:H:A:H"
          },
          "prem:round_15:1920" :
          {
            "roundName": "Round Fifteen",
            "days": { "day_1" : "7/3/2020" },
            "type" : "fixture",
            "opposition" : "MG",
            "homeAwayInfo" : "H:A:H:A"
          },
          "prem:EF:1920" :
          {
            "roundName": "Elimination Final",
            "days": { "day_1" : "14/3/2020", "day_2" : "15/3/2020" },
            "type" : "fixture",
            "opposition" : "TBA",
            "homeAwayInfo" : "T:T:T:T"
          },
          "prem:SF:1920" :
          {
            "roundName": "Semi Final",
            "days": { "day_1" : "21/3/2020", "day_2" : "22/3/2020" },
            "type" : "fixture",
            "opposition" : "TBA",
            "homeAwayInfo" : "T:T:T:T"
          },
          "prem:GF:1920" :
          {
            "roundName": "Grand Final",
            "days": { "day_1" : "28/03/2020", "day_2" : "29/03/2020" },
            "type" : "fixture",
            "opposition" : "TBA",
            "homeAwayInfo" : "T:T:T:T"
          }
        }
      },
      "u1517":  {
        "name": "Under 15 & 17",
        "rounds": {
          "u1517:round_1:1920" : 
          {
            "roundName": "Round One",
            "days": 
              { "day_1" : "5/10/2019" },
            "type" : "fixture",
            "opposition" : "GO",
            "homeAwayInfo" : "H:A"
          },
          "u1517:round_2:1920" : 
          {
            "roundName": "Round Two",
            "days": { "day_1" : "12/10/2019" },
            "type" : "fixture",
            "opposition" : "BM",
            "homeAwayInfo" : "A:H"
          },
          "u1517:round_3:1920" :
          {
            "roundName": "Round Three",
    
            "days": { "day_1" : "13/10/2019" },
            "type" : "fixture",
            "opposition" : "SP",
            "homeAwayInfo" : "H:A"
          },
          "u1517:round_4:1920" :
          {
            "roundName": "Round Four",
            "days": { "day_1" : "19/10/2019" },
            "type" : "fixture",
            "opposition" : "SF",
            "homeAwayInfo" : "A:H"
          },
          "u1517:round_5:1920" :
          {
            "roundName": "Round Five",
            "days": { "day_1" : "26/10/2019", "day_2" : "2/11/2019" },
            "type" : "fixture",
            "opposition" : "ME",
            "homeAwayInfo" : "H:A"
          },
          "u1517:round_6:1920" :
          {
            "roundName": "Round Six",
            "days": { "day_1" : "9/11/2019", "day_2" : "16/11/2019" },
            "type" : "fixture",
            "opposition" : "PE",
            "homeAwayInfo" : "H:A"
          },
          "u1517:round_7:1920" :
          {
            "roundName": "Round Seven",
            "days": { "day_1" : "23/11/2019", "day_2" : "30/11/2019" },
            "type" : "fixture",
            "opposition" : "JO",
            "homeAwayInfo" : "A:H"
          },
          "u1517:round_8:1920" :
          {
            "roundName": "Round Eight",
            "days": { "day_1" : "7/12/2019", "day_2" : "14/12/2019" },
            "type" : "fixture",
            "opposition" : "FR",
            "homeAwayInfo" : "H:A"
          },
          "u1517:round_9:1920" :
          {
            "roundName": "Round Nine",
            "days": { "day_1" : "4/1/2020" },
            "type" : "fixture",
            "opposition" : "UN",
            "homeAwayInfo" : "A:H"
          },
          "u1517:round_10:1920" :
          {
            "roundName": "Round Ten",
            "days": { "day_1" : "11/1/2020"},
            "type" : "fixture",
            "opposition" : "WI",
            "homeAwayInfo" : "H:A"
          },
          "u1517:round_11:1920" :
          {
            "roundName": "Round Eleven",
            "days": { "day_1" : "18/1/2020" },
            "type" : "fixture",
            "opposition" : "SC",
            "homeAwayInfo" : "A:H"
          },
          "u1517:round_12:1920" :
          {
            "roundName": "Round Twelve",
            "days": { "day_1" : "25/1/2020", "day_2" : "1/2/2020" },
            "type" : "fixture",
            "opposition" : "WA",
            "homeAwayInfo" : "H:A"
          },
          "u1517:round_13:1920" :
          {
            "roundName": "Round Thirteen",
            "days": { "day_1" : "8/2/2020", "day_2" : "15/2/2020" },
            "type" : "fixture",
            "opposition" : "ML",
            "homeAwayInfo" : "A:H"
          },
          "u1517:round_14:1920" :
          {
            "roundName": "Round Fourteen",
            "days": { "day_1" : "22/2/2020", "day_2" : "29/2/2020" },
            "type" : "fixture",
            "opposition" : "RM",
            "homeAwayInfo" : "A:H"
          },
          "u1517:round_15:1920" :
          {
            "roundName": "Round Fifteen",
            "days": { "day_1" : "7/3/2020" },
            "type" : "fixture",
            "opposition" : "MG",
            "homeAwayInfo" : "H:A"
          },
          "u1517:EF:1920" :
          {
            "roundName": "Elimination Final",
            "days": { "day_1" : "14/3/2020", "day_2" : "15/3/2020" },
            "type" : "final",
            "opposition" : "TBA",
            "homeAwayInfo" : "T:T"
          },
          "u1517:SF:1920" :
          {
            "roundName": "Semi Final",
            "days": { "day_1" : "21/3/2020", "day_2" : "22/3/2020" },
            "type" : "final",
            "opposition" : "TBA",
            "homeAwayInfo" : "T:T"
          },
          "u1517:GF:1920" :
          {
            "roundName": "Grand Final",
            "days": { "day_1" : "28/03/2020", "day_2" : "29/03/2020" },
            "type" : "final",
            "opposition" : "TBA",
            "homeAwayInfo" : "T:T"
          }
        }
      },
      "t20":  {
        "name": "Twenty 20",
        "rounds": {
          "t20:round_1:1920" : 
          {
            "roundName": "Round One",
            "days": 
              { "day_1" : "1/12/2019" },
            "type" : "fixture",
            "opposition" : "BM",
            "homeAwayInfo" : "A"
          },
          "t20:round_2:1920" : 
          {
            "roundName": "Round Two",
            "days": 
              { "day_1" : "15/12/2019" },
            "type" : "fixture",
            "opposition" : "SC",
            "homeAwayInfo" : "H"
          },
          "t20:round_3:1920" : 
          {
            "roundName": "Round Three",
            "days": 
              { "day_1" : "21/12/2019" },
            "type" : "fixture",
            "opposition" : "RM",
            "homeAwayInfo" : "A"
          },
          "t20:QF:1920" : 
          {
            "roundName": "Qualifying Final",
            "days": 
              { "day_1" : "12/1/2020" },
            "type" : "final",
            "opposition" : "TBA",
            "homeAwayInfo" : "T"
          },
          "t20:GF:1920" : 
          {
            "roundName": "Grand Final",
            "days": 
              { "day_1" : "2/2/2020" },
            "type" : "final",
            "opposition" : "TBA",
            "homeAwayInfo" : "T"
          }
        }
      },
      "colts": {
        "name": "Colts",
        "rounds": {
          "colts:round_1:1920" : 
          {
            "roundName": "Round One",
            "days": 
              { "day_1" : "1/12/2019" },
            "type" : "fixture",
            "opposition" : "BM",
            "homeAwayInfo" : "A"
          },
          "colts:round_2:1920" : 
          {
            "roundName": "Round Two",
            "days": 
              { "day_1" : "15/12/2019" },
            "type" : "fixture",
            "opposition" : "SC",
            "homeAwayInfo" : "H"
          },
          "colts:round_3:1920" : 
          {
            "roundName": "Round Three",
            "days": 
              { "day_1" : "21/12/2019" },
            "type" : "fixture",
            "opposition" : "RM",
            "homeAwayInfo" : "A"
          },
          "colts:QF:1920" : 
          {
            "roundName": "Qualifying Final",
            "days": 
              { "day_1" : "5/1/2020" },
            "type" : "final",
            "opposition" : "TBA",
            "homeAwayInfo" : "T"
          },
          "colts:GF:1920" : 
          {
            "roundName": "Grand Final",
            "days": 
              { "day_1" : "2/2/2020" },
            "type" : "final",
            "opposition" : "TBA",
            "homeAwayInfo" : "T"
          }
        }
      }
    },
    getCompRounds: thunk(async (actions, payload) => {
            // In this example we call a service to save the todo
            // const savedCompRounds = await todoService.save(payload);

            // Then dispatch an action with the result to add it to our state
            // actions.compRoundsSaved(savedCompRounds);
    }),
    compRoundsSaved: action((state, payload)=>{
      state.compRounds.push(payload);
    })
}