# [🗺️ Addis Ababa Centered React Leaflet Map](https://addis-ababa-map.vercel.app/)

This project displays an interactive map centered on **Addis Ababa**, Ethiopia, using **React** and **React-Leaflet**. It features custom markers, beautiful cluster grouping, and smooth styling to visualize different locations within the city.

## 🚀 Features

- ✅ React Leaflet integration  
- 📍 Custom marker icons  
- 🌍 Map centered on Addis Ababa  
- 📦 Marker clustering using `react-leaflet-markercluster`  
- ✨ Responsive UI with styled borders and shadows
- 🗺️ MaxBound to Ethiopia (More Local Map)

## 📌 Demo Locations

The map includes a few sample locations around Addis Ababa:
- **Megenagna**
- **Mercato**
- **Jemo 1**
- **Lebu**

## 🛠️ Tech Stack

- [React](https://reactjs.org/)
- [Vite + React](https://vitejs.dev/guide/)
- [React Leaflet](https://react-leaflet.js.org/)
- [Leaflet](https://leafletjs.com/)
- [React Leaflet MarkerCluster](https://github.com/YUzhva/react-leaflet-markercluster)
- CSS for styling and layout

## 📷 Screenshots

<img width="1843" height="935" alt="image" src="https://github.com/user-attachments/assets/cb44a1be-1131-4b15-9482-1660cb758c97" />



## 📦 Installation

1. **Clone the repo**

```bash
git clone https://github.com/ibsa-a1/Addis-Ababa-Centered-React-Leaflet.git
cd Addis-Ababa-Centered-React-Leaflet
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. Open your browser and visit:  
`http://localhost:5173`

> This assumes you're using **Vite**. If you're using Create React App, use `npm start` instead.
>
> Don't forget to install dependencies like `leaflet`, `react-leaflet`, `react-leaflet-markercluster` to build same

## 📁 Project Structure

```
.
├── public/
├── src/
│   ├── App.jsx         # Main React component
│   ├── App.css         # Styling for map and layout
│   └── assets/
│       └── marker-image.png
├── index.html
└── package.json
```

## 🗺️ Map Info

- **Map Center:** Addis Ababa → `[9.02497, 38.74689]`
- **Tile Source:** [OpenStreetMap](https://www.openstreetmap.org/)
- **Custom Clustering:** Custom HTML used for marker clusters with styling

## 🖼️ Custom Marker

Markers use a local custom image from `./assets/marker-image.png`. You can replace it with any icon of your choice.

## 💡 Future Improvements (optional ideas)

- Add more dynamic marker data from an API
- Implement a sidebar with location filters
- Add user geolocation support
- Add routing or direction features
- Add search option to find places

## 📜 License

This project is open-source and free to use.

---

### ✍️ Author

Built by [Ibsa Abera](https://github.com/ibsa-a1) ❤️  
Feel free to contribute or suggest improvements! 
If you find this project helpful or inspiring, **please consider giving it a ⭐ on GitHub** — it helps others discover it!
