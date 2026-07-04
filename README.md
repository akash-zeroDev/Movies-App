# 🎬 MovieApp

A modern, responsive, and cross-platform mobile application built with **React Native** and **Expo**. This application allows users to discover trending, upcoming, and top-rated movies, search for specific titles, and explore detailed information about movies and their cast members.

---

## 🚀 Features

- **Home Dashboard:** Browse Trending, Upcoming, and Top Rated movies in beautifully styled carousels and lists.
- **Movie Details:** View comprehensive information about a movie, including its poster, description, release date, and cast.
- **Actor Profiles:** Dive into specific cast members to see their biography and other movies they have featured in.
- **Search Functionality:** Quickly find movies using the real-time search screen.
- **Cross-Platform:** Fully compatible with both iOS and Android devices.
- **Sleek UI:** Styled using Nativewind (Tailwind CSS for React Native) for a clean, modern aesthetic.

---

## 🛠️ Tech Stack

- **Framework:** React Native, Expo
- **Navigation:** React Navigation (`@react-navigation/native-stack`)
- **Styling:** Nativewind (Tailwind CSS)
- **Data Fetching:** Axios
- **Icons & UI:** `react-native-heroicons`, `react-native-snap-carousel`
- **API:** TMDB (The Movie Database) API

---

## 📂 Project Structure

- `/api` - Contains the API endpoints and axios configuration to communicate with the TMDB API.
- `/components` - Reusable UI components such as `MovieList`, `TrendingMovies`, `Cast`, and `Loading`.
- `/constants` - Stores constants like API keys and design tokens.
- `/navigation` - Application routing and stack navigator configuration.
- `/screens` - Main application screens (`HomeScreen`, `MovieScreen`, `PersonScreen`, `SearchScreen`).
- `/theme` - Global styling configurations and color palettes.

---

## ⚙️ Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start the Application:**
   ```bash
   npm run start
   ```

3. **Run on Device:**
   Use the Expo Go app on your physical device, or run it on an iOS Simulator / Android Emulator.

---

> *Note: Ensure you have your TMDB API key correctly configured in the `constants` directory for the movie data to load properly.*
