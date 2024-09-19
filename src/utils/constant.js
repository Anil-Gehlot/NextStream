const YOUTUBE_API_KEY = "AIzaSyCtWHumXM_UBTAzL_fgWxB-7_huvkARmLc";


export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  YOUTUBE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const COMMENTS_API =
  "https://www.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet&maxResults=50&key=" +
  YOUTUBE_API_KEY +
  "&videoId=";

export const VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  YOUTUBE_API_KEY +
  "&id=";

export const SEARCH_RESULT_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=" +
  YOUTUBE_API_KEY +
  "&q=";

export function formatViews(views) {
  if (views >= 1000000) {
    return (views / 1000000).toFixed(1) + "M"; // for million
  } else if (views >= 1000) {
    return (views / 1000).toFixed(1) + "K"; // for thousand
  }
  return views; // return the original value if less than 1000
}

export const OFFSET_LIVE_CHAT = 25;

export const commentsData = [
  {
    name: "anil",
    Comment: "a niof f knfioasv v snv ",
    replies: [
      {
        name: "anil",
        Comment: "a niof f knfioasv v snv ",
        replies: [],
      },
      {
        name: "anil",
        Comment: "a niof f knfioasv v snv ",
        replies: [],
      },
      {
        name: "anil",
        Comment: "a niof f knfioasv v snv ",
        replies: [],
      },
    ],
  },
  {
    name: "anil",
    Comment: "a niof f knfioasv v snv ",
    replies: [
      {
        name: "anil",
        Comment: "a niof f knfioasv v snv ",
        replies: [],
      },
      {
        name: "anil",
        Comment: "a niof f knfioasv v snv ",
        replies: [
          {
            name: "anil",
            Comment: "a niof f knfioasv v snv ",
            replies: [],
          },
          {
            name: "anil",
            Comment: "a niof f knfioasv v snv ",
            replies: [],
          },
          {
            name: "anil",
            Comment: "a niof f knfioasv v snv ",
            replies: [],
          },
        ],
      },
      {
        name: "anil",
        Comment: "a niof f knfioasv v snv ",
        replies: [
          {
            name: "anil",
            Comment: "a niof f knfioasv v snv ",
            replies: [],
          },
          {
            name: "anil",
            Comment: "a niof f knfioasv v snv ",
            replies: [],
          },
          {
            name: "anil",
            Comment: "a niof f knfioasv v snv ",
            replies: [
              {
                name: "anil",
                Comment: "a niof f knfioasv v snv ",
                replies: [],
              },
              {
                name: "anil",
                Comment: "a niof f knfioasv v snv ",
                replies: [],
              },
              {
                name: "anil",
                Comment: "a niof f knfioasv v snv ",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "anil",
    Comment: "a niof f knfioasv v snv ",
    replies: [
      {
        name: "anil",
        Comment: "a niof f knfioasv v snv ",
        replies: [],
      },
      {
        name: "anil",
        Comment: "a niof f knfioasv v snv ",
        replies: [],
      },
      {
        name: "anil",
        Comment: "a niof f knfioasv v snv ",
        replies: [],
      },
    ],
  },
  {
    name: "anil",
    Comment: "a niof f knfioasv v snv ",
    replies: [],
  },
  {
    name: "anil",
    Comment: "a niof f knfioasv v snv ",
    replies: [],
  },
  {
    name: "anil",
    Comment: "a niof f knfioasv v snv ",
    replies: [],
  },
];
