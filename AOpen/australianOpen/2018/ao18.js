/**
* Change content
* - Empty Element .ao18-container
* - Replace it with HTML
* - Apply Javascript data event
*/

(function() {
  'use strict';
  
  
  var weekday = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];
  var eventCalendarList = [
    // 15 Jan
    [
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPENRLA18/venues/RLA/performances/EMAO2018615/tickets'
      },
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '7.00pm'}], 
        'link': '/events/AOPENRLA18/venues/RLA/performances/EMAO2018615N/tickets'
      },
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'First Week', 
        'multiSession': 'Multi-session 15-18 Jan',
        'schedule': [{'time': '11.00am'}],
        'link': '/seriesevents/EMAO0000018PA/tickets'
      },
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'First Week', 
        'multiSession': 'Multi-session 15-18 Jan',
        'schedule': [{'time': '7.00pm'}],
        'link': '/seriesevents/EMAO0000018PB/tickets'
      },
      {  
        'venueCode': 'MCO',
        'venue': 'Margaret Court Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPENMCO18/venues/MCO/performances/EMAO2018615M/tickets'
      },
      {  
        'venueCode': 'MCO',
        'venue': 'Margaret Court Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '7.00pm'}],
        'link': '/events/AOPENMCO18/venues/MCO/performances/EMAO2018615MN/tickets'
      },
      {  
        'venueCode': 'MCO',
        'venue': 'Margaret Court Arena', 
        'session': 'First Week', 
        'multiSession': 'Multi-session 15-18 Jan',
        'schedule': [{'time': '11.00am'}],
        'link': '/seriesevents/EMAO0000018PK/tickets'
      },
      {  
        'venueCode': 'MCO',
        'venue': 'Margaret Court Arena', 
        'session': 'First Week', 
        'multiSession': 'Multi-session 15-18 Jan',
        'schedule': [{'time': '7.00pm'}],
        'link': '/seriesevents/EMAO0000018PL/tickets'
      },
      {
        'venueCode': 'VFA',
        'venue': 'Hisense Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPENVFA18/venues/VFA/performances/EMAO2018615V/tickets'
      },
      {
        'venueCode': 'MPK',
        'venue': 'Ground Pass', 
        'session': 'Single Day', 
        'multiSession': null,
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPENGP18/venues/MPK/performances/EMAO2018615GP/tickets'
      },
      {
        'venueCode': 'MPK',
        'venue': 'Ground Pass', 
        'session': 'Any 3 Day Ground Pass', 
        'multiSession': 'Multi-session excludes 20-21 Jan',
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPEN3DP18/venues/MPK/performances/EMAO0000183D/tickets'
      },
      {
        'venueCode': 'MPK',
        'venue': 'Ground Pass', 
        'session': 'Any 5 Day Ground Pass', 
        'multiSession': 'Multi-session excludes 20-21 Jan',
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPEN5DP18/venues/MPK/performances/EMAO0000185D/tickets'
      }
    ],
    // 16 Jan
    [
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPENRLA18/venues/RLA/performances/EMAO2018616/tickets'
      },
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '7.00pm'}], 
        'link': '/events/AOPENRLA18/venues/RLA/performances/EMAO2018616N/tickets'
      },
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'First Week', 
        'multiSession': 'Multi-session 15-18 Jan',
        'schedule': [{'time': '11.00am'}],
        'link': '/seriesevents/EMAO0000018PA/tickets'
      },
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'First Week', 
        'multiSession': 'Multi-session 15-18 Jan',
        'schedule': [{'time': '7.00pm'}],
        'link': '/seriesevents/EMAO0000018PB/tickets'
      },
      {  
        'venueCode': 'MCO',
        'venue': 'Margaret Court Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPENMCO18/venues/MCO/performances/EMAO2018616M/tickets'
      },
      {  
        'venueCode': 'MCO',
        'venue': 'Margaret Court Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '7.00pm'}],
        'link': '/events/AOPENMCO18/venues/MCO/performances/EMAO2018616MN/tickets'
      },
       {  
        'venueCode': 'MCO',
        'venue': 'Margaret Court Arena', 
        'session': 'First Week', 
        'multiSession': 'Multi-session 15-18 Jan',
        'schedule': [{'time': '11.00am'}],
        'link': '/seriesevents/EMAO0000018PK/tickets'
      },
      {  
        'venueCode': 'MCO',
        'venue': 'Margaret Court Arena', 
        'session': 'First Week', 
        'multiSession': 'Multi-session 15-18 Jan',
        'schedule': [{'time': '7.00pm'}],
        'link': '/seriesevents/EMAO0000018PL/tickets'
      },
      {
        'venueCode': 'VFA',
        'venue': 'Hisense Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPENVFA18/venues/VFA/performances/EMAO2018616V/tickets'
      },
      {
        'venueCode': 'MPK',
        'venue': 'Ground Pass', 
        'session': 'Single Day', 
        'multiSession': null,
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPENGP18/venues/MPK/performances/EMAO2018616GP/tickets'
      },
      {
        'venueCode': 'MPK',
        'venue': 'Ground Pass', 
        'session': 'Any 3 Day Ground Pass', 
        'multiSession': 'Multi-session excludes 20-21 Jan',
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPEN3DP18/venues/MPK/performances/EMAO0000183D/tickets'
      },
      {
        'venueCode': 'MPK',
        'venue': 'Ground Pass', 
        'session': 'Any 5 Day Ground Pass', 
        'multiSession': 'Multi-session excludes 20-21 Jan',
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPEN5DP18/venues/MPK/performances/EMAO0000185D/tickets'
      }
    ],
    // 17 Jan
    [
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPENRLA18/venues/RLA/performances/EMAO2018617/tickets'
      },
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '7.00pm'}], 
        'link': '/events/AOPENRLA18/venues/RLA/performances/EMAO2018617N/tickets'
      },
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'First Week', 
        'multiSession': 'Multi-session 15-18 Jan',
        'schedule': [{'time': '11.00am'}],
        'link': '/seriesevents/EMAO0000018PA/tickets'
      },
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'First Week', 
        'multiSession': 'Multi-session 15-18 Jan',
        'schedule': [{'time': '7.00pm'}],
        'link': '/seriesevents/EMAO0000018PB/tickets'
      },
      {  
        'venueCode': 'MCO',
        'venue': 'Margaret Court Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPENMCO18/venues/MCO/performances/EMAO2018617M/tickets'
      },
      {  
        'venueCode': 'MCO',
        'venue': 'Margaret Court Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '7.00pm'}],
        'link': '/events/AOPENMCO18/venues/MCO/performances/EMAO2018617MN/tickets'
      },
       {  
        'venueCode': 'MCO',
        'venue': 'Margaret Court Arena', 
        'session': 'First Week', 
        'multiSession': 'Multi-session 15-18 Jan',
        'schedule': [{'time': '11.00am'}],
        'link': '/seriesevents/EMAO0000018PK/tickets'
      },
      {  
        'venueCode': 'MCO',
        'venue': 'Margaret Court Arena', 
        'session': 'First Week', 
        'multiSession': 'Multi-session 15-18 Jan',
        'schedule': [{'time': '7.00pm'}],
        'link': '/seriesevents/EMAO0000018PL/tickets'
      },
      {
        'venueCode': 'VFA',
        'venue': 'Hisense Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPENVFA18/venues/VFA/performances/EMAO2018617V/tickets'
      },
      {
        'venueCode': 'MPK',
        'venue': 'Ground Pass', 
        'session': 'Single Day', 
        'multiSession': null,
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPENGP18/venues/MPK/performances/EMAO2018617GP/tickets'
      },
      {
        'venueCode': 'MPK',
        'venue': 'Ground Pass', 
        'session': 'Any 3 Day Ground Pass', 
        'multiSession': 'Multi-session excludes 20-21 Jan',
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPEN3DP18/venues/MPK/performances/EMAO0000183D/tickets'
      },
      {
        'venueCode': 'MPK',
        'venue': 'Ground Pass', 
        'session': 'Any 5 Day Ground Pass', 
        'multiSession': 'Multi-session excludes 20-21 Jan',
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPEN5DP18/venues/MPK/performances/EMAO0000185D/tickets'
      }
    ],
    // 18 Jan
    [
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPENRLA18/venues/RLA/performances/EMAO2018618/tickets'
      },
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '7.00pm'}], 
        'link': '/events/AOPENRLA18/venues/RLA/performances/EMAO2018618N/tickets'
      },
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'First Week', 
        'multiSession': 'Multi-session 15-18 Jan',
        'schedule': [{'time': '11.00am'}],
        'link': '/seriesevents/EMAO0000018PA/tickets'
      },
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'First Week', 
        'multiSession': 'Multi-session 15-18 Jan',
        'schedule': [{'time': '7.00pm'}],
        'link': '/seriesevents/EMAO0000018PB/tickets'
      },
      {  
        'venueCode': 'MCO',
        'venue': 'Margaret Court Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPENMCO18/venues/MCO/performances/EMAO2018618M/tickets'
      },
      {  
        'venueCode': 'MCO',
        'venue': 'Margaret Court Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '7.00pm'}],
        'link': '/events/AOPENMCO18/venues/MCO/performances/EMAO2018618MN/tickets'
      },
       {  
        'venueCode': 'MCO',
        'venue': 'Margaret Court Arena', 
        'session': 'First Week', 
        'multiSession': 'Multi-session 15-18 Jan',
        'schedule': [{'time': '11.00am'}],
        'link': '/seriesevents/EMAO0000018PK/tickets'
      },
      {  
        'venueCode': 'MCO',
        'venue': 'Margaret Court Arena', 
        'session': 'First Week', 
        'multiSession': 'Multi-session 15-18 Jan',
        'schedule': [{'time': '7.00pm'}],
        'link': '/seriesevents/EMAO0000018PL/tickets'
      },
      {
        'venueCode': 'VFA',
        'venue': 'Hisense Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPENVFA18/venues/VFA/performances/EMAO2018618V/tickets'
      },
      {
        'venueCode': 'MPK',
        'venue': 'Ground Pass', 
        'session': 'Single Day', 
        'multiSession': null,
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPENGP18/venues/MPK/performances/EMAO2018618GP/tickets'
      },
      {
        'venueCode': 'MPK',
        'venue': 'Ground Pass', 
        'session': 'Any 3 Day Ground Pass', 
        'multiSession': 'Multi-session excludes 20-21 Jan',
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPEN3DP18/venues/MPK/performances/EMAO0000183D/tickets'
      },
      {
        'venueCode': 'MPK',
        'venue': 'Ground Pass', 
        'session': 'Any 5 Day Ground Pass', 
        'multiSession': 'Multi-session excludes 20-21 Jan',
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPEN5DP18/venues/MPK/performances/EMAO0000185D/tickets'
      }
    ],
    // 19 Jan
    [
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPENRLA18/venues/RLA/performances/EMAO2018619/tickets'
      },
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '7.00pm'}], 
        'link': '/events/AOPENRLA18/venues/RLA/performances/EMAO2018619N/tickets'
      },
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Middle Weekend', 
        'multiSession': 'Multi-session 19-22 Jan',
        'schedule': [{'time': '11.00am'}],
        'link': '/seriesevents/EMAO0000018PC/tickets'
      },
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Middle Weekend', 
        'multiSession': 'Multi-session 19-22 Jan',
        'schedule': [{'time': '7.00pm'}],
        'link': '/seriesevents/EMAO0000018PD/tickets'
      },
      {  
        'venueCode': 'MCO',
        'venue': 'Margaret Court Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPENMCO18/venues/MCO/performances/EMAO2018619M/tickets'
      },
      {  
        'venueCode': 'MCO',
        'venue': 'Margaret Court Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '7.00pm'}],
        'link': '/events/AOPENMCO18/venues/MCO/performances/EMAO2018619MN/tickets'
      },
       {  
        'venueCode': 'MCO',
        'venue': 'Margaret Court Arena', 
        'session': 'Middle Weekend', 
        'multiSession': 'Multi-session 19-22 Jan',
        'schedule': [{'time': '11.00am'}],
        'link': '/seriesevents/EMAO0000018PM/tickets'
      },
      {  
        'venueCode': 'MCO',
        'venue': 'Margaret Court Arena', 
        'session': 'Middle Weekend', 
        'multiSession': 'Multi-session 19-20 Jan',
        'schedule': [{'time': '7.00pm'}],
        'link': '/seriesevents/EMAO0000018PN/tickets'
      },
      {
        'venueCode': 'VFA',
        'venue': 'Hisense Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPENVFA18/venues/VFA/performances/EMAO2018619V/tickets'
      },
      {
        'venueCode': 'MPK',
        'venue': 'Ground Pass', 
        'session': 'Single Day', 
        'multiSession': null,
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPENGP18/venues/MPK/performances/EMAO2018619GP/tickets'
      },
      {
        'venueCode': 'MPK',
        'venue': 'Ground Pass', 
        'session': 'Any 3 Day Ground Pass', 
        'multiSession': 'Multi-session excludes 20-21 Jan',
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPEN3DP18/venues/MPK/performances/EMAO0000183D/tickets'
      },
      {
        'venueCode': 'MPK',
        'venue': 'Ground Pass', 
        'session': 'Any 5 Day Ground Pass', 
        'multiSession': 'Multi-session excludes 20-21 Jan',
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPEN5DP18/venues/MPK/performances/EMAO0000185D/tickets'
      }
    ],
    // 20 Jan
    [
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPENRLA18/venues/RLA/performances/EMAO2018620/tickets'
      },
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '7.00pm'}], 
        'link': '/events/AOPENRLA18/venues/RLA/performances/EMAO2018620N/tickets'
      },
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Middle Weekend', 
        'multiSession': 'Multi-session 19-22 Jan',
        'schedule': [{'time': '11.00am'}],
        'link': '/seriesevents/EMAO0000018PC/tickets'
      },
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Middle Weekend', 
        'multiSession': 'Multi-session 19-22 Jan',
        'schedule': [{'time': '7.00pm'}],
        'link': '/seriesevents/EMAO0000018PD/tickets'
      },
      {  
        'venueCode': 'MCO',
        'venue': 'Margaret Court Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPENMCO18/venues/MCO/performances/EMAO2018620M/tickets'
      },
      {  
        'venueCode': 'MCO',
        'venue': 'Margaret Court Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '7.00pm'}],
        'link': '/events/AOPENMCO18/venues/MCO/performances/EMAO2018620MN/tickets'
      },
      {  
        'venueCode': 'MCO',
        'venue': 'Margaret Court Arena', 
        'session': 'Middle Weekend', 
        'multiSession': 'Multi-session 19-22 Jan',
        'schedule': [{'time': '11.00am'}],
        'link': '/seriesevents/EMAO0000018PM/tickets'
      },
      {  
        'venueCode': 'MCO',
        'venue': 'Margaret Court Arena', 
        'session': 'Middle Weekend', 
        'multiSession': 'Multi-session 19-20 Jan',
        'schedule': [{'time': '7.00pm'}],
        'link': '/seriesevents/EMAO0000018PN/tickets'
      },
      {
        'venueCode': 'VFA',
        'venue': 'Hisense Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPENVFA18/venues/VFA/performances/EMAO2018620V/tickets'
      },
      {
        'venueCode': 'MPK',
        'venue': 'Ground Pass', 
        'session': 'Single Day', 
        'multiSession': null,
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPENGP18/venues/MPK/performances/EMAO2018620GP/tickets'
      },
      {
        'venueCode': 'MPK',
        'venue': 'Ground Pass', 
        'session': 'Middle Weekend', 
        'multiSession': 'Multi-session 20-21 Jan',
        'schedule': [{'time': '11.00am'}],
        'link': '/seriesevents/EMAO0000018WE/tickets'
      }
    ],
    // 21 Jan
    [
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPENRLA18/venues/RLA/performances/EMAO2018621/tickets'
      },
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '7.00pm'}], 
        'link': '/events/AOPENRLA18/venues/RLA/performances/EMAO2018621N/tickets'
      },
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Middle Weekend', 
        'multiSession': 'Multi-session 19-22 Jan',
        'schedule': [{'time': '11.00am'}],
        'link': '/seriesevents/EMAO0000018PC/tickets'
      },
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Middle Weekend', 
        'multiSession': 'Multi-session 19-22 Jan',
        'schedule': [{'time': '7.00pm'}],
        'link': '/seriesevents/EMAO0000018PD/tickets'
      },
      {  
        'venueCode': 'MCO',
        'venue': 'Margaret Court Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPENMCO18/venues/MCO/performances/EMAO2018621M/tickets'
      },
      {  
        'venueCode': 'MCO',
        'venue': 'Margaret Court Arena', 
        'session': 'Middle Weekend', 
        'multiSession': 'Multi-session 19-22 Jan',
        'schedule': [{'time': '11.00am'}],
        'link': '/seriesevents/EMAO0000018PM/tickets'
      },
      {
        'venueCode': 'VFA',
        'venue': 'Hisense Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPENVFA18/venues/VFA/performances/EMAO2018621V/tickets'
      },
      {
        'venueCode': 'MPK',
        'venue': 'Ground Pass', 
        'session': 'Single Day', 
        'multiSession': null,
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPENGP18/venues/MPK/performances/EMAO2018621GP/tickets'
      },
      {
        'venueCode': 'MPK',
        'venue': 'Ground Pass', 
        'session': 'Middle Weekend', 
        'multiSession': 'Multi-session 20-21 Jan',
        'schedule': [{'time': '11.00am'}],
        'link': '/seriesevents/EMAO0000018WE/tickets'
      }
    ],
    // 22 Jan
    [
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPENRLA18/venues/RLA/performances/EMAO2018622/tickets'
      },
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '7.00pm'}], 
        'link': '/events/AOPENRLA18/venues/RLA/performances/EMAO2018622N/tickets'
      },
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Middle Weekend', 
        'multiSession': 'Multi-session 19-22 Jan',
        'schedule': [{'time': '11.00am'}],
        'link': '/seriesevents/EMAO0000018PC/tickets'
      },
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Middle Weekend', 
        'multiSession': 'Multi-session 19-22 Jan',
        'schedule': [{'time': '7.00pm'}],
        'link': '/seriesevents/EMAO0000018PD/tickets'
      },
      {  
        'venueCode': 'MCO',
        'venue': 'Margaret Court Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPENMCO18/venues/MCO/performances/EMAO2018622M/tickets'
      },
        {  
        'venueCode': 'MCO',
        'venue': 'Margaret Court Arena', 
        'session': 'Middle Weekend', 
        'multiSession': 'Multi-session 19-22 Jan',
        'schedule': [{'time': '11.00am'}],
        'link': '/seriesevents/EMAO0000018PM/tickets'
      },
      {
        'venueCode': 'VFA',
        'venue': 'Hisense Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPENVFA18/venues/VFA/performances/EMAO2018622V/tickets'
      },
      {
        'venueCode': 'MPK',
        'venue': 'Ground Pass', 
        'session': 'Single Day', 
        'multiSession': null,
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPENGP18/venues/MPK/performances/EMAO2018622GP/tickets'
      },
      {
        'venueCode': 'MPK',
        'venue': 'Ground Pass', 
        'session': 'Any 3 Day Ground Pass', 
        'multiSession': 'Multi-session excludes 20-21 Jan',
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPEN3DP18/venues/MPK/performances/EMAO0000183D/tickets'
      },
      {
        'venueCode': 'MPK',
        'venue': 'Ground Pass', 
        'session': 'Any 5 Day Ground Pass', 
        'multiSession': 'Multi-session excludes 20-21 Jan',
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPEN5DP18/venues/MPK/performances/EMAO0000185D/tickets'
      }
    ],
    // 23 Jan
    [
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPENRLA18/venues/RLA/performances/EMAO2018623/tickets'
      },
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '7.00pm'}], 
        'link': '/events/AOPENRLA18/venues/RLA/performances/EMAO2018623N/tickets'
      },
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Quarterfinals', 
        'multiSession': 'Multi-session 23-24 Jan',
        'schedule': [{'time': '11.00am'}],
        'link': '/seriesevents/EMAO0000018PE/tickets'
      },
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Quarterfinals', 
        'multiSession': 'Multi-session 23-24 Jan',
        'schedule': [{'time': '7.00pm'}],
        'link': '/seriesevents/EMAO0000018PF/tickets'
      },
      {
        'venueCode': 'MPK',
        'venue': 'Ground Pass', 
        'session': 'Single Day', 
        'multiSession': null,
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPENGP18/venues/MPK/performances/EMAO2018623GP/tickets'
      },
      {
        'venueCode': 'MPK',
        'venue': 'Ground Pass', 
        'session': 'Any 3 Day Ground Pass', 
        'multiSession': 'Multi-session excludes 20-21 Jan',
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPEN3DP18/venues/MPK/performances/EMAO0000183D/tickets'
      },
      {
        'venueCode': 'MPK',
        'venue': 'Ground Pass', 
        'session': 'Any 5 Day Ground Pass', 
        'multiSession': 'Multi-session excludes 20-21 Jan',
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPEN5DP18/venues/MPK/performances/EMAO0000185D/tickets'
      }
    ],
    // 24 Jan
    [
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPENRLA18/venues/RLA/performances/EMAO2018624/tickets'
      },
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '7.30pm'}],
        'link': '/events/AOPENRLA18/venues/RLA/performances/EMAO2018624N/tickets'
      },
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Quarterfinals', 
        'multiSession': 'Multi-session 23-24 Jan',
        'schedule': [{'time': '11.00am'}],
        'link': '/seriesevents/EMAO0000018PE/tickets'
      },
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Quarterfinals', 
        'multiSession': 'Multi-session 23-24 Jan',
        'schedule': [{'time': '7.30pm'}],
        'link': '/seriesevents/EMAO0000018PF/tickets'
      },
      {
        'venueCode': 'MPK',
        'venue': 'Ground Pass', 
        'session': 'Single Day', 
        'multiSession': null,
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPENGP18/venues/MPK/performances/EMAO2018624GP/tickets'
      },
      {
        'venueCode': 'MPK',
        'venue': 'Ground Pass', 
        'session': 'Any 3 Day Ground Pass', 
        'multiSession': 'Multi-session excludes 20-21 Jan',
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPEN3DP18/venues/MPK/performances/EMAO0000183D/tickets'
      },
      {
        'venueCode': 'MPK',
        'venue': 'Ground Pass', 
        'session': 'Any 5 Day Ground Pass', 
        'multiSession': 'Multi-session excludes 20-21 Jan',
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPEN5DP18/venues/MPK/performances/EMAO0000185D/tickets'
      }
    ],
    // 25 Jan
    [
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPENRLA18/venues/RLA/performances/EMAO2018625/tickets'
      },
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '7.30pm'}],
        'link': '/events/AOPENRLA18/venues/RLA/performances/EMAO2018625N/tickets'
      },
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Women\'s Semi & Men\'s Semi A', 
        'multiSession': 'Multi-session 25 Jan',
        'schedule': [{'time': '11.00am'}, {'time': '7.30pm'}],
        'link': '/seriesevents/EMAO0000018PG/tickets'
      },
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Women\'s Semi & Men\'s Semi B', 
        'multiSession': 'Multi-session 25-26 Jan',
        'schedule': [{'time': '11.00am'}],
        'link': '/seriesevents/EMAO0000018PH/tickets'
      },
   /*   {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Final Five', 
        'multiSession': 'Multi-session 25-28 Jan',
        'schedule': [{'time': '11.00am'}, {'time': '7.30pm'}],
        'link': '/seriesevents/EMAO0000018PJ/tickets'
      }, */
      {
        'venueCode': 'MPK',
        'venue': 'Ground Pass', 
        'session': 'Single Day', 
        'multiSession': null,
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPENGP18/venues/MPK/performances/EMAO2018625GP/tickets'
      },
      {
        'venueCode': 'MPK',
        'venue': 'Ground Pass', 
        'session': 'Any 3 Day Ground Pass', 
        'multiSession': 'Multi-session excludes 20-21 Jan',
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPEN3DP18/venues/MPK/performances/EMAO0000183D/tickets'
      },
      {
        'venueCode': 'MPK',
        'venue': 'Ground Pass', 
        'session': 'Any 5 Day Ground Pass', 
        'multiSession': 'Multi-session excludes 20-21 Jan',
        'schedule': [{'time': '11.00am'}],
        'link': '/events/AOPEN5DP18/venues/MPK/performances/EMAO0000185D/tickets'
      }
    ],
    // 26 Jan
    [
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '3.00pm'}],
        'link': '/events/AOPENRLA18/venues/RLA/performances/EMAO2018626T/tickets'
      },
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Women\'s Semi & Men\'s Semi B', 
        'multiSession': 'Multi-session 25-26 Jan',
        'schedule': [{'time': '3.00pm'}],
        'link': '/seriesevents/EMAO0000018PH/tickets'
      },
    /*  {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Final Five', 
        'multiSession': 'Multi-session 25-28 Jan',
        'schedule': [{'time': '3.00pm'}],
        'link': '/seriesevents/EMAO0000018PJ/tickets'
      }, */
      {
        'venueCode': 'MPK',
        'venue': 'Ground Pass', 
        'session': 'Single Day', 
        'multiSession': null,
        'schedule': [{'time': '3.00pm'}],
        'link': '/events/AOPENGP18/venues/MPK/performances/EMAO2018626GP/tickets'
      },
      {
        'venueCode': 'MPK',
        'venue': 'Ground Pass', 
        'session': 'Any 3 Day Ground Pass', 
        'multiSession': 'Multi-session excludes 20-21 Jan',
        'schedule': [{'time': '3.00pm'}],
        'link': '/events/AOPEN3DP18/venues/MPK/performances/EMAO0000183D/tickets'
      },
      {
        'venueCode': 'MPK',
        'venue': 'Ground Pass', 
        'session': 'Any 5 Day Ground Pass', 
        'multiSession': 'Multi-session excludes 20-21 Jan',
        'schedule': [{'time': '3.00pm'}],
        'link': '/events/AOPEN5DP18/venues/MPK/performances/EMAO0000185D/tickets'
      }
    ],
    // 27 Jan
    [
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '1.00pm'}],
        'link': '/events/AOPENRLA18/venues/RLA/performances/EMAO2018627T/tickets'
      },
     /* {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Finals Weekend', 
        'multiSession': 'Multi-session 27-28 Jan',
        'schedule': [{'time': '1.00pm'}],
        'link': '/seriesevents/EMAO0000018PI/tickets'
      },
      {
        
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Final Five', 
        'multiSession': 'Multi-session 25-28 Jan',
        'schedule': [{'time': '1.00pm'}],
        'link': '/seriesevents/EMAO0000018PJ/tickets'
      }, */
      {
        'venueCode': 'MPK',
        'venue': 'Ground Pass', 
        'session': 'Single Day', 
        'multiSession': null,
        'schedule': [{'time': '1.00pm'}],
        'link': '/events/AOPENGP18/venues/MPK/performances/EMAO2018627GP/tickets'
      },
      {
        'venueCode': 'MPK',
        'venue': 'Ground Pass', 
        'session': 'Any 3 Day Ground Pass', 
        'multiSession': 'Multi-session excludes 20-21 Jan',
        'schedule': [{'time': '1.00pm'}],
        'link': '/events/AOPEN3DP18/venues/MPK/performances/EMAO0000183D/tickets'
      },
      {
        'venueCode': 'MPK',
        'venue': 'Ground Pass', 
        'session': 'Any 5 Day Ground Pass', 
        'multiSession': 'Multi-session excludes 20-21 Jan',
        'schedule': [{'time': '1.00pm'}],
        'link': '/events/AOPEN5DP18/venues/MPK/performances/EMAO0000185D/tickets'
      }
    ],
    // 28 Jan
    [
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Single Session', 
        'multiSession': null,
        'schedule': [{'time': '4.00pm'}],
        'link': '/events/AOPENRLA18/venues/RLA/performances/EMAO2018628T/tickets'
      },
    /*  {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Finals Weekend', 
        'multiSession': 'Multi-session 27-28 Jan',
        'schedule': [{'time': '4.00pm'}],
        'link': '/seriesevents/EMAO0000018PI/tickets'
      },
      {  
        'venueCode': 'RLA',
        'venue': 'Rod Laver Arena', 
        'session': 'Final Five', 
        'multiSession': 'Multi-session 25-28 Jan',
        'schedule': [{'time': '4.00pm'}],
        'link': '/seriesevents/EMAO0000018PJ/tickets'
      },*/
      {
        'venueCode': 'MPK',
        'venue': 'Ground Pass', 
        'session': 'Single Day', 
        'multiSession': null,
        'schedule': [{'time': '4.00pm'}],
        'link': '/events/AOPENGP18/venues/MPK/performances/EMAO2018628GP/tickets'
      },
      {
        'venueCode': 'MPK',
        'venue': 'Ground Pass', 
        'session': 'Any 3 Day Ground Pass', 
        'multiSession': 'Multi-session excludes 20-21 Jan',
        'schedule': [{'time': '4.00pm'}],
        'link': '/events/AOPEN3DP18/venues/MPK/performances/EMAO0000183D/tickets'
      },
      {
        'venueCode': 'MPK',
        'venue': 'Ground Pass', 
        'session': 'Any 5 Day Ground Pass', 
        'multiSession': 'Multi-session excludes 20-21 Jan',
        'schedule': [{'time': '4.00pm'}],
        'link': '/events/AOPEN5DP18/venues/MPK/performances/EMAO0000185D/tickets'
      }
    ]
  ];
  var template = '<div id="eventSelection" class="g-wrapper-ao2018">'+
  '  <div class="m-calendar">'+
  '    <div class="title"><h2><span>JANUARY</span></h2></div>'+
  '    <div class="content">'+
  '      <ul class="m-week">'+
  '        <li>MON</li>'+
  '        <li>TUE</li>'+
  '        <li>WED</li>'+
  '        <li>THU</li>'+
  '        <li>FRI</li>'+
  '        <li>SAT</li>'+
  '        <li>SUN</li>'+
  '      </ul>'+
  '      <ul class="m-calendar-list">'+
  '        <li class="u-calendar-day" data-date="15">'+
  '          <div class="day">15</div>'+
  '        </li>'+
  '        <li class="u-calendar-day" data-date="16">'+
  '          <div class="day">16</div>'+
  '        </li>'+
  '        <li class="u-calendar-day" data-date="17">'+
  '          <div class="day">17</div>'+
  '        </li>'+
  '        <li class="u-calendar-day" data-date="18">'+
  '          <div class="day">18</div>'+
  '        </li>'+
  '        <li class="u-calendar-day" data-date="19">'+
  '          <div class="day">19</div>'+
  '        </li>'+
  '        <li class="u-calendar-day" data-date="20">'+
  '          <div class="day">20</div>'+
  '          <div class="intro">'+
  '            COOPERS<br>'+
  '            SATURDAY'+
  '          </div>'+
  '        </li>'+
  '        <li class="u-calendar-day" data-date="21">'+
  '          <div class="day">21</div>'+
  '        </li>'+
  '        <li class="u-calendar-day" data-date="22">'+
  '          <div class="day">22</div>'+
  '        </li>'+
  '        <li class="u-calendar-day" data-date="23">'+
  '          <div class="day">23</div>'+
  '        </li>'+
  '        <li class="u-calendar-day" data-date="24">'+
  '          <div class="day">24</div>'+
  '        </li>'+
  '        <li class="u-calendar-day" data-date="25">'+
  '          <div class="day">25</div>'+
  '        </li>'+
  '        <li class="u-calendar-day" data-date="26">'+
  '          <div class="day">26</div>'+
  '          <div class="intro">'+
  '            AUSTRALIA<br>'+
  '            DAY'+
  '          </div>'+
  '        </li>'+
  '        <li class="u-calendar-day" data-date="27">'+
  '          <div class="day">27</div>'+
  '          <div class="intro">'+
  '            WOMEN\'S<br>'+
  '            FINAL'+
  '          </div>'+
  '        </li>'+
  '        <li class="u-calendar-day" data-date="28">'+
  '          <div class="day">28</div>'+
  '          <div class="intro">'+
  '            MEN\'S<br>'+
  '            FINAL'+
  '          </div>'+
  '        </li>'+
  '      </ul>'+
  '    </div>'+
  '  </div>'+
  '  <div class="m-event-date">'+
  '    <div class="title">'+
  '      <h2 id="selectedDate"></h2>'+
  '      <div class="button">'+
  '        <span>Back to Calendar</span>'+
  '        <div class="icon icon-calender"></div>'+
  '      </div>'+
  '    </div>'+
  '    <div class="content">'+
  '      <table>'+
  '      </table>'+
  '    </div>'+
  '  </div>'+
  '</div>';
  
  function initialize() {
    var $container = $('.ao18-container');
    // Clear container and append Element
    $container.empty().append(template);
        
    // Bind Events
    $('#eventSelection .u-calendar-day').click(function(){
      // Get selected date
      var date = Number($(this).data('date'));
      // Set selected date title
      var selectedDate = new Date('2017','0',date);
      $('#selectedDate').html(weekday[selectedDate.getDay()] + ' '+ date + ' JANUARY');
      // Generate event list DOM
      var listDom = '';
      for (var i = 0; i < eventCalendarList[date - 15].length; i++) {
        var eventList = eventCalendarList[date - 15][i];
        // Tr start
        listDom = listDom + '<tr>';
        // Venue
        listDom = listDom + '<td width="23%">' + eventList.venue + '</td>';
        // Session
        listDom = listDom + '<td width="31%">' + eventList.session;
        if (eventList.multiSession) {
          listDom = listDom + '<br><span>' + eventList.multiSession + '</span>';
        } 
        listDom = listDom + '</td>';
        // Time
        listDom = listDom + '<td width="23%">';
        for (var j = 0; j < eventList.schedule.length; j++) {
          listDom = listDom + '<div><div class="icon icon-';
          if (eventList.schedule[j].time.indexOf('am') >= 0) {
            listDom = listDom + 'day';
          } else {
            listDom = listDom + 'night';
          }
          listDom = listDom + '"></div>' + eventList.schedule[j].time +'</div>';
        }
        listDom = listDom + '</td>';
        // Link
        listDom = listDom + '<td width="23%"><a class="button" href=" '+ eventList.link +' ">Tickets & Info</a></td>';
        // Tr end
        listDom = listDom + '</tr>';
      }
      $('#eventSelection .m-event-date .content table').html(listDom);
      // Show list and hide calendar
      $('#eventSelection .m-calendar').hide();
      $('#eventSelection .m-event-date').show();
    });
    
    $('#eventSelection .m-event-date .title .button').click(function(){
      $('#eventSelection .m-calendar').show();
      $('#eventSelection .m-event-date').hide();
    });
  }

  $('document').ready(initialize);

  

  
})();