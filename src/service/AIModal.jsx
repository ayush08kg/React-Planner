import { GoogleGenerativeAI } from "@google/generative-ai";

  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location : Las Vegas, for 3 Days for Couple with a Cheap budget , Give me a Hotels options list with Hotel Name, Hotel address, Price, Hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON Format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "Okay, here's a budget-friendly 3-day Las Vegas itinerary for a couple, along with hotel options and all the details you requested, in JSON format:\n\n```json\n{\n  \"location\": \"Las Vegas, Nevada\",\n  \"budget\": \"Cheap\",\n  \"duration\": \"3 Days\",\n  \"travelers\": \"Couple\",\n  \"hotel_options\": [\n    {\n      \"hotel_name\": \"Circus Circus Hotel & Casino\",\n      \"hotel_address\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"$40 - $80 per night\",\n      \"hotel_image_url\": \"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/68/71/c6/exterior.jpg?w=700&h=-1&s=1\",\n      \"geo_coordinates\": {\n        \"latitude\": 36.1452,\n        \"longitude\": -115.1683\n      },\n      \"rating\": 3.5,\n      \"description\": \"A classic Vegas experience with a circus theme, offering affordable rooms and family-friendly entertainment. It is located towards the North end of the strip which might save your cab fare.\"\n    },\n    {\n      \"hotel_name\": \"Excalibur Hotel & Casino\",\n      \"hotel_address\": \"3850 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"$50 - $90 per night\",\n      \"hotel_image_url\": \"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/40/e9/ee/exterior.jpg?w=700&h=-1&s=1\",\n      \"geo_coordinates\": {\n        \"latitude\": 36.0988,\n        \"longitude\": -115.1727\n      },\n      \"rating\": 4.0,\n      \"description\": \"A medieval-themed hotel on the south end of the strip, offering budget-friendly rooms and a fun atmosphere. Offers good value for money for location and rooms.\"\n    },\n     {\n      \"hotel_name\": \"OYO Hotel & Casino Las Vegas\",\n      \"hotel_address\": \"115 E Tropicana Ave, Las Vegas, NV 89109\",\n      \"price\": \"$40 - $70 per night\",\n       \"hotel_image_url\": \"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/5c/27/fa/oyo-hotel-casino-las.jpg?w=700&h=-1&s=1\",\n      \"geo_coordinates\": {\n        \"latitude\": 36.1022,\n        \"longitude\": -115.1693\n      },\n      \"rating\": 3.0,\n      \"description\": \"A budget-friendly hotel with a good location, a bit outside the main strip, offering basic amenities. Good option for saving up on accommodation.\"\n    }\n  ],\n   \"itinerary\": {\n    \"day1\": {\n      \"theme\": \"Exploring the Strip (South End) & Free Attractions\",\n      \"best_time_to_visit\": \"Late afternoon and evening\",\n      \"places\": [\n        {\n          \"place_name\": \"Welcome to Fabulous Las Vegas Sign\",\n          \"place_details\": \"Iconic sign perfect for a photo op. Get there early to avoid crowds.\",\n          \"place_image_url\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Welcome_to_Fabulous_Las_Vegas_sign.JPG/800px-Welcome_to_Fabulous_Las_Vegas_sign.JPG\",\n          \"geo_coordinates\": {\n            \"latitude\": 36.0828,\n            \"longitude\": -115.1727\n          },\n           \"ticket_pricing\": \"Free\",\n          \"rating\": 4.5,\n          \"time_travel\": \"15 mins walk from Excalibur Hotel\"\n        },\n          {\n          \"place_name\": \"Bellagio Conservatory & Botanical Garden\",\n          \"place_details\": \"Stunning floral displays that change seasonally. Free to enter.\",\n          \"place_image_url\": \"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/6c/b7/d1/bellagio-conservatory-botanical.jpg?w=700&h=-1&s=1\",\n           \"geo_coordinates\": {\n            \"latitude\": 36.1126,\n            \"longitude\": -115.1741\n          },\n          \"ticket_pricing\": \"Free\",\n          \"rating\": 4.7,\n            \"time_travel\": \"20 mins by bus from the Welcome Sign\"\n        },\n       {\n          \"place_name\": \"Fountains of Bellagio\",\n          \"place_details\": \"Spectacular water show with music, visible from the Strip.\",\n           \"place_image_url\": \"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/75/f9/b5/fountains-of-bellagio.jpg?w=700&h=-1&s=1\",\n           \"geo_coordinates\": {\n            \"latitude\": 36.1129,\n            \"longitude\": -115.1738\n          },\n          \"ticket_pricing\": \"Free\",\n          \"rating\": 4.8,\n           \"time_travel\": \"0 mins walk from Bellagio Conservatory\"\n        },\n         {\n          \"place_name\": \"The LINQ Promenade\",\n            \"place_details\":\"Outdoor entertainment and shopping area, with the High Roller observation wheel (optional).\",\n          \"place_image_url\": \"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/47/92/f7/the-linq-promenade.jpg?w=700&h=-1&s=1\",\n             \"geo_coordinates\": {\n            \"latitude\": 36.1168,\n            \"longitude\": -115.1691\n          },\n           \"ticket_pricing\": \"Free to walk around, charge for attractions\",\n          \"rating\": 4.3,\n           \"time_travel\": \"15 mins walk from Bellagio Fountains\"\n\n        }\n      ]\n    },\n    \"day2\": {\n      \"theme\": \"Downtown Vegas & Fremont Street Experience\",\n     \"best_time_to_visit\": \"Afternoon and Evening\",\n     \"places\": [\n       {\n          \"place_name\": \"Fremont Street Experience\",\n          \"place_details\":\"Pedestrian mall with a canopy of video screens, live music, and street performers.\",\n           \"place_image_url\": \"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/6a/95/0a/fremont-street-experience.jpg?w=700&h=-1&s=1\",\n          \"geo_coordinates\": {\n            \"latitude\": 36.1707,\n            \"longitude\": -115.1423\n           },\n          \"ticket_pricing\": \"Free\",\n          \"rating\": 4.6,\n           \"time_travel\":\"25 mins by bus from LINQ Promenade\"\n        },\n           {\n          \"place_name\": \"Container Park\",\n            \"place_details\": \"Unique shopping and entertainment complex made from shipping containers.\",\n            \"place_image_url\": \"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/4e/9b/c4/container-park.jpg?w=700&h=-1&s=1\",\n           \"geo_coordinates\": {\n            \"latitude\": 36.1695,\n            \"longitude\": -115.1386\n          },\n           \"ticket_pricing\": \"Free to enter\",\n          \"rating\": 4.2,\n            \"time_travel\": \"5 mins walk from Fremont Street Experience\"\n        },\n         {\n          \"place_name\": \"Gold and Silver Pawn Shop\",\n          \"place_details\": \"Pawn shop featured on the show 'Pawn Stars'. Check out the actual shop but be mindful of the rush.\",\n          \"place_image_url\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Gold_%26_Silver_Pawn_Shop_2017.jpg/800px-Gold_%26_Silver_Pawn_Shop_2017.jpg\",\n           \"geo_coordinates\": {\n            \"latitude\": 36.1609,\n            \"longitude\": -115.1519\n          },\n          \"ticket_pricing\": \"Free to enter\",\n          \"rating\": 4.0,\n            \"time_travel\": \"10 mins by bus from Container Park\"\n        }\n      ]\n    },\n    \"day3\": {\n      \"theme\": \"Exploring the Strip (North End) and Departure\",\n      \"best_time_to_visit\":\"Morning and Afternoon\",\n      \"places\": [\n        {\n          \"place_name\": \"The Venetian & Grand Canal Shoppes\",\n            \"place_details\": \"Replica of Venice with canals, gondolas, and shops.\",\n            \"place_image_url\": \"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/73/13/af/venetian-grand-canal.jpg?w=700&h=-1&s=1\",\n           \"geo_coordinates\": {\n            \"latitude\": 36.1214,\n            \"longitude\": -115.1699\n          },\n           \"ticket_pricing\": \"Free to walk around, charges for attractions like Gondola Ride\",\n          \"rating\": 4.7,\n            \"time_travel\": \"20 mins by bus from Gold and Silver Pawn shop\"\n        },\n         {\n            \"place_name\": \"Mirage Volcano\",\n            \"place_details\":\"Free volcano show with fire and sound effects. Evening shows are more spectacular\",\n            \"place_image_url\": \"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/75/b7/46/mirage-volcano.jpg?w=700&h=-1&s=1\",\n           \"geo_coordinates\": {\n            \"latitude\": 36.1215,\n            \"longitude\": -115.1743\n          },\n            \"ticket_pricing\": \"Free\",\n           \"rating\": 4.5,\n             \"time_travel\":\"5 mins walk from Venetian Hotel\"\n         },\n        {\n          \"place_name\":\"Stratosphere Tower\",\n            \"place_details\":\"Offers great views and thrill rides. Optional visit based on budget.\",\n            \"place_image_url\":\"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/44/65/6b/stratosphere-tower.jpg?w=700&h=-1&s=1\",\n            \"geo_coordinates\":{\n              \"latitude\":36.1529,\n              \"longitude\":-115.1574\n            },\n           \"ticket_pricing\": \"Entry fee, rides charged separately\",\n            \"rating\": 4.3,\n              \"time_travel\": \"10 mins by bus from Mirage Volcano\"\n        },\n         {\n          \"place_name\": \"Departure\",\n          \"place_details\":\"Head to the airport for your departure.\",\n           \"place_image_url\":\"null\",\n             \"geo_coordinates\":{\n               \"latitude\":null,\n               \"longitude\":null\n             },\n           \"ticket_pricing\": \"N/A\",\n          \"rating\": \"N/A\",\n            \"time_travel\":\"Depends on Airport Location\"\n        }\n      ]\n    }\n  }\n}\n```\n**Notes:**\n\n*   **Prices:** Hotel prices are estimates and can fluctuate based on season and booking time. Always check current prices.\n*   **Transportation:** This itinerary assumes you'll use a combination of walking, buses (The Deuce or SDX), and potentially a rideshare service for longer distances or when you are tired of walking.\n*   **Food:** Budget-friendly meals can be found at fast-food restaurants, food courts in casinos, and inexpensive diners. Look for happy hour deals!\n*  **Flexibility:** This is a suggestion, feel free to customize it according to your interests. \n*   **Free Activities:** Las Vegas has a ton of free attractions - take advantage of the free shows, walk the strip and enjoy the vibe.\n*   **Walking:** Be prepared to do a lot of walking. Wear comfortable shoes.\n* **Safety:** Las Vegas can be crowded at night so be vigilant of your surroundings and belongings.\n\nEnjoy your trip! Let me know if you have any other questions or need further adjustments to the itinerary.\n"},
          ],
        },
      ],
    });