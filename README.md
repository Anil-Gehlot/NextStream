# NextStream

NextStream is a YouTube-like application built with React. It features dynamic video content, search functionality with debouncing and caching, live chat via API polling, YouTube comments loading, and seamless navigation through videos.

## Live Demo
Try the live demo: [NextStream](https://next-stream.netlify.app/)


## Features

- **Responsive Design**: Optimized layout for various screen sizes.
- **Debounced Search**: Efficient search with debouncing and caching to avoid redundant API calls when the user types quickly or deletes characters.
- **Live Chat**: Real-time chat interface using API polling to fetch new messages.
- **Comments Section**: Displays YouTube comments for the selected video.
- **Video Previews**: Shows video information along with an embedded player, allowing full control over video playback.
- **Dynamic Routing**: Allows navigation between the main page, video watch page, and search results.

## Folder Structure

```bash
src/
│
├── <Body />
│   ├── <head />
│   ├── <sideBar />
│   └── Outlet/
│       ├── "/": <MainContainer />
│       │       ├── <ButtonList />
│       │       │    ├── <Button />
│       │       ├── <VideoContainer />
│       │       │    ├── <VideoCard />
│       ├── "watch": <WatchPage />
│       │       ├── <VideoPreview />
│       │       │    ├── <VideoInfo />
│       │       │    ├── <Comments />
│       │       ├── <LiveChat />
│       │       │    ├── <ChatMessage />
│       ├── "result": <Result />
│       │       ├── <ResultPageShimmer />
│       │       ├── <ResultVideoCard />
```

## Key Components

### 1. **MainContainer**
   Displays the homepage content including video listings and buttons for category navigation.

### 2. **ButtonList**
   Renders the list of category buttons. Allows the user to filter videos based on categories.

### 3. **VideoContainer**
   Displays a list of videos fetched from the API. Each video is rendered as a `VideoCard` component.

### 4. **VideoPreview**
   Shows a selected video in an embedded YouTube player with additional information like video details and comments.

### 5. **LiveChat**
   A real-time chat feature that uses API polling to fetch and display new messages in real-time.

### 6. **Search with Debouncing**
   The search feature includes debouncing to limit the number of API calls. Cached results are used when the user deletes characters to avoid redundant requests.

### 7. **Comments**
   Renders YouTube comments for the current video.

## Technologies Used

- **React**: For building the UI.
- **Tailwind CSS**: For styling the components and ensuring responsiveness.
- **React Router**: For handling routing between different pages.
- **YouTube API**: To fetch video data and comments.
- **Debouncing and Caching**: Implemented in the search functionality to minimize unnecessary API calls.

## How to Run the Project On Your Machine 

### 1. Clone the Repository
To get started, clone this repository using Git:

    git clone https://github.com/Anil-Gehlot/NextStream.git

### 2. Navigate to the Project Directory
Change your working directory to the project folder:

    cd NextStream

### 3. Install dependencies:

    npm install

### 4. Start the development server:

    npm start

Navigate to http://localhost:3000 to view the application.


## Future Improvements

- **User Authentication**: Allow users to log in and manage their preferences.
- **Enhanced Search Results**: Provide more detailed filtering options in the search.
- **Pagination**: Add pagination to the video list for better performance.


## Contributing

We welcome contributions to NextStream! If you'd like to contribute, please follow these steps:

### 1. Fork the Repository
Click on the "Fork" button at the top right of this page.

### 2. Clone Your Fork

    git clone https://github.com/<--your-username-->/NextStream.git

### 3. Create a Branch

    git checkout -b feature/<--your-feature-name-->

### 4. Make Your Changes
Implement your feature or fix a bug.

### 5. Commit Your Changes

    git add .
    git commit -m "<--Add your descriptive commit message here-->"

### 6. Push Your Changes

    git push origin feature/<--your-feature-name-->

### 7. Submit a Pull Request
Go to the repository on GitHub and click on "Compare & pull request."